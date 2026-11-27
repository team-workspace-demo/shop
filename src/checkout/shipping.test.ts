import { describe, expect, it } from 'vitest';
import { orderTotal, shippingFor } from './shipping.ts';

describe('shipping', () => {
  it('charges shipping on a small cart', () => {
    expect(shippingFor(2_500)).toBe(490);
  });

  it('ships a large cart free', () => {
    expect(shippingFor(8_000)).toBe(0);
  });

  it('adds shipping to the total', () => {
    expect(orderTotal(2_500)).toBe(2_990);
  });
});
