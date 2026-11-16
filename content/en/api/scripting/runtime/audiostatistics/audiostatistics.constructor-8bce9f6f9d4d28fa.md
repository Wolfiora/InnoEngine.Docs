---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8bce9f6f9d4d28fa2de6f106b56f079608ef81e65e7ba8969799e1e71e18115b
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioStatistics.#ctor(System.Int32,System.Int32,System.Int64,System.Int64)
title: AudioStatistics.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: 6d887bdb0cddcffb0ab887fd2b88e7222e98759f5d0a49ff597a563f92bdf9ae
apiScope: Runtime
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
