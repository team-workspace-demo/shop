export type Plan = {
  id: 'monthly' | 'annual';
  priceCents: number;
  months: number;
};

// D-009: annual plans get two months free.
export const PLANS: Plan[] = [
  { id: 'monthly', priceCents: 1_200, months: 1 },
  { id: 'annual', priceCents: 14_400, months: 12 },
];
