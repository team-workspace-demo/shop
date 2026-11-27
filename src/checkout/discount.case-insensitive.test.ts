import { expect, it } from 'vitest';
import { findDiscount } from './discount';

it('finds a discount when the customer types the code in lowercase', () => {
  expect(findDiscount('summer20', '2026-01-01')).toEqual({
    code: 'SUMMER20',
    percentOff: 20,
    expires: '2026-12-31',
  });
});

it('finds a discount when the customer types the code in mixed case', () => {
  expect(findDiscount('Welcome10', '2026-01-01')).toEqual({
    code: 'WELCOME10',
    percentOff: 10,
    expires: '2027-06-30',
  });
});
