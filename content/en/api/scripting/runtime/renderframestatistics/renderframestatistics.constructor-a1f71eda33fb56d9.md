---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a1f71eda33fb56d9115497ed0ea00b8f96702647db718cce4ee9db411b146c66
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderFrameStatistics.#ctor(System.UInt64,System.Int32,System.Int32,System.Int32,System.Int32,System.Nullable{InnoEngine.Rendering.RenderDeviceAllocationCounters},System.Int32)
title: RenderFrameStatistics.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: 4e9d530e9a98f480d213b17714034c533bb633878678fb59cc3eb6b36ba6c832
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `frameIndex`:** Monotonic render frame index.

**Parameter `viewCount`:** Executed logical view count.

**Parameter `drawCount`:** Recorded draw count.

**Parameter `dispatchCount`:** Recorded compute dispatch count.

**Parameter `culledPassCount`:** Passes removed by graph compilation.

**Parameter `allocationCounters`:** Device-generation cumulative transient allocations at frame completion, or null when unavailable.

**Parameter `graphCompileCount`:** Complete graph compilation attempts for this frame, excluding validation-only analysis.
