---
title: "AssetEditorContext"
description: "Reference for AssetEditorContext in Inno.Editor.Assets."
uid: api.inno.editor.assets.editor-script.78076235a9db576b
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: editor-script
contracts:
  - project.inno-editor-assets
  - manual.scripting.use-script-api
---
# `AssetEditorContext`

This reference describes `AssetEditorContext` in `Inno.Editor.Assets`. Read the [shared contract](../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-69a9f5fa9bf5cfeb) | Method |
| [`assetType`](#api-90b31550e16332e5) | Property |
| [`editorContext`](#api-7bcbba8d55d85bdc) | Property |
| [`info`](#api-5c56c45b4a76852f) | Property |
| [`interactions`](#api-47affab2bcae5745) | Property |
| [`isDirectory`](#api-cb02fcc2f232aa94) | Property |
| [`name`](#api-d903226bac877fb5) | Property |
| [`relativePath`](#api-55c0641289df9c63) | Property |

## Type declaration

<a id="api-78076235a9db576b"></a>
<!-- api: T:InnoEditor.Assets.AssetEditorContext b31a4568b3ed608f2f60215e94b9e71823a5f6cb85737fb0f8217f02c1e59f19 -->

```csharp
public sealed class InnoEditor.Assets.AssetEditorContext
```

Provides an immutable snapshot for an asset editor operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L10).

## `#ctor`

<a id="api-69a9f5fa9bf5cfeb"></a>
<!-- api: M:InnoEditor.Assets.AssetEditorContext.#ctor 405429b5a6e34a16df75deb3e87cc37063f86b98ed10374426cbf47c653e0ee4 -->

```csharp
public InnoEditor.Assets.AssetEditorContext.AssetEditorContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L10).

## `assetType`

<a id="api-90b31550e16332e5"></a>
<!-- api: P:InnoEditor.Assets.AssetEditorContext.assetType 4b95ec24e59bb15e7caf76ad5c03a407dd0fc647998862117c7eda08d3d55d9a -->

```csharp
public System.Type? InnoEditor.Assets.AssetEditorContext.assetType { get; }
```

Gets the resolved imported asset type when available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L90).

## `editorContext`

<a id="api-7bcbba8d55d85bdc"></a>
<!-- api: P:InnoEditor.Assets.AssetEditorContext.editorContext 145ff864c38c6537610fa5fe61f21666524aefbdf3754032d0cba530f82633d9 -->

```csharp
public InnoEditor.Core.EditorContext InnoEditor.Assets.AssetEditorContext.editorContext { get; }
```

Gets the shared editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L66).

## `info`

<a id="api-5c56c45b4a76852f"></a>
<!-- api: P:InnoEditor.Assets.AssetEditorContext.info d5e82ff4e8b0b11439edbf7702e3c30c365c2979bbcc92eb52fa0c7463ec0cca -->

```csharp
public InnoEngine.Assets.AssetInfo? InnoEditor.Assets.AssetEditorContext.info { get; }
```

Gets the cataloged asset information when available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L86).

## `interactions`

<a id="api-47affab2bcae5745"></a>
<!-- api: P:InnoEditor.Assets.AssetEditorContext.interactions 09d24f4c66c95ed2cb05b85dca808fda7c1781f878204ae972d389501780d688 -->

```csharp
public InnoEditor.Interactions.EditorInteractions InnoEditor.Assets.AssetEditorContext.interactions { get; }
```

Gets the active editor interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L70).

## `isDirectory`

<a id="api-cb02fcc2f232aa94"></a>
<!-- api: P:InnoEditor.Assets.AssetEditorContext.isDirectory f9eb0f92bc47ad30a86595c236791baa36c7e4dd96a87efe749bcd8cdf749a60 -->

```csharp
public bool InnoEditor.Assets.AssetEditorContext.isDirectory { get; }
```

Gets whether the source represents a directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L82).

## `name`

<a id="api-d903226bac877fb5"></a>
<!-- api: P:InnoEditor.Assets.AssetEditorContext.name 306f5939dcff15689fb25f2fda8decfbfc131405d33922c1a1f4e62534ca9e37 -->

```csharp
public string InnoEditor.Assets.AssetEditorContext.name { get; }
```

Gets the final source path segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L78).

## `relativePath`

<a id="api-55c0641289df9c63"></a>
<!-- api: P:InnoEditor.Assets.AssetEditorContext.relativePath 825fadad6d401de9cd54156178a8d460a0a86c07c3e2326d5f84951bd41cb33d -->

```csharp
public string InnoEditor.Assets.AssetEditorContext.relativePath { get; }
```

Gets the source-relative path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorContext.cs#L74).
