---
uid: api.65e0e94e1deaebf4233b738b85bd0861e8734cc10bd14ecc9b08d35464e7a348
symbol: "engine:Inno.Audio:M:Inno.Audio.Audio.TryGetVoiceState(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioPlaybackState@)"
source: xml
reviewed: b35e20fcc16ddf0ed4c83cdc8d825820e4e87b96c474f9a3402bacd3490a60f9
title: "Audio.TryGetVoiceState"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Queries the current state of a voice.

## Parameters

**Parameter `voice`:** Voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

## Returns

`true` when the handle belongs to a known voice.
