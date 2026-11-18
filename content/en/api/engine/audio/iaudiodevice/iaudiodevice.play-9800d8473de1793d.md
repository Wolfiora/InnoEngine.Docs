---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9800d8473de1793dc19d3c7018b87d00d40e5b02f84f1fb3d85b67cdc9f6a020
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioDevice.Play(Inno.Audio.AudioClipHandle,Inno.Audio.AudioBusHandle,Inno.Audio.AudioPlayOptions,System.Nullable{System.Double})
title: IAudioDevice.Play
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 879eb52f09d33129b7cbfa2b2c0b6956316016115b43bab5f0e36f17e895bddd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `clip`:** Prepared clip owned by this device generation.

**Parameter `bus`:** Destination bus owned by this device generation.

**Parameter `options`:** Immutable playback parameters.

**Parameter `scheduledDspTime`:** Absolute audio-clock start time, or `null` for immediate playback.

## Returns

A new voice handle, or an invalid handle when options are uninitialized, scheduling is invalid, or backend preparation fails.
