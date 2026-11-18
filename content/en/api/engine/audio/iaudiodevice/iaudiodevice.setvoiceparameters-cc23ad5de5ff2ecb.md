---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cc23ad5de5ff2ecb284c5f34298ac9721c63c2dcc9c38bdff2e5f6158641bc5a
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioDevice.SetVoiceParameters(Inno.Audio.AudioDeviceVoiceHandle,Inno.Audio.AudioVoiceParameters)
title: IAudioDevice.SetVoiceParameters
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 16633620dc5bba4bbc5bd561e5c7e17137d97c3019af40b9bc2c4e5bd04635d1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `voice`:** Voice owned by the current device generation.

**Parameter `parameters`:** Current voice parameter snapshot.

## Returns

`true` when a live voice was updated; false for stale handles or uninitialized parameters.
