---
title: "RenderOutputSession"
description: "Reference for RenderOutputSession in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.f4f4a65bb09a47b0
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderOutputSession`

This reference describes `RenderOutputSession` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-46e05e3e7dd5773f) | Method |
| [`ForLayer`](#api-7840bdb40821d7c4) | Method |
| [`content`](#api-d9332d21ac9e4a14) | Property |
| [`deltaTime`](#api-b45e5b1e2be85b0e) | Property |
| [`frameIndex`](#api-8cb5400c7f22ab18) | Property |
| [`id`](#api-ed604c5d333a19e7) | Property |
| [`input`](#api-56f7b057fb51c065) | Property |
| [`route`](#api-926953a07aa990cc) | Property |
| [`viewContent`](#api-badc808f291fa24e) | Property |
| [`viewport`](#api-bdee8f524a0ff134) | Property |

## Type declaration

<a id="api-f4f4a65bb09a47b0"></a>
<!-- api: T:InnoEngine.Rendering.RenderOutputSession 1af273f425c7d6ac4d26cb6f9f803c55ad27114d8f67bc8592b88cb4427ad7b5 -->

```csharp
public sealed class InnoEngine.Rendering.RenderOutputSession
```

Declares a host output without naming a camera or scene model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L15).

## `#ctor`

<a id="api-46e05e3e7dd5773f"></a>
<!-- api: M:InnoEngine.Rendering.RenderOutputSession.#ctor(System.String,InnoEngine.References.ContentReadScope,InnoEngine.Rendering.RenderViewport,System.UInt64,System.Single,InnoEngine.Rendering.IViewContentCollector,InnoEngine.Rendering.RenderOutputInput,InnoEngine.Rendering.RenderOutputRoute) b84bd919e070d76a58d639f7c4e0df8e79a63482de2957880b6953b7f80d61bf -->

```csharp
public InnoEngine.Rendering.RenderOutputSession.RenderOutputSession(string id, InnoEngine.References.ContentReadScope content, InnoEngine.Rendering.RenderViewport viewport, ulong frameIndex, float deltaTime, InnoEngine.Rendering.IViewContentCollector viewContent, InnoEngine.Rendering.RenderOutputInput? input = null, InnoEngine.Rendering.RenderOutputRoute? route = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L44).

## `ForLayer`

<a id="api-7840bdb40821d7c4"></a>
<!-- api: M:InnoEngine.Rendering.RenderOutputSession.ForLayer(InnoEngine.Rendering.RenderOutputLayer) a69ee5659fb28bab1161751bd13c3e6dc98b0ae6ed4dc661b67419ba96652356 -->

```csharp
public InnoEngine.Rendering.RenderOutputSession InnoEngine.Rendering.RenderOutputSession.ForLayer(InnoEngine.Rendering.RenderOutputLayer layer)
```

Creates the session seen by one explicitly assigned model layer.

**Parameter `layer`:** The model and content-source assignment.

**Returns:** A session with only the assigned world-content sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L107).

## `content`

<a id="api-d9332d21ac9e4a14"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputSession.content 17c2e28c57cdfa048a3b24b546813028d8f1274db8b2fb7c900466d332606e41 -->

```csharp
public InnoEngine.References.ContentReadScope InnoEngine.Rendering.RenderOutputSession.content { get; }
```

Gets selected content roots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L72).

## `deltaTime`

<a id="api-b45e5b1e2be85b0e"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputSession.deltaTime cae89f05271059791b56d83c5abd0d1a1cd4fa1edfa596719570e5b0a5fa642f -->

```csharp
public float InnoEngine.Rendering.RenderOutputSession.deltaTime { get; }
```

Gets elapsed frame time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L84).

## `frameIndex`

<a id="api-8cb5400c7f22ab18"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputSession.frameIndex 2aaddb8332e59add524a5f1837c3ee9967a0b6009006e059eb949e184b5c4fb2 -->

```csharp
public ulong InnoEngine.Rendering.RenderOutputSession.frameIndex { get; }
```

Gets the shared output frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L80).

## `id`

<a id="api-ed604c5d333a19e7"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputSession.id 8e49b0fa93e0a7bf4d138beec7e94f39423d95259c6908e9b618a31d7dbaba17 -->

```csharp
public string InnoEngine.Rendering.RenderOutputSession.id { get; }
```

Gets the stable host output identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L68).

## `input`

<a id="api-56f7b057fb51c065"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputSession.input 9fcc72bb64b67990d826abd9e0ad229716005713f2c62f0ade1f40216ded1117 -->

```csharp
public InnoEngine.Rendering.RenderOutputInput InnoEngine.Rendering.RenderOutputSession.input { get; }
```

Gets viewport-local input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L92).

## `route`

<a id="api-926953a07aa990cc"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputSession.route a96ea122de80bd8961f9d33ef8d961801c42b9b45ee601b534ea732b0bfc4aed -->

```csharp
public InnoEngine.Rendering.RenderOutputRoute? InnoEngine.Rendering.RenderOutputSession.route { get; }
```

Gets the explicit model route, if configured.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L96).

## `viewContent`

<a id="api-badc808f291fa24e"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputSession.viewContent 284312af7e0f8bf745e5a93bf6e34b68b88f1b7ff34e994b79b9eecd0dc2d37f -->

```csharp
public InnoEngine.Rendering.IViewContentCollector InnoEngine.Rendering.RenderOutputSession.viewContent { get; }
```

Gets the world content collector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L88).

## `viewport`

<a id="api-bdee8f524a0ff134"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputSession.viewport 52776a9b479662c496fefd240fe38da109627c3ec9bafa596a2c47662d4527b7 -->

```csharp
public InnoEngine.Rendering.RenderViewport InnoEngine.Rendering.RenderOutputSession.viewport { get; }
```

Gets the output pixel viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputSession.cs#L76).
