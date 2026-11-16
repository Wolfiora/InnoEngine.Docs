---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e88ad5602cfb0ac38fee726e4013da19f170bcf2ae206151b897a8a710cc0012
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderDeviceAllocationCounters.#ctor(System.UInt32,System.UInt64,System.UInt64,System.UInt64)
title: RenderDeviceAllocationCounters.Constructor
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: e61d8c0a9148d0414380f2a2767090ec6e715cb3b90ecdbca833c1033b7d7847
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `deviceGeneration`:** Non-zero generation that owns the measured pools; counters restart for a new generation.

**Parameter `textureAllocations`:** Successful native transient texture allocations since device creation.

**Parameter `bufferAllocations`:** Successful native transient buffer allocations since device creation.

**Parameter `frameBufferAllocations`:** Successful native transient attachment framebuffer allocations since device creation.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The device generation is zero.
