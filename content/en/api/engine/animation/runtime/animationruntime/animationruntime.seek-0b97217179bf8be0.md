---
uid: api.0b97217179bf8be0120f9ffa1aa73f007a814430ae29a4a7a4aaa43752d153d2
symbol: "engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.Seek(Inno.Animation.AnimationPlaybackHandle,System.Single)"
source: xml
reviewed: 2370a3f24be3f1b19deec69be76c114f6324e71949662ab00b0ccd323b1a8fa9
title: "AnimationRuntime.Seek"
kind: api
owners: [Inno.Animation.Runtime]
apiSurface: source-clr
---

Seeks one live playback to a clamped clip-local time.

**Parameter `handle`:** Playback handle produced by this runtime generation.

**Parameter `time`:** Finite clip-local time in seconds.

**Returns:** `true` when the handle was live and its time was updated; otherwise, `false`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `time` is not finite.
