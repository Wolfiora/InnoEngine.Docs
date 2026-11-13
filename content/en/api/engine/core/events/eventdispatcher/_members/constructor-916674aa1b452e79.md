---
uid: api.916674aa1b452e79dd1a8afa3046b1ca7da3f3c31c8d54acdd234fa1136ed662
symbol: "engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.#ctor(System.Int32,System.Int32)"
source: xml
reviewed: 2c1319224a78b59a5eb4026a42fe5c349ebe5777eeda92b0b9d5af0d72ca7f69
title: "Constructor"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Creates a dispatcher with bounded pending work and a finite per-flush budget.

**Parameter `queueCapacity`:** Maximum pending events; producers must handle explicit rejection.

**Parameter `flushBudget`:** Maximum events dispatched by one flush, excluding events enqueued during that flush.

**Exception `T:System.ArgumentOutOfRangeException`:** A budget is not positive.
