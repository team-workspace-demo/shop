import { expect, it } from 'vitest';
import { findDiscount } from './discount';

it('finds a discount code regardless of input case', () => {
  const discount = findDiscount('summer20', '2026-06-01');

  expect(discount).toEqual({
    code: 'SUMMER20',
    percentOff: 20,
    expires: '2026-12-31',
  });
});
