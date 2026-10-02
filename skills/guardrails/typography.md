# Guardrails: Typography

All rules below were confirmed by Iram Khan (iramkhan-ux) on 2026-10-03. Source: Typography foundation, decision 0002. Scope: system-wide.

| # | Rule | Reason |
|---|---|---|
| 1 | Designers use text styles only. Font size, line height, letter spacing and the other primitives are internal. | Same idea as color rule 1. Styles keep sizes and line heights paired correctly. |
| 2 | The heading font (TASA Orbiter) is for Display and Heading only. Body and Caption use Inter, and Code uses Menlo. | Keeps the hierarchy clear and the fonts consistent. |
| 3 | Caption is regular weight only. | Blade does not offer other weights for Caption. |
| 4 | Text color is never part of a text style. It comes from the semantic color tokens. | Colors change with light and dark mode. Text styles do not. |
