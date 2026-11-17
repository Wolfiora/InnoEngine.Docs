---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bf6ec77ea5740413d167bbaa44b57f3f9400401d83b296619819d7a9e228ea1a
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderDeviceAllocationCounters.#ctor(System.UInt32,System.UInt64,System.UInt64,System.UInt64)
title: RenderDeviceAllocationCounters.Constructor
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
reviewed: d3a6f0625d2c9eab776316afc5c7da910a5e0e5caeddf2e3dffdedf9b001b821
apiScope: Runtime
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
