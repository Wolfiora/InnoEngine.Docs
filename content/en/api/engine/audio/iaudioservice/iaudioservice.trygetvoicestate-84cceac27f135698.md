---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.84cceac27f13569806eca2514ef3986fcc662632f6e8e0b1355605d07a62ce46
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioService.TryGetVoiceState(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioPlaybackState@)
title: IAudioService.TryGetVoiceState
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 74c2d80993700f03894ccc2816f942c82f30092ef2b7b96e964b79b7dee7459c

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Queries the current state of a voice.

## Parameters

**Parameter `voice`:** Voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

## Returns

`true` when the handle belongs to a known voice.
