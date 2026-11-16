---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.120415fb17399cc9bde6ad9457966bb4ab4a38e4f773fd06e6d88f94c54ea125
symbol: scripting:Inno.Core.Events:M:InnoEngine.Events.EventDispatcher.#ctor(System.Int32,System.Int32)
title: EventDispatcher.Constructor
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
reviewed: 60149e35c106e6aa5238397877de87fbcc1a3d425d78295f16742db37872f2d4
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
