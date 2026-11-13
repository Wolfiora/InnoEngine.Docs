---
uid: api.6a4b8d06f822ab932ebdc5b5e80758629270d42896bbac9ac3413f75ab7b32b6
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.GetClipState(Inno.Audio.AudioClipHandle)"
source: xml
reviewed: 791c11a9c5e50bfcb07e8b4b5b79b285702d41721787f8743afa3e8ae20b2721
title: "GetClipState"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Queries asynchronous clip preparation without blocking the owner thread.

**Parameter `clip`:** A handle created by this device generation.

**Returns:** The preparation state, or Failed for a retired or invalid handle.
