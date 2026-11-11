---
title: "RenderPassBuilder"
description: "Reference for RenderPassBuilder in Inno.Rendering."
uid: api.inno.rendering.d578ddd0a91768c8
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderPassBuilder`

This reference describes `RenderPassBuilder` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`After`](#api-95c45f6909523613) | Method |
| [`AllowParallelRecording`](#api-f249a6346e696b22) | Method |
| [`Before`](#api-1334f991a22a126f) | Method |
| [`HasSideEffect`](#api-761f6fff6d280d0f) | Method |
| [`ReadBuffer`](#api-d5aaed5876ec4d23) | Method |
| [`ReadTexture`](#api-577d69873b4fa1af) | Method |

## Type declaration

<a id="api-d578ddd0a91768c8"></a>
<!-- api: T:Inno.Rendering.RenderPassBuilder 968d296ee2e6e10c39d65982bcc8b1ae327571aae615e4d970f23700982ec07b -->

```csharp
public abstract class Inno.Rendering.RenderPassBuilder
```

Provides ordering and common resource declarations for one pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L9).

## `After`

<a id="api-95c45f6909523613"></a>
<!-- api: M:Inno.Rendering.RenderPassBuilder.After(Inno.Rendering.RenderPhaseId) b4e9d21d12fb74d8ee05e11d043250cd85826f721743c3e2a3c71e6e56885f14 -->

```csharp
public Inno.Rendering.RenderPassBuilder Inno.Rendering.RenderPassBuilder.After(Inno.Rendering.RenderPhaseId phase)
```

Orders this pass after every pass in a target phase.

**Parameter `phase`:** Target phase.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L50).

## `AllowParallelRecording`

<a id="api-f249a6346e696b22"></a>
<!-- api: M:Inno.Rendering.RenderPassBuilder.AllowParallelRecording eb410a4b23b41c637eff8cd23558d450fbdf21ffa7d53d2dfff870fc8f8b4376 -->

```csharp
public Inno.Rendering.RenderPassBuilder Inno.Rendering.RenderPassBuilder.AllowParallelRecording()
```

Opts this pass into worker-thread recording through an isolated backend-neutral command list.

**Constraints:** Pass data and code reached by the callback must be safe for worker-thread access. GPU execution
and backend view order remain identical to the compiled graph order.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L80).

## `Before`

<a id="api-1334f991a22a126f"></a>
<!-- api: M:Inno.Rendering.RenderPassBuilder.Before(Inno.Rendering.RenderPhaseId) 0069a684b533201c7af8d7a5628eff16cb66e2083aa515b38cb4745ce99bdb0a -->

```csharp
public Inno.Rendering.RenderPassBuilder Inno.Rendering.RenderPassBuilder.Before(Inno.Rendering.RenderPhaseId phase)
```

Orders this pass before every pass in a target phase.

**Parameter `phase`:** Target phase.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L34).

## `HasSideEffect`

<a id="api-761f6fff6d280d0f"></a>
<!-- api: M:Inno.Rendering.RenderPassBuilder.HasSideEffect eec70c952b3c755895f1e9266635733786cf0ef122494704e764c65fa0b206bc -->

```csharp
public Inno.Rendering.RenderPassBuilder Inno.Rendering.RenderPassBuilder.HasSideEffect()
```

Prevents pass culling because execution has an externally observable effect.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L63).

## `ReadBuffer`

<a id="api-d5aaed5876ec4d23"></a>
<!-- api: M:Inno.Rendering.RenderPassBuilder.ReadBuffer(Inno.Rendering.RenderBufferHandle) ed45cee4973b0e58bc960ba845da94e1774fd0c5e58a1bc954bfaf3353b7ab98 -->

```csharp
public Inno.Rendering.RenderPassBuilder Inno.Rendering.RenderPassBuilder.ReadBuffer(Inno.Rendering.RenderBufferHandle buffer)
```

Declares a shader read from a buffer.

**Parameter `buffer`:** Buffer read by this pass.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L115).

## `ReadTexture`

<a id="api-577d69873b4fa1af"></a>
<!-- api: M:Inno.Rendering.RenderPassBuilder.ReadTexture(Inno.Rendering.RenderTextureHandle) 185763755ef47f446c4e10051357c7c6baa3db606fd179885dcd09c26b64eebe -->

```csharp
public Inno.Rendering.RenderPassBuilder Inno.Rendering.RenderPassBuilder.ReadTexture(Inno.Rendering.RenderTextureHandle texture)
```

Declares a shader read from a texture.

**Parameter `texture`:** Texture read by this pass.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L96).
