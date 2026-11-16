---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.14c978481a15a3f3e3b5e7366d35db2d3f9ba50bf1eab0aa255b0e294f2a494b
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.#ctor(Inno.Editor.Core.EditorContext,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter,System.Collections.Generic.IEnumerable{System.Object})
title: EditorInteractionRuntime.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: fc419087d6d414e2d7e414f46523fe44df29f4b22baf9bdf8bec68b1248d75d3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The passive editor context shared with the presentation backend.

**Parameter `hostServices`:** Stable host-owned services that editor extension constructors may request by assignable contract.

**Parameter `logs`:** The host-owned logging router used by editor infrastructure.

**Parameter `types`:** The type catalog that owns editor extension generations.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` or `hostServices` is `null`.
