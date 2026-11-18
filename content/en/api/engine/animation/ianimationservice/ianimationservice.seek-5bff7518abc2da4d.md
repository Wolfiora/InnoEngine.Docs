---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5bff7518abc2da4dbb3a5a03c80428474b9c3859dc211476db4b1adf816642bf
symbol: engine:Inno.Animation:M:Inno.Animation.IAnimationService.Seek(Inno.Animation.AnimationPlaybackHandle,System.Single)
title: IAnimationService.Seek
kind: api
owners:
- Inno.Animation
apiSurface: source-clr
sourceFingerprint: 2299ab5e33face23ed282377d712fa8312fc7907804c338a851bb6d94e12717e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `handle`:** Playback handle from this runtime generation.

**Parameter `time`:** Finite clip-local time in seconds, clamped to the clip duration.

## Returns

`true` when the handle was live and the position was updated.
