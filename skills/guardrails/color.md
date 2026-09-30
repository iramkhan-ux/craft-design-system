# Guardrails: Color

All rules below were confirmed by Iram Khan (iramkhan-ux) on 2026-10-01. Source: Color foundation, decision 0001. Scope: system-wide.

| # | Rule | Reason |
|---|---|---|
| 1 | Designers use semantic tokens only. Primitives are internal. | Semantic tokens carry meaning and change per mode. Primitives are raw values. |
| 2 | Deprecated tokens are never used. | They are legacy and are not recreated. |
| 3 | Feedback-colored components use surface text colors. | Keeps text readable on alerts, toasts, and similar components. |
| 4 | Dismiss icons use surface tokens. | Consistency across feedback components. |
| 5 | A new color token must point directly to one primitive. | Keeps the token layers flat and predictable. |
