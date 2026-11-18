---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bf6ec77ea5740413d167bbaa44b57f3f9400401d83b296619819d7a9e228ea1a
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderDeviceAllocationCounters.#ctor(System.UInt32,System.UInt64,System.UInt64,System.UInt64)
title: RenderDeviceAllocationCounters.Constructor
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
sourceFingerprint: ab4f8fba2d210442d2e0c212d1f4c09ea85ac3e94e22198729aa6360ee67a837
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
