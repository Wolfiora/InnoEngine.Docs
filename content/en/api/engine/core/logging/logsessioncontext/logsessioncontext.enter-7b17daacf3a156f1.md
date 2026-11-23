---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7b17daacf3a156f156fd2bf4cc114df64557514e4c49485b388ad214cb2388ce
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogSessionContext.Enter(Inno.Core.Logging.LogSessionID)
title: LogSessionContext.Enter
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 551a5b0a357a2bdf869da6bb181b162d2cfe55827093d6b4feb4e474c817a22e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sessionID`:** The non-empty identifier of the runtime session receiving execution.

## Returns

A scope that restores the previous session when disposed in reverse creation order.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `sessionID` does not identify a runtime session.
