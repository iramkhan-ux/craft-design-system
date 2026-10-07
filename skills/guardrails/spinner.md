# Guardrails: Spinner

All rules below were confirmed by Iram Khan (iramkhan-ux) on 2026-10-08. Source: Spinner, decision 0010. Scope: system-wide.

| # | Rule | Reason |
|---|---|---|
| 1 | Use the Spinner for loading and saving only. Never build your own spinner or spin an icon by hand. | Keeps one look and one motion for every loading state, and keeps the accessibility behavior in one place. |
| 2 | Pick the Spinner color for the surface it sits on: `white` on dark or colored surfaces, `onNeutral` on filled neutral surfaces, `neutral` or `primary` everywhere else. | `white` stays white in light and dark, `onNeutral` follows the theme, and the wrong pick makes the Spinner hard to see. |
| 3 | Never turn off the Spinner's motion or change its speed. | The slower pace for reduced motion is built in, and a spinner that does not move looks like a frozen screen. |
