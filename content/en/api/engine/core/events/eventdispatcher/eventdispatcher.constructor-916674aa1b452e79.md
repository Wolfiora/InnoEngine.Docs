---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.916674aa1b452e79dd1a8afa3046b1ca7da3f3c31c8d54acdd234fa1136ed662
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.#ctor(System.Int32,System.Int32)
title: EventDispatcher.Constructor
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
reviewed: 2c1319224a78b59a5eb4026a42fe5c349ebe5777eeda92b0b9d5af0d72ca7f69

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `queueCapacity`:** Maximum pending events; producers must handle explicit rejection.

**Parameter `flushBudget`:** Maximum events dispatched by one flush, excluding events enqueued during that flush.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** A budget is not positive.
