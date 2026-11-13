---
uid: api.84cceac27f13569806eca2514ef3986fcc662632f6e8e0b1355605d07a62ce46
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioService.TryGetVoiceState(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioPlaybackState@)"
source: xml
reviewed: 74c2d80993700f03894ccc2816f942c82f30092ef2b7b96e964b79b7dee7459c
title: "TryGetVoiceState"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Queries the current state of a voice.

**Parameter `voice`:** Voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

**Returns:** `true` when the handle belongs to a known voice.
