---
uid: api.60c768d8a078ffda798fff4e01e77c2b291aa14799cd449e4df257ab7982731b
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioBusDefinition.#ctor(Inno.Audio.AudioBusId,System.Nullable{Inno.Audio.AudioBusId},System.Single,System.Boolean,System.Collections.Generic.IEnumerable{Inno.Audio.AudioProcessorConfiguration})"
source: xml
reviewed: 1df4035185561b4c608cfd6d6ec30222b013fce487a460214db184941b116393
title: "AudioBusDefinition.Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates an immutable mixer bus definition.

**Parameter `id`:** Stable bus identifier.

**Parameter `parent`:** Parent bus identifier, or `null` only for the master bus.

**Parameter `volume`:** Non-negative linear bus gain.

**Parameter `muted`:** Whether output from the bus is initially silenced.

**Parameter `processors`:** Ordered processor chain.
