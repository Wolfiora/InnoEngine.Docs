---
uid: api.bf6ec77ea5740413d167bbaa44b57f3f9400401d83b296619819d7a9e228ea1a
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderDeviceAllocationCounters.#ctor(System.UInt32,System.UInt64,System.UInt64,System.UInt64)"
source: xml
reviewed: 27a123a0f3e30801afef31cb571e5da29c62db98cb942f4b5186bb09b3a88532
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Creates an immutable allocation snapshot scoped to one device generation.

**Parameter `deviceGeneration`:** Non-zero generation that owns the measured pools; counters restart for a new generation.

**Parameter `textureAllocations`:** Successful native transient texture allocations since device creation.

**Parameter `bufferAllocations`:** Successful native transient buffer allocations since device creation.

**Parameter `frameBufferAllocations`:** Successful native transient attachment framebuffer allocations since device creation.

**Exception `T:System.ArgumentOutOfRangeException`:** The device generation is zero.
