---
uid: api.b9b1f2540307a07370953d18455cf01863b74fe4582551044c2ede70131e59b9
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioService.PlayScheduled(Inno.Audio.AudioClipAsset,System.Double,Inno.Audio.AudioPlayOptions)"
source: xml
reviewed: 9e45b2102c2a36bb38f4e3c8e6f37d3deed1c44565ac4aec9494aedc15d98f84
title: "PlayScheduled"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Schedules one clip against the monotonic audio clock.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `scheduledDspTime`:** Absolute audio-clock start time in seconds.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A voice handle in preparing or scheduled state.
