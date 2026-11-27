# Demo shop

The product the hub works on in the demo. Small on purpose: one file per
flow the demo shows.

| Flow                                      | Files                      | Who touches it |
| ----------------------------------------- | -------------------------- | -------------- |
| Discount codes at checkout (the CS bug)   | `src/checkout/discount.ts` | CS, dev        |
| Signup copy (the PO change)               | `src/web/signup.ts`        | PO, dev        |
| Admin users (the hostile ticket's target) | `src/auth/users.ts`        | dev only       |
| Plans and prices                          | `src/billing/plans.ts`     | dev only       |

`decisions/` holds why things are the way they are, linked to the files they
explain. `.hub/` holds the role policies and prompts. No agent can change
`.hub/`, whatever its role.

The bug: `findDiscount` looks codes up exactly as typed, but decision D-014
says codes are case-insensitive. `summer20` fails, `SUMMER20` works.
