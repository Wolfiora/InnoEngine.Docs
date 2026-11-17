---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fa354e93ff506359fb2af575f71e66cfb1c49202a2c5d854839a7ee22eebef61
symbol: engine:Inno.Audio:M:Inno.Audio.AudioListenerState.#ctor(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3)
title: AudioListenerState.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 0d8efd8fd4c2a41d1f8706e1cd91aa836f28f162fcb9f038f48bb1d1821c04cd
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
