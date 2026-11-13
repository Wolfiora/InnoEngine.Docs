---
uid: api.2b2d1c022b72433f7ef518928a8efb8137ff4f40bf0c9ae56e15beb87b64917d
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.TryCompilePending(System.Threading.Tasks.Task{Inno.Scripting.Compiler.ScriptCompilationResult}@)"
source: xml
reviewed: 0b0d9f7707ae036e7871b2f38f0cdee172f0a708244293304c6d5506f29a95f7
title: "TryCompilePending"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Starts a pending compilation after the configured quiet period has elapsed.

## Remarks

The initial automatic request is immediately ready and does not observe the debounce duration.

**Parameter `compilation`:** The started compilation task, or `null` when none was ready.

**Returns:** `true` when a pending compilation was started.
