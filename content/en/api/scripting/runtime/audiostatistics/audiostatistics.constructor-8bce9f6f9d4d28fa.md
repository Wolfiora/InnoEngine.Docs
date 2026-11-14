---
uid: api.8bce9f6f9d4d28fa2de6f106b56f079608ef81e65e7ba8969799e1e71e18115b
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioStatistics.#ctor(System.Int32,System.Int32,System.Int64,System.Int64)"
source: xml
reviewed: 5d1417a3d3baccb9f1c3f15e27bb2d9afbd6460a911351fb2b3f04ae7a2c758a
title: "AudioStatistics.Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Creates an audio statistics snapshot.

**Parameter `activeVoices`:** Voices that currently consume runtime budget.

**Parameter `loadedClips`:** Clip allocations held by the backend.

**Parameter `decodedBytes`:** Approximate decoded clip bytes held in memory.

**Parameter `stolenVoiceCount`:** Voices reclaimed since runtime creation.
