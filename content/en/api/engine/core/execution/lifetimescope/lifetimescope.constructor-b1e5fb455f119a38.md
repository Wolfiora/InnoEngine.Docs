---
uid: api.b1e5fb455f119a387228d94f968883440a24900bc81d8a552c091415312e0bcc
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.#ctor(System.Int32)"
source: xml
reviewed: 4c777468729aa30b512377911511eb45a9ed174f20ff84efacf1fecf8c9bce90
title: "LifetimeScope.Constructor"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Creates a lifetime with finite asynchronous admission capacity.

**Parameter `maxTrackedWork`:** Maximum retained work records; completed successful work releases capacity immediately.

**Exception `T:System.ArgumentOutOfRangeException`:** The capacity is not positive.
