---
uid: api.f97e498c8d209321dcf6d348e7e7c944aa46d32da726343def258e5b8ef839bf
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.TryGetVoiceState(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioPlaybackState@)"
source: xml
reviewed: 99c616bb36ad8e3d9f8377f38852ade61e8473af36f05dccd3d13e87b7b2d5cc
title: "AudioRuntime.TryGetVoiceState"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Queries the current state of a runtime voice.

## Parameters

**Parameter `voice`:** Runtime voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

## Returns

`true` for active and terminal handles from this runtime generation.
