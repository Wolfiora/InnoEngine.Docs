---
uid: api.14c978481a15a3f3e3b5e7366d35db2d3f9ba50bf1eab0aa255b0e294f2a494b
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.#ctor(Inno.Editor.Core.EditorContext,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter,System.Collections.Generic.IEnumerable{System.Object})"
source: xml
reviewed: 044117edd5c2be201990aa02ff5cb13c7cf9113539fd3a0ca83fa9ba940bafab
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates an interaction runtime with stable host-owned extension services.

**Parameter `context`:** The passive editor context shared with the presentation backend.

**Parameter `hostServices`:** Stable host-owned services that editor extension constructors may request by assignable contract.

**Parameter `logs`:** The host-owned logging router used by editor infrastructure.

**Parameter `types`:** The type catalog that owns editor extension generations.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` or `hostServices` is `null`.
