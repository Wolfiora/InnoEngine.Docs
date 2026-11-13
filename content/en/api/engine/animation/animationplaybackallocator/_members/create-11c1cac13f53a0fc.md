---
uid: api.11c1cac13f53a0fca1d5fe168dc0577a8852513e30b4d6b84290ea81aaa51960
symbol: "engine:Inno.Animation:M:Inno.Animation.AnimationPlaybackAllocator.Create(System.Int32,System.UInt32)"
source: xml
reviewed: 4cf95b8d5931ddce4df8284d0c9fdf57e07daab1a8c6fcd99769aed0c738097d
title: "Create"
kind: api
owners: [Inno.Animation]
apiSurface: source-clr
---

Encodes one owner-managed slot revision into an opaque playback handle.

**Parameter `slot`:** The non-negative slot owned by the runtime.

**Parameter `slotGeneration`:** The non-zero revision used to reject reused slots.

**Returns:** A playback handle that cannot alias a different allocator.

**Exception `T:System.ArgumentOutOfRangeException`:** The slot or its generation is invalid.
