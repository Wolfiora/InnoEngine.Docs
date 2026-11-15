---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6d2cdb37c4bc68048a75c7e8ab4ec635407e22720debaa0be2ec0683aeca5201
symbol: engine:Inno.Audio:M:Inno.Audio.AudioStatistics.#ctor(System.Int32,System.Int32,System.Int64,System.Int64)
title: AudioStatistics.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: a3d98c289be105af9a81a3a9a9e4d7e8a772585fd71f425ae907edb5d52d431e

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates an audio statistics snapshot.

## Parameters

**Parameter `activeVoices`:** Voices that currently consume runtime budget.

**Parameter `loadedClips`:** Clip allocations held by the backend.

**Parameter `decodedBytes`:** Approximate decoded clip bytes held in memory.

**Parameter `stolenVoiceCount`:** Voices reclaimed since runtime creation.
