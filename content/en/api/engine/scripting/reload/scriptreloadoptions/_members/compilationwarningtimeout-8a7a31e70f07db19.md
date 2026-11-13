---
uid: api.8a7a31e70f07db19732260bdfaddd302b7a93cf19ee344a5789d2985682537e5
symbol: "engine:Inno.Scripting.Reload:P:Inno.Scripting.Reload.ScriptReloadOptions.compilationWarningTimeout"
source: xml
reviewed: 5dab8d6559bc80ae7a96ff8237aaf897487b7a0a0a80ff3bec4c5e3d23493f04
title: "compilationWarningTimeout"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Gets the elapsed duration after which an active compilation is reported as long-running.

## Remarks

Use `F:System.Threading.Timeout.InfiniteTimeSpan` to disable the warning. The warning never cancels compilation automatically.
