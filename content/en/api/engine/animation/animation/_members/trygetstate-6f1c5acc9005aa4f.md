---
uid: api.6f1c5acc9005aa4f4a8482be4a1c825f0fedcc2d756f90856c366cd9f41cc8db
symbol: "engine:Inno.Animation:M:Inno.Animation.Animation.TryGetState(Inno.Animation.AnimationPlaybackHandle,Inno.Animation.AnimationPlaybackState@,System.Single@)"
source: xml
reviewed: ae10b6ab371537853a75a097ba05fa1e335af2b9fa63f1e099c03fb614164e08
title: "TryGetState"
kind: api
owners: [Inno.Animation]
apiSurface: source-clr
---

Tries to read one live playback's state and position.

**Parameter `handle`:** Playback handle to query.

**Parameter `state`:** Receives current playback state.

**Parameter `time`:** Receives clip-local time in seconds.

**Returns:** `true` when the handle was live.
