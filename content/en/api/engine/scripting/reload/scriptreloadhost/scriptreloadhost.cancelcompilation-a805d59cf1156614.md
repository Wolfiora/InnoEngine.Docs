---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a805d59cf11566149df9f99c9ca2f5af4bb35f1900fc5ddb9c87439a99992525
symbol: engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.CancelCompilation(System.Int64)
title: ScriptReloadHost.CancelCompilation
kind: api
owners:
- Inno.Scripting.Reload
apiSurface: source-clr
sourceFingerprint: 6511956c72d88c038676e4c5f4e5462105ede5ec5a878aaaea7d1adc3786e329
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `operationID`:** The observed request; a stale cancellation is rejected.

## Returns

`true` when an active compilation received the request.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown after the manager has been disposed.
