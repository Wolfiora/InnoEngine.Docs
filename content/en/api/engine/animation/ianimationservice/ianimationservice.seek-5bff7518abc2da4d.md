---
uid: api.5bff7518abc2da4dbb3a5a03c80428474b9c3859dc211476db4b1adf816642bf
symbol: "engine:Inno.Animation:M:Inno.Animation.IAnimationService.Seek(Inno.Animation.AnimationPlaybackHandle,System.Single)"
source: xml
reviewed: 49e7b7d9513d168e61130d6eee1da535db4209e46874304ff14faf37ccce28d1
title: "IAnimationService.Seek"
kind: api
owners: [Inno.Animation]
apiSurface: source-clr
---

Seeks one live playback to a clip-local time.

## Parameters

**Parameter `handle`:** Playback handle from this runtime generation.

**Parameter `time`:** Finite clip-local time in seconds, clamped to the clip duration.

## Returns

`true` when the handle was live and the position was updated.
