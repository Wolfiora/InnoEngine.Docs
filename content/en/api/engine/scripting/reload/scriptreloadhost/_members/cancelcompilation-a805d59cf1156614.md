---
uid: api.a805d59cf11566149df9f99c9ca2f5af4bb35f1900fc5ddb9c87439a99992525
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.CancelCompilation(System.Int64)"
source: xml
reviewed: 904e9ac95f4d77b9703a0ff60bbdeca14549bc879a2ab5826f8f0c78acc7ddca
title: "CancelCompilation"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Requests cancellation of the active compilation without changing the active script generation.

**Returns:** `true` when an active compilation received the request.

**Exception `T:System.ObjectDisposedException`:** Thrown after the manager has been disposed.

**Parameter `operationId`:** The observed request; a stale cancellation is rejected.
