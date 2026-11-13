---
uid: api.f7ee7f27bf30a9be2f71d710e9d93d0e7522d6fddf43cad3f0dd1686f495554f
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.TryGetVoiceState(Inno.Audio.AudioDeviceVoiceHandle,Inno.Audio.AudioPlaybackState@)"
source: xml
reviewed: 3b54c519e85eb58e9a18ba10806387b2ebdcc6aac931505fa68a16038dba738d
title: "TryGetVoiceState"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Queries the current playback state for a voice.

**Parameter `voice`:** Voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

**Returns:** `true` when the handle belongs to a known voice.
