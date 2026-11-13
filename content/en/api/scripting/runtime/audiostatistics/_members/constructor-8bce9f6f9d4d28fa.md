---
uid: api.8bce9f6f9d4d28fa2de6f106b56f079608ef81e65e7ba8969799e1e71e18115b
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioStatistics.#ctor(System.Int32,System.Int32,System.Int64,System.Int64)"
source: xml
reviewed: 1ee23e746f019c7da6685fbfabdd7fcea16b6dffc81b05ac500064d23ef230c0
title: "Constructor"
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
