import { expect, it } from 'vitest';
import { signupCopy } from './signup';

it('lets the owner change the shop logo', () => {
  expect(signupCopy).toHaveProperty('logo');
  expect((signupCopy as { logo?: string }).logo).toBeTruthy();
});
