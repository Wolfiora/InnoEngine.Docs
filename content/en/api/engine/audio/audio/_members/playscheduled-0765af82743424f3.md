---
uid: api.0765af82743424f373c4462378206b522c067baa9e7a57119540552ab305c12a
symbol: "engine:Inno.Audio:M:Inno.Audio.Audio.PlayScheduled(Inno.Audio.AudioClipAsset,System.Double,Inno.Audio.AudioPlayOptions)"
source: xml
reviewed: 9d5c01a3e384f6a3b381598108cf5685a3f4923891d963080969f89ce8c72ddf
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
