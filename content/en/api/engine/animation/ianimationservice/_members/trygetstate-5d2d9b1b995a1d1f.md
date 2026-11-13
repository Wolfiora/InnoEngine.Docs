---
uid: api.5d2d9b1b995a1d1f9e73eb73348e591baf5bcfa421f68ec0d600ad10949a187b
symbol: "engine:Inno.Animation:M:Inno.Animation.IAnimationService.TryGetState(Inno.Animation.AnimationPlaybackHandle,Inno.Animation.AnimationPlaybackState@,System.Single@)"
source: xml
reviewed: be4d6a3639857437014c72b9d82352a4c533713083a96f353586f663b651d3b2
title: "TryGetState"
kind: api
owners: [Inno.Animation]
apiSurface: source-clr
---

Tries to read one live playback's state and position.

**Parameter `handle`:** Playback handle from this runtime generation.

**Parameter `state`:** Receives the current playback state when successful.

**Parameter `time`:** Receives the current clip-local time in seconds when successful.

**Returns:** `true` when the handle still identifies a live playback.
