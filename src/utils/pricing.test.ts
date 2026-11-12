import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateServiceCost, formatToman, toPersianDigits } from './pricing';

test('calculateServiceCost calculates daily standard rate', () => {
  const cost = calculateServiceCost({
    basePrice: 600000,
    shift: 'daily',
    daysCount: 1,
    isUrgent: false,
    needsSpecialCare: false,
  });
  assert.equal(cost, 600000);
});

test('calculateServiceCost applies urgent dispatch fee', () => {
  const cost = calculateServiceCost({
    basePrice: 600000,
    shift: 'daily',
    daysCount: 1,
    isUrgent: true,
  });
  assert.equal(cost, 750000);
});

test('calculateServiceCost applies night shift premium', () => {
  const cost = calculateServiceCost({
    basePrice: 600000,
    shift: 'night',
    daysCount: 1,
  });
  // 600,000 * 1.25 = 750,000
  assert.equal(cost, 750000);
});

test('calculateServiceCost scales across multiple days', () => {
  const cost = calculateServiceCost({
    basePrice: 500000,
    shift: 'daily',
    daysCount: 3,
  });
  assert.equal(cost, 1500000);
});

test('toPersianDigits converts western digits', () => {
  assert.equal(toPersianDigits('09123456789'), '۰۹۱۲۳۴۵۶۷۸۹');
});

test('formatToman formats with unit correctly', () => {
  const formatted = formatToman(650000, 'fa');
  assert.ok(formatted.includes('تومان'));
  assert.ok(formatted.includes('۶۵۰,۰۰۰'));
});
