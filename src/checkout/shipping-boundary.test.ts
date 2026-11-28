import { expect, it } from 'vitest';
import { FREE_SHIPPING_FROM_CENTS, SHIPPING_CENTS, orderTotal, shippingFor } from './shipping';

it('ships free on an order of exactly the free-shipping threshold', () => {
  expect(shippingFor(FREE_SHIPPING_FROM_CENTS)).toBe(0);
  expect(orderTotal(FREE_SHIPPING_FROM_CENTS)).toBe(FREE_SHIPPING_FROM_CENTS);
});

it('still charges flat shipping just below the threshold', () => {
  expect(shippingFor(FREE_SHIPPING_FROM_CENTS - 1)).toBe(SHIPPING_CENTS);
});
