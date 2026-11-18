---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2b2d1c022b72433f7ef518928a8efb8137ff4f40bf0c9ae56e15beb87b64917d
symbol: engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.TryCompilePending(System.Threading.Tasks.Task{Inno.Scripting.Compiler.ScriptCompilationResult}@)
title: ScriptReloadHost.TryCompilePending
kind: api
owners:
- Inno.Scripting.Reload
apiSurface: source-clr
sourceFingerprint: e6990d0a5fa136c391aa9d2183fc47c4b83b3d93005557443e796510d82956e6
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
