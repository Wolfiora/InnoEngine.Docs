---
uid: api.e88ad5602cfb0ac38fee726e4013da19f170bcf2ae206151b897a8a710cc0012
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderDeviceAllocationCounters.#ctor(System.UInt32,System.UInt64,System.UInt64,System.UInt64)"
source: xml
reviewed: 8edba4254cf5cb819427f9455361fb7a40b8af4ed0e028064625818fdb7ca887
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates an immutable allocation snapshot scoped to one device generation.

**Parameter `deviceGeneration`:** Non-zero generation that owns the measured pools; counters restart for a new generation.

**Parameter `textureAllocations`:** Successful native transient texture allocations since device creation.

**Parameter `bufferAllocations`:** Successful native transient buffer allocations since device creation.

**Parameter `frameBufferAllocations`:** Successful native transient attachment framebuffer allocations since device creation.

**Exception `T:System.ArgumentOutOfRangeException`:** The device generation is zero.
