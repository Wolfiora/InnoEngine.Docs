---
title: "CopyPassBuilder"
description: "Reference for CopyPassBuilder in Inno.Rendering."
uid: api.inno.rendering.20bfafa6bf8d334f
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `CopyPassBuilder`

This reference describes `CopyPassBuilder` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Rendering.RenderPassBuilder`.

## Members

| Member | Kind |
| --- | --- |
| [`CopyBuffer`](#api-5271c70c1ab73ec0) | Method |
| [`CopyTexture`](#api-5e0b97483cd88b51) | Method |

## Type declaration

<a id="api-20bfafa6bf8d334f"></a>
<!-- api: T:Inno.Rendering.CopyPassBuilder 0c182ee5446fe8adab23906d91d1e7e9d80c49a793e87489ad3355f57a9a6d18 -->

```csharp
public sealed class Inno.Rendering.CopyPassBuilder : Inno.Rendering.RenderPassBuilder
```

Declares explicit resource copy access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CopyPassBuilder.cs#L9).

## `CopyBuffer`

<a id="api-5271c70c1ab73ec0"></a>
<!-- api: M:Inno.Rendering.CopyPassBuilder.CopyBuffer(Inno.Rendering.RenderBufferHandle,Inno.Rendering.RenderBufferHandle) 13074798991ddc3e09259d7c6613c7c3f10a215f52a41437bd79794e58d86adc -->

```csharp
public Inno.Rendering.CopyPassBuilder Inno.Rendering.CopyPassBuilder.CopyBuffer(Inno.Rendering.RenderBufferHandle source, Inno.Rendering.RenderBufferHandle destination)
```

Declares one buffer copy operation.

**Parameter `source`:** Copy source.

**Parameter `destination`:** Copy destination.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CopyPassBuilder.cs#L58).

## `CopyTexture`

<a id="api-5e0b97483cd88b51"></a>
<!-- api: M:Inno.Rendering.CopyPassBuilder.CopyTexture(Inno.Rendering.RenderTextureHandle,Inno.Rendering.RenderTextureHandle) 2c3688564d3eed7bdf2da66a80ad03945e9e6447527db2e325c6c480dce5af28 -->

```csharp
public Inno.Rendering.CopyPassBuilder Inno.Rendering.CopyPassBuilder.CopyTexture(Inno.Rendering.RenderTextureHandle source, Inno.Rendering.RenderTextureHandle destination)
```

Declares one texture copy operation.

**Parameter `source`:** Copy source.

**Parameter `destination`:** Copy destination.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CopyPassBuilder.cs#L29).
