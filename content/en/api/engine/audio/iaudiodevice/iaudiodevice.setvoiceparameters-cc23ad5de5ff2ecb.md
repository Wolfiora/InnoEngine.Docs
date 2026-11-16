---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cc23ad5de5ff2ecb284c5f34298ac9721c63c2dcc9c38bdff2e5f6158641bc5a
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioDevice.SetVoiceParameters(Inno.Audio.AudioDeviceVoiceHandle,Inno.Audio.AudioVoiceParameters)
title: IAudioDevice.SetVoiceParameters
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 8c771069e786fa957033f8c72d570f49d60c77b84cabdf4e69d6f3aba379ba34
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
