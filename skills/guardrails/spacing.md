# Guardrails: Spacing

All rules below were confirmed by Iram Khan (iramkhan-ux) on 2026-10-05. Source: Spacing foundation, decision 0003. Scope: system-wide.

| # | Rule | Reason |
|---|---|---|
| 1 | Designers use the spacing, radius and border width tokens only. No hand-typed spacing, radius or border widths. | Keeps every layout on the same scale and lets a change reach everything. |
| 2 | `max` radius is for pills and `round` is for circles only. | They are shape tokens, not sizes. Using them for ordinary corners gives inconsistent shapes. |
| 3 | Padding, gaps and margins come from the spacing scale only. | One scale means the same gap looks the same everywhere. |
