---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.626fbed534ca23128a5b53d94be9111c804c90b48418b0f329974cd7bb0551e6
symbol: engine:Inno.Audio:M:Inno.Audio.AudioBusDefinition.#ctor(Inno.Audio.AudioBusID,System.Nullable{Inno.Audio.AudioBusID},System.Single,System.Boolean,System.Collections.Generic.IEnumerable{Inno.Audio.AudioProcessorConfiguration})
title: AudioBusDefinition.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 562bcd77ee4612512dcb824b9238e3970fa6c5f76116392839299836b457c580
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable bus identifier.

**Parameter `parent`:** Parent bus identifier, or `null` only for the master bus.

**Parameter `volume`:** Non-negative linear bus gain.

**Parameter `muted`:** Whether output from the bus is initially silenced.

**Parameter `processors`:** Ordered processor chain.
