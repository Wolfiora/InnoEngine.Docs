---
uid: api.ab973b5cb96e7c0a881d24519d270285a0b388e7722ee9af3d3b9cbde1d79165
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.#ctor(System.Int32,System.Int32,Inno.Core.Logging.LogDeliveryMode)"
source: xml
reviewed: 88b18fe62331faa3d51e2e15ef805cb71e48661c07bfbb74cc52c92a459cdb05
title: "Constructor"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Creates an isolated logging router with an explicit delivery policy.

**Parameter `queueCapacity`:** Maximum pending entries and flush barriers before explicit rejection.

**Parameter `drainBudget`:** Maximum work items delivered using one sink snapshot.

**Parameter `deliveryMode`:** Selects worker or inline delivery independently of the platform.

**Exception `T:System.ArgumentOutOfRangeException`:** A capacity or budget is not positive, or the delivery policy is not a defined mode.
