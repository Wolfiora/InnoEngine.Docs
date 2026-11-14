---
uid: api.ceeaaaed6221c61ea0f5ce9bf84203aa2b622551b52758b56c5384b92e735211
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioMixerBuilder.AddProcessor(InnoEngine.Audio.AudioBusId,InnoEngine.Audio.AudioProcessorConfiguration)"
source: xml
reviewed: 04fd5ac84a37c8bcd325550f6a6bf2f6170964ad67d857fdce8e01bd72e2a94a
title: "AudioMixerBuilder.AddProcessor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Appends one processor to an existing bus chain.

## Parameters

**Parameter `bus`:** Existing bus identifier.

**Parameter `processor`:** Immutable processor configuration to append.

## Exceptions

**Exception `T:System.Collections.Generic.KeyNotFoundException`:** Thrown when the bus is not defined.
