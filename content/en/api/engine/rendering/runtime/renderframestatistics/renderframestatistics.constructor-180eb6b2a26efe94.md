---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.180eb6b2a26efe943ee0b1087493331105cb4aeb4d456c2fdee84341fea77edb
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderFrameStatistics.#ctor(System.UInt64,System.Int32,System.Int32,System.Int32,System.Int32,System.Nullable{Inno.Rendering.RenderDeviceAllocationCounters},System.Int32)
title: RenderFrameStatistics.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 4b0c8576c47c4268a17d6805ea32c633016e72702e11208f3db956188213cde1
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
