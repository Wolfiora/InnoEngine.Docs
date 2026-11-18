---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d88560ee2f4a924c86b330ad43ef1c22041b857205b8e0c151f313fb473d3e49
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogSessionContext.Enter(Inno.Core.Logging.LogSessionId)
title: LogSessionContext.Enter
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 252e3a02f9dd0bc6537b4eba495ec166891e254e821ad0e6875c1b9c187381f3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sessionId`:** The non-empty identifier of the runtime session receiving execution.

## Returns

A scope that restores the previous session when disposed in reverse creation order.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `sessionId` does not identify a runtime session.
