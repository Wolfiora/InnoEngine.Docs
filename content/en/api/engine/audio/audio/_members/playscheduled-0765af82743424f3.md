---
uid: api.0765af82743424f373c4462378206b522c067baa9e7a57119540552ab305c12a
symbol: "engine:Inno.Audio:M:Inno.Audio.Audio.PlayScheduled(Inno.Audio.AudioClipAsset,System.Double,Inno.Audio.AudioPlayOptions)"
source: xml
reviewed: 4744202832bb234e5e3f00836064dc4c48e413b7bd8d355da4002968744ac5ed
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
