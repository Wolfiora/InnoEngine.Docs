---
title: "EditorViewportLayer"
description: "Reference for EditorViewportLayer in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.06229929caef0537
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportLayer`

This reference describes `EditorViewportLayer` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ad99224518645056) | Method |
| [`contributorId`](#api-27ead457062b28b8) | Property |
| [`data`](#api-8d8ba8e237f0aeb3) | Property |
| [`order`](#api-d7bf8318b6732d44) | Property |
| [`pipeline`](#api-7395b83cd5fedc33) | Property |

## Type declaration

<a id="api-06229929caef0537"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportLayer 7b9294bf4de497468fedd77e3d4ed874b323821e80735b13d64b282d4642f537 -->

```csharp
public sealed class Inno.Editor.Rendering.EditorViewportLayer
```

Describes one model-neutral layer in an Editor viewport composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L130).

## `#ctor`

<a id="api-ad99224518645056"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportLayer.#ctor(System.String,Inno.Rendering.Assets.RenderPipelineAsset,Inno.Rendering.Runtime.RenderFrameData,System.Int32) a09120f906ba4ba8c1cda7fc9d2f51ad18553251a6c80dcf27f92beff8b7271e -->

```csharp
public Inno.Editor.Rendering.EditorViewportLayer.EditorViewportLayer(string contributorId, Inno.Rendering.Assets.RenderPipelineAsset? pipeline, Inno.Rendering.Runtime.RenderFrameData data, int order)
```

Creates one immutable model-neutral viewport layer.

**Parameter `contributorId`:** Stable identity of the rendering-model contributor that produced the layer.

**Parameter `pipeline`:** Contributor-selected pipeline, or null for the project default.

**Parameter `data`:** Contributor-defined frame-only data.

**Parameter `order`:** Ascending model-composition order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L147).

## `contributorId`

<a id="api-27ead457062b28b8"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportLayer.contributorId e2d048748e7647a226fdb310d08d71a058d432f2fa84e0db457d7a4b50a16f2a -->

```csharp
public string Inno.Editor.Rendering.EditorViewportLayer.contributorId { get; }
```

Gets the stable identity of the rendering-model contributor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L164).

## `data`

<a id="api-8d8ba8e237f0aeb3"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportLayer.data 4921af6ab17d550ae41b22b8bb437b81a3ff6925bdc6d5252180e2516fdc5833 -->

```csharp
public Inno.Rendering.Runtime.RenderFrameData Inno.Editor.Rendering.EditorViewportLayer.data { get; }
```

Gets contributor-defined frame-only data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L174).

## `order`

<a id="api-d7bf8318b6732d44"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportLayer.order fff8004015c8c8806cd33dc9af9fdbfbb7808108f90160d796f268e2c19a4717 -->

```csharp
public int Inno.Editor.Rendering.EditorViewportLayer.order { get; }
```

Gets ascending model-composition order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L179).

## `pipeline`

<a id="api-7395b83cd5fedc33"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportLayer.pipeline f270e232b997679c744c35192cdd3ec89b21e6185962ae561bc247348721be20 -->

```csharp
public Inno.Rendering.Assets.RenderPipelineAsset? Inno.Editor.Rendering.EditorViewportLayer.pipeline { get; }
```

Gets the contributor-selected pipeline, or null for the project default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L169).
