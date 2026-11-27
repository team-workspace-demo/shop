import { expect, it } from 'vitest';
import { orderTotal, shippingFor } from './shipping';

it('ships free on an order of exactly 50 euros', () => {
  expect(shippingFor(5_000)).toBe(0);
});

it('charges no shipping on an order total of exactly 50 euros', () => {
  expect(orderTotal(5_000)).toBe(5_000);
});

it('still charges flat shipping just below 50 euros', () => {
  expect(shippingFor(4_999)).toBe(490);
});
