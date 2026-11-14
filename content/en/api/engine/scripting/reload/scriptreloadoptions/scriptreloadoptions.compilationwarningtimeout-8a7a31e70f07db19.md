---
uid: api.8a7a31e70f07db19732260bdfaddd302b7a93cf19ee344a5789d2985682537e5
symbol: "engine:Inno.Scripting.Reload:P:Inno.Scripting.Reload.ScriptReloadOptions.compilationWarningTimeout"
source: xml
reviewed: 325c40c36fd66998b77ce737709ceacaa9761887fe888187ff33d843013aa6da
title: "ScriptReloadOptions.compilationWarningTimeout"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Gets the elapsed duration after which an active compilation is reported as long-running.

## Remarks

Use `F:System.Threading.Timeout.InfiniteTimeSpan` to disable the warning. The warning never cancels compilation automatically.
