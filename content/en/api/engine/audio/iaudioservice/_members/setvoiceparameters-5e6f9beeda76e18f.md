---
uid: api.5e6f9beeda76e18f765af254ee279fa6df3df5f6c212bde60ad4e674847a96c0
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioService.SetVoiceParameters(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioVoiceParameters)"
source: xml
reviewed: bcecb56080c6dc97b708c1f0fb93026f76208a346990e6b015c6660c05ef3516
title: "SetVoiceParameters"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Replaces mutable parameters for a live voice.

**Parameter `voice`:** Voice handle to update.

**Parameter `parameters`:** Current voice parameter snapshot.

**Returns:** `true` when a live voice was updated; false for stale handles or uninitialized parameters.
