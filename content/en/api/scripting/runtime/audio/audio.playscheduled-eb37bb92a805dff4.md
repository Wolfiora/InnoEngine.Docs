---
uid: api.eb37bb92a805dff4ed0e0667b3834caf1ddffcf60143e3e8fa1880ecd58fb13f
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.Audio.PlayScheduled(InnoEngine.Audio.AudioClipAsset,System.Double,InnoEngine.Audio.AudioPlayOptions)"
source: xml
reviewed: 0f6c233d19a7e60dfe27e0efd1fd3f04d94b28d2f4fb028634232e971d590b70
title: "Audio.PlayScheduled"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Schedules one clip against the monotonic audio clock.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `scheduledDspTime`:** Absolute audio-clock start time in seconds.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A voice handle in preparing or scheduled state.
