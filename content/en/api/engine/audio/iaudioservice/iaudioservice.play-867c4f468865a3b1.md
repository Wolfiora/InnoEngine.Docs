---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.867c4f468865a3b1e5dacb17dd97d19e2b8ff501bb7bf1e8fad20966b94030e3
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioService.Play(Inno.Audio.AudioClipAsset,Inno.Audio.AudioPlayOptions)
title: IAudioService.Play
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 6ae68976dd12aaf7df2c2c4a5e2b27628a72ac953e8de12e277b56de07c54e98
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
