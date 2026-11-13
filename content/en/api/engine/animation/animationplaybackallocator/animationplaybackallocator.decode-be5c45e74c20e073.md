---
uid: api.be5c45e74c20e073bfbe995f6322ef6d8aa185bf9ec58f16f7dd0bf99c9f806b
symbol: "engine:Inno.Animation:M:Inno.Animation.AnimationPlaybackAllocator.Decode(Inno.Animation.AnimationPlaybackHandle)"
source: xml
reviewed: f000a13cf7fc8ca860d75edf3cfe34cf4ed8d49a166b1e36f4e6b7b71fc12f70
title: "AnimationPlaybackAllocator.Decode"
kind: api
owners: [Inno.Animation]
apiSurface: source-clr
---

Decodes only handles issued by this owner; slot liveness remains the runtime's responsibility.

**Parameter `handle`:** The opaque playback handle.

**Returns:** The slot and revision, or an invalid slot when the owner does not match.
