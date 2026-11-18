---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a805d59cf11566149df9f99c9ca2f5af4bb35f1900fc5ddb9c87439a99992525
symbol: engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.CancelCompilation(System.Int64)
title: ScriptReloadHost.CancelCompilation
kind: api
owners:
- Inno.Scripting.Reload
apiSurface: source-clr
sourceFingerprint: 2ebe2b17e4b29f1583786ada26d13280595b6b116c2af99904945226e5eb25f0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

`true` when an active compilation received the request.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown after the manager has been disposed.

## Parameters

**Parameter `operationId`:** The observed request; a stale cancellation is rejected.
