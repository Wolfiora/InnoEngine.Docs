---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ef2112a03e4c78f69656041918ec139d928ff24f9d48524ba50631c9ebc4f47a
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioVoiceParameters.#ctor(System.Single,System.Single,System.Single,System.Nullable{InnoEngine.Audio.AudioSpatialOptions})
title: AudioVoiceParameters.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: f956e37ab20d0d8af501f6aec153395a71a12c58c36e1bd6f9f82e434b39d578
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `volume`:** Linear voice gain.

**Parameter `pitch`:** Playback-rate multiplier.

**Parameter `pan`:** Stereo pan from negative one to positive one.

**Parameter `spatial`:** Optional spatial playback parameters.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Gain, pitch, or pan is non-finite or outside its valid range.
