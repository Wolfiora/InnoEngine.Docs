---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ab973b5cb96e7c0a881d24519d270285a0b388e7722ee9af3d3b9cbde1d79165
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.#ctor(System.Int32,System.Int32,Inno.Core.Logging.LogDeliveryMode)
title: LogRouter.Constructor
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 2ba4ac993dda5685048eb3fe720d2f570fd1adb605520de125540d92cc474987
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
