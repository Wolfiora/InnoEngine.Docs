---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ae667d59ed4ad3b91f997bab9a17c0d146225ed9173222cf73b0f16ad2d3c68a
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioBusDefinition.#ctor(InnoEngine.Audio.AudioBusId,System.Nullable{InnoEngine.Audio.AudioBusId},System.Single,System.Boolean,System.Collections.Generic.IEnumerable{InnoEngine.Audio.AudioProcessorConfiguration})
title: AudioBusDefinition.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: f7ac18e69e43a3af74ace19a4fc049b4754223309653c131a71f2e07cddbc81d
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
