---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.867c4f468865a3b1e5dacb17dd97d19e2b8ff501bb7bf1e8fad20966b94030e3
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioService.Play(Inno.Audio.AudioClipAsset,Inno.Audio.AudioPlayOptions)
title: IAudioService.Play
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: c6d683b3d7bf8c02ea83ea63bc19c6427241aac31c9fb18a152df35a9c5c18ac
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `options`:** Immutable playback parameters.

## Returns

A voice handle that may initially be in the preparing state.

## Exceptions

**Exception `T:System.ArgumentException`:** Playback options are uninitialized; construct options instead of passing a default struct.
