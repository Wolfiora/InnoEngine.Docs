---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f8f3aeb3f42348895b8ed0062cb7f00248eebb113e4a4e6f9e843fa0fcf5da96
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioEmitterSnapshot.#ctor(System.Guid,InnoEngine.Audio.AudioClipAsset,InnoEngine.Audio.AudioPlayOptions,System.Boolean,System.UInt64)
title: AudioEmitterSnapshot.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: d5e6c0d0afe37662eab49738f053ec86cf9d591810f901d632b346c68d3f7e8f
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable emitter identity across updates.

**Parameter `clip`:** Imported clip requested by the emitter.

**Parameter `options`:** Current playback and spatial parameters.

**Parameter `shouldPlay`:** Whether the runtime should retain active playback for this emitter.

**Parameter `playbackRevision`:** Monotonic source-owned revision used to request a fresh voice for the same emitter.
