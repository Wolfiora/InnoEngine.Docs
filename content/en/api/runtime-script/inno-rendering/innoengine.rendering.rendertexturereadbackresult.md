---
title: "RenderTextureReadbackResult"
description: "Reference for RenderTextureReadbackResult in Inno.Rendering."
uid: api.inno.rendering.runtime-script.53edf35d7d5673e5
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTextureReadbackResult`

This reference describes `RenderTextureReadbackResult` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b89f2fe35f765f16) | Method |
| [`data`](#api-75e604f616e3acf0) | Property |
| [`descriptor`](#api-bbcd0b382b3fe34a) | Property |
| [`mipLevel`](#api-415e4353dd9883ed) | Property |
| [`rowPitch`](#api-874f8a17eac3f888) | Property |

## Type declaration

<a id="api-53edf35d7d5673e5"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureReadbackResult 2ac5d922a1d77846804e71c9cbb4e48ee845b26104e0b3070eee236a4870c14a -->

```csharp
public sealed class InnoEngine.Rendering.RenderTextureReadbackResult
```

Contains immutable bytes copied from one complete texture mip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L30).

## `#ctor`

<a id="api-b89f2fe35f765f16"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureReadbackResult.#ctor(InnoEngine.Rendering.RenderTextureDescriptor,System.Int32,System.Int32,System.ReadOnlySpan{System.Byte}) 778ff3606e4bfa5aeb943b13158211df363e871be1d5103d8dbdfa76039517c9 -->

```csharp
public InnoEngine.Rendering.RenderTextureReadbackResult.RenderTextureReadbackResult(InnoEngine.Rendering.RenderTextureDescriptor descriptor, int mipLevel, int rowPitch, System.ReadOnlySpan<byte> data)
```

Creates one immutable texture readback result.

**Parameter `descriptor`:** Source texture descriptor.

**Parameter `mipLevel`:** Source mip level.

**Parameter `rowPitch`:** Number of bytes between adjacent texel rows.

**Parameter `data`:** Complete tightly packed mip bytes for every addressable layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L49).

## `data`

<a id="api-75e604f616e3acf0"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureReadbackResult.data c305eb872c923296137f8e9adf0b1ed2bb4641214f863ba6d698f37c7086cde1 -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Rendering.RenderTextureReadbackResult.data { get; }
```

Gets complete tightly packed mip bytes for every addressable layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L86).

## `descriptor`

<a id="api-bbcd0b382b3fe34a"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureReadbackResult.descriptor ad6f6379209677b9cb00b15b017c2605bb05e5795da50ead8591a5ee5fbe7123 -->

```csharp
public InnoEngine.Rendering.RenderTextureDescriptor InnoEngine.Rendering.RenderTextureReadbackResult.descriptor { get; }
```

Gets the source texture descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L71).

## `mipLevel`

<a id="api-415e4353dd9883ed"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureReadbackResult.mipLevel 245e214308f808368e49bc05ff25862414f1d07dc581e4827ce118d2a6b9a707 -->

```csharp
public int InnoEngine.Rendering.RenderTextureReadbackResult.mipLevel { get; }
```

Gets the source mip level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L76).

## `rowPitch`

<a id="api-874f8a17eac3f888"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureReadbackResult.rowPitch 4f9914551e1c45c61e01c013dc9e77337587e9f261aba44b3e200461a7a2aeea -->

```csharp
public int InnoEngine.Rendering.RenderTextureReadbackResult.rowPitch { get; }
```

Gets the byte distance between adjacent rows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L81).
