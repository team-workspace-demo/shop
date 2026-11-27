import { expect, it } from 'vitest';
import { findDiscount } from './discount';

it('finds a discount when the customer types the code in lower case', () => {
  const discount = findDiscount('summer20', '2026-01-01');
  expect(discount).not.toBeNull();
  expect(discount?.code).toBe('SUMMER20');
  expect(discount?.percentOff).toBe(20);
});

it('finds a discount regardless of surrounding whitespace and mixed case', () => {
  const discount = findDiscount('  Welcome10 ', '2026-01-01');
  expect(discount).not.toBeNull();
  expect(discount?.code).toBe('WELCOME10');
});
