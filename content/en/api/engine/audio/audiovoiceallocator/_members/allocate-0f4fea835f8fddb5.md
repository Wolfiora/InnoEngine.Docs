---
uid: api.0f4fea835f8fddb5d5f56ce253532c98968c53f8261f1d671d105b1986adb966
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioVoiceAllocator.Allocate"
source: xml
reviewed: 8f15ed7ca439291526016c552ee0b9f237c7b99dea4128d04820e64c5a39eed3
title: "Allocate"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Allocates a unique service handle that cannot alias a different service's playback.

**Returns:** A new opaque playback handle; identities are never reused within this owner.

**Exception `T:System.OverflowException`:** The owner exhausted its playback identities.
