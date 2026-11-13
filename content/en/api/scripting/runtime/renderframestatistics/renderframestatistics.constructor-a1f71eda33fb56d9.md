---
uid: api.a1f71eda33fb56d9115497ed0ea00b8f96702647db718cce4ee9db411b146c66
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderFrameStatistics.#ctor(System.UInt64,System.Int32,System.Int32,System.Int32,System.Int32,System.Nullable{InnoEngine.Rendering.RenderDeviceAllocationCounters},System.Int32)"
source: xml
reviewed: 8b547fe7a5b95800a8100f956722656b7a7fa0361128b67d653c9759dca75cef
title: "RenderFrameStatistics.Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Creates an immutable frame statistics snapshot.

**Parameter `frameIndex`:** Monotonic render frame index.

**Parameter `viewCount`:** Executed logical view count.

**Parameter `drawCount`:** Recorded draw count.

**Parameter `dispatchCount`:** Recorded compute dispatch count.

**Parameter `culledPassCount`:** Passes removed by graph compilation.

**Parameter `allocationCounters`:** Device-generation cumulative transient allocations at frame completion, or null when unavailable.

**Parameter `graphCompileCount`:** Complete graph compilation attempts for this frame, excluding validation-only analysis.
