---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.aab0d29fa3cbca9e9e52626ccc58e357ca28501a5579b94f3ce410dfda1f1cfa
symbol: engine:Inno.Audio:M:Inno.Audio.AudioVoiceParameters.#ctor(System.Single,System.Single,System.Single,System.Nullable{Inno.Audio.AudioSpatialOptions})
title: AudioVoiceParameters.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: b338e790dd89662f30af87a9e55854e4309db5b19a116640a94525f9fd819a2b
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
