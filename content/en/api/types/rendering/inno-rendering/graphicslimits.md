---
title: "GraphicsLimits"
description: "Reference for GraphicsLimits in Inno.Rendering."
uid: api.inno.rendering.55cf828dc3179762
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `GraphicsLimits`

This reference describes `GraphicsLimits` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-51e557fa6a667f5a) | Method |
| [`maxColorAttachments`](#api-7ebfdacb3d95a618) | Property |
| [`maxComputeBindings`](#api-6757945de0519590) | Property |
| [`maxTextureSize`](#api-417da0d0db4c40d4) | Property |
| [`maxViews`](#api-ee96d887ed172302) | Property |

## Type declaration

<a id="api-55cf828dc3179762"></a>
<!-- api: T:Inno.Rendering.GraphicsLimits e100447812ed7c6882a48efd712db48fd0a722f4fbf9f11f37b2fefff857c0db -->

```csharp
public sealed class Inno.Rendering.GraphicsLimits
```

Captures device limits used to validate and compile render graphs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L222).

## `#ctor`

<a id="api-51e557fa6a667f5a"></a>
<!-- api: M:Inno.Rendering.GraphicsLimits.#ctor(System.Int32,System.Int32,System.Int32,System.Int32) 8eb2c2d93fc35687494ca0617f17d2c92278f731172eb6832bf72d9532d544d0 -->

```csharp
public Inno.Rendering.GraphicsLimits.GraphicsLimits(int maxViews, int maxColorAttachments, int maxTextureSize, int maxComputeBindings)
```

Creates a graphics limits snapshot.

**Parameter `maxViews`:** Maximum logical backend views in one frame.

**Parameter `maxColorAttachments`:** Maximum color attachments in one raster pass.

**Parameter `maxTextureSize`:** Maximum two-dimensional texture extent.

**Parameter `maxComputeBindings`:** Maximum storage bindings in one compute pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L239).

## `maxColorAttachments`

<a id="api-7ebfdacb3d95a618"></a>
<!-- api: P:Inno.Rendering.GraphicsLimits.maxColorAttachments ad4d0f0229e01ef91b97dbf47b08333ad86e43ba5444e537b60cd2b732522738 -->

```csharp
public int Inno.Rendering.GraphicsLimits.maxColorAttachments { get; }
```

Gets the maximum color attachments in one raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L263).

## `maxComputeBindings`

<a id="api-6757945de0519590"></a>
<!-- api: P:Inno.Rendering.GraphicsLimits.maxComputeBindings 182e98a061c9ce36063c28974c376e988514eb762ab7c4b6f3ed82886f6254bb -->

```csharp
public int Inno.Rendering.GraphicsLimits.maxComputeBindings { get; }
```

Gets the maximum storage bindings in one compute pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L273).

## `maxTextureSize`

<a id="api-417da0d0db4c40d4"></a>
<!-- api: P:Inno.Rendering.GraphicsLimits.maxTextureSize 101e258c89f454bd06e463a38d914d2dcf5b0553429e00d0dc9a59bebab3dfa8 -->

```csharp
public int Inno.Rendering.GraphicsLimits.maxTextureSize { get; }
```

Gets the maximum two-dimensional texture extent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L268).

## `maxViews`

<a id="api-ee96d887ed172302"></a>
<!-- api: P:Inno.Rendering.GraphicsLimits.maxViews d6441da1ccdd826884106c47775f79ee8cd81a1d4b7228f5b73f2dbff76d5156 -->

```csharp
public int Inno.Rendering.GraphicsLimits.maxViews { get; }
```

Gets the maximum logical backend views in one frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L258).
