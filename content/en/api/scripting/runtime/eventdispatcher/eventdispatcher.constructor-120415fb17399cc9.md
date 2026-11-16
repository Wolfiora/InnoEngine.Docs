---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.120415fb17399cc9bde6ad9457966bb4ab4a38e4f773fd06e6d88f94c54ea125
symbol: scripting:Inno.Core.Events:M:InnoEngine.Events.EventDispatcher.#ctor(System.Int32,System.Int32)
title: EventDispatcher.Constructor
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
reviewed: 39463cdfa2b5b27889ea63a23379578b42d2976b9bde2b24293e18c5fdfca149
apiScope: Runtime
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
