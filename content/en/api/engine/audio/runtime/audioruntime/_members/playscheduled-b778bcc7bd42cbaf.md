---
uid: api.b778bcc7bd42cbafff92e771d3442ad291fad770afa305b4847349f9d82adab8
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.PlayScheduled(Inno.Audio.AudioClipAsset,System.Double,Inno.Audio.AudioPlayOptions)"
source: xml
reviewed: 9f53b71d88a702ed086481da1d5f93e359b2d99c39744f5f0d25519c913d2f8b
title: "PlayScheduled"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Schedules one clip against the monotonic audio clock.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `scheduledDspTime`:** Absolute audio-clock start time in seconds.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A preparing voice handle owned by the current device generation.
