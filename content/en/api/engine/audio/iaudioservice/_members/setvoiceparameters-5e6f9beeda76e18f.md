---
uid: api.5e6f9beeda76e18f765af254ee279fa6df3df5f6c212bde60ad4e674847a96c0
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioService.SetVoiceParameters(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioVoiceParameters)"
source: xml
reviewed: 6c57fe9f34067c1eed0ff7f057c5f2ff9009c74143628e7f3bf8f95944f6fd3f
title: "SetVoiceParameters"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Replaces mutable parameters for a live voice.

**Parameter `voice`:** Voice handle to update.

**Parameter `parameters`:** Current voice parameter snapshot.

**Returns:** `true` when a live voice was updated; false for stale handles or uninitialized parameters.
