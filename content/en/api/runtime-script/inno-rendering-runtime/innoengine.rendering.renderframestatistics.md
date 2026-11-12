---
title: "RenderFrameStatistics"
description: "Reference for RenderFrameStatistics in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.5e96eba2f1c6f404
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderFrameStatistics`

This reference describes `RenderFrameStatistics` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f2237f497838b2da) | Method |
| [`allocationCounters`](#api-d3210290ffc70c9a) | Property |
| [`culledPassCount`](#api-b609342ce9d934c8) | Property |
| [`dispatchCount`](#api-443fdbec28ef4460) | Property |
| [`drawCount`](#api-ea8280db50a2c777) | Property |
| [`frameIndex`](#api-37db3f93496b96fa) | Property |
| [`graphCompileCount`](#api-b4c701adb0670836) | Property |
| [`viewCount`](#api-5282ad7bf4e63989) | Property |

## Type declaration

<a id="api-5e96eba2f1c6f404"></a>
<!-- api: T:InnoEngine.Rendering.RenderFrameStatistics 2404108ac9705deeb62534d6c28323be3a88dac0cf0d5eb7ed921e885dc2b130 -->

```csharp
public sealed class InnoEngine.Rendering.RenderFrameStatistics
```

Reports read-only statistics for the most recently completed render frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L10).

## `#ctor`

<a id="api-f2237f497838b2da"></a>
<!-- api: M:InnoEngine.Rendering.RenderFrameStatistics.#ctor(System.UInt64,System.Int32,System.Int32,System.Int32,System.Int32,System.Nullable{InnoEngine.Rendering.RenderDeviceAllocationCounters},System.Int32) 45e0345932891410e670b85e626591a253f8521bb19571c841c401b6a23e1762 -->

```csharp
public InnoEngine.Rendering.RenderFrameStatistics.RenderFrameStatistics(ulong frameIndex, int viewCount, int drawCount, int dispatchCount, int culledPassCount, InnoEngine.Rendering.RenderDeviceAllocationCounters? allocationCounters, int graphCompileCount)
```

Creates an immutable frame statistics snapshot.

**Parameter `frameIndex`:** Monotonic render frame index.

**Parameter `viewCount`:** Executed logical view count.

**Parameter `drawCount`:** Recorded draw count.

**Parameter `dispatchCount`:** Recorded compute dispatch count.

**Parameter `culledPassCount`:** Passes removed by graph compilation.

**Parameter `allocationCounters`:** Device-generation cumulative transient allocations at frame completion, or null when unavailable.

**Parameter `graphCompileCount`:** Complete graph compilation attempts for this frame, excluding validation-only analysis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L36).

## `allocationCounters`

<a id="api-d3210290ffc70c9a"></a>
<!-- api: P:InnoEngine.Rendering.RenderFrameStatistics.allocationCounters c52f013128189b3f4a4b2801555ac6240a0acc228a6437266658cfa71369548a -->

```csharp
public InnoEngine.Rendering.RenderDeviceAllocationCounters? InnoEngine.Rendering.RenderFrameStatistics.allocationCounters { get; }
```

Gets the device-generation cumulative transient allocation snapshot at frame completion.
Null means the backend does not report allocation accounting; it does not mean zero allocations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L88).

## `culledPassCount`

<a id="api-b609342ce9d934c8"></a>
<!-- api: P:InnoEngine.Rendering.RenderFrameStatistics.culledPassCount 774982b958bc4bdbec43d324d7308fedd0a782df45ba6d9a5ef05fc8aaf98e65 -->

```csharp
public int InnoEngine.Rendering.RenderFrameStatistics.culledPassCount { get; }
```

Gets passes removed by graph compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L82).

## `dispatchCount`

<a id="api-443fdbec28ef4460"></a>
<!-- api: P:InnoEngine.Rendering.RenderFrameStatistics.dispatchCount f4b80fab5191a20752bc036266cdafc7e20d486080c0786e95a550b700d763f9 -->

```csharp
public int InnoEngine.Rendering.RenderFrameStatistics.dispatchCount { get; }
```

Gets the recorded compute dispatch count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L77).

## `drawCount`

<a id="api-ea8280db50a2c777"></a>
<!-- api: P:InnoEngine.Rendering.RenderFrameStatistics.drawCount 438fd591d60a2e88b919c83f996a439048d84813fa7a09700aebcbf0fd5117da -->

```csharp
public int InnoEngine.Rendering.RenderFrameStatistics.drawCount { get; }
```

Gets the recorded draw count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L72).

## `frameIndex`

<a id="api-37db3f93496b96fa"></a>
<!-- api: P:InnoEngine.Rendering.RenderFrameStatistics.frameIndex 81e68712b2643eba359510c3e038457dab8cf7f16dac662c6988efc99e34a7d4 -->

```csharp
public ulong InnoEngine.Rendering.RenderFrameStatistics.frameIndex { get; }
```

Gets the monotonic render frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L62).

## `graphCompileCount`

<a id="api-b4c701adb0670836"></a>
<!-- api: P:InnoEngine.Rendering.RenderFrameStatistics.graphCompileCount 12c46abd612d0734aa021cf9404f197225d0fca8b2236682f8719c73d15a1225 -->

```csharp
public int InnoEngine.Rendering.RenderFrameStatistics.graphCompileCount { get; }
```

Gets complete graph compilation attempts for the frame. Validation does not increase this count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L93).

## `viewCount`

<a id="api-5282ad7bf4e63989"></a>
<!-- api: P:InnoEngine.Rendering.RenderFrameStatistics.viewCount 24d1be04dc562c7c12811e4bd615a3b93ee0de2e44279a984cc5cbfd32f02778 -->

```csharp
public int InnoEngine.Rendering.RenderFrameStatistics.viewCount { get; }
```

Gets the executed logical view count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/RenderFrameStatistics.cs#L67).
