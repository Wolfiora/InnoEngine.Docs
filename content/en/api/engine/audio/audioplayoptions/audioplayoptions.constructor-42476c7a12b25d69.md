---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.42476c7a12b25d69b86e512c7835f61f21b9c98c695c788defde61a5075c5a8e
symbol: engine:Inno.Audio:M:Inno.Audio.AudioPlayOptions.#ctor(System.Single,System.Single,System.Single,System.Boolean,System.Int32,System.Nullable{Inno.Audio.AudioBusID},Inno.Audio.AudioClipLoadMode,System.Nullable{Inno.Audio.AudioSpatialOptions})
title: AudioPlayOptions.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 243900a34ccdb45a8c4b85baf527049fd1210d0bb29f1b010333f96fa4c4bb28
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
