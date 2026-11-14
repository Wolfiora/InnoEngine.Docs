---
uid: api.7a3fc4c7a660ffe6d0813470c00aa4e127de22c2f08bdc09ac6b71feee4fd168
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.AddBusProcessor(Inno.Audio.AudioBusHandle,Inno.Audio.AudioProcessorConfiguration)"
source: xml
reviewed: 520a419264fc0f3ce694c7881118d78de0b4153c719356fe6ce7c6eee51e6b29
title: "IAudioDevice.AddBusProcessor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Appends one backend-neutral processor configuration to a bus chain.

## Parameters

**Parameter `bus`:** Bus owned by the current device generation.

**Parameter `processor`:** Open processor protocol and neutral parameter values.

## Returns

`true` when the backend recognized and attached the processor.
