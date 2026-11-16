---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9800d8473de1793dc19d3c7018b87d00d40e5b02f84f1fb3d85b67cdc9f6a020
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioDevice.Play(Inno.Audio.AudioClipHandle,Inno.Audio.AudioBusHandle,Inno.Audio.AudioPlayOptions,System.Nullable{System.Double})
title: IAudioDevice.Play
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 57e6310910d9b98a9708072a59efbe72d5d66565f6bfd095d8940ae09ff85d83
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
