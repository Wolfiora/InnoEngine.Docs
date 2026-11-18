---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fa354e93ff506359fb2af575f71e66cfb1c49202a2c5d854839a7ee22eebef61
symbol: engine:Inno.Audio:M:Inno.Audio.AudioListenerState.#ctor(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3)
title: AudioListenerState.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 60307f39fcefc2585b614b746a99ae38f42f3876823fa5036722dac4476f2426
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
