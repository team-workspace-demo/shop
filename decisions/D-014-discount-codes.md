---
id: D-014
title: Discount codes are case-insensitive
date: 2026-03-12
by: Sara (PO)
files: ['src/checkout/discount.ts']
---

Marketing writes codes in upper case, but customers type them from emails and
phones in any case. Normalise to upper case before lookup. Codes stay unique
regardless of case.
