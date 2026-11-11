---
title: "RenderTextureDimension"
description: "Reference for RenderTextureDimension in Inno.Rendering."
uid: api.inno.rendering.31ae27fd60939d8c
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTextureDimension`

This reference describes `RenderTextureDimension` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Cube`](#api-c767ddcfd97dd03e) | Field |
| [`Texture2D`](#api-8e8e1555d0e7a212) | Field |
| [`Texture3D`](#api-d7e40a3fff0dd88b) | Field |

## Type declaration

<a id="api-31ae27fd60939d8c"></a>
<!-- api: T:Inno.Rendering.RenderTextureDimension c922b2063e6eaab7f0a8f2f401d07bfdefe7239e6040aa9c28f6e05decfa751c -->

```csharp
public enum Inno.Rendering.RenderTextureDimension : int
```

Identifies the dimensional shape of a backend-neutral texture resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L55).

## `Cube`

<a id="api-c767ddcfd97dd03e"></a>
<!-- api: F:Inno.Rendering.RenderTextureDimension.Cube 817b58eab9a5147d993f82ebf257c9c9fc2430e44d387cbddd2d684aad16ba45 -->

```csharp
Inno.Rendering.RenderTextureDimension.Cube = 2
```

Cubemap texture with optional cubemap array layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L68).

## `Texture2D`

<a id="api-8e8e1555d0e7a212"></a>
<!-- api: F:Inno.Rendering.RenderTextureDimension.Texture2D 47769565b742e2955be8bd3e57b3e6af235c375c5b7685acb9add02fcc079881 -->

```csharp
Inno.Rendering.RenderTextureDimension.Texture2D = 0
```

Two-dimensional texture with optional array layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L60).

## `Texture3D`

<a id="api-d7e40a3fff0dd88b"></a>
<!-- api: F:Inno.Rendering.RenderTextureDimension.Texture3D 1e8c36eccc72ae3628d6ae175115ee61792a6d8c51592b8a55cf3745ac65f01f -->

```csharp
Inno.Rendering.RenderTextureDimension.Texture3D = 1
```

Three-dimensional volume texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L64).
