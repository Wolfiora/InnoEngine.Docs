---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.63028756ba8b973aaa65a41a3ba0c87313792dc017bb9ada7f7ffcdb57d409c0
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawerRegistry.#ctor(Inno.Editor.Interactions.EditorInteractions,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,System.Collections.Generic.IEnumerable{System.Object})
title: PropertyDrawerRegistry.Constructor
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 4dc39091fb017c2ecd9717bf45d822e672a3d3b340607bdc4b5cad862d858e56
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `interactions`:** The active editor interaction entry point available to property drawer constructors.

**Parameter `types`:** The host-owned type catalog that coordinates drawer generations.

**Parameter `serialization`:** The serialization registry available to structured-object drawers.

**Parameter `drawerServices`:** Additional generation-bound services available to feature-specific drawer constructors.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `interactions` is `null`.
