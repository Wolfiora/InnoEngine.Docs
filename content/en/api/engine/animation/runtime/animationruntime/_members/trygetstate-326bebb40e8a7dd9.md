---
uid: api.326bebb40e8a7dd910bca03471f46fe36dd0f5d5b5575df30c7900c91bcd1540
symbol: "engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.TryGetState(Inno.Animation.AnimationPlaybackHandle,Inno.Animation.AnimationPlaybackState@,System.Single@)"
source: xml
reviewed: 587f7c71f73263ac7706a51242e78ab413dc95f933d8be290d219d4bf7775cd1
title: "TryGetState"
kind: api
owners: [Inno.Animation.Runtime]
apiSurface: source-clr
---

Tries to read the state and clip-local time of one live playback.

**Parameter `handle`:** Playback handle produced by this runtime generation.

**Parameter `state`:** Receives the live playback state, or the default value when the handle is stale.

**Parameter `time`:** Receives clip-local time in seconds, or zero when the handle is stale.

**Returns:** `true` when the handle identifies a live playback; otherwise, `false`.
