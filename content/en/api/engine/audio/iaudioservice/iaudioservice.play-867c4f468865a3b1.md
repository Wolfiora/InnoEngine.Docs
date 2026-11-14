---
uid: api.867c4f468865a3b1e5dacb17dd97d19e2b8ff501bb7bf1e8fad20966b94030e3
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioService.Play(Inno.Audio.AudioClipAsset,Inno.Audio.AudioPlayOptions)"
source: xml
reviewed: 7d4a3746643d265eadb95f7349940418c944bb87adfdea5aea397247a4fca4af
title: "IAudioService.Play"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Starts one clip using explicit playback parameters.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A voice handle that may initially be in the preparing state.

**Exception `T:System.ArgumentException`:** Playback options are uninitialized; construct options instead of passing a default struct.
