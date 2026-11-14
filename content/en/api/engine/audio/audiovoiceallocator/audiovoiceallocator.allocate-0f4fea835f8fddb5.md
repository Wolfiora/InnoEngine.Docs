---
uid: api.0f4fea835f8fddb5d5f56ce253532c98968c53f8261f1d671d105b1986adb966
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioVoiceAllocator.Allocate"
source: xml
reviewed: 4964fa7e9d2ef01b30912b2b7be0a138001005f177feaa1d5b3802c3f37d9c09
title: "AudioVoiceAllocator.Allocate"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Allocates a unique service handle that cannot alias a different service's playback.

**Returns:** A new opaque playback handle; identities are never reused within this owner.

**Exception `T:System.OverflowException`:** The owner exhausted its playback identities.
