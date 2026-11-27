import { expect, it } from 'vitest';
import { signupCopy } from './signup';

it('tells owners where to change their shop logo', () => {
  const texts = Object.values(signupCopy).map((text) => text.toLowerCase());
  expect(texts.some((text) => text.includes('logo'))).toBe(true);
});
