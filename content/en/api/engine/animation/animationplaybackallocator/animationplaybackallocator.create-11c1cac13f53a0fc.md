---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.11c1cac13f53a0fca1d5fe168dc0577a8852513e30b4d6b84290ea81aaa51960
symbol: engine:Inno.Animation:M:Inno.Animation.AnimationPlaybackAllocator.Create(System.Int32,System.UInt32)
title: AnimationPlaybackAllocator.Create
kind: api
owners:
- Inno.Animation
apiSurface: source-clr
sourceFingerprint: 889f17f5ac7169a44902720c42ce952918bbc1f473de5dd64dfab215dc002f53
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `slot`:** The non-negative slot owned by the runtime.

**Parameter `slotGeneration`:** The non-zero revision used to reject reused slots.

## Returns

A playback handle that cannot alias a different allocator.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The slot or its generation is invalid.
