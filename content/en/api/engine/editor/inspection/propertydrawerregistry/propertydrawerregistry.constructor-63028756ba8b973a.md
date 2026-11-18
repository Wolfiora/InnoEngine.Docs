---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.63028756ba8b973aaa65a41a3ba0c87313792dc017bb9ada7f7ffcdb57d409c0
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawerRegistry.#ctor(Inno.Editor.Interactions.EditorInteractions,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,System.Collections.Generic.IEnumerable{System.Object})
title: PropertyDrawerRegistry.Constructor
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
sourceFingerprint: 1d4154434fb9d74037357b7863231f6a52c972bc3de0a1e2bb06ec74a06c6036
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
