---
uid: api.d88560ee2f4a924c86b330ad43ef1c22041b857205b8e0c151f313fb473d3e49
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogSessionContext.Enter(Inno.Core.Logging.LogSessionId)"
source: xml
reviewed: c2ace07f9c5a2b6b3ffce7e1e8a384efabe50447a2408bfa8c03b904d026e5f2
title: "Enter"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Enters a nested execution scope whose emitted logs belong to the supplied runtime session.

**Parameter `sessionId`:** The non-empty identifier of the runtime session receiving execution.

**Returns:** A scope that restores the previous session when disposed in reverse creation order.

**Exception `T:System.ArgumentException`:** Thrown when `sessionId` does not identify a runtime session.
