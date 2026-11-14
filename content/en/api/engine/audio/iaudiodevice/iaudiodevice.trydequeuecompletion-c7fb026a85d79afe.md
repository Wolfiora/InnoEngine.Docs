---
uid: api.c7fb026a85d79afe9de3b4e7be80c632c4855eb7fab12a3e4dc9767152e2ee0e
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.TryDequeueCompletion(Inno.Audio.AudioDeviceCompletion@)"
source: xml
reviewed: 6f28ba983b898c48ce3d5e0a660717a0013bb9936a1c67e9d56ebc6dfb1291ce
title: "IAudioDevice.TryDequeueCompletion"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Tries to consume one terminal voice transition recorded by the backend.

## Parameters

**Parameter `completion`:** Receives one terminal transition when available.

## Returns

`true` when a completion was dequeued.
