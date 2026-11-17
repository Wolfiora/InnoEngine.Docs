---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0b97217179bf8be0120f9ffa1aa73f007a814430ae29a4a7a4aaa43752d153d2
symbol: engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.Seek(Inno.Animation.AnimationPlaybackHandle,System.Single)
title: AnimationRuntime.Seek
kind: api
owners:
- Inno.Animation.Runtime
apiSurface: source-clr
reviewed: ba173de187797feddf511ba995e3b7cbfa506ed2c0a1d5e006c20d914fc9ed7e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `handle`:** Playback handle produced by this runtime generation.

**Parameter `time`:** Finite clip-local time in seconds.

## Returns

`true` when the handle was live and its time was updated; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `time` is not finite.
