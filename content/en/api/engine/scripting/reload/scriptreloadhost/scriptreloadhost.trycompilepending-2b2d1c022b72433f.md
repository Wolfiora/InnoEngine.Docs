---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2b2d1c022b72433f7ef518928a8efb8137ff4f40bf0c9ae56e15beb87b64917d
symbol: engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.TryCompilePending(System.Threading.Tasks.Task{Inno.Scripting.Compiler.ScriptCompilationResult}@)
title: ScriptReloadHost.TryCompilePending
kind: api
owners:
- Inno.Scripting.Reload
apiSurface: source-clr
sourceFingerprint: 90868970a0c2d351687dbda4f30c028216261973ceb6672565fd3ec58181135b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `compilation`:** The started compilation task, or `null` when none was ready.

## Returns

`true` when a pending compilation was started.

## Remarks

The initial automatic request is immediately ready and does not observe the debounce duration.
