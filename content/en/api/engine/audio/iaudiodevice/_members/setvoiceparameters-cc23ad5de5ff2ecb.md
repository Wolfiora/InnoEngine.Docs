---
uid: api.cc23ad5de5ff2ecb284c5f34298ac9721c63c2dcc9c38bdff2e5f6158641bc5a
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.SetVoiceParameters(Inno.Audio.AudioDeviceVoiceHandle,Inno.Audio.AudioVoiceParameters)"
source: xml
reviewed: 79981dc929bfbba867c115a3034559202c4ab3b5de20a0e83458a317a7afd291
title: "SetVoiceParameters"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Replaces mutable parameters for a live voice.

**Parameter `voice`:** Voice owned by the current device generation.

**Parameter `parameters`:** Current voice parameter snapshot.

**Returns:** `true` when a live voice was updated; false for stale handles or uninitialized parameters.
