---
title: "CompiledRenderPass"
description: "Reference for CompiledRenderPass in Inno.Rendering."
uid: api.inno.rendering.b46339ec620fc376
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `CompiledRenderPass`

This reference describes `CompiledRenderPass` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`attachments`](#api-ab9654e6c8b0c57a) | Property |
| [`clearsPresentationTarget`](#api-e5b2d400f6b0b8c5) | Property |
| [`kind`](#api-d4a007b1145ff288) | Property |
| [`name`](#api-6a42ebb7affa2e30) | Property |
| [`phase`](#api-17b3d718798bc24d) | Property |
| [`presentationClearColor`](#api-e2730be58c89dd79) | Property |
| [`recordingMode`](#api-d2303544abd7b30f) | Property |
| [`surface`](#api-acbd63a69ebfafdb) | Property |
| [`viewIndex`](#api-d95c0923756ba732) | Property |
| [`viewTransform`](#api-b50303846d9908e7) | Property |

## Type declaration

<a id="api-b46339ec620fc376"></a>
<!-- api: T:Inno.Rendering.CompiledRenderPass 9ce14d1d761892b23ea81e4f6010c8685607c919ae1dbcea90e3b47db934ba5d -->

```csharp
public sealed class Inno.Rendering.CompiledRenderPass
```

Provides immutable backend-facing metadata for one scheduled pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L234).

## `attachments`

<a id="api-ab9654e6c8b0c57a"></a>
<!-- api: P:Inno.Rendering.CompiledRenderPass.attachments 5044857ed7fbacc92297ff1c5cafb9023b3f677c36b7da402321584073047156 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.CompiledRenderAttachment> Inno.Rendering.CompiledRenderPass.attachments { get; }
```

Gets raster attachments in declaration order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L288).

## `clearsPresentationTarget`

<a id="api-e5b2d400f6b0b8c5"></a>
<!-- api: P:Inno.Rendering.CompiledRenderPass.clearsPresentationTarget 0abc6d754d040d379f9f7669feff033c6836f5eb7b16bd5e34df79058145a3eb -->

```csharp
public bool Inno.Rendering.CompiledRenderPass.clearsPresentationTarget { get; }
```

Gets whether this pass clears its presentation target before drawing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L298).

## `kind`

<a id="api-d4a007b1145ff288"></a>
<!-- api: P:Inno.Rendering.CompiledRenderPass.kind cf73fde3cc50e051d0955f52430b194c1a5955cda6d0dc8321787ac0bb1a787c -->

```csharp
public Inno.Rendering.RenderPassKind Inno.Rendering.CompiledRenderPass.kind { get; }
```

Gets the pass command domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L278).

## `name`

<a id="api-6a42ebb7affa2e30"></a>
<!-- api: P:Inno.Rendering.CompiledRenderPass.name c75d1cd5941ebaf8bf6adc07a63cb5141edb9fb50bf76485ea06f69b6a667177 -->

```csharp
public string Inno.Rendering.CompiledRenderPass.name { get; }
```

Gets the unique diagnostic name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L268).

## `phase`

<a id="api-17b3d718798bc24d"></a>
<!-- api: P:Inno.Rendering.CompiledRenderPass.phase 4a10b01a402bc1f9d8293c5e823b5203a1f1d6bd9ce65cffd8bcbfc00a90c565 -->

```csharp
public Inno.Rendering.RenderPhaseId Inno.Rendering.CompiledRenderPass.phase { get; }
```

Gets the open render phase identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L273).

## `presentationClearColor`

<a id="api-e2730be58c89dd79"></a>
<!-- api: P:Inno.Rendering.CompiledRenderPass.presentationClearColor 6a41b57c9d63590657a5f5c76d32af5b59edf203a154845de30edcfe579589e7 -->

```csharp
public Inno.Rendering.RenderClearColor Inno.Rendering.CompiledRenderPass.presentationClearColor { get; }
```

Gets the linear clear color for a presentation target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L303).

## `recordingMode`

<a id="api-d2303544abd7b30f"></a>
<!-- api: P:Inno.Rendering.CompiledRenderPass.recordingMode dd7ce57cff925817e507488492ad9871e9ce84e4d08c2c776cb712787b479776 -->

```csharp
public Inno.Rendering.RenderPassRecordingMode Inno.Rendering.CompiledRenderPass.recordingMode { get; }
```

Gets whether callback recording is serial or worker-thread eligible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L313).

## `surface`

<a id="api-acbd63a69ebfafdb"></a>
<!-- api: P:Inno.Rendering.CompiledRenderPass.surface 884315b14e6bbf5c4094f313e859d140838003ab88a21b714f2ed89c1905635a -->

```csharp
public Inno.Rendering.RenderSurfaceHandle Inno.Rendering.CompiledRenderPass.surface { get; }
```

Gets the detached presentation surface, or an invalid handle for the primary backbuffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L293).

## `viewIndex`

<a id="api-d95c0923756ba732"></a>
<!-- api: P:Inno.Rendering.CompiledRenderPass.viewIndex a7cd9fa8603f9dd32756b87741334e4fb9fa5a7c25aca065ce65be62dc13aff2 -->

```csharp
public int Inno.Rendering.CompiledRenderPass.viewIndex { get; }
```

Gets the backend-neutral logical view order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L283).

## `viewTransform`

<a id="api-b50303846d9908e7"></a>
<!-- api: P:Inno.Rendering.CompiledRenderPass.viewTransform 59da592e3c50831483785fae5c069ffa74da249509b522f3488cd353cfc9fe4f -->

```csharp
public Inno.Rendering.RenderViewTransform? Inno.Rendering.CompiledRenderPass.viewTransform { get; }
```

Gets backend-ready view transforms, or `null` for a matrix-free pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L308).
