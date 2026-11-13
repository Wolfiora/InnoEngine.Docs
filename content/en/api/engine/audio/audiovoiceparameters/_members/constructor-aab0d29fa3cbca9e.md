---
uid: api.aab0d29fa3cbca9e9e52626ccc58e357ca28501a5579b94f3ce410dfda1f1cfa
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioVoiceParameters.#ctor(System.Single,System.Single,System.Single,System.Nullable{Inno.Audio.AudioSpatialOptions})"
source: xml
reviewed: 50704026dde0af744b06d4dd010c6f4944d25db3b0c1826b455ef09836621676
title: "Constructor"
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
