---
title: "RenderRequestProviderContext"
description: "Reference for RenderRequestProviderContext in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.7b8372a335c468b8
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderRequestProviderContext`

This reference describes `RenderRequestProviderContext` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-69fe5515dd3cc582) | Method |
| [`capabilities`](#api-d307ed96071970dd) | Property |
| [`content`](#api-ea12f5a65e3e0ec6) | Property |
| [`deltaTime`](#api-d8a9329848cbc29d) | Property |
| [`frameIndex`](#api-a65fb9cb89badf0f) | Property |
| [`input`](#api-12252db7abbf5202) | Property |
| [`primaryPresentationSize`](#api-a73cce6e784a6263) | Property |
| [`primaryPresentationViewport`](#api-50ed8528a3fe3783) | Property |
| [`requests`](#api-7c769b0e66087a02) | Property |
| [`viewContent`](#api-373f5d8b467ac18f) | Property |

## Type declaration

<a id="api-7b8372a335c468b8"></a>
<!-- api: T:InnoEngine.Rendering.RenderRequestProviderContext cf8f3b71dca70bb599953f4045bacf6bcd649c9b88404a5803df8ede67ed1226 -->

```csharp
public sealed class InnoEngine.Rendering.RenderRequestProviderContext
```

Supplies frame timing, capabilities and the request sink to one provider invocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L48).

## `#ctor`

<a id="api-69fe5515dd3cc582"></a>
<!-- api: M:InnoEngine.Rendering.RenderRequestProviderContext.#ctor(InnoEngine.Rendering.IRenderRequestSink,InnoEngine.References.ContentReadScope,InnoEngine.Rendering.GraphicsCapabilities,System.Nullable{InnoEngine.Rendering.RenderPresentationSize},System.Nullable{InnoEngine.Rendering.RenderViewport},System.UInt64,System.Single,InnoEngine.Rendering.IViewContentCollector,InnoEngine.Rendering.RenderOutputInput) 62c40052c98525ce30f72c22982998b5036f3b9e3b04bc643f92902382fe956e -->

```csharp
public InnoEngine.Rendering.RenderRequestProviderContext.RenderRequestProviderContext(InnoEngine.Rendering.IRenderRequestSink requests, InnoEngine.References.ContentReadScope content, InnoEngine.Rendering.GraphicsCapabilities capabilities, InnoEngine.Rendering.RenderPresentationSize? primaryPresentationSize, InnoEngine.Rendering.RenderViewport? primaryPresentationViewport, ulong frameIndex, float deltaTime, InnoEngine.Rendering.IViewContentCollector viewContent, InnoEngine.Rendering.RenderOutputInput? input = null)
```

Creates a frame-scoped provider context.

**Parameter `requests`:** Sink accepting requests for the current frame.

**Parameter `content`:** Host-selected content roots visible to request providers this frame.

**Parameter `capabilities`:** Active backend-neutral capability snapshot.

**Parameter `primaryPresentationSize`:** Current primary pixel extent, or null while no primary output is available.

**Parameter `primaryPresentationViewport`:** Host-selected content region, or null when the primary extent is unavailable.

**Parameter `frameIndex`:** Monotonic render frame index.

**Parameter `deltaTime`:** Elapsed frame time in seconds.

**Parameter `viewContent`:** Collector for model-independent world items.

**Parameter `input`:** Viewport-local input for the primary output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L80).

## `capabilities`

<a id="api-d307ed96071970dd"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequestProviderContext.capabilities 998643e7e82a9beb08b9d2ef7bde8aef9b0b12f837be9b0b8b477ee7521f74d5 -->

```csharp
public InnoEngine.Rendering.GraphicsCapabilities InnoEngine.Rendering.RenderRequestProviderContext.capabilities { get; }
```

Gets the active backend-neutral capability snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L126).

## `content`

<a id="api-ea12f5a65e3e0ec6"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequestProviderContext.content 67ff8114e74af85b5e82dd6b437406c3a1c4c08da8bd6cbdc0469645b5ac8acb -->

```csharp
public InnoEngine.References.ContentReadScope InnoEngine.Rendering.RenderRequestProviderContext.content { get; }
```

Gets the explicit ordered host content visible to request providers this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L121).

## `deltaTime`

<a id="api-d8a9329848cbc29d"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequestProviderContext.deltaTime caf80ba8a1872c2173f903bf5c01d397f3f4ac950c36e3c926e370ab2029a972 -->

```csharp
public float InnoEngine.Rendering.RenderRequestProviderContext.deltaTime { get; }
```

Gets the elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L146).

## `frameIndex`

<a id="api-a65fb9cb89badf0f"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequestProviderContext.frameIndex b977693d06331f4b31106ccf7c6b3b0eea6044bc0d9ae817102f1c3fafe6d0a1 -->

```csharp
public ulong InnoEngine.Rendering.RenderRequestProviderContext.frameIndex { get; }
```

Gets the monotonic render frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L141).

## `input`

<a id="api-12252db7abbf5202"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequestProviderContext.input 1b5be8e3ae16a38a932d9459d63fe76c7d26cb5bd611d58e6b35c2a3103dbcdc -->

```csharp
public InnoEngine.Rendering.RenderOutputInput InnoEngine.Rendering.RenderRequestProviderContext.input { get; }
```

Gets viewport-local input for the primary output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L155).

## `primaryPresentationSize`

<a id="api-a73cce6e784a6263"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequestProviderContext.primaryPresentationSize 17053e6782402f939236d53ea778f8583ced103e025b3258065647e7fd79a5f8 -->

```csharp
public InnoEngine.Rendering.RenderPresentationSize? InnoEngine.Rendering.RenderRequestProviderContext.primaryPresentationSize { get; }
```

Gets the current primary pixel extent, or null while only offscreen outputs are available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L131).

## `primaryPresentationViewport`

<a id="api-50ed8528a3fe3783"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequestProviderContext.primaryPresentationViewport 902567c6900b241bf2aba31b634411bbde675dd68b7241c5762fa4101413383b -->

```csharp
public InnoEngine.Rendering.RenderViewport? InnoEngine.Rendering.RenderRequestProviderContext.primaryPresentationViewport { get; }
```

Gets the host-selected primary region, or null while no primary output is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L136).

## `requests`

<a id="api-7c769b0e66087a02"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequestProviderContext.requests 80dab61d50fcb2c7613f4c8ce1c6f543664f3976d5780a08ccb873155cb0029b -->

```csharp
public InnoEngine.Rendering.IRenderRequestSink InnoEngine.Rendering.RenderRequestProviderContext.requests { get; }
```

Gets the sink accepting requests for the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L116).

## `viewContent`

<a id="api-373f5d8b467ac18f"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequestProviderContext.viewContent 3e66e434ea68f8ecbdaf59dfa263c0f0b1898078ed8cd58370657f9b5b7cde17 -->

```csharp
public InnoEngine.Rendering.IViewContentCollector InnoEngine.Rendering.RenderRequestProviderContext.viewContent { get; }
```

Gets the active generation's world-content collector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L151).
