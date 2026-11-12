---
title: "RenderRequest"
description: "Reference for RenderRequest in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.db92f239b68d4f3b
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderRequest`

This reference describes `RenderRequest` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-426b9e7ef07427be) | Method |
| [`data`](#api-796f2352a555f10a) | Property |
| [`name`](#api-4a3e26f68c281fe0) | Property |
| [`pipeline`](#api-bfb32c2741dd04e9) | Property |
| [`priority`](#api-a04de1d563bbfef2) | Property |
| [`target`](#api-48423645ffeef7fb) | Property |
| [`viewport`](#api-6ba39d3578bd3ca5) | Property |

## Type declaration

<a id="api-db92f239b68d4f3b"></a>
<!-- api: T:InnoEngine.Rendering.RenderRequest 626cfc48f9efbee34650db390024d9ffbe968e39fbadf951230708600dbb4b83 -->

```csharp
public sealed class InnoEngine.Rendering.RenderRequest
```

Requests one pipeline-defined rendering operation without prescribing world semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L12).

## `#ctor`

<a id="api-426b9e7ef07427be"></a>
<!-- api: M:InnoEngine.Rendering.RenderRequest.#ctor(System.String,InnoEngine.Rendering.RenderTarget,InnoEngine.Rendering.RenderViewport,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderFrameData,System.Int32) 63d049394647a63dfd200c87d0ad01e8534213a61ad765597d93068ea1291f8c -->

```csharp
public InnoEngine.Rendering.RenderRequest.RenderRequest(string name, InnoEngine.Rendering.RenderTarget target, InnoEngine.Rendering.RenderViewport viewport, InnoEngine.Rendering.RenderPipelineAsset? pipeline = null, InnoEngine.Rendering.RenderFrameData? data = null, int priority = 0)
```

Creates an immutable render request.

**Parameter `name`:** Frame-local diagnostic name.

**Parameter `target`:** Render destination.

**Parameter `viewport`:** Destination pixel viewport.

**Parameter `pipeline`:** Optional per-request pipeline asset; the project default is used when null.

**Parameter `data`:** Optional pipeline-defined frame data copied into an immutable snapshot.

**Parameter `priority`:** Ascending frame scheduling priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L35).

## `data`

<a id="api-796f2352a555f10a"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequest.data 967e4d4e42982c21182baeb6b81296314d0cc416ddb17d63f2b05c14fe8cc318 -->

```csharp
public InnoEngine.Rendering.RenderFrameData InnoEngine.Rendering.RenderRequest.data { get; }
```

Gets immutable pipeline-defined frame data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L75).

## `name`

<a id="api-4a3e26f68c281fe0"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequest.name 9ab5da92d8559d5d418e0c034981acaea59da4ca9711856bb56c64d97ff5ea02 -->

```csharp
public string InnoEngine.Rendering.RenderRequest.name { get; }
```

Gets the frame-local diagnostic name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L55).

## `pipeline`

<a id="api-bfb32c2741dd04e9"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequest.pipeline f94e7aaf0f14d96dccf4551d1b79bf4969e2b49902b5b2f8659c0519355028a5 -->

```csharp
public InnoEngine.Rendering.RenderPipelineAsset? InnoEngine.Rendering.RenderRequest.pipeline { get; }
```

Gets the per-request pipeline asset, or null to use the project default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L70).

## `priority`

<a id="api-a04de1d563bbfef2"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequest.priority 861e1f14b209a612b972bc209fbe9d4e451cc2d91d3a74198a897a8018533e3c -->

```csharp
public int InnoEngine.Rendering.RenderRequest.priority { get; }
```

Gets the ascending frame scheduling priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L80).

## `target`

<a id="api-48423645ffeef7fb"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequest.target 44e7d27e883f736c30277b8a9ae095e74d585c343232a1be7c7e71918aaedfd2 -->

```csharp
public InnoEngine.Rendering.RenderTarget InnoEngine.Rendering.RenderRequest.target { get; }
```

Gets the render destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L60).

## `viewport`

<a id="api-6ba39d3578bd3ca5"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequest.viewport 63349ac34cee38552f24c316f12a6eb23601036817d76aa88f3979c8b178e6cc -->

```csharp
public InnoEngine.Rendering.RenderViewport InnoEngine.Rendering.RenderRequest.viewport { get; }
```

Gets the destination pixel viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L65).
