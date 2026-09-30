# Craft

**C**ode-integrated, **R**eusable, **A**uthentic, **F**ramework, **T**eam.

A multi-agent framework for creating and maintaining a design system. Designers make the decisions. Agents build and maintain the Figma library, React code, Storybook, guideline docs, and changelog.

## How it works

- Designers approve work at each checkpoint: prototype, Figma component, code, docs.
- Every approval comes with a confirmed summary table: decisions, exceptions, and what to create or map.
- Approved changes become numbered versions, so any version can be rolled back.
- A guardrails checklist records the rules designers have settled, so agents do not re-ask them.
- The Admin (see `roles.md`) is the final approver and the only person who can change the process itself.

## Layout

| Path | Purpose |
|---|---|
| `roles.md` | Admin, Approver List, handoff log |
| `process/` | Editable sequences (new component, rollback, and so on). Admin-owned |
| `skills/` | Knowledge agents read: foundations, components, guardrails, formats, conventions |
| `agents/` | One file per agent |
| `tokens/` | Master record of design values |
| `decisions/` | One file per approved change. Not read by default |
| `docs/` | Generated guideline pages |
| `packages/ui/` | React components and Storybook |
| `CHANGELOG.md` | Generated record of changes |

## Status

Experimental pilot. The pilot recreates the Razorpay Blade Design System (web, light theme) to test the process. The same process is then meant to be applied to the TELUS design system. Stack for the experiment: React, TypeScript, Storybook. The production stack will be decided with engineering and product.

## Changing this repo

After the initial setup commit, every change goes through a pull request approved by the Admin.
