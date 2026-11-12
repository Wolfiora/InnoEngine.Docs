---
title: "RenderPassBuilder"
description: "Reference for RenderPassBuilder in Inno.Rendering."
uid: api.inno.rendering.runtime-script.8ce611d95c496b1f
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderPassBuilder`

This reference describes `RenderPassBuilder` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-018a2f9a8dbd72f8) | Method |
| [`After`](#api-f51f5201673e3ec3) | Method |
| [`AllowParallelRecording`](#api-8ef6ca45ab9704a7) | Method |
| [`Before`](#api-3a0aa79642f9517b) | Method |
| [`HasSideEffect`](#api-1ebbac65fe05f8d0) | Method |
| [`ReadBuffer`](#api-cff78e0c9e25b1a9) | Method |
| [`ReadTexture`](#api-f8978d13a14c2567) | Method |

## Type declaration

<a id="api-8ce611d95c496b1f"></a>
<!-- api: T:InnoEngine.Rendering.RenderPassBuilder a1e6b2b3ccef7b683dc1b2a22b0be93be24b35c534722cb402553dc2675c5209 -->

```csharp
public abstract class InnoEngine.Rendering.RenderPassBuilder
```

Provides ordering and common resource declarations for one pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L9).

## `#ctor`

<a id="api-018a2f9a8dbd72f8"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassBuilder.#ctor 192f567a54b19cf1766c0004362fede386664c96f87b58687f11f95fbdbbfb82 -->

```csharp
protected InnoEngine.Rendering.RenderPassBuilder.RenderPassBuilder()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L9).

## `After`

<a id="api-f51f5201673e3ec3"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassBuilder.After(InnoEngine.Rendering.RenderPhaseId) 45c9da5f2815a6339ff382502da2626c0b667e372abc0cfe103dcd5e43c7a434 -->

```csharp
public InnoEngine.Rendering.RenderPassBuilder InnoEngine.Rendering.RenderPassBuilder.After(InnoEngine.Rendering.RenderPhaseId phase)
```

Orders this pass after every pass in a target phase.

**Parameter `phase`:** Target phase.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L50).

## `AllowParallelRecording`

<a id="api-8ef6ca45ab9704a7"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassBuilder.AllowParallelRecording 0f2e9e49fd66b8819b78cb140ef90bd97ff678380c284edc347f6b017ab58e5b -->

```csharp
public InnoEngine.Rendering.RenderPassBuilder InnoEngine.Rendering.RenderPassBuilder.AllowParallelRecording()
```

Opts this pass into worker-thread recording through an isolated backend-neutral command list.

**Constraints:** Pass data and code reached by the callback must be safe for worker-thread access. GPU execution
and backend view order remain identical to the compiled graph order.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L80).

## `Before`

<a id="api-3a0aa79642f9517b"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassBuilder.Before(InnoEngine.Rendering.RenderPhaseId) da734107da8b29693028f87051fb8ab124439705aa3a01bcb560a7da5b4ebd6b -->

```csharp
public InnoEngine.Rendering.RenderPassBuilder InnoEngine.Rendering.RenderPassBuilder.Before(InnoEngine.Rendering.RenderPhaseId phase)
```

Orders this pass before every pass in a target phase.

**Parameter `phase`:** Target phase.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L34).

## `HasSideEffect`

<a id="api-1ebbac65fe05f8d0"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassBuilder.HasSideEffect 0e45352bfbdfc3a02b23497aaf5e1e53882f10411b2541c6371abcfb8cc9e658 -->

```csharp
public InnoEngine.Rendering.RenderPassBuilder InnoEngine.Rendering.RenderPassBuilder.HasSideEffect()
```

Prevents pass culling because execution has an externally observable effect.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L63).

## `ReadBuffer`

<a id="api-cff78e0c9e25b1a9"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassBuilder.ReadBuffer(InnoEngine.Rendering.RenderBufferHandle) ac84ce747c4078531a31831a8e1470b9599efa0eb7bafbd779a47d296cc67177 -->

```csharp
public InnoEngine.Rendering.RenderPassBuilder InnoEngine.Rendering.RenderPassBuilder.ReadBuffer(InnoEngine.Rendering.RenderBufferHandle buffer)
```

Declares a shader read from a buffer.

**Parameter `buffer`:** Buffer read by this pass.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L115).

## `ReadTexture`

<a id="api-f8978d13a14c2567"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassBuilder.ReadTexture(InnoEngine.Rendering.RenderTextureHandle) 7a241bdbafcc9300ef26cf9c4439ddf974bf446bbc250d638e217a4146d65a69 -->

```csharp
public InnoEngine.Rendering.RenderPassBuilder InnoEngine.Rendering.RenderPassBuilder.ReadTexture(InnoEngine.Rendering.RenderTextureHandle texture)
```

Declares a shader read from a texture.

**Parameter `texture`:** Texture read by this pass.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderPassBuilder.cs#L96).
