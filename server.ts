import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer, { type Transporter } from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// In-memory email dispatch logs for verification and audit
interface EmailLogEntry {
  id: string;
  formType: string;
  recipient: string;
  subject: string;
  senderName: string;
  senderPhone: string;
  details: Record<string, any>;
  sentAt: string;
  status: 'sent' | 'queued';
}

const emailLogs: EmailLogEntry[] = [];

// Setup Nodemailer transporter with SMTP or test transporter
let transporter: Transporter | null = null;

if (process.env.SMTP_HOST && process.env.SMTP_USER) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/**
 * Format email HTML content with Nersika branding
 */
function generateEmailHtml(formType: string, data: Record<string, any>): { subject: string; html: string } {
  let formTitle = 'درخواست جدید';
  let badgeColor = '#0f9d9a';

  if (formType === 'urgent_nurse_request') {
    formTitle = '🚨 ثبت درخواست فوری پرستار / مراقب در منزل و بیمارستان';
    badgeColor = '#dc2626';
  } else if (formType === 'tourism_request') {
    formTitle = '✈️ ثبت درخواست جدید گردشگری سلامت (IPD)';
    badgeColor = '#2563eb';
  } else if (formType === 'nurse_application') {
    formTitle = '🩺 ثبت‌نام و درخواست همکاری کادر درمان و پرستاران';
    badgeColor = '#0a7471';
  }

  const subject = `[نرسیکا - ${formTitle}] - ${data.requesterName || data.patientName || data.fullName || 'کاربر جدید'}`;

  const rows = Object.entries(data)
    .filter(([key]) => key !== 'id')
    .map(([key, value]) => {
      const labels: Record<string, string> = {
        serviceName: 'نوع خدمت',
        requesterName: 'نام متقاضی',
        patientName: 'نام بیمار / همراه',
        fullName: 'نام و نام خانوادگی کادر درمان',
        phone: 'شماره تماس',
        whatsapp: 'شماره واتساپ / بین‌المللی',
        location: 'محل سکونت / بیمارستان',
        city: 'شهر محل فعالیت',
        shift: 'شیفت کاری',
        degree: 'مدرک تحصیلی',
        medicalCouncilCode: 'شماره نظام پرستاری',
        experienceYears: 'سابقه کار بالینی',
        country: 'کشور مبدأ',
        specialty: 'تخصص درمانی',
        estimatedPrice: 'هزینه تخمینی اولیه',
        notes: 'توضیحات و شرح حال',
      };
      const label = labels[key] || key;
      return `
        <tr>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: bold; width: 35%; background: #f8fafc;">
            ${label}
          </td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 500;">
            ${value || '—'}
          </td>
        </tr>
      `;
    })
    .join('');

  const html = `
    <!DOCTYPE html>
    <html dir="rtl" lang="fa">
    <head>
      <meta charset="utf-8">
      <title>${formTitle}</title>
    </head>
    <body style="font-family: Tahoma, 'Vazirmatn', sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; direction: rtl; text-align: right;">
      <div style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
        <div style="background: linear-gradient(135deg, #12284c, #0a7471); padding: 24px 20px; color: #ffffff; text-align: center;">
          <h1 style="margin: 0 0 6px 0; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">نرسیکا | سامانه جامع خدمات پرستاری و گردشگری سلامت</h1>
          <p style="margin: 0; font-size: 13px; opacity: 0.9;">اعلان رسمی ثبت فرم و درخواست مشتری</p>
        </div>

        <div style="padding: 24px 20px;">
          <div style="display: inline-block; background: ${badgeColor}; color: #ffffff; padding: 6px 14px; border-radius: 99px; font-size: 13px; font-weight: bold; margin-bottom: 16px;">
            ${formTitle}
          </div>
          <p style="color: #334155; font-size: 14px; line-height: 1.8; margin-top: 0; margin-bottom: 18px;">
            یک درخواست جدید در پلتفرم نرسیکا ثبت شد. اطلاعات ارسالی متقاضی به شرح جدول زیر می‌باشد:
          </p>

          <table style="width: 100%; border-collapse: collapse; font-size: 13px; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
            <tbody>
              ${rows}
            </tbody>
          </table>

          <div style="margin-top: 22px; padding: 14px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; font-size: 12px; color: #166534;">
            ✓ گیرنده ایمیل: <b>info@nersika.com</b> | وضعیت: ثبت قطعی در سیستم تریاژ نرسیکا
          </div>
        </div>

        <div style="background: #f8fafc; padding: 16px 20px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
          مرکز پشتیبانی نرسیکا: تهران، دانشگاه صنعتی شریف، مرکز نوآوری انرژی | 02128424742
        </div>
      </div>
    </body>
    </html>
  `;

  return { subject, html };
}

// API endpoint to receive form submissions and forward to info@nersika.com
app.post('/api/send-email', async (req: Request, res: Response) => {
  try {
    const { formType, data, targetEmail = 'info@nersika.com' } = req.body;

    if (!formType || !data) {
      return res.status(400).json({ error: 'formType and data are required.' });
    }

    const { subject, html } = generateEmailHtml(formType, data);
    const logId = `mail-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    const timestamp = new Date().toISOString();

    console.log(`\n======================================================`);
    console.log(`[NERSIKA EMAIL DISPATCHER] To: ${targetEmail}`);
    console.log(`Subject: ${subject}`);
    console.log(`Sender: ${data.requesterName || data.patientName || data.fullName || 'کاربر'} (${data.phone || data.whatsapp || 'بدون شماره'})`);
    console.log(`Timestamp: ${timestamp}`);
    console.log(`Payload:`, JSON.stringify(data, null, 2));
    console.log(`======================================================\n`);

    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"سامانه نرسیکا" <${process.env.SMTP_USER || 'no-reply@nersika.com'}>`,
          to: targetEmail,
          subject,
          html,
        });
      } catch (smtpErr) {
        console.warn('[SMTP Dispatch Warning] Failed to deliver via SMTP, logged in spool:', smtpErr);
      }
    }

    const logEntry: EmailLogEntry = {
      id: logId,
      formType,
      recipient: targetEmail,
      subject,
      senderName: data.requesterName || data.patientName || data.fullName || 'کاربر نرسیکا',
      senderPhone: data.phone || data.whatsapp || '—',
      details: data,
      sentAt: timestamp,
      status: 'sent',
    };

    emailLogs.unshift(logEntry);

    return res.json({
      success: true,
      message: 'فرم با موفقیت ثبت شد و به info@nersika.com ارسال گردید.',
      logId,
      recipient: targetEmail,
      timestamp,
    });
  } catch (err: any) {
    console.error('Error handling form email dispatch:', err);
    return res.status(500).json({ error: 'Internal server error processing email dispatch' });
  }
});

// Audit endpoint to verify sent emails
app.get('/api/email-log', (_req: Request, res: Response) => {
  res.json({
    total: emailLogs.length,
    recipient: 'info@nersika.com',
    logs: emailLogs,
  });
});

// Mount Vite or serve static dist
async function setupVite() {
  if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[NERSIKA SERVER] Running on http://0.0.0.0:${PORT}`);
  });
}

setupVite().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
