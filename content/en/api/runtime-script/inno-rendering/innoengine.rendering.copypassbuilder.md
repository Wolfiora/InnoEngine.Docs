---
title: "CopyPassBuilder"
description: "Reference for CopyPassBuilder in Inno.Rendering."
uid: api.inno.rendering.runtime-script.d611f15877e66105
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `CopyPassBuilder`

This reference describes `CopyPassBuilder` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Rendering.RenderPassBuilder`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-076fbc4ffbff86c6) | Method |
| [`CopyBuffer`](#api-6b18665910f909c6) | Method |
| [`CopyTexture`](#api-d8c41a46df16e1b8) | Method |

## Type declaration

<a id="api-d611f15877e66105"></a>
<!-- api: T:InnoEngine.Rendering.CopyPassBuilder 95fe67766483d81d0d5b57e3aefaadeb41c67d22d682dbccee8f8d61f44f1ca3 -->

```csharp
public sealed class InnoEngine.Rendering.CopyPassBuilder : InnoEngine.Rendering.RenderPassBuilder
```

Declares explicit resource copy access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/CopyPassBuilder.cs#L9).

## `#ctor`

<a id="api-076fbc4ffbff86c6"></a>
<!-- api: M:InnoEngine.Rendering.CopyPassBuilder.#ctor bf807a65b265739edabbdd1d1d487817c150b086e50f982947f4e1680777826e -->

```csharp
public InnoEngine.Rendering.CopyPassBuilder.CopyPassBuilder()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/CopyPassBuilder.cs#L9).

## `CopyBuffer`

<a id="api-6b18665910f909c6"></a>
<!-- api: M:InnoEngine.Rendering.CopyPassBuilder.CopyBuffer(InnoEngine.Rendering.RenderBufferHandle,InnoEngine.Rendering.RenderBufferHandle) 11acea4d626c5fadd6f4a026013ee799f458e380df0d2a2c8d9d6ecf85c6f70a -->

```csharp
public InnoEngine.Rendering.CopyPassBuilder InnoEngine.Rendering.CopyPassBuilder.CopyBuffer(InnoEngine.Rendering.RenderBufferHandle source, InnoEngine.Rendering.RenderBufferHandle destination)
```

Declares one buffer copy operation.

**Parameter `source`:** Copy source.

**Parameter `destination`:** Copy destination.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/CopyPassBuilder.cs#L58).

## `CopyTexture`

<a id="api-d8c41a46df16e1b8"></a>
<!-- api: M:InnoEngine.Rendering.CopyPassBuilder.CopyTexture(InnoEngine.Rendering.RenderTextureHandle,InnoEngine.Rendering.RenderTextureHandle) 184f8d2fe1d5319b2313eb1f471ab7b8b03277db6898bcc676618de9fb71451e -->

```csharp
public InnoEngine.Rendering.CopyPassBuilder InnoEngine.Rendering.CopyPassBuilder.CopyTexture(InnoEngine.Rendering.RenderTextureHandle source, InnoEngine.Rendering.RenderTextureHandle destination)
```

Declares one texture copy operation.

**Parameter `source`:** Copy source.

**Parameter `destination`:** Copy destination.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/CopyPassBuilder.cs#L29).
