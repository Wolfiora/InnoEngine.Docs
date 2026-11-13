---
uid: api.6d2cdb37c4bc68048a75c7e8ab4ec635407e22720debaa0be2ec0683aeca5201
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioStatistics.#ctor(System.Int32,System.Int32,System.Int64,System.Int64)"
source: xml
reviewed: d86639a9971a8e3679662ecd934bf831dc00447d5568d4108d90accf52bc8d60
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates an audio statistics snapshot.

**Parameter `activeVoices`:** Voices that currently consume runtime budget.

**Parameter `loadedClips`:** Clip allocations held by the backend.

**Parameter `decodedBytes`:** Approximate decoded clip bytes held in memory.

**Parameter `stolenVoiceCount`:** Voices reclaimed since runtime creation.
