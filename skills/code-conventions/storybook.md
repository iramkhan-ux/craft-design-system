# Storybook standard

Approved by Iram Khan (iramkhan-ux) on 2026-10-03. Scope: system-wide. This is Craft's own structure, built on industry practice. It is not a copy of any other team's Storybook. Agents read this before building or changing anything in `packages/ui`.

## 1. Where things live

- Each component has its own folder: `src/components/<Name>/` with the component, its stories, its docs and its tests together.
- Foundations (color, typography, and so on) live in `src/foundations/`.
- Generated files (`src/tokens/generated`) are never edited by hand and never committed.
- Components import from a single public entry point per component. Nothing reaches into another component's folder.

## 2. Design values

- Components use semantic tokens only (`var(--craft-color-...)`). No raw hex, rgb or other color values. Lint fails the build if one appears.
- Sizes, spacing, fonts and radii also come from tokens once those foundations exist.
- An exception needs a comment explaining why, and is called out in the PR.

## 3. What every component must have in Storybook

- A **Playground** story with live controls.
- Every variant, size and state in one view: default, hover, focus, active, disabled, loading and error where they apply.
- Light and dark shown side by side.
- Usage guidance: when to use it, when not to, and accessibility notes.
- Stories follow one fixed template so every agent produces pages that read the same.

## 4. Checks on every pull request

| Check | Status |
|---|---|
| Types (`tsc`) | On |
| Lint, including the no-raw-color rule and Storybook's own rules | On |
| Storybook builds | On |
| Behavior tests (click, type, tab through) | Next PR |
| Accessibility violations fail the build | Next PR |
| Visual comparison against the approved version | Next PR |

A pull request cannot be merged by an agent. The Admin merges.

## 5. Publishing

- The latest approved Storybook is published to GitHub Pages every time `main` changes.
- Per-PR preview links come with the visual comparison step.
- Each approved checkpoint is a repo tag and is logged in `process/checkpoints.md`.

## 6. Reliability

- Pinned dependency versions and a committed lockfile. Builds use `npm ci`.
- Node version is set in `packages/ui/.nvmrc`.
- TypeScript is held at 6.0.x until the lint tooling supports 7.
- CI actions are pinned to a major version.
