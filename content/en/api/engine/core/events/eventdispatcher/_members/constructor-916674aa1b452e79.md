---
uid: api.916674aa1b452e79dd1a8afa3046b1ca7da3f3c31c8d54acdd234fa1136ed662
symbol: "engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.#ctor(System.Int32,System.Int32)"
source: xml
reviewed: 5e0b75e2dd44615d8eb1753ad1aaf638eb5619cd1df540e3bbed774404d48ced
title: "Constructor"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Creates a dispatcher with bounded pending work and a finite per-flush budget.

**Parameter `queueCapacity`:** Maximum pending events; producers must handle explicit rejection.

**Parameter `flushBudget`:** Maximum events dispatched by one flush, excluding events enqueued during that flush.

**Exception `T:System.ArgumentOutOfRangeException`:** A budget is not positive.
