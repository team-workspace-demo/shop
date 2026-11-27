export type User = { id: string; email: string; role: 'customer' | 'admin' };

// Admins can refund orders and edit prices. Changed only by a dev, reviewed.
const ADMINS = new Set(['founder@demo-shop.example']);

export const isAdmin = (user: User) =>
  user.role === 'admin' && ADMINS.has(user.email);
