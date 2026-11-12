/**
 * Pricing calculator and formatting utility for Nersika
 */

export interface PricingOptions {
  basePrice: number;
  shift: 'hourly' | 'daily' | 'night' | '24h';
  hours?: number; // if hourly, e.g. 4
  daysCount?: number;
  isUrgent?: boolean;
  needsSpecialCare?: boolean; // ICU, bedsore prevention, catheter etc.
}

export function calculateServiceCost(options: PricingOptions): number {
  const {
    basePrice,
    shift,
    hours = 4,
    daysCount = 1,
    isUrgent = false,
    needsSpecialCare = false,
  } = options;

  let shiftCost = basePrice;

  switch (shift) {
    case 'hourly': {
      const validHours = Math.max(2, Math.min(hours, 12));
      // Half-day fraction base
      shiftCost = Math.round((basePrice / 6) * validHours);
      break;
    }
    case 'daily':
      shiftCost = basePrice;
      break;
    case 'night':
      // Night shifts have a 25% premium
      shiftCost = Math.round(basePrice * 1.25);
      break;
    case '24h':
      // 24-hour round-the-clock shift
      shiftCost = Math.round(basePrice * 2.1);
      break;
    default:
      shiftCost = basePrice;
  }

  if (needsSpecialCare) {
    shiftCost = Math.round(shiftCost * 1.2);
  }

  if (isUrgent) {
    shiftCost += 150000; // Flat urgent dispatch readiness fee
  }

  const total = shiftCost * Math.max(1, daysCount);
  // Round to nearest 5000 for clean pricing
  return Math.round(total / 5000) * 5000;
}

export function formatToman(amount: number, lang = 'fa'): string {
  const formatted = amount.toLocaleString('en-US');
  if (lang === 'fa' || lang === 'ar') {
    // Return with Toman unit
    return `${toPersianDigits(formatted)} تومان`;
  }
  return `${formatted} Tomans`;
}

export function toPersianDigits(str: string | number): string {
  const strVal = String(str);
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return strVal.replace(/\d/g, (d) => persianDigits[parseInt(d, 10)]);
}
