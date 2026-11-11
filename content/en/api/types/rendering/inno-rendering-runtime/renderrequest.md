---
title: "RenderRequest"
description: "Reference for RenderRequest in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.ef4b313500d5f534
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderRequest`

This reference describes `RenderRequest` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-08c03228ab0b3de8) | Method |
| [`data`](#api-b08f518d312ee56a) | Property |
| [`name`](#api-c8ab18245fdf1be1) | Property |
| [`pipeline`](#api-7d726c77409f55ec) | Property |
| [`priority`](#api-9d1847160f418e00) | Property |
| [`target`](#api-5747a52bba243eec) | Property |
| [`viewport`](#api-1ecf3df0c876c8ce) | Property |

## Type declaration

<a id="api-ef4b313500d5f534"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderRequest fc5bbe81261c6f2083c4d1bbcff6fcd868b9c4933a61e1b70d7d1653a276ae64 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderRequest
```

Requests one pipeline-defined rendering operation without prescribing world semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L12).

## `#ctor`

<a id="api-08c03228ab0b3de8"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRequest.#ctor(System.String,Inno.Rendering.RenderTarget,Inno.Rendering.RenderViewport,Inno.Rendering.Assets.RenderPipelineAsset,Inno.Rendering.Runtime.RenderFrameData,System.Int32) 54596198018d0e6eeb7813f2ae0c4d1f7019b98af249a475909bf492e8f2df43 -->

```csharp
public Inno.Rendering.Runtime.RenderRequest.RenderRequest(string name, Inno.Rendering.RenderTarget target, Inno.Rendering.RenderViewport viewport, Inno.Rendering.Assets.RenderPipelineAsset? pipeline = null, Inno.Rendering.Runtime.RenderFrameData? data = null, int priority = 0)
```

Creates an immutable render request.

**Parameter `name`:** Frame-local diagnostic name.

**Parameter `target`:** Render destination.

**Parameter `viewport`:** Destination pixel viewport.

**Parameter `pipeline`:** Optional per-request pipeline asset; the project default is used when null.

**Parameter `data`:** Optional pipeline-defined frame data copied into an immutable snapshot.

**Parameter `priority`:** Ascending frame scheduling priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L35).

## `data`

<a id="api-b08f518d312ee56a"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequest.data 369d678c2490e4ce81f6c96ffc2652b356ff687b70f3751a9ee09a30819e4a24 -->

```csharp
public Inno.Rendering.Runtime.RenderFrameData Inno.Rendering.Runtime.RenderRequest.data { get; }
```

Gets immutable pipeline-defined frame data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L75).

## `name`

<a id="api-c8ab18245fdf1be1"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequest.name 7816099b44efe01df9889a87ceb1121017adbafd0d9b3609ad9475a96814b4fc -->

```csharp
public string Inno.Rendering.Runtime.RenderRequest.name { get; }
```

Gets the frame-local diagnostic name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L55).

## `pipeline`

<a id="api-7d726c77409f55ec"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequest.pipeline 31267f18ae11f6023799e703d9063b1372ea03605e053b82b49fb98aca3909ce -->

```csharp
public Inno.Rendering.Assets.RenderPipelineAsset? Inno.Rendering.Runtime.RenderRequest.pipeline { get; }
```

Gets the per-request pipeline asset, or null to use the project default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L70).

## `priority`

<a id="api-9d1847160f418e00"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequest.priority 532e5927366b29551026c81688c8fe2009d6a93d36b843422175f00fd1b58cfc -->

```csharp
public int Inno.Rendering.Runtime.RenderRequest.priority { get; }
```

Gets the ascending frame scheduling priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L80).

## `target`

<a id="api-5747a52bba243eec"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequest.target d9555ea5f42faffbd31ed18bfc9cdb61899a9b0435f9996076f8ee6c7a2ad7aa -->

```csharp
public Inno.Rendering.RenderTarget Inno.Rendering.Runtime.RenderRequest.target { get; }
```

Gets the render destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L60).

## `viewport`

<a id="api-1ecf3df0c876c8ce"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequest.viewport 1cdc95780236bdd95d2a5a45984fffad4c794e766f400383ded6ce63cbb778e2 -->

```csharp
public Inno.Rendering.RenderViewport Inno.Rendering.Runtime.RenderRequest.viewport { get; }
```

Gets the destination pixel viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequest.cs#L65).
