---
title: "InspectionDrawerRegistry"
description: "Reference for InspectionDrawerRegistry in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.2103c4fb0f7019bf
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `InspectionDrawerRegistry`

This reference describes `InspectionDrawerRegistry` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-738b626880b52911) | Method |
| [`Dispose`](#api-df3ae6f0294238e1) | Method |
| [`TryResolve`](#api-eff9f902711b05c5) | Method |
| [`TryResolveExact`](#api-dcb330b8e7c8b591) | Method |

## Type declaration

<a id="api-2103c4fb0f7019bf"></a>
<!-- api: T:Inno.Editor.Inspection.InspectionDrawerRegistry d1606c4cdca829f947673fec247513eaf770605e58d37534ce3059521173d73d -->

```csharp
public sealed class Inno.Editor.Inspection.InspectionDrawerRegistry : System.IDisposable
```

Discovers and resolves inspection drawers through the active type catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerRegistry.cs#L16).

## `#ctor`

<a id="api-738b626880b52911"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawerRegistry.#ctor(Inno.Editor.Interactions.EditorInteractions,Inno.Editor.Inspection.InspectionDrawerFactory,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry) ad14ed100b563f08aa44c13c62c43360190bc969b8c59d2232911354dffe27af -->

```csharp
public Inno.Editor.Inspection.InspectionDrawerRegistry.InspectionDrawerRegistry(Inno.Editor.Interactions.EditorInteractions interactions, Inno.Editor.Inspection.InspectionDrawerFactory factory, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization)
```

Creates a generation-aware inspection drawer registry.

**Parameter `interactions`:** The active editor interaction entry point exposed to draw contexts.

**Parameter `factory`:** The composition-root factory used to construct discovered drawer types and resolve their
module-specific dependencies.

**Parameter `types`:** The host-owned type catalog that coordinates drawer generations.

**Parameter `serialization`:** Serialization registry used to expose the selected target's visible properties to custom drawers.

**Throws `System.ArgumentNullException`:** Thrown when `interactions` or `factory` is
`null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerRegistry.cs#L41).

## `Dispose`

<a id="api-df3ae6f0294238e1"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawerRegistry.Dispose 5ac770056e3cb797295910b17b71886aca1ca406772aff358a1105d24742e805 -->

```csharp
public void Inno.Editor.Inspection.InspectionDrawerRegistry.Dispose()
```

Releases every active drawer snapshot and unregisters the registry from type refreshes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerRegistry.cs#L161).

## `TryResolve`

<a id="api-eff9f902711b05c5"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawerRegistry.TryResolve(Inno.Editor.Core.EditorContext,System.Object,Inno.Editor.Inspection.SerializedPropertyRenderer,Inno.Editor.Inspection.IInspectionDrawer@,Inno.Editor.Inspection.InspectionDrawContext@) 78a53b7e3be187776fcc87a63de52a277c4749ced9e5dd345a1d3a24d560b48b -->

```csharp
public bool Inno.Editor.Inspection.InspectionDrawerRegistry.TryResolve(Inno.Editor.Core.EditorContext editorContext, object target, Inno.Editor.Inspection.SerializedPropertyRenderer renderer, out Inno.Editor.Inspection.IInspectionDrawer? drawer, out Inno.Editor.Inspection.InspectionDrawContext? context)
```

Resolves the most specific registered drawer and creates its drawing context.

**Parameter `editorContext`:** The shared editor context exposed to the selected drawer.

**Parameter `target`:** The selected object whose runtime type determines the drawer.

**Parameter `renderer`:** The serialized property renderer exposed to the selected drawer.

**Parameter `drawer`:** The resolved drawer when the method succeeds.

**Parameter `context`:** The target-specific drawing context when the method succeeds.

**Returns:** `true` when a matching drawer was resolved.

**Throws `System.ArgumentNullException`:** Thrown when `editorContext`, `target`, or
`renderer` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerRegistry.cs#L76).

## `TryResolveExact`

<a id="api-dcb330b8e7c8b591"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawerRegistry.TryResolveExact(Inno.Editor.Core.EditorContext,System.Object,Inno.Editor.Inspection.SerializedPropertyRenderer,Inno.Editor.Inspection.IInspectionDrawer@,Inno.Editor.Inspection.InspectionDrawContext@) 9592a630564b636f8fd155d0ae14bbe85c02bb5f57e5cf1a49e951f31c8600f9 -->

```csharp
public bool Inno.Editor.Inspection.InspectionDrawerRegistry.TryResolveExact(Inno.Editor.Core.EditorContext editorContext, object target, Inno.Editor.Inspection.SerializedPropertyRenderer renderer, out Inno.Editor.Inspection.IInspectionDrawer? drawer, out Inno.Editor.Inspection.InspectionDrawContext? context)
```

Resolves only a drawer explicitly registered for the target's exact runtime type.

**Parameter `editorContext`:** The shared editor context exposed to the selected drawer.

**Parameter `target`:** The selected object whose exact runtime type determines the drawer.

**Parameter `renderer`:** The serialized property renderer exposed to the selected drawer.

**Parameter `drawer`:** The exact drawer when the method succeeds.

**Parameter `context`:** The target-specific drawing context when the method succeeds.

**Returns:** `true` when an exact registration exists; inherited and fallback drawers are ignored.

**Throws `System.ArgumentNullException`:** Thrown when `editorContext`, `target`, or
`renderer` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerRegistry.cs#L127).
