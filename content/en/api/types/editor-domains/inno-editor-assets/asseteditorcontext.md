---
title: "AssetEditorContext"
description: "Reference for AssetEditorContext in Inno.Editor.Assets."
uid: api.inno.editor.assets.c26a033e4f65341b
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# `AssetEditorContext`

This reference describes `AssetEditorContext` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`assetType`](#api-dae823d362a52b3b) | Property |
| [`editorContext`](#api-651c7fea5b7e56e5) | Property |
| [`info`](#api-719e0ae233966466) | Property |
| [`interactions`](#api-78f80c669174f0de) | Property |
| [`isDirectory`](#api-f615e7d52e376ea3) | Property |
| [`name`](#api-db7d06288707ee18) | Property |
| [`relativePath`](#api-b8e33e1d40420343) | Property |

## Type declaration

<a id="api-c26a033e4f65341b"></a>
<!-- api: T:Inno.Editor.Assets.AssetEditorContext 6af8e29a26f64099539235f013b73cb9c435bd53c7d6b0d0f22514744ebcb701 -->

```csharp
public sealed class Inno.Editor.Assets.AssetEditorContext
```

Provides an immutable snapshot for an asset editor operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L10).

## `assetType`

<a id="api-dae823d362a52b3b"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditorContext.assetType 6260d68acec09373033742a2bb3d4fee5de5acd1d22be634b8e60009d20e2864 -->

```csharp
public System.Type? Inno.Editor.Assets.AssetEditorContext.assetType { get; }
```

Gets the resolved imported asset type when available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L90).

## `editorContext`

<a id="api-651c7fea5b7e56e5"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditorContext.editorContext 1bb5245da7fdf643bd4f5d8ad3156daabecfc078480fec75562c93cd56b25ac1 -->

```csharp
public Inno.Editor.Core.EditorContext Inno.Editor.Assets.AssetEditorContext.editorContext { get; }
```

Gets the shared editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L66).

## `info`

<a id="api-719e0ae233966466"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditorContext.info 43326763a06ee265e71fef69da7831e8160eabd2082bebe0d35c1dabc23ce0af -->

```csharp
public Inno.Assets.AssetInfo? Inno.Editor.Assets.AssetEditorContext.info { get; }
```

Gets the cataloged asset information when available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L86).

## `interactions`

<a id="api-78f80c669174f0de"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditorContext.interactions 72ba2dfc87dc5b2ab013b07b29c0c14653f905bc35bfa30f4904c49222e5391a -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Assets.AssetEditorContext.interactions { get; }
```

Gets the active editor interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L70).

## `isDirectory`

<a id="api-f615e7d52e376ea3"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditorContext.isDirectory 409a543c1b26fdf08c7cdce9ea77a68e4bec040edfe89169fb8b162923aa2fee -->

```csharp
public bool Inno.Editor.Assets.AssetEditorContext.isDirectory { get; }
```

Gets whether the source represents a directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L82).

## `name`

<a id="api-db7d06288707ee18"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditorContext.name 2298457dfb1e84d1b497e6d30efe8b5b3387963d70a90018cdc6c69aad18c7e3 -->

```csharp
public string Inno.Editor.Assets.AssetEditorContext.name { get; }
```

Gets the final source path segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L78).

## `relativePath`

<a id="api-b8e33e1d40420343"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditorContext.relativePath ca892e8f13e7ad40023d399e97379f7e2cf0ba229e3f7cb9cccc93d3a6708c96 -->

```csharp
public string Inno.Editor.Assets.AssetEditorContext.relativePath { get; }
```

Gets the source-relative path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L74).
