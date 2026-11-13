---
uid: api.f97e498c8d209321dcf6d348e7e7c944aa46d32da726343def258e5b8ef839bf
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.TryGetVoiceState(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioPlaybackState@)"
source: xml
reviewed: fe18a68b62be4fabc47a9c14d61db3a460c71df2af16dfe067877092554ad7d7
title: "TryGetVoiceState"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Queries the current state of a runtime voice.

**Parameter `voice`:** Runtime voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

**Returns:** `true` for active and terminal handles from this runtime generation.
