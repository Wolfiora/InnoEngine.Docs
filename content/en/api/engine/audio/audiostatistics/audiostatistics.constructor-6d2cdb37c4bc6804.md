---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6d2cdb37c4bc68048a75c7e8ab4ec635407e22720debaa0be2ec0683aeca5201
symbol: engine:Inno.Audio:M:Inno.Audio.AudioStatistics.#ctor(System.Int32,System.Int32,System.Int64,System.Int64)
title: AudioStatistics.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 7e34c7ed0ba613d9c1630f422d7feb4610ccef7ea500a33f68d337244dc219be
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `activeVoices`:** Voices that currently consume runtime budget.

**Parameter `loadedClips`:** Clip allocations held by the backend.

**Parameter `decodedBytes`:** Approximate decoded clip bytes held in memory.

**Parameter `stolenVoiceCount`:** Voices reclaimed since runtime creation.
