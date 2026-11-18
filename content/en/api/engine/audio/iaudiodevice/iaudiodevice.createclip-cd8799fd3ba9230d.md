---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cd8799fd3ba9230d8bb244652bfce696d9ad9f0d46ac4726e0f2423f6c8d68fa
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioDevice.CreateClip(Inno.Audio.AudioClipDescriptor,Inno.Audio.IAudioClipSource)
title: IAudioDevice.CreateClip
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 9badf4e3991b23677496d86bcd459feeb4e00b846c4813fe2ab6be2089ef4c14
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `descriptor`:** Encoded artifact and preparation requirements.

**Parameter `source`:** The immutable encoded source, borrowed until successful clip retirement. Opening a stream must independently pin its content; the caller retains source ownership.

## Returns

A handle owned by the current device generation.
