---
title: "RenderFrameStatistics"
description: "Reference for RenderFrameStatistics in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.469f8c262f4343f0
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderFrameStatistics`

This reference describes `RenderFrameStatistics` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-84bc83361d277b48) | Method |
| [`allocationCounters`](#api-47ede03cd9fe1b9b) | Property |
| [`culledPassCount`](#api-6fb30c554de11684) | Property |
| [`dispatchCount`](#api-f5691ac5ae1988af) | Property |
| [`drawCount`](#api-3c921e399998b16c) | Property |
| [`frameIndex`](#api-fce316b9c6c2bb2a) | Property |
| [`graphCompileCount`](#api-6ff5bcd0c225a0a9) | Property |
| [`viewCount`](#api-bfaadf80559d8ffe) | Property |

## Type declaration

<a id="api-469f8c262f4343f0"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderFrameStatistics 9cbdc91e947511c2567f63884c098b643f2e0c6e1e6ed9a7d8331c4fd70f3f6b -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderFrameStatistics
```

Reports read-only statistics for the most recently completed render frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L10).

## `#ctor`

<a id="api-84bc83361d277b48"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderFrameStatistics.#ctor(System.UInt64,System.Int32,System.Int32,System.Int32,System.Int32,System.Nullable{Inno.Rendering.RenderDeviceAllocationCounters},System.Int32) 087e76afdf49b03b69df95a69f6738408ce5bb556958d52139737fe3da275f5e -->

```csharp
public Inno.Rendering.Runtime.RenderFrameStatistics.RenderFrameStatistics(ulong frameIndex, int viewCount, int drawCount, int dispatchCount, int culledPassCount, Inno.Rendering.RenderDeviceAllocationCounters? allocationCounters, int graphCompileCount)
```

Creates an immutable frame statistics snapshot.

**Parameter `frameIndex`:** Monotonic render frame index.

**Parameter `viewCount`:** Executed logical view count.

**Parameter `drawCount`:** Recorded draw count.

**Parameter `dispatchCount`:** Recorded compute dispatch count.

**Parameter `culledPassCount`:** Passes removed by graph compilation.

**Parameter `allocationCounters`:** Device-generation cumulative transient allocations at frame completion, or null when unavailable.

**Parameter `graphCompileCount`:** Complete graph compilation attempts for this frame, excluding validation-only analysis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L36).

## `allocationCounters`

<a id="api-47ede03cd9fe1b9b"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFrameStatistics.allocationCounters 81bd1a822f969fba1028d741ef24734cdd3d1c8e084a453b49801bbe858ebffc -->

```csharp
public Inno.Rendering.RenderDeviceAllocationCounters? Inno.Rendering.Runtime.RenderFrameStatistics.allocationCounters { get; }
```

Gets the device-generation cumulative transient allocation snapshot at frame completion.
Null means the backend does not report allocation accounting; it does not mean zero allocations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L88).

## `culledPassCount`

<a id="api-6fb30c554de11684"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFrameStatistics.culledPassCount 7fd2b0149caaed64d13caa3517b0ef5928e6d31c19dacef53d5f19723d458d73 -->

```csharp
public int Inno.Rendering.Runtime.RenderFrameStatistics.culledPassCount { get; }
```

Gets passes removed by graph compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L82).

## `dispatchCount`

<a id="api-f5691ac5ae1988af"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFrameStatistics.dispatchCount 9832517b1e3048c65fd1ba025bd9ede4ed6c7bb7c254429d6bc120f52a294dac -->

```csharp
public int Inno.Rendering.Runtime.RenderFrameStatistics.dispatchCount { get; }
```

Gets the recorded compute dispatch count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L77).

## `drawCount`

<a id="api-3c921e399998b16c"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFrameStatistics.drawCount 5740497624d60c63841b0e3e41000bb6360ebbef8b13cfdcae3227853e012e37 -->

```csharp
public int Inno.Rendering.Runtime.RenderFrameStatistics.drawCount { get; }
```

Gets the recorded draw count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L72).

## `frameIndex`

<a id="api-fce316b9c6c2bb2a"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFrameStatistics.frameIndex 3cb4112c682c197cad1a08d6d234207a6c16017d6b374b69f1734554b2616772 -->

```csharp
public ulong Inno.Rendering.Runtime.RenderFrameStatistics.frameIndex { get; }
```

Gets the monotonic render frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L62).

## `graphCompileCount`

<a id="api-6ff5bcd0c225a0a9"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFrameStatistics.graphCompileCount 8442e31d929748d5f139deaecf84efcbe2bca7a4660f43d4296bb550d1dbdebc -->

```csharp
public int Inno.Rendering.Runtime.RenderFrameStatistics.graphCompileCount { get; }
```

Gets complete graph compilation attempts for the frame. Validation does not increase this count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L93).

## `viewCount`

<a id="api-bfaadf80559d8ffe"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFrameStatistics.viewCount 927a4df778f6d66417b15f51aa292a8de48a017dfee8aeb2f8a0eedf5deca757 -->

```csharp
public int Inno.Rendering.Runtime.RenderFrameStatistics.viewCount { get; }
```

Gets the executed logical view count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L67).
