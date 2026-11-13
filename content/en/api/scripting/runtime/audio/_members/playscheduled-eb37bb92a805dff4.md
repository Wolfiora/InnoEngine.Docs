---
uid: api.eb37bb92a805dff4ed0e0667b3834caf1ddffcf60143e3e8fa1880ecd58fb13f
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.Audio.PlayScheduled(InnoEngine.Audio.AudioClipAsset,System.Double,InnoEngine.Audio.AudioPlayOptions)"
source: xml
reviewed: d05c96796c7576bebed49fbecf6e22897dd311f1fb9f5ada869aa1dd4d3f29b1
title: "PlayScheduled"
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
