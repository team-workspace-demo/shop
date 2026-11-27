export type Discount = { code: string; percentOff: number; expires: string };

// Active codes. Marketing sends these in emails, in upper case.
const CODES: Record<string, Discount> = {
  SUMMER20: { code: 'SUMMER20', percentOff: 20, expires: '2026-12-31' },
  WELCOME10: { code: 'WELCOME10', percentOff: 10, expires: '2027-06-30' },
};

export const findDiscount = (input: string, today: string): Discount | null => {
  const discount = CODES[input.trim()];
  if (!discount || discount.expires < today) return null;
  return discount;
};

export const applyDiscount = (totalCents: number, discount: Discount | null) =>
  discount
    ? Math.round(totalCents * (1 - discount.percentOff / 100))
    : totalCents;
