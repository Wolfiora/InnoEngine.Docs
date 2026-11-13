---
uid: api.6289afb00d585fb5fcd3581deccec46672ea1bba0194f8002ce82356a7049770
symbol: "scripting:Inno.Animation:M:InnoEngine.Animation.Animation.TryGetState(InnoEngine.Animation.AnimationPlaybackHandle,InnoEngine.Animation.AnimationPlaybackState@,System.Single@)"
source: xml
reviewed: 7fe64691e0972f87063bd86d110743f9202e4582f83d10181d1a4f37c182319c
title: "TryGetState"
kind: api
owners: [Inno.Animation]
apiSurface: editor-script
apiScope: Runtime
---

Tries to read one live playback's state and position.

**Parameter `handle`:** Playback handle to query.

**Parameter `state`:** Receives current playback state.

**Parameter `time`:** Receives clip-local time in seconds.

**Returns:** `true` when the handle was live.
