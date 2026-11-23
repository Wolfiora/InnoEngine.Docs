---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a1b791850d293505960d5305e7f25b7b827711c611ebe1c99f3080b8502ab006
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioPlayOptions.#ctor(System.Single,System.Single,System.Single,System.Boolean,System.Int32,System.Nullable{InnoEngine.Audio.AudioBusID},InnoEngine.Audio.AudioClipLoadMode,System.Nullable{InnoEngine.Audio.AudioSpatialOptions})
title: AudioPlayOptions.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: b547755b52198c4154009e55c4727d13101ecd1a07f2c2de1716c37df385278c
apiScope: Runtime
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
