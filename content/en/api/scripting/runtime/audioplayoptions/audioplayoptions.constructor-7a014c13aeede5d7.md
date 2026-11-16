---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7a014c13aeede5d7261d3a5a90ee0355b1c2c60fdf75b7836564243fe1589504
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioPlayOptions.#ctor(System.Single,System.Single,System.Single,System.Boolean,System.Int32,System.Nullable{InnoEngine.Audio.AudioBusId},InnoEngine.Audio.AudioClipLoadMode,System.Nullable{InnoEngine.Audio.AudioSpatialOptions})
title: AudioPlayOptions.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: 1789e700a66ae7cfb6096e55d87f688e27a373100ca530b8d7d26085d06e7fe3
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
