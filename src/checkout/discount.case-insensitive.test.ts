import { expect, it } from 'vitest';
import { findDiscount } from './discount';

it('finds discount codes regardless of input case', () => {
  const today = '2026-06-01';

  expect(findDiscount('summer20', today)).toEqual({
    code: 'SUMMER20',
    percentOff: 20,
    expires: '2026-12-31',
  });
  expect(findDiscount('SuMmEr20', today)?.code).toBe('SUMMER20');
  expect(findDiscount('welcome10', today)?.code).toBe('WELCOME10');
});
