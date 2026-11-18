---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ae667d59ed4ad3b91f997bab9a17c0d146225ed9173222cf73b0f16ad2d3c68a
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioBusDefinition.#ctor(InnoEngine.Audio.AudioBusId,System.Nullable{InnoEngine.Audio.AudioBusId},System.Single,System.Boolean,System.Collections.Generic.IEnumerable{InnoEngine.Audio.AudioProcessorConfiguration})
title: AudioBusDefinition.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: a6e27c147bf8b4bea517b5d371f4e880bad515193945654600dec3a1065bc808
apiScope: Runtime
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
