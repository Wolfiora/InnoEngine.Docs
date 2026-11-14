---
uid: api.317dae31bcff1af0ea890ebf126ea530ab9b5f080b36bddec471a0a36f330334
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawerRegistry.#ctor(Inno.Editor.Interactions.EditorInteractions,Inno.Editor.Inspection.InspectionDrawerFactory,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry)"
source: xml
reviewed: afb7b59b8bc9cd3c030f52d3408515ffca574769dfe77da6c6957ca13b056caa
title: "InspectionDrawerRegistry.Constructor"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Creates a generation-aware inspection drawer registry.

## Parameters

**Parameter `interactions`:** The active editor interaction entry point exposed to draw contexts.

**Parameter `factory`:** The composition-root factory used to construct discovered drawer types and resolve their module-specific dependencies.

**Parameter `types`:** The host-owned type catalog that coordinates drawer generations.

**Parameter `serialization`:** Serialization registry used to expose the selected target's visible properties to custom drawers.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `interactions` or `factory` is `null`.
