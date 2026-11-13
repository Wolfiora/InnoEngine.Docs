---
uid: api.180eb6b2a26efe943ee0b1087493331105cb4aeb4d456c2fdee84341fea77edb
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderFrameStatistics.#ctor(System.UInt64,System.Int32,System.Int32,System.Int32,System.Int32,System.Nullable{Inno.Rendering.RenderDeviceAllocationCounters},System.Int32)"
source: xml
reviewed: 041d09b8e505e7ca749213b1dab0284606e9f8e5d2bbf0079f4dd8426554003c
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates an immutable frame statistics snapshot.

**Parameter `frameIndex`:** Monotonic render frame index.

**Parameter `viewCount`:** Executed logical view count.

**Parameter `drawCount`:** Recorded draw count.

**Parameter `dispatchCount`:** Recorded compute dispatch count.

**Parameter `culledPassCount`:** Passes removed by graph compilation.

**Parameter `allocationCounters`:** Device-generation cumulative transient allocations at frame completion, or null when unavailable.

**Parameter `graphCompileCount`:** Complete graph compilation attempts for this frame, excluding validation-only analysis.
