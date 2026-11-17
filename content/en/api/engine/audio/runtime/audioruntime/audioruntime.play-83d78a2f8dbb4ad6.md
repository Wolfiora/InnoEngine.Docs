---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.83d78a2f8dbb4ad68da811af1687097e6252e9cc149126bee237792445c37c9c
symbol: engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.Play(Inno.Audio.AudioClipAsset,Inno.Audio.AudioPlayOptions)
title: AudioRuntime.Play
kind: api
owners:
- Inno.Audio.Runtime
apiSurface: source-clr
reviewed: 91f92cc367810100f4a786e7b6d0da695cf6f8ce5a538d16adcfc5ce51e16256
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

A preparing voice handle owned by the current device generation.

## Exceptions

**Exception `T:System.ArgumentException`:** Playback options are uninitialized. The request is rejected before asset acquisition or voice stealing.
