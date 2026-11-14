---
uid: api.cc23ad5de5ff2ecb284c5f34298ac9721c63c2dcc9c38bdff2e5f6158641bc5a
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.SetVoiceParameters(Inno.Audio.AudioDeviceVoiceHandle,Inno.Audio.AudioVoiceParameters)"
source: xml
reviewed: b7e1a0bab0ef99f77071957ee1a0aa5d34d90aae9e48050d1c38988d59384646
title: "IAudioDevice.SetVoiceParameters"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Replaces mutable parameters for a live voice.

## Parameters

**Parameter `voice`:** Voice owned by the current device generation.

**Parameter `parameters`:** Current voice parameter snapshot.

## Returns

`true` when a live voice was updated; false for stale handles or uninitialized parameters.
