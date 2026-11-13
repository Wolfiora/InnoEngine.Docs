---
uid: api.120415fb17399cc9bde6ad9457966bb4ab4a38e4f773fd06e6d88f94c54ea125
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.EventDispatcher.#ctor(System.Int32,System.Int32)"
source: xml
reviewed: 60149e35c106e6aa5238397877de87fbcc1a3d425d78295f16742db37872f2d4
title: "Constructor"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Creates a dispatcher with bounded pending work and a finite per-flush budget.

**Parameter `queueCapacity`:** Maximum pending events; producers must handle explicit rejection.

**Parameter `flushBudget`:** Maximum events dispatched by one flush, excluding events enqueued during that flush.

**Exception `T:System.ArgumentOutOfRangeException`:** A budget is not positive.
