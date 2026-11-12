---
title: "GraphicsLimits"
description: "Reference for GraphicsLimits in Inno.Rendering."
uid: api.inno.rendering.runtime-script.a9a39f8e22c722f2
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `GraphicsLimits`

This reference describes `GraphicsLimits` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-be2dcaa396024cbf) | Method |
| [`maxColorAttachments`](#api-8d137af7afe50d59) | Property |
| [`maxComputeBindings`](#api-0cfdc599e7bfa354) | Property |
| [`maxTextureSize`](#api-892551db9b753453) | Property |
| [`maxViews`](#api-da437e59ce819826) | Property |

## Type declaration

<a id="api-a9a39f8e22c722f2"></a>
<!-- api: T:InnoEngine.Rendering.GraphicsLimits 44773fa96de2004b801fe9b3f341c351631d2bf06747694a5775cc44f206352e -->

```csharp
public sealed class InnoEngine.Rendering.GraphicsLimits
```

Captures device limits used to validate and compile render graphs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L222).

## `#ctor`

<a id="api-be2dcaa396024cbf"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsLimits.#ctor(System.Int32,System.Int32,System.Int32,System.Int32) d290056317bc04a9032e55167ba38ff3461551ef2f8a4e90f298563eaa911251 -->

```csharp
public InnoEngine.Rendering.GraphicsLimits.GraphicsLimits(int maxViews, int maxColorAttachments, int maxTextureSize, int maxComputeBindings)
```

Creates a graphics limits snapshot.

**Parameter `maxViews`:** Maximum logical backend views in one frame.

**Parameter `maxColorAttachments`:** Maximum color attachments in one raster pass.

**Parameter `maxTextureSize`:** Maximum two-dimensional texture extent.

**Parameter `maxComputeBindings`:** Maximum storage bindings in one compute pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L239).

## `maxColorAttachments`

<a id="api-8d137af7afe50d59"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsLimits.maxColorAttachments 8acb4bd0b6378884248dd17d8bc5679c0fba4c8208bf72be48f599d0550c2da5 -->

```csharp
public int InnoEngine.Rendering.GraphicsLimits.maxColorAttachments { get; }
```

Gets the maximum color attachments in one raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L263).

## `maxComputeBindings`

<a id="api-0cfdc599e7bfa354"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsLimits.maxComputeBindings 828ff536a48793ace9e3c4d5350166cadd3bce438de9d600a87552a44b5baf71 -->

```csharp
public int InnoEngine.Rendering.GraphicsLimits.maxComputeBindings { get; }
```

Gets the maximum storage bindings in one compute pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L273).

## `maxTextureSize`

<a id="api-892551db9b753453"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsLimits.maxTextureSize e7c1f792c6140e55d03e5c0b0f975a28dc4b8bdba340ddda836e6ec740a73799 -->

```csharp
public int InnoEngine.Rendering.GraphicsLimits.maxTextureSize { get; }
```

Gets the maximum two-dimensional texture extent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L268).

## `maxViews`

<a id="api-da437e59ce819826"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsLimits.maxViews 600b952baca7e0918d300e47f30acaa2df94ce52db6269a4a8cce4f60029e4f8 -->

```csharp
public int InnoEngine.Rendering.GraphicsLimits.maxViews { get; }
```

Gets the maximum logical backend views in one frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L258).
