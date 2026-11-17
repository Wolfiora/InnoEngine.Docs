---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5e6f9beeda76e18f765af254ee279fa6df3df5f6c212bde60ad4e674847a96c0
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioService.SetVoiceParameters(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioVoiceParameters)
title: IAudioService.SetVoiceParameters
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 9bbaaa50049b40173ed04931fcdbedd833858686d28065557c146b853ba95382
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `voice`:** Voice handle to update.

**Parameter `parameters`:** Current voice parameter snapshot.

## Returns

`true` when a live voice was updated; false for stale handles or uninitialized parameters.
