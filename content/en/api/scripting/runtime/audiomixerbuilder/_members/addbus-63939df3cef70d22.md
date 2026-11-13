---
uid: api.63939df3cef70d224087ddd8dbac4020622d42c83f53f359b66e4c70743fd80c
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioMixerBuilder.AddBus(InnoEngine.Audio.AudioBusId,InnoEngine.Audio.AudioBusId,System.Single,System.Boolean)"
source: xml
reviewed: 0344a8fc9682680d0150e4d79f9d6efc5b646aeeb5143a883bce176751fbdfa7
title: "AddBus"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Adds one semantic bus to the graph.

**Parameter `id`:** Stable bus identifier.

**Parameter `parent`:** Parent bus identifier.

**Parameter `volume`:** Initial non-negative linear gain.

**Parameter `muted`:** Whether output is initially silenced.

**Exception `T:System.ArgumentException`:** Thrown when the bus identifier is invalid or duplicated.
