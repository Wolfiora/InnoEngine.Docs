---
uid: api.63028756ba8b973aaa65a41a3ba0c87313792dc017bb9ada7f7ffcdb57d409c0
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawerRegistry.#ctor(Inno.Editor.Interactions.EditorInteractions,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,System.Collections.Generic.IEnumerable{System.Object})"
source: xml
reviewed: 4f5371a3121c28d8b180202071b69a56fe09cc86beba8f8f1564a3e12004f49a
title: "PropertyDrawerRegistry.Constructor"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Creates a generation-aware property drawer registry.

**Parameter `interactions`:** The active editor interaction entry point available to property drawer constructors.

**Parameter `types`:** The host-owned type catalog that coordinates drawer generations.

**Parameter `serialization`:** The serialization registry available to structured-object drawers.

**Parameter `drawerServices`:** Additional generation-bound services available to feature-specific drawer constructors.

**Exception `T:System.ArgumentNullException`:** Thrown when `interactions` is `null`.
