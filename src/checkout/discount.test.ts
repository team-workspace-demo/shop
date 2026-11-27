import { describe, expect, it } from 'vitest';
import { applyDiscount, findDiscount } from './discount.ts';

describe('discount codes', () => {
  it('finds an active code', () => {
    expect(findDiscount('SUMMER20', '2026-11-18')?.percentOff).toBe(20);
  });

  it('ignores surrounding spaces', () => {
    expect(findDiscount('  WELCOME10 ', '2026-11-18')?.percentOff).toBe(10);
  });

  it('refuses an expired code', () => {
    expect(findDiscount('SUMMER20', '2027-01-01')).toBeNull();
  });

  it('applies the percentage', () => {
    expect(applyDiscount(10_000, findDiscount('SUMMER20', '2026-11-18'))).toBe(
      8_000
    );
  });
});
