import test from 'node:test';
import assert from 'node:assert/strict';
import {
  cleanPhoneNumber,
  validateIranianPhone,
  validateInternationalPhone,
  validateRequired,
} from './validation';

test('cleanPhoneNumber normalizes Persian and Arabic numbers', () => {
  assert.equal(cleanPhoneNumber('۰۹۱۲۳۴۵۶۷۸۹'), '09123456789');
  assert.equal(cleanPhoneNumber('٠٩١٢٣٤٥٦٧٨٩'), '09123456789');
  assert.equal(cleanPhoneNumber('0912-345 6789'), '09123456789');
});

test('validateIranianPhone accepts valid prefixes', () => {
  assert.equal(validateIranianPhone('09121234567'), true);
  assert.equal(validateIranianPhone('09194968979'), true);
  assert.equal(validateIranianPhone('+989194968979'), true);
  assert.equal(validateIranianPhone('09351234567'), true);
});

test('validateIranianPhone rejects invalid phone numbers', () => {
  assert.equal(validateIranianPhone('12345'), false);
  assert.equal(validateIranianPhone('02128424742'), false); // Landline, not mobile
  assert.equal(validateIranianPhone(''), false);
});

test('validateInternationalPhone accepts international format', () => {
  assert.equal(validateInternationalPhone('+9647801234567'), true);
  assert.equal(validateInternationalPhone('+905321234567'), true);
  assert.equal(validateInternationalPhone('1234'), false);
});

test('validateRequired tests min length', () => {
  assert.equal(validateRequired(''), false);
  assert.equal(validateRequired('   '), false);
  assert.equal(validateRequired('علی'), true);
});
