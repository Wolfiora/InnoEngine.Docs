---
title: "PropertyDrawerRegistry"
description: "Reference for PropertyDrawerRegistry in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.0fa464d5ce66b3bd
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `PropertyDrawerRegistry`

This reference describes `PropertyDrawerRegistry` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6e20d9e60d8cf4e8) | Method |
| [`Dispose`](#api-2c65205568217927) | Method |
| [`Resolve`](#api-1354059c1a1fbca0) | Method |

## Type declaration

<a id="api-0fa464d5ce66b3bd"></a>
<!-- api: T:Inno.Editor.Inspection.PropertyDrawerRegistry 0e4208f085cb9c21a749d46a4ac2509295dba0de5a4a211fefa9a1ed1decaeff -->

```csharp
public sealed class Inno.Editor.Inspection.PropertyDrawerRegistry : System.IDisposable
```

Discovers and resolves serialized property drawers through the active type catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerRegistry.cs#L15).

## `#ctor`

<a id="api-6e20d9e60d8cf4e8"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawerRegistry.#ctor(Inno.Editor.Interactions.EditorInteractions,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,System.Collections.Generic.IEnumerable{System.Object}) 2c4ab4f8202a82848efcddc407e0157ffe4b4f8f73436bc2a3d185aa37168259 -->

```csharp
public Inno.Editor.Inspection.PropertyDrawerRegistry.PropertyDrawerRegistry(Inno.Editor.Interactions.EditorInteractions interactions, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization, System.Collections.Generic.IEnumerable<object> drawerServices)
```

Creates a generation-aware property drawer registry.

**Parameter `interactions`:** The active editor interaction entry point available to property drawer constructors.

**Parameter `types`:** The host-owned type catalog that coordinates drawer generations.

**Parameter `serialization`:** The serialization registry available to structured-object drawers.

**Parameter `drawerServices`:** Additional generation-bound services available to feature-specific drawer constructors.

**Throws `System.ArgumentNullException`:** Thrown when `interactions` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerRegistry.cs#L37).

## `Dispose`

<a id="api-2c65205568217927"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawerRegistry.Dispose f8686b918c74e626c526a9f409d6a9507eaada4817aa3cc19d79515b39b43e48 -->

```csharp
public void Inno.Editor.Inspection.PropertyDrawerRegistry.Dispose()
```

Releases every active property drawer snapshot and unregisters the registry from type refreshes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerRegistry.cs#L67).

## `Resolve`

<a id="api-1354059c1a1fbca0"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawerRegistry.Resolve(System.Type) 9460177231d9372b5690df74b300b8347e4cbe9410968a07d4b3c9f4b4bb05e6 -->

```csharp
public Inno.Editor.Inspection.IPropertyDrawer Inno.Editor.Inspection.PropertyDrawerRegistry.Resolve(System.Type propertyType)
```

Resolves the most specific drawer for a declared property type.

**Parameter `propertyType`:** The declared serialized property type to resolve.

**Returns:** The most specific registered drawer, or the unsupported-value fallback.

**Throws `System.ArgumentNullException`:** Thrown when `propertyType` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerRegistry.cs#L58).
