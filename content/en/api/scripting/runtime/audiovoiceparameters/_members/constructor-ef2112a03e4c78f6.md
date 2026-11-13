---
uid: api.ef2112a03e4c78f69656041918ec139d928ff24f9d48524ba50631c9ebc4f47a
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioVoiceParameters.#ctor(System.Single,System.Single,System.Single,System.Nullable{InnoEngine.Audio.AudioSpatialOptions})"
source: xml
reviewed: 2506065c6bd5e79407cdb91326d60a6ac0631f4c5f96690bbe509f89e6747372
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Creates a voice parameter snapshot.

**Parameter `volume`:** Linear voice gain.

**Parameter `pitch`:** Playback-rate multiplier.

**Parameter `pan`:** Stereo pan from negative one to positive one.

**Parameter `spatial`:** Optional spatial playback parameters.

**Exception `T:System.ArgumentOutOfRangeException`:** Gain, pitch, or pan is non-finite or outside its valid range.
