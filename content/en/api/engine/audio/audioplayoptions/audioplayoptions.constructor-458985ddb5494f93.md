---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.458985ddb5494f932e3e98081ec6b05f48280f6d4226f0c8487fbbea259db5e9
symbol: engine:Inno.Audio:M:Inno.Audio.AudioPlayOptions.#ctor(System.Single,System.Single,System.Single,System.Boolean,System.Int32,System.Nullable{Inno.Audio.AudioBusId},Inno.Audio.AudioClipLoadMode,System.Nullable{Inno.Audio.AudioSpatialOptions})
title: AudioPlayOptions.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 69e84655aecde8a73857eca83e1797e1d7a8cc6f59cb784dd7f0b54a6c881a58
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `volume`:** Linear gain applied to the voice.

**Parameter `pitch`:** Playback-rate multiplier.

**Parameter `pan`:** Stereo pan from negative one to positive one.

**Parameter `loop`:** Whether playback restarts after reaching the clip end.

**Parameter `priority`:** Voice retention priority; larger values are retained first.

**Parameter `bus`:** Destination mixer bus.

**Parameter `loadMode`:** Clip preparation override.

**Parameter `spatial`:** Optional spatial playback parameters.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Gain, pitch, or pan is non-finite or outside its valid range, or the load mode is undefined.

**Exception `T:System.ArgumentException`:** The supplied destination bus is uninitialized.
