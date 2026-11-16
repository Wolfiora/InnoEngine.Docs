---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.326bebb40e8a7dd910bca03471f46fe36dd0f5d5b5575df30c7900c91bcd1540
symbol: engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.TryGetState(Inno.Animation.AnimationPlaybackHandle,Inno.Animation.AnimationPlaybackState@,System.Single@)
title: AnimationRuntime.TryGetState
kind: api
owners:
- Inno.Animation.Runtime
apiSurface: source-clr
reviewed: 37dca0ccea55d28bc5a81cdf9c6831390b3556c7a0171adf003816532a1d06ee
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `handle`:** Playback handle produced by this runtime generation.

**Parameter `state`:** Receives the live playback state, or the default value when the handle is stale.

**Parameter `time`:** Receives clip-local time in seconds, or zero when the handle is stale.

## Returns

`true` when the handle identifies a live playback; otherwise, `false`.
