import { expect, it } from 'vitest';
import { findDiscount } from './discount';

it('finds a discount code when the customer types it in lower case', () => {
  const discount = findDiscount('summer20', '2026-06-01');

  expect(discount).toEqual({
    code: 'SUMMER20',
    percentOff: 20,
    expires: '2026-12-31',
  });
});

it('finds a discount code when the customer types it in mixed case', () => {
  const discount = findDiscount('WeLcOmE10', '2026-06-01');

  expect(discount).toEqual({
    code: 'WELCOME10',
    percentOff: 10,
    expires: '2027-06-30',
  });
});
