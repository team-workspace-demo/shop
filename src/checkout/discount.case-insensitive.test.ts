import { expect, it } from 'vitest';
import { findDiscount } from './discount';

it('finds a discount code regardless of input case', () => {
  const discount = findDiscount('summer20', '2026-06-01');

  expect(discount).not.toBeNull();
  expect(discount?.code).toBe('SUMMER20');
  expect(discount?.percentOff).toBe(20);
});

it('finds a discount code with mixed case and surrounding whitespace', () => {
  const discount = findDiscount('  SuMmEr20  ', '2026-06-01');

  expect(discount?.code).toBe('SUMMER20');
});
