---
uid: api.e88ad5602cfb0ac38fee726e4013da19f170bcf2ae206151b897a8a710cc0012
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderDeviceAllocationCounters.#ctor(System.UInt32,System.UInt64,System.UInt64,System.UInt64)"
source: xml
reviewed: 018056203cff86830edd2ef2cc0a24aa197696ea41019df30f700eb449f3bfd1
title: "RenderDeviceAllocationCounters.Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates an immutable allocation snapshot scoped to one device generation.

## Parameters

**Parameter `deviceGeneration`:** Non-zero generation that owns the measured pools; counters restart for a new generation.

**Parameter `textureAllocations`:** Successful native transient texture allocations since device creation.

**Parameter `bufferAllocations`:** Successful native transient buffer allocations since device creation.

**Parameter `frameBufferAllocations`:** Successful native transient attachment framebuffer allocations since device creation.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The device generation is zero.
