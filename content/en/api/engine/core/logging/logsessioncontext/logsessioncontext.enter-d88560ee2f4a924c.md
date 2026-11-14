---
uid: api.d88560ee2f4a924c86b330ad43ef1c22041b857205b8e0c151f313fb473d3e49
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogSessionContext.Enter(Inno.Core.Logging.LogSessionId)"
source: xml
reviewed: 355f70bfb5b0f7c2c0a10cc869d29faf4810909938bea218e9bb0f421c5bb664
title: "LogSessionContext.Enter"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Enters a nested execution scope whose emitted logs belong to the supplied runtime session.

## Parameters

**Parameter `sessionId`:** The non-empty identifier of the runtime session receiving execution.

## Returns

A scope that restores the previous session when disposed in reverse creation order.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `sessionId` does not identify a runtime session.
