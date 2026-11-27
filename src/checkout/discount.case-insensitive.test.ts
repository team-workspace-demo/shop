import { expect, it } from 'vitest';
import { findDiscount } from './discount';

it('finds discount codes regardless of input case', () => {
  expect(findDiscount('summer20', '2026-06-01')).toEqual({
    code: 'SUMMER20',
    percentOff: 20,
    expires: '2026-12-31',
  });
});
