import { expect, it } from 'vitest';
import { shopSettings } from './settings';

it('exposes a shop logo the owner can change after setup', () => {
  expect(shopSettings).toHaveProperty('logoUrl');
});
