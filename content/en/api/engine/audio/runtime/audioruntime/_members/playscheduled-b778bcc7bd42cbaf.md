---
uid: api.b778bcc7bd42cbafff92e771d3442ad291fad770afa305b4847349f9d82adab8
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.PlayScheduled(Inno.Audio.AudioClipAsset,System.Double,Inno.Audio.AudioPlayOptions)"
source: xml
reviewed: f06b376fbab83aa4b40d34d66dc69372ae229d71a3d952300f26d2ba816e0f6a
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
