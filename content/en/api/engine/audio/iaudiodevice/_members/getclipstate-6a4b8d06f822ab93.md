---
uid: api.6a4b8d06f822ab932ebdc5b5e80758629270d42896bbac9ac3413f75ab7b32b6
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.GetClipState(Inno.Audio.AudioClipHandle)"
source: xml
reviewed: 692da0a39f70b48d2661c195a0840de9446d2037704bc6029138f71aaecfe9d2
title: "GetClipState"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Queries asynchronous clip preparation without blocking the owner thread.

**Parameter `clip`:** A handle created by this device generation.

**Returns:** The preparation state, or Failed for a retired or invalid handle.
