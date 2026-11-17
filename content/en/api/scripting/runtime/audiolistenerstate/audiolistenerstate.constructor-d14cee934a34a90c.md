---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d14cee934a34a90cb6162766306374f34c0f78caee69a55fa65649401414fae8
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioListenerState.#ctor(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3)
title: AudioListenerState.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: 94dd4fcbcb8c18e748fdb8e0896d6c6d69e3d003f5277aa9f6b8934886712e95
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `position`:** World-space listener position.

**Parameter `direction`:** World-space listener forward direction.

**Parameter `up`:** World-space listener up direction.

**Parameter `velocity`:** World-space listener velocity.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Any position, direction, up, or velocity component is non-finite.
