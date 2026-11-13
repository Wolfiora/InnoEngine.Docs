---
uid: api.aab0d29fa3cbca9e9e52626ccc58e357ca28501a5579b94f3ce410dfda1f1cfa
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioVoiceParameters.#ctor(System.Single,System.Single,System.Single,System.Nullable{Inno.Audio.AudioSpatialOptions})"
source: xml
reviewed: e4305a5ae9e146b9b057ab6493260ba483e5cacff8fa9d0e0d3e897333f71f92
title: "AudioVoiceParameters.Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates a voice parameter snapshot.

**Parameter `volume`:** Linear voice gain.

**Parameter `pitch`:** Playback-rate multiplier.

**Parameter `pan`:** Stereo pan from negative one to positive one.

**Parameter `spatial`:** Optional spatial playback parameters.

**Exception `T:System.ArgumentOutOfRangeException`:** Gain, pitch, or pan is non-finite or outside its valid range.
