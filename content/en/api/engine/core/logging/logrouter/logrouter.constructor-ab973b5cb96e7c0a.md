---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ab973b5cb96e7c0a881d24519d270285a0b388e7722ee9af3d3b9cbde1d79165
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.#ctor(System.Int32,System.Int32,Inno.Core.Logging.LogDeliveryMode)
title: LogRouter.Constructor
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
reviewed: 1e4b9532d3a03179819c1b4f1016464cb96ac08605d0abcedd76ce7cc9f497c0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `queueCapacity`:** Maximum pending entries and flush barriers before explicit rejection.

**Parameter `drainBudget`:** Maximum work items delivered using one sink snapshot.

**Parameter `deliveryMode`:** Selects worker or inline delivery independently of the platform.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** A capacity or budget is not positive, or the delivery policy is not a defined mode.
