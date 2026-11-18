---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.326bebb40e8a7dd910bca03471f46fe36dd0f5d5b5575df30c7900c91bcd1540
symbol: engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.TryGetState(Inno.Animation.AnimationPlaybackHandle,Inno.Animation.AnimationPlaybackState@,System.Single@)
title: AnimationRuntime.TryGetState
kind: api
owners:
- Inno.Animation.Runtime
apiSurface: source-clr
sourceFingerprint: 2505295668e3e180392dcd1093b8d642848b8ea2b83c1bee41ee6445d56796cd
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
