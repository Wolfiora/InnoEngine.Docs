---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.916674aa1b452e79dd1a8afa3046b1ca7da3f3c31c8d54acdd234fa1136ed662
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.#ctor(System.Int32,System.Int32)
title: EventDispatcher.Constructor
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
sourceFingerprint: ba162252aaf6a9d08f179318ed08926991f75eaaf22745790936ee0aba4c1306
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
