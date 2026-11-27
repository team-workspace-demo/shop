import { expect, it } from 'vitest';
import { orderTotal, shippingFor } from './shipping';

it('ships free on an order of exactly 50 euros', () => {
  expect(shippingFor(5_000)).toBe(0);
});

it('still charges shipping just below 50 euros', () => {
  expect(shippingFor(4_999)).toBe(490);
});

it('totals an order of exactly 50 euros without shipping', () => {
  expect(orderTotal(5_000)).toBe(5_000);
});
