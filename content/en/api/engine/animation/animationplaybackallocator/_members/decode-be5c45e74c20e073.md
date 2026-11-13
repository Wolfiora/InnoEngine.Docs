---
uid: api.be5c45e74c20e073bfbe995f6322ef6d8aa185bf9ec58f16f7dd0bf99c9f806b
symbol: "engine:Inno.Animation:M:Inno.Animation.AnimationPlaybackAllocator.Decode(Inno.Animation.AnimationPlaybackHandle)"
source: xml
reviewed: 31c495927ec015275fee55df6d581ba7756d7d614a2ef05f68fcd25c8010d8a7
title: "Decode"
kind: api
owners: [Inno.Animation]
apiSurface: source-clr
---

Decodes only handles issued by this owner; slot liveness remains the runtime's responsibility.

**Parameter `handle`:** The opaque playback handle.

**Returns:** The slot and revision, or an invalid slot when the owner does not match.
