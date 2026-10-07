# Guardrails: Icon size

All rules below were confirmed by Iram Khan (iramkhan-ux) on 2026-10-07. Source: Icon size foundation, decision 0008. Scope: system-wide.

| # | Rule | Reason |
|---|---|---|
| 1 | Use icon sizes for icons only, never for other widths or heights. | Figma cannot limit these variables to icons, so the rule is what keeps them from spreading to other layers. |
| 2 | Use the matching icon size token, never a hand-typed icon size. | Keeps every icon on the same six sizes and lets a change reach everything. |
