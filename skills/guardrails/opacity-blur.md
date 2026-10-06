# Guardrails: Opacity and blur

All rules below were confirmed by Iram Khan (iramkhan-ux) on 2026-10-07. Source: Opacity and backdrop blur foundation, decision 0007. Scope: system-wide.

| # | Rule | Reason |
|---|---|---|
| 1 | Use the opacity tokens only. No hand-typed opacity values. | Keeps every see-through surface on the same steps and lets a change reach everything. |
| 2 | Use backdrop blur only on see-through surfaces, and only with the three blur tokens. | Blur behind a solid surface cannot be seen, and hand-typed blur amounts make panels look inconsistent. |
