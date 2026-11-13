---
uid: api.83d78a2f8dbb4ad68da811af1687097e6252e9cc149126bee237792445c37c9c
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.Play(Inno.Audio.AudioClipAsset,Inno.Audio.AudioPlayOptions)"
source: xml
reviewed: 71e966d287854b0a78c24a9437e0ed8fbd5d2a479026b873998e6bc66486272d
title: "Play"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Starts one clip using explicit playback parameters.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A preparing voice handle owned by the current device generation.

**Exception `T:System.ArgumentException`:** Playback options are uninitialized. The request is rejected before asset acquisition or voice stealing.
