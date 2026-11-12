/**
 * Pure validation utility functions for Nersika app
 */

export function cleanPhoneNumber(phone: string): string {
  if (!phone) return '';
  // Convert Persian/Arabic digits to Latin
  const persianDigits = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
  const arabicDigits = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
  
  let cleaned = phone.trim();
  for (let i = 0; i < 10; i++) {
    cleaned = cleaned.replace(persianDigits[i], String(i)).replace(arabicDigits[i], String(i));
  }
  return cleaned.replace(/[\s\-\(\)]/g, '');
}

export function validateIranianPhone(phone: string): boolean {
  const cleaned = cleanPhoneNumber(phone);
  // Matches 09xxxxxxxxx or +989xxxxxxxxx or 989xxxxxxxxx or 9xxxxxxxxx
  return /^(\+98|0|98)?9\d{9}$/.test(cleaned);
}

export function validateInternationalPhone(phone: string): boolean {
  const cleaned = cleanPhoneNumber(phone);
  // Matches at least 8 digits and up to 15 digits, optionally with leading +
  return /^\+?\d{8,15}$/.test(cleaned);
}

export function validateRequired(value: string | undefined | null, minLength = 2): boolean {
  if (!value) return false;
  return value.trim().length >= minLength;
}

export function validateMedicalCode(code: string | undefined | null): boolean {
  if (!code || code.trim().length === 0) return true; // Optional field
  const cleaned = cleanPhoneNumber(code);
  return /^\d{4,10}$/.test(cleaned);
}
