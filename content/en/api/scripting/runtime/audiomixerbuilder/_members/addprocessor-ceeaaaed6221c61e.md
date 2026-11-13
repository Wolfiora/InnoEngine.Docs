---
uid: api.ceeaaaed6221c61ea0f5ce9bf84203aa2b622551b52758b56c5384b92e735211
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioMixerBuilder.AddProcessor(InnoEngine.Audio.AudioBusId,InnoEngine.Audio.AudioProcessorConfiguration)"
source: xml
reviewed: 2e43cf2911ce2066d620318bd54e33e82b85eeae3cc1fc3aac9399c26fcb1d9b
title: "AddProcessor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Appends one processor to an existing bus chain.

**Parameter `bus`:** Existing bus identifier.

**Parameter `processor`:** Immutable processor configuration to append.

**Exception `T:System.Collections.Generic.KeyNotFoundException`:** Thrown when the bus is not defined.
