---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ef2112a03e4c78f69656041918ec139d928ff24f9d48524ba50631c9ebc4f47a
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioVoiceParameters.#ctor(System.Single,System.Single,System.Single,System.Nullable{InnoEngine.Audio.AudioSpatialOptions})
title: AudioVoiceParameters.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: 1cea130fc17645be36cff28532cddd795da8609e0dba697fcde78907367a800b
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
