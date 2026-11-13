---
uid: api.5bff7518abc2da4dbb3a5a03c80428474b9c3859dc211476db4b1adf816642bf
symbol: "engine:Inno.Animation:M:Inno.Animation.IAnimationService.Seek(Inno.Animation.AnimationPlaybackHandle,System.Single)"
source: xml
reviewed: 686f096b2d17de0360f9bf4169c3919b8e3f264db0ec0daba40c62f85103a969
title: "Seek"
kind: api
owners: [Inno.Animation]
apiSurface: source-clr
---

Seeks one live playback to a clip-local time.

**Parameter `handle`:** Playback handle from this runtime generation.

**Parameter `time`:** Finite clip-local time in seconds, clamped to the clip duration.

**Returns:** `true` when the handle was live and the position was updated.
