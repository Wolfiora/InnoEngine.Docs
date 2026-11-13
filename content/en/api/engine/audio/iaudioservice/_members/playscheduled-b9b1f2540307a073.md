---
uid: api.b9b1f2540307a07370953d18455cf01863b74fe4582551044c2ede70131e59b9
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioService.PlayScheduled(Inno.Audio.AudioClipAsset,System.Double,Inno.Audio.AudioPlayOptions)"
source: xml
reviewed: aaf76820d984575d7171d987f43d356481a696ffd6743213eae79bbc63b10969
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
