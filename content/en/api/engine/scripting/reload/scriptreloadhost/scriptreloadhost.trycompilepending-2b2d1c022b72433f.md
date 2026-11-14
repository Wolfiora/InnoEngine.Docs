---
uid: api.2b2d1c022b72433f7ef518928a8efb8137ff4f40bf0c9ae56e15beb87b64917d
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.TryCompilePending(System.Threading.Tasks.Task{Inno.Scripting.Compiler.ScriptCompilationResult}@)"
source: xml
reviewed: 5350c3bd2ccad0e31b63121640a7c5f9bfeda3701841f7aba5b4a2e1a1d0e57b
title: "ScriptReloadHost.TryCompilePending"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Starts a pending compilation after the configured quiet period has elapsed.

## Remarks

The initial automatic request is immediately ready and does not observe the debounce duration.

## Parameters

**Parameter `compilation`:** The started compilation task, or `null` when none was ready.

## Returns

`true` when a pending compilation was started.
