---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.317dae31bcff1af0ea890ebf126ea530ab9b5f080b36bddec471a0a36f330334
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawerRegistry.#ctor(Inno.Editor.Interactions.EditorInteractions,Inno.Editor.Inspection.InspectionDrawerFactory,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry)
title: InspectionDrawerRegistry.Constructor
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 1d8aee376b0c427202f15eaedf5127721e14040e5f113ae3a76ddf982766d030
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `interactions`:** The active editor interaction entry point exposed to draw contexts.

**Parameter `factory`:** The composition-root factory used to construct discovered drawer types and resolve their module-specific dependencies.

**Parameter `types`:** The host-owned type catalog that coordinates drawer generations.

**Parameter `serialization`:** Serialization registry used to expose the selected target's visible properties to custom drawers.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `interactions` or `factory` is `null`.
