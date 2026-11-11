---
title: "RenderRequestProviderContext"
description: "Reference for RenderRequestProviderContext in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.1ab30f796c6e509a
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderRequestProviderContext`

This reference describes `RenderRequestProviderContext` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c42665e409a56e55) | Method |
| [`capabilities`](#api-4bcdf9164e1ebb5a) | Property |
| [`content`](#api-1b1f74c8c4b998cb) | Property |
| [`deltaTime`](#api-29c42259fa50a3a6) | Property |
| [`frameIndex`](#api-c4c15b024303d7ef) | Property |
| [`input`](#api-0e47148b8c6837dc) | Property |
| [`primaryPresentationSize`](#api-fed3c9b0aa5d189f) | Property |
| [`primaryPresentationViewport`](#api-34f3221cc84a6b55) | Property |
| [`requests`](#api-6a0acd64311e5c6e) | Property |
| [`viewContent`](#api-9916e644a7fb7cff) | Property |

## Type declaration

<a id="api-1ab30f796c6e509a"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderRequestProviderContext af1153befb3c609c7b58edfcc0e14de68f0ff5b7d56db4de050112afb8d98fdb -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderRequestProviderContext
```

Supplies frame timing, capabilities and the request sink to one provider invocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L48).

## `#ctor`

<a id="api-c42665e409a56e55"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRequestProviderContext.#ctor(Inno.Rendering.Runtime.IRenderRequestSink,Inno.References.ContentReadScope,Inno.Rendering.GraphicsCapabilities,System.Nullable{Inno.Rendering.RenderPresentationSize},System.Nullable{Inno.Rendering.RenderViewport},System.UInt64,System.Single,Inno.Rendering.Runtime.IViewContentCollector,Inno.Rendering.Runtime.RenderOutputInput) f1c131591fde1c185fe7b3132e9953068284b49aabdcec8f2c92813524984627 -->

```csharp
public Inno.Rendering.Runtime.RenderRequestProviderContext.RenderRequestProviderContext(Inno.Rendering.Runtime.IRenderRequestSink requests, Inno.References.ContentReadScope content, Inno.Rendering.GraphicsCapabilities capabilities, Inno.Rendering.RenderPresentationSize? primaryPresentationSize, Inno.Rendering.RenderViewport? primaryPresentationViewport, ulong frameIndex, float deltaTime, Inno.Rendering.Runtime.IViewContentCollector viewContent, Inno.Rendering.Runtime.RenderOutputInput? input = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L80).

## `capabilities`

<a id="api-4bcdf9164e1ebb5a"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequestProviderContext.capabilities 0c482104fadf6cb15df0c8969e0f588ec384309743e34aa5d6735344cdea0791 -->

```csharp
public Inno.Rendering.GraphicsCapabilities Inno.Rendering.Runtime.RenderRequestProviderContext.capabilities { get; }
```

Gets the active backend-neutral capability snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L126).

## `content`

<a id="api-1b1f74c8c4b998cb"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequestProviderContext.content c30bca0dbe41add04bb2ade5a8f9085d0e09d3168b8016e6be9e0560e70cf671 -->

```csharp
public Inno.References.ContentReadScope Inno.Rendering.Runtime.RenderRequestProviderContext.content { get; }
```

Gets the explicit ordered host content visible to request providers this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L121).

## `deltaTime`

<a id="api-29c42259fa50a3a6"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequestProviderContext.deltaTime 0b59ca4ebf0ff5bca73c76a1ab1026afcd4d364084663ab77982c956f055e4d0 -->

```csharp
public float Inno.Rendering.Runtime.RenderRequestProviderContext.deltaTime { get; }
```

Gets the elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L146).

## `frameIndex`

<a id="api-c4c15b024303d7ef"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequestProviderContext.frameIndex d73997a7937b9d2cefd480b5032290242d192b0f52220a5a1227c94117ffcc2f -->

```csharp
public ulong Inno.Rendering.Runtime.RenderRequestProviderContext.frameIndex { get; }
```

Gets the monotonic render frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L141).

## `input`

<a id="api-0e47148b8c6837dc"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequestProviderContext.input 1fb04762f02b5c26ef6c57ae84c61cf60ca63ff08dd8974c132931a450a9411b -->

```csharp
public Inno.Rendering.Runtime.RenderOutputInput Inno.Rendering.Runtime.RenderRequestProviderContext.input { get; }
```

Gets viewport-local input for the primary output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L155).

## `primaryPresentationSize`

<a id="api-fed3c9b0aa5d189f"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequestProviderContext.primaryPresentationSize aefbb008c7fce9b50291ab5d03af35e0ad0f35629beba509596489a232d0e83e -->

```csharp
public Inno.Rendering.RenderPresentationSize? Inno.Rendering.Runtime.RenderRequestProviderContext.primaryPresentationSize { get; }
```

Gets the current primary pixel extent, or null while only offscreen outputs are available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L131).

## `primaryPresentationViewport`

<a id="api-34f3221cc84a6b55"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequestProviderContext.primaryPresentationViewport a0807b4bff565688100a8564ff669a1075c96e793ceec541e973a06b7e03f756 -->

```csharp
public Inno.Rendering.RenderViewport? Inno.Rendering.Runtime.RenderRequestProviderContext.primaryPresentationViewport { get; }
```

Gets the host-selected primary region, or null while no primary output is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L136).

## `requests`

<a id="api-6a0acd64311e5c6e"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequestProviderContext.requests d441b57b7e627d97aa4efeb2484660b2186b8e60defa4c41f41c481fd8a68af0 -->

```csharp
public Inno.Rendering.Runtime.IRenderRequestSink Inno.Rendering.Runtime.RenderRequestProviderContext.requests { get; }
```

Gets the sink accepting requests for the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L116).

## `viewContent`

<a id="api-9916e644a7fb7cff"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequestProviderContext.viewContent 0536459fde9837460d9aa9b7488c030220394ebe6946024c07320e5b0d2c6fe7 -->

```csharp
public Inno.Rendering.Runtime.IViewContentCollector Inno.Rendering.Runtime.RenderRequestProviderContext.viewContent { get; }
```

Gets the active generation's world-content collector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L151).
