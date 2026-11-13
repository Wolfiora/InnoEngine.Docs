---
uid: api.cd8799fd3ba9230d8bb244652bfce696d9ad9f0d46ac4726e0f2423f6c8d68fa
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.CreateClip(Inno.Audio.AudioClipDescriptor,Inno.Audio.IAudioClipSource)"
source: xml
reviewed: ba7a5b7d07e95514b64bd3fa2530e1b8248d2c647819c4a0f874cce845be450b
title: "CreateClip"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Starts preparation of one decoded or streamed clip from immutable encoded content.

**Parameter `descriptor`:** Encoded artifact and preparation requirements.

**Parameter `source`:** The immutable encoded source, borrowed until successful clip retirement. Opening a stream must independently pin its content; the caller retains source ownership.

**Returns:** A handle owned by the current device generation.
