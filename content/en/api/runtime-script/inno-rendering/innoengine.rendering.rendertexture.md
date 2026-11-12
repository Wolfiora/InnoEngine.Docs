---
title: "RenderTexture"
description: "Reference for RenderTexture in Inno.Rendering."
uid: api.inno.rendering.runtime-script.e90fe265b5b85bfe
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTexture`

This reference describes `RenderTexture` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9d5e4c70c2368383) | Method |
| [`Resize`](#api-45d889d51f5fdbf2) | Method |
| [`contentRevision`](#api-605a105789445bb0) | Property |
| [`descriptor`](#api-d42dd3b8a18ddb83) | Property |
| [`name`](#api-d22c835dc823230f) | Property |

## Type declaration

<a id="api-e90fe265b5b85bfe"></a>
<!-- api: T:InnoEngine.Rendering.RenderTexture bf0c767ad0a92c666b3bb3806811b498cc1142903bda5e3bc0c24afd11380f03 -->

```csharp
public sealed class InnoEngine.Rendering.RenderTexture
```

Describes a persistent offscreen target without owning a backend-native handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L8).

## `#ctor`

<a id="api-9d5e4c70c2368383"></a>
<!-- api: M:InnoEngine.Rendering.RenderTexture.#ctor(System.String,InnoEngine.Rendering.RenderTextureDescriptor) 772b9ff5bd085eeafa39b1aafe74be4be21c23d777ae81de774b06f6f92de1a6 -->

```csharp
public InnoEngine.Rendering.RenderTexture.RenderTexture(string name, InnoEngine.Rendering.RenderTextureDescriptor descriptor)
```

Creates an offscreen render target description.

**Parameter `name`:** Artist-facing and diagnostic name.

**Parameter `descriptor`:** Initial texture requirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L21).

## `Resize`

<a id="api-45d889d51f5fdbf2"></a>
<!-- api: M:InnoEngine.Rendering.RenderTexture.Resize(InnoEngine.Rendering.RenderTextureDescriptor) 064f54051df12f2b5e03577543d55d5da3e30639e016fbeb570f1d30b3949e58 -->

```csharp
public void InnoEngine.Rendering.RenderTexture.Resize(InnoEngine.Rendering.RenderTextureDescriptor descriptor)
```

Replaces texture requirements at the next render-frame safety point.

**Parameter `descriptor`:** New texture requirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L52).

## `contentRevision`

<a id="api-605a105789445bb0"></a>
<!-- api: P:InnoEngine.Rendering.RenderTexture.contentRevision a3a86a20408c5ed763c36bf9fdee2bfd7617c8820359e42e749cc8a1189e1a40 -->

```csharp
public long InnoEngine.Rendering.RenderTexture.contentRevision { get; }
```

Gets a counter incremented whenever the descriptor changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L44).

## `descriptor`

<a id="api-d42dd3b8a18ddb83"></a>
<!-- api: P:InnoEngine.Rendering.RenderTexture.descriptor 0cad570ce7c6487801bbd92ecab6a8e306596a38a2b66380041f2f68a7afefef -->

```csharp
public InnoEngine.Rendering.RenderTextureDescriptor InnoEngine.Rendering.RenderTexture.descriptor { get; }
```

Gets the current texture requirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L39).

## `name`

<a id="api-d22c835dc823230f"></a>
<!-- api: P:InnoEngine.Rendering.RenderTexture.name 5d15e74a71fa0415fcc3a32db377b64beb7836d8ffa73020d3f6561077560b30 -->

```csharp
public string InnoEngine.Rendering.RenderTexture.name { get; }
```

Gets the artist-facing and diagnostic name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L34).
