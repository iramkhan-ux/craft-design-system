# Guardrails: Icons

All rules below were confirmed by Iram Khan (iramkhan-ux) on 2026-10-07. Source: Icon library, decision 0009. Scope: system-wide.

| # | Rule | Reason |
|---|---|---|
| 1 | Use only icons from the library. Never draw, paste or import an icon from somewhere else. | Keeps one look and one source, so a change reaches everything. |
| 2 | Set icon color only with the icon color tokens. | Icons follow the theme and stay readable in light and dark. |
| 3 | Set icon size only with the six icon sizes. | Keeps every icon on the same sizes (see the icon size guardrails). |
| 4 | Give an icon that carries meaning an accessible label (`aria-label`). Hide decorative icons from screen readers. | Screen reader users get the meaning without noise from icons that only decorate. |
