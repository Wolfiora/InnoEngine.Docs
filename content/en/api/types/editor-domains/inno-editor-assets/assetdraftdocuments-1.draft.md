---
title: "AssetDraftDocuments`1.Draft"
description: "Reference for AssetDraftDocuments`1.Draft in Inno.Editor.Assets."
uid: api.inno.editor.assets.63121595a158ace1
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# ``AssetDraftDocuments`1.Draft``

This reference describes ``AssetDraftDocuments`1.Draft`` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`documentId`](#api-7d37439995dac066) | Property |
| [`error`](#api-e5f62feed864966e) | Property |
| [`id`](#api-f981a637d217a7e3) | Property |
| [`isDirty`](#api-1b0aa8f4cad5ebce) | Property |
| [`path`](#api-5ce9d12a0aa6bd87) | Property |
| [`readOnly`](#api-44266f8d20cf960a) | Property |

## Type declaration

<a id="api-63121595a158ace1"></a>
<!-- api: T:Inno.Editor.Assets.AssetDraftDocuments`1.Draft 9f352bcabdb8ff706be88f6b70cb22025fa33596ca87730f10a7f90c7e67e5f8 -->

```csharp
public sealed class Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Draft
```

Contains neutral draft status; only the owning store can change it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L560).

## `documentId`

<a id="api-7d37439995dac066"></a>
<!-- api: P:Inno.Editor.Assets.AssetDraftDocuments`1.Draft.documentId e187420a9d58efddaf7350b59f29d693280ac0749afa5f86e3c8a2b040b08c2c -->

```csharp
public System.Guid Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Draft.documentId { get; }
```

Gets the shared document identity used for Save/Revert and close confirmation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L590).

## `error`

<a id="api-e5f62feed864966e"></a>
<!-- api: P:Inno.Editor.Assets.AssetDraftDocuments`1.Draft.error 0d772158f57130402dcff5d04341d48c5d4ca877ac283157bd741a7b7acd6095 -->

```csharp
public string Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Draft.error { get; internal set; }
```

Gets the latest source, save or import diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L602).

## `id`

<a id="api-f981a637d217a7e3"></a>
<!-- api: P:Inno.Editor.Assets.AssetDraftDocuments`1.Draft.id 86a280c8858fcc4942263eb262034fef6daed992cdc69b9537d5c9c6900675fd -->

```csharp
public System.Guid Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Draft.id { get; }
```

Gets the persistent source identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L586).

## `isDirty`

<a id="api-1b0aa8f4cad5ebce"></a>
<!-- api: P:Inno.Editor.Assets.AssetDraftDocuments`1.Draft.isDirty f1543f393ab7e7d69304415792903664160349c54c1f4a44df8c59cb71b9bed3 -->

```csharp
public bool Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Draft.isDirty { get; }
```

Gets whether detached bytes differ from the saved baseline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L606).

## `path`

<a id="api-5ce9d12a0aa6bd87"></a>
<!-- api: P:Inno.Editor.Assets.AssetDraftDocuments`1.Draft.path da488af4b485ae18f291bb4af024dfccbc785b56703897de29630e8aab17b68d -->

```csharp
public Inno.Assets.AssetPath Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Draft.path { get; internal set; }
```

Gets the current resolved source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L594).

## `readOnly`

<a id="api-44266f8d20cf960a"></a>
<!-- api: P:Inno.Editor.Assets.AssetDraftDocuments`1.Draft.readOnly 36e4bba7c758101774fdf9bd6824f75ac6d84f2672f90cb38e7c50721d82710b -->

```csharp
public bool Inno.Editor.Assets.AssetDraftDocuments<TAsset>.Draft.readOnly { get; internal set; }
```

Gets whether this source is installed read-only content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Documents/AssetDraftDocuments.cs#L598).
