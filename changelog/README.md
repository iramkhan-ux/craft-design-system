# Changelog entries

Each pull request adds **one new file** in `changelog/unreleased/` and does not edit any other file here. Two pull requests then never touch the same file, so the changelog never causes a merge conflict.

## File name

`YYYY-MM-DD-short-name.md`, for example `2026-10-05-spacing-foundation.md`.

## File contents

Plain sentences, no extra headings. Say what changed and who approved it, for example:

```
Spacing foundation (decision 0003): spacing, radius, border width and breakpoints from Blade source. Approved by Iram Khan, 2026-10-05.
```

## Releasing

When a version is released, its entries are gathered into `CHANGELOG.md` under the version heading, and the files in `unreleased/` are removed in that same pull request.

## History

`CHANGELOG.md` holds everything up to 2026-10-05, the day this system started.
