---
title: "AssetEditorAttribute"
description: "Reference for AssetEditorAttribute in Inno.Editor.Assets."
uid: api.inno.editor.assets.9e75a4054e1104b4
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# `AssetEditorAttribute`

This reference describes `AssetEditorAttribute` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7cf3786ed12fd17d) | Method |
| [`assetType`](#api-91e6834db874ab13) | Property |
| [`priority`](#api-67b543dbda82d828) | Property |
| [`useForChildren`](#api-8b0f09ec5161a760) | Property |

## Type declaration

<a id="api-9e75a4054e1104b4"></a>
<!-- api: T:Inno.Editor.Assets.AssetEditorAttribute c788b921b8c2f10a6c5c249c201020e24f1de08403acbd0abc8a9eea1023f678 -->

```csharp
public sealed class Inno.Editor.Assets.AssetEditorAttribute : System.Attribute
```

Associates an asset editor with an imported asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorAttribute.cs#L8).

## `#ctor`

<a id="api-7cf3786ed12fd17d"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditorAttribute.#ctor(System.Type,System.Boolean,System.Int32) 39589d0bb9ebecf37a7a1105a396f19820ec46ce52369fdeb0b55f47b70e960a -->

```csharp
public Inno.Editor.Assets.AssetEditorAttribute.AssetEditorAttribute(System.Type assetType, bool useForChildren = false, int priority = 0)
```

Creates an asset-editor registration for an imported runtime asset type.

**Parameter `assetType`:** The imported asset type handled by the editor.

**Parameter `useForChildren`:** Whether the editor may also handle assignable derived asset types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Throws `System.ArgumentNullException`:** Thrown when `assetType` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorAttribute.cs#L25).

## `assetType`

<a id="api-91e6834db874ab13"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditorAttribute.assetType fd277f118ac52d0ab2613f41d39bfc0f975b32b2e68189a9406071f6025b3b4c -->

```csharp
public System.Type Inno.Editor.Assets.AssetEditorAttribute.assetType { get; }
```

Gets the imported asset type handled by the editor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorAttribute.cs#L38).

## `priority`

<a id="api-67b543dbda82d828"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditorAttribute.priority 6a0fc40a390e7875713144cd66c1e97c1e7b540d3e0ae65f792a3ae59894dfca -->

```csharp
public int Inno.Editor.Assets.AssetEditorAttribute.priority { get; }
```

Gets the tie-breaking priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorAttribute.cs#L46).

## `useForChildren`

<a id="api-8b0f09ec5161a760"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditorAttribute.useForChildren 5728ce5c2fa1550344173f14b9d5191e321ee34678059de45f097c07ba3276b3 -->

```csharp
public bool Inno.Editor.Assets.AssetEditorAttribute.useForChildren { get; }
```

Gets whether derived asset types are accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorAttribute.cs#L42).
