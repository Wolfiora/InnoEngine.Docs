---
uid: api.c7fee03ff9bc2ab0dadad11e00ce94485026e3b7e591675a005721e41b7853db
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioMixerBuilder.AddProcessor(Inno.Audio.AudioBusId,Inno.Audio.AudioProcessorConfiguration)"
source: xml
reviewed: 037dee0079805dd82665a8c94be8417492296e1a8934241db00cb9ec836ee739
title: "AudioMixerBuilder.AddProcessor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Appends one processor to an existing bus chain.

**Parameter `bus`:** Existing bus identifier.

**Parameter `processor`:** Immutable processor configuration to append.

**Exception `T:System.Collections.Generic.KeyNotFoundException`:** Thrown when the bus is not defined.
