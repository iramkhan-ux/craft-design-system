# Guardrails: Motion

All rules below were confirmed by Iram Khan (iramkhan-ux) on 2026-10-05. Source: Motion foundation, decision 0006. Scope: system-wide.

| # | Rule | Reason |
|---|---|---|
| 1 | Use the motion tokens only. No hand-typed durations, delays or easing curves. | Keeps every animation on the same timing and lets a change reach everything. |
| 2 | Use each easing for its stated purpose, for example `entrance` and `exit` for things appearing and leaving, and `shake` for errors only. | Each curve was designed for one job, and using it elsewhere makes the interface feel inconsistent. |
