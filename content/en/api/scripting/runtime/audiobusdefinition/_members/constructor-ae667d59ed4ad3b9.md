---
uid: api.ae667d59ed4ad3b91f997bab9a17c0d146225ed9173222cf73b0f16ad2d3c68a
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioBusDefinition.#ctor(InnoEngine.Audio.AudioBusId,System.Nullable{InnoEngine.Audio.AudioBusId},System.Single,System.Boolean,System.Collections.Generic.IEnumerable{InnoEngine.Audio.AudioProcessorConfiguration})"
source: xml
reviewed: d93bb9c5635a9862bdde8a3180e56434d20cb5df803f96630bb17c1cbfc796c4
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Creates an immutable mixer bus definition.

**Parameter `id`:** Stable bus identifier.

**Parameter `parent`:** Parent bus identifier, or `null` only for the master bus.

**Parameter `volume`:** Non-negative linear bus gain.

**Parameter `muted`:** Whether output from the bus is initially silenced.

**Parameter `processors`:** Ordered processor chain.
