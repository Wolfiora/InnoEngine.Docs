---
uid: api.a805d59cf11566149df9f99c9ca2f5af4bb35f1900fc5ddb9c87439a99992525
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.CancelCompilation(System.Int64)"
source: xml
reviewed: b4efd3a0339c476222095b9848faa7ec8edc45b7f0cad6fe4179e88b55e3c265
title: "ScriptReloadHost.CancelCompilation"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Requests cancellation of the active compilation without changing the active script generation.

## Returns

`true` when an active compilation received the request.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown after the manager has been disposed.

## Parameters

**Parameter `operationId`:** The observed request; a stale cancellation is rejected.
