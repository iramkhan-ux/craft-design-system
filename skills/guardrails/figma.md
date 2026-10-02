# Guardrails: Figma

All rules below were confirmed by Iram Khan (iramkhan-ux) on 2026-10-02. Source: Color foundation, Figma variables build. Scope: system-wide.

| # | Rule | Reason |
|---|---|---|
| 6 | Primitive variables have no scopes. | They stay out of every picker, so designers only pick semantic tokens (color rule 1). |
| 7 | A semantic variable's scope must match its group (text, border, background, icon). | Each color only shows up where it belongs, so it cannot be applied to the wrong property. |
| 8 | Create Figma variables in natural order (low to high, solid steps before alpha steps). | Figma cannot reorder variables, so they appear in the order they were created. |
