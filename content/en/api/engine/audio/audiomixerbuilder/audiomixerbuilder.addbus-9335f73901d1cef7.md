---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9335f73901d1cef730dbd2b853ef5e081a91b826a0b254e8a2da512367f7ae1b
symbol: engine:Inno.Audio:M:Inno.Audio.AudioMixerBuilder.AddBus(Inno.Audio.AudioBusId,Inno.Audio.AudioBusId,System.Single,System.Boolean)
title: AudioMixerBuilder.AddBus
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 733e537ffd5bac33bdf46adc5e1ca747b8d141f374c88f0a232e180fcaee7eca
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable bus identifier.

**Parameter `parent`:** Parent bus identifier.

**Parameter `volume`:** Initial non-negative linear gain.

**Parameter `muted`:** Whether output is initially silenced.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the bus identifier is invalid or duplicated.
