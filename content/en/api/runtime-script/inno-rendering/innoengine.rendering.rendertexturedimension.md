---
title: "RenderTextureDimension"
description: "Reference for RenderTextureDimension in Inno.Rendering."
uid: api.inno.rendering.runtime-script.d0cd80a4eea6959c
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTextureDimension`

This reference describes `RenderTextureDimension` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Cube`](#api-f5c3320283fd0f01) | Field |
| [`Texture2D`](#api-41d8604d58a2835c) | Field |
| [`Texture3D`](#api-533822eb72bfe307) | Field |

## Type declaration

<a id="api-d0cd80a4eea6959c"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureDimension 4bef47bcc2eee2e719c5375a87a41fd28cb4925194f8329c1821406eb8088b2e -->

```csharp
public enum InnoEngine.Rendering.RenderTextureDimension : int
```

Identifies the dimensional shape of a backend-neutral texture resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L55).

## `Cube`

<a id="api-f5c3320283fd0f01"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureDimension.Cube e33c0c354855997cd37b4d5990e882bcd98a5e5e64459520d76ac419a1075c2c -->

```csharp
InnoEngine.Rendering.RenderTextureDimension.Cube = 2
```

Cubemap texture with optional cubemap array layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L68).

## `Texture2D`

<a id="api-41d8604d58a2835c"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureDimension.Texture2D 5562d30f7b6858590fe21af4916877cc25bcac6fda82067a87fa98dac653de53 -->

```csharp
InnoEngine.Rendering.RenderTextureDimension.Texture2D = 0
```

Two-dimensional texture with optional array layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L60).

## `Texture3D`

<a id="api-533822eb72bfe307"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureDimension.Texture3D 29113ab44ed6bfa1c399d7a859d6b40c0a394942a850d3f247006d3897612177 -->

```csharp
InnoEngine.Rendering.RenderTextureDimension.Texture3D = 1
```

Three-dimensional volume texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L64).
