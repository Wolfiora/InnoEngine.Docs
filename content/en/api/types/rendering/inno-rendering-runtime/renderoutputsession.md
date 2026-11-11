---
title: "RenderOutputSession"
description: "Reference for RenderOutputSession in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.35d0cd0b8c744ffd
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderOutputSession`

This reference describes `RenderOutputSession` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e9cf890e36c83672) | Method |
| [`ForLayer`](#api-258e8792b14d2fe7) | Method |
| [`content`](#api-16c44bf84b8f80da) | Property |
| [`deltaTime`](#api-b29e641f00b2f1ea) | Property |
| [`frameIndex`](#api-08c7aa0df76a5baf) | Property |
| [`id`](#api-913ea916cc590e04) | Property |
| [`input`](#api-2aa4e755d31bb7df) | Property |
| [`route`](#api-287db8048f0f447c) | Property |
| [`viewContent`](#api-bd8dc7101b7af7e7) | Property |
| [`viewport`](#api-52f11d087827386c) | Property |

## Type declaration

<a id="api-35d0cd0b8c744ffd"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderOutputSession ea62a17d2f73778d3dc93e085a8883bcba6fd593f435a34f0b80c457937854c3 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderOutputSession
```

Declares a host output without naming a camera or scene model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L15).

## `#ctor`

<a id="api-e9cf890e36c83672"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderOutputSession.#ctor(System.String,Inno.References.ContentReadScope,Inno.Rendering.RenderViewport,System.UInt64,System.Single,Inno.Rendering.Runtime.IViewContentCollector,Inno.Rendering.Runtime.RenderOutputInput,Inno.Rendering.Runtime.RenderOutputRoute) 98325b1bf2f755c9d69b1811ffaf933da4ea17f55ba5d432b1b3ef4f60b42db0 -->

```csharp
public Inno.Rendering.Runtime.RenderOutputSession.RenderOutputSession(string id, Inno.References.ContentReadScope content, Inno.Rendering.RenderViewport viewport, ulong frameIndex, float deltaTime, Inno.Rendering.Runtime.IViewContentCollector viewContent, Inno.Rendering.Runtime.RenderOutputInput? input = null, Inno.Rendering.Runtime.RenderOutputRoute? route = null)
```

Creates a frame-scoped output session.

**Parameter `id`:** Stable host output identity.

**Parameter `content`:** Host-selected content roots.

**Parameter `viewport`:** Pixel rectangle within the target.

**Parameter `frameIndex`:** Shared output frame index.

**Parameter `deltaTime`:** Elapsed frame time in seconds.

**Parameter `viewContent`:** Model-independent world content collector.

**Parameter `input`:** Viewport-local input.

**Parameter `route`:** Explicit composition route when several models are applicable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L44).

## `ForLayer`

<a id="api-258e8792b14d2fe7"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderOutputSession.ForLayer(Inno.Rendering.Runtime.RenderOutputLayer) 41cfb47e1bf8421ac0e5aefe434a929a581de6f2c8317a426a1c26e54ffd278d -->

```csharp
public Inno.Rendering.Runtime.RenderOutputSession Inno.Rendering.Runtime.RenderOutputSession.ForLayer(Inno.Rendering.Runtime.RenderOutputLayer layer)
```

Creates the session seen by one explicitly assigned model layer.

**Parameter `layer`:** The model and content-source assignment.

**Returns:** A session with only the assigned world-content sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L107).

## `content`

<a id="api-16c44bf84b8f80da"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputSession.content 005be421f8ac3f71f9a362420bb95b640c3aa9ee5ae45db59b6fc3a9bc4210e7 -->

```csharp
public Inno.References.ContentReadScope Inno.Rendering.Runtime.RenderOutputSession.content { get; }
```

Gets selected content roots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L72).

## `deltaTime`

<a id="api-b29e641f00b2f1ea"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputSession.deltaTime 77f6073b6c73290c47b40bca0af1b5cc5bca0d998ac00b30360c63414aeb9b97 -->

```csharp
public float Inno.Rendering.Runtime.RenderOutputSession.deltaTime { get; }
```

Gets elapsed frame time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L84).

## `frameIndex`

<a id="api-08c7aa0df76a5baf"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputSession.frameIndex ca85ec36613b9327cac11624ae3d06220bf54f33c8cd926334a0f9911b4689f0 -->

```csharp
public ulong Inno.Rendering.Runtime.RenderOutputSession.frameIndex { get; }
```

Gets the shared output frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L80).

## `id`

<a id="api-913ea916cc590e04"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputSession.id 042c358979c09b4a073847ea70f3ca8d9f1836aba5e29c19968a86a500a25bf4 -->

```csharp
public string Inno.Rendering.Runtime.RenderOutputSession.id { get; }
```

Gets the stable host output identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L68).

## `input`

<a id="api-2aa4e755d31bb7df"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputSession.input 78cbb71bc5a8c6f580c92acd70dc9b48edee605d26f3da551242166592437426 -->

```csharp
public Inno.Rendering.Runtime.RenderOutputInput Inno.Rendering.Runtime.RenderOutputSession.input { get; }
```

Gets viewport-local input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L92).

## `route`

<a id="api-287db8048f0f447c"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputSession.route bf99d44d7ce30649d614bff9205baf60faf2cdd5799dbfa0edd1cb8545f31148 -->

```csharp
public Inno.Rendering.Runtime.RenderOutputRoute? Inno.Rendering.Runtime.RenderOutputSession.route { get; }
```

Gets the explicit model route, if configured.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L96).

## `viewContent`

<a id="api-bd8dc7101b7af7e7"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputSession.viewContent e7c8a05bbc751802b5e458b3142a332af5be152e2554a0d93f8416437fa6266b -->

```csharp
public Inno.Rendering.Runtime.IViewContentCollector Inno.Rendering.Runtime.RenderOutputSession.viewContent { get; }
```

Gets the world content collector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L88).

## `viewport`

<a id="api-52f11d087827386c"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputSession.viewport 95d0a4fc6c77fac4ccef9bfa832b57a9fa57e18c5d7e5173aca3f6a6feb8705f -->

```csharp
public Inno.Rendering.RenderViewport Inno.Rendering.Runtime.RenderOutputSession.viewport { get; }
```

Gets the output pixel viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L76).
