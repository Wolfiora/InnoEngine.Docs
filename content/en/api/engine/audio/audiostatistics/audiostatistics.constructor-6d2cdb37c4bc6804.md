---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6d2cdb37c4bc68048a75c7e8ab4ec635407e22720debaa0be2ec0683aeca5201
symbol: engine:Inno.Audio:M:Inno.Audio.AudioStatistics.#ctor(System.Int32,System.Int32,System.Int64,System.Int64)
title: AudioStatistics.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 85378e5de2010b6d393cea5c2313889ead077acc66cabda37d87dd4d9487d2d4
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
