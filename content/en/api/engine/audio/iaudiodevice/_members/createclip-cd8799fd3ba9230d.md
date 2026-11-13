---
uid: api.cd8799fd3ba9230d8bb244652bfce696d9ad9f0d46ac4726e0f2423f6c8d68fa
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.CreateClip(Inno.Audio.AudioClipDescriptor,Inno.Audio.IAudioClipSource)"
source: xml
reviewed: 83e9babfde894da9a8720fb5c1e4af13063abde419bd6d4f11846887b449fdac
title: "CreateClip"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Starts preparation of one decoded or streamed clip from immutable encoded content.

**Parameter `descriptor`:** Encoded artifact and preparation requirements.

**Parameter `source`:** The immutable encoded source, borrowed until successful clip retirement. Opening a stream must independently pin its content; the caller retains source ownership.

**Returns:** A handle owned by the current device generation.
