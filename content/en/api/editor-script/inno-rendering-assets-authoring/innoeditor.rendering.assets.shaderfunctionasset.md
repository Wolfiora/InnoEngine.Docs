---
title: "ShaderFunctionAsset"
description: "Reference for ShaderFunctionAsset in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.editor-script.54c3f23a0c26bf4b
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: editor-script
contracts:
  - project.inno-rendering-assets-authoring
  - manual.scripting.use-script-api
---
# `ShaderFunctionAsset`

This reference describes `ShaderFunctionAsset` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-88921878ad39345e) | Method |
| [`catalogOrder`](#api-fdc65d0f0232126d) | Property |
| [`catalogPath`](#api-bf5c7b8a579a5c6c) | Property |
| [`exports`](#api-97669ea16ba03281) | Property |
| [`implementationId`](#api-6481ebfb726fcbac) | Property |
| [`languageId`](#api-9fbe757939839ef9) | Property |

## Type declaration

<a id="api-54c3f23a0c26bf4b"></a>
<!-- api: T:InnoEditor.Rendering.Assets.ShaderFunctionAsset 2ca6f46798361eadeba15b3f604a615974043cecf424cd01bffc8d14d47ac6bf -->

```csharp
public sealed class InnoEditor.Rendering.Assets.ShaderFunctionAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Represents an authoring-only source-function library; it is never a complete GPU stage or runtime dependency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L12).

## `#ctor`

<a id="api-88921878ad39345e"></a>
<!-- api: M:InnoEditor.Rendering.Assets.ShaderFunctionAsset.#ctor 3e835f395c8edaf7e0cc8237f8c73179c5fb615f36abbebc05896420bb8f8564 -->

```csharp
public InnoEditor.Rendering.Assets.ShaderFunctionAsset.ShaderFunctionAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L12).

## `catalogOrder`

<a id="api-fdc65d0f0232126d"></a>
<!-- api: P:InnoEditor.Rendering.Assets.ShaderFunctionAsset.catalogOrder 6c5d07b06455a1c6599aef34b953ad4bf51327f50b110ce98b294c8eef491e23 -->

```csharp
public int InnoEditor.Rendering.Assets.ShaderFunctionAsset.catalogOrder { get; }
```

Gets the stable ordering value inside the authoring catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L33).

## `catalogPath`

<a id="api-bf5c7b8a579a5c6c"></a>
<!-- api: P:InnoEditor.Rendering.Assets.ShaderFunctionAsset.catalogPath 5be5fedcf2b535d81495f7c64ef19f60d8a6d8470000ef30900353859c397e88 -->

```csharp
public string InnoEditor.Rendering.Assets.ShaderFunctionAsset.catalogPath { get; }
```

Gets the author-declared catalog path used by Shader creation tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L29).

## `exports`

<a id="api-97669ea16ba03281"></a>
<!-- api: P:InnoEditor.Rendering.Assets.ShaderFunctionAsset.exports d20395dea358667355f35c67b0a105cd9e2e5488c9f98c6478bed6ce5fab2397 -->

```csharp
public string[] InnoEditor.Rendering.Assets.ShaderFunctionAsset.exports { get; }
```

Gets the explicitly exported functions available to graph source-function nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L21).

## `implementationId`

<a id="api-6481ebfb726fcbac"></a>
<!-- api: P:InnoEditor.Rendering.Assets.ShaderFunctionAsset.implementationId db0bb043e0ab7bd5a74119e4986f8bed8d7ce87d00e4e484ab7ffab9430d3932 -->

```csharp
public string InnoEditor.Rendering.Assets.ShaderFunctionAsset.implementationId { get; }
```

Gets the adapter implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L25).

## `languageId`

<a id="api-9fbe757939839ef9"></a>
<!-- api: P:InnoEditor.Rendering.Assets.ShaderFunctionAsset.languageId faa36a463b3465e3e3c43822aac21c32844975fdff3d36623d0e79d33a2b8e19 -->

```csharp
public string InnoEditor.Rendering.Assets.ShaderFunctionAsset.languageId { get; }
```

Gets the configured source language identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L17).
