---
title: "InspectorAttributeDrawerRegistry"
description: "Reference for InspectorAttributeDrawerRegistry in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.e185291d28d48ed6
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `InspectorAttributeDrawerRegistry`

This reference describes `InspectorAttributeDrawerRegistry` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1694b3669a0bc028) | Method |
| [`Dispose`](#api-18345765c0b08daf) | Method |

## Type declaration

<a id="api-e185291d28d48ed6"></a>
<!-- api: T:Inno.Editor.Inspection.InspectorAttributeDrawerRegistry f24acc3509fa71891448561501bc7b8e7b923d529d0a20471adfb4f76cf8e718 -->

```csharp
public sealed class Inno.Editor.Inspection.InspectorAttributeDrawerRegistry : System.IDisposable
```

Discovers generation-aware Inspector attribute drawers and applies them in declaration order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerRegistry.cs#L14).

## `#ctor`

<a id="api-1694b3669a0bc028"></a>
<!-- api: M:Inno.Editor.Inspection.InspectorAttributeDrawerRegistry.#ctor(Inno.Editor.Interactions.EditorInteractions,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,System.Collections.Generic.IEnumerable{System.Object}) 908ac77fead43e73e0caa00683e6e3995fa36722e73f64441c0cb2d0f3bb900c -->

```csharp
public Inno.Editor.Inspection.InspectorAttributeDrawerRegistry.InspectorAttributeDrawerRegistry(Inno.Editor.Interactions.EditorInteractions interactions, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization, System.Collections.Generic.IEnumerable<object> drawerServices)
```

Creates an Inspector attribute drawer registry.

**Parameter `interactions`:** Active editor interaction entry point.

**Parameter `types`:** Host-owned type catalog.

**Parameter `serialization`:** Active serialization registry.

**Parameter `drawerServices`:** Additional constructor-injected drawer services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerRegistry.cs#L33).

## `Dispose`

<a id="api-18345765c0b08daf"></a>
<!-- api: M:Inno.Editor.Inspection.InspectorAttributeDrawerRegistry.Dispose a273db182fbbb3c42314fa2347b8d8f2cf947ea00c416cff4992f6287530b728 -->

```csharp
public void Inno.Editor.Inspection.InspectorAttributeDrawerRegistry.Dispose()
```

Releases active drawer generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerRegistry.cs#L88).
