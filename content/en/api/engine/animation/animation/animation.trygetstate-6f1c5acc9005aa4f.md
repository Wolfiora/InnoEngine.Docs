---
uid: api.6f1c5acc9005aa4f4a8482be4a1c825f0fedcc2d756f90856c366cd9f41cc8db
symbol: "engine:Inno.Animation:M:Inno.Animation.Animation.TryGetState(Inno.Animation.AnimationPlaybackHandle,Inno.Animation.AnimationPlaybackState@,System.Single@)"
source: xml
reviewed: f77e74d11b23f9eef5c03dde64900834bb74dfb063c7c511493fa21862fcafaf
title: "Animation.TryGetState"
kind: api
owners: [Inno.Animation]
apiSurface: source-clr
---

Tries to read one live playback's state and position.

## Parameters

**Parameter `handle`:** Playback handle to query.

**Parameter `state`:** Receives current playback state.

**Parameter `time`:** Receives clip-local time in seconds.

## Returns

`true` when the handle was live.
