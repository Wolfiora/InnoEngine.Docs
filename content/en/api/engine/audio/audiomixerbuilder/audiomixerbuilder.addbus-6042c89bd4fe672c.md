---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6042c89bd4fe672c13cb64b5d222a3ae49e26fda7cc757a7e2d717c750c4d7f1
symbol: engine:Inno.Audio:M:Inno.Audio.AudioMixerBuilder.AddBus(Inno.Audio.AudioBusID,Inno.Audio.AudioBusID,System.Single,System.Boolean)
title: AudioMixerBuilder.AddBus
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 9dc645b4e205588e0c634348bfecf5b6888e6a705e3f430ed4a63b79d1e7d631
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
