// D-021: orders from €50 ship free; below that, shipping is a flat €4.90.
export const FREE_SHIPPING_FROM_CENTS = 5_000;
export const SHIPPING_CENTS = 490;

// What the customer pays for shipping on a cart, after any discount.
export const shippingFor = (subtotalCents: number) =>
  subtotalCents > FREE_SHIPPING_FROM_CENTS ? 0 : SHIPPING_CENTS;

export const orderTotal = (subtotalCents: number) =>
  subtotalCents + shippingFor(subtotalCents);
