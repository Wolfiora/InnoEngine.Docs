---
uid: api.ab973b5cb96e7c0a881d24519d270285a0b388e7722ee9af3d3b9cbde1d79165
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.#ctor(System.Int32,System.Int32,Inno.Core.Logging.LogDeliveryMode)"
source: xml
reviewed: 664404c729a1f1ddf67632055dc030c251780d99473f41b7e152ed7331eb4477
title: "LogRouter.Constructor"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Creates an isolated logging router with an explicit delivery policy.

## Parameters

**Parameter `queueCapacity`:** Maximum pending entries and flush barriers before explicit rejection.

**Parameter `drainBudget`:** Maximum work items delivered using one sink snapshot.

**Parameter `deliveryMode`:** Selects worker or inline delivery independently of the platform.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** A capacity or budget is not positive, or the delivery policy is not a defined mode.
