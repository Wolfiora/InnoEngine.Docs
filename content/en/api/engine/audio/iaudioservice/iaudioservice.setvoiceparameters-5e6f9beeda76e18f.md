---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5e6f9beeda76e18f765af254ee279fa6df3df5f6c212bde60ad4e674847a96c0
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioService.SetVoiceParameters(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioVoiceParameters)
title: IAudioService.SetVoiceParameters
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: aa0dc1a590c436532caf6af050d7c417a3234b550d2cef4b3b8ca9c3c132cb23
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
