---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.60c768d8a078ffda798fff4e01e77c2b291aa14799cd449e4df257ab7982731b
symbol: engine:Inno.Audio:M:Inno.Audio.AudioBusDefinition.#ctor(Inno.Audio.AudioBusId,System.Nullable{Inno.Audio.AudioBusId},System.Single,System.Boolean,System.Collections.Generic.IEnumerable{Inno.Audio.AudioProcessorConfiguration})
title: AudioBusDefinition.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 9071ebac7546275e1c2a0c6de8097038e71bc59362152e3a1d953a1242ca0769
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
