import { expect, it } from 'vitest';
import { signupCopy } from './signup.ts';

it('follows the copy rules in D-017', () => {
  for (const text of Object.values(signupCopy)) {
    expect(text).not.toContain('!');
    expect(text.length).toBeLessThan(60);
  }
});
