---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.916674aa1b452e79dd1a8afa3046b1ca7da3f3c31c8d54acdd234fa1136ed662
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.#ctor(System.Int32,System.Int32)
title: EventDispatcher.Constructor
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
reviewed: e5051dfe364b7aad993c7cf28a1c0c9ed048aa4b867ef4b93ec3f0fd39e30892
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `queueCapacity`:** Maximum pending events; producers must handle explicit rejection.

**Parameter `flushBudget`:** Maximum events dispatched by one flush, excluding events enqueued during that flush.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** A budget is not positive.
