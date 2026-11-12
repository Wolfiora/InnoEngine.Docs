---
title: "EditorViewportLayer"
description: "Reference for EditorViewportLayer in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.90cb0908bb04bbb7
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportLayer`

This reference describes `EditorViewportLayer` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1fe5e55dff6ad9cb) | Method |
| [`contributorId`](#api-93d59a1d66a7318a) | Property |
| [`data`](#api-dc39305e569e2959) | Property |
| [`order`](#api-60899ae31150537b) | Property |
| [`pipeline`](#api-7873ad7070b97602) | Property |

## Type declaration

<a id="api-90cb0908bb04bbb7"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportLayer f22d92ce0fb041922aa6e079b7790f30b8a75e33b653ba7e087464fae9e8b642 -->

```csharp
public sealed class InnoEditor.Rendering.EditorViewportLayer
```

Describes one model-neutral layer in an Editor viewport composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L130).

## `#ctor`

<a id="api-1fe5e55dff6ad9cb"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportLayer.#ctor(System.String,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderFrameData,System.Int32) 524cca2b0d105568fe5ce383963e48d6fe2fb83758f0b467b01ebe8577868722 -->

```csharp
public InnoEditor.Rendering.EditorViewportLayer.EditorViewportLayer(string contributorId, InnoEngine.Rendering.RenderPipelineAsset? pipeline, InnoEngine.Rendering.RenderFrameData data, int order)
```

Creates one immutable model-neutral viewport layer.

**Parameter `contributorId`:** Stable identity of the rendering-model contributor that produced the layer.

**Parameter `pipeline`:** Contributor-selected pipeline, or null for the project default.

**Parameter `data`:** Contributor-defined frame-only data.

**Parameter `order`:** Ascending model-composition order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L147).

## `contributorId`

<a id="api-93d59a1d66a7318a"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportLayer.contributorId 28b6d01e16502021585b7b26a48ce376ca63423fb12774b27e25d35d5ad9a363 -->

```csharp
public string InnoEditor.Rendering.EditorViewportLayer.contributorId { get; }
```

Gets the stable identity of the rendering-model contributor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L164).

## `data`

<a id="api-dc39305e569e2959"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportLayer.data eca407c6965fdbf39b332c6307a3619f84fe670e2d54662a9de0018e671495b8 -->

```csharp
public InnoEngine.Rendering.RenderFrameData InnoEditor.Rendering.EditorViewportLayer.data { get; }
```

Gets contributor-defined frame-only data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L174).

## `order`

<a id="api-60899ae31150537b"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportLayer.order 1cc818053f3cb80af1495afe62be2dc6c877b8bf44136d52d44b7b5be04e2dbb -->

```csharp
public int InnoEditor.Rendering.EditorViewportLayer.order { get; }
```

Gets ascending model-composition order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L179).

## `pipeline`

<a id="api-7873ad7070b97602"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportLayer.pipeline fa6e04b806d73940e29a75d7db69069dcccb104573d7b0970433ba6d806ae6d2 -->

```csharp
public InnoEngine.Rendering.RenderPipelineAsset? InnoEditor.Rendering.EditorViewportLayer.pipeline { get; }
```

Gets the contributor-selected pipeline, or null for the project default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L169).
