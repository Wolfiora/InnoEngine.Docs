---
uid: api.11c1cac13f53a0fca1d5fe168dc0577a8852513e30b4d6b84290ea81aaa51960
symbol: "engine:Inno.Animation:M:Inno.Animation.AnimationPlaybackAllocator.Create(System.Int32,System.UInt32)"
source: xml
reviewed: 0c8fbdc897abb2bf59b91634588fef729a55e75be78b53a21ed57e76cf68b866
title: "AnimationPlaybackAllocator.Create"
kind: api
owners: [Inno.Animation]
apiSurface: source-clr
---

Encodes one owner-managed slot revision into an opaque playback handle.

**Parameter `slot`:** The non-negative slot owned by the runtime.

**Parameter `slotGeneration`:** The non-zero revision used to reject reused slots.

**Returns:** A playback handle that cannot alias a different allocator.

**Exception `T:System.ArgumentOutOfRangeException`:** The slot or its generation is invalid.
