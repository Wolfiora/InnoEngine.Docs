---
uid: api.c7fb026a85d79afe9de3b4e7be80c632c4855eb7fab12a3e4dc9767152e2ee0e
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.TryDequeueCompletion(Inno.Audio.AudioDeviceCompletion@)"
source: xml
reviewed: ceadb138e6d7894e58564ce22fe9e8ac8f42c52efeaa05031a04bf48b8b5a3f8
title: "TryDequeueCompletion"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Tries to consume one terminal voice transition recorded by the backend.

**Parameter `completion`:** Receives one terminal transition when available.

**Returns:** `true` when a completion was dequeued.
