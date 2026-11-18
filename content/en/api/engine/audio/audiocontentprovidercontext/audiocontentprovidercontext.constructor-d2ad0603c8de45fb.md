---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d2ad0603c8de45fb027997c972052517031e148e2725d5e79eecfb9b4e631b60
symbol: engine:Inno.Audio:M:Inno.Audio.AudioContentProviderContext.#ctor(Inno.References.ContentReadScope,System.Single,System.Int32)
title: AudioContentProviderContext.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: b6c55a4d992a2286fa782529db7ed395a0e9c833b53399e82c487ae44d71fbc1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `content`:** The caller-owned identity read scope.

**Parameter `deltaTime`:** Finite non-negative time elapsed since the previous update.

**Parameter `capacity`:** Maximum combined emitter and listener count accepted by this contribution. Zero permits an empty contribution only.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The elapsed time is invalid or capacity is negative.

**Exception `T:System.ArgumentNullException`:** The borrowed content scope is null.
