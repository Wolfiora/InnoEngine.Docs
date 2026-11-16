---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2b2d1c022b72433f7ef518928a8efb8137ff4f40bf0c9ae56e15beb87b64917d
symbol: engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.TryCompilePending(System.Threading.Tasks.Task{Inno.Scripting.Compiler.ScriptCompilationResult}@)
title: ScriptReloadHost.TryCompilePending
kind: api
owners:
- Inno.Scripting.Reload
apiSurface: source-clr
reviewed: 5350c3bd2ccad0e31b63121640a7c5f9bfeda3701841f7aba5b4a2e1a1d0e57b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

The initial automatic request is immediately ready and does not observe the debounce duration.

## Parameters

**Parameter `compilation`:** The started compilation task, or `null` when none was ready.

## Returns

`true` when a pending compilation was started.
