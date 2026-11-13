---
uid: api.ecbf76cb2000ec4ea1ac386cf3a699d29ff893db4ed43d489a2be246ed65a84a
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioCapabilities.#ctor(System.Boolean,System.Boolean,System.Boolean,System.Int32,System.Int32)"
source: xml
reviewed: c8c6b6718e7d6087cc969fef74e27eafa350e7ae82692efcc157104419284d87
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Creates an immutable audio capability snapshot.

**Parameter `supportsStreaming`:** Whether clips can be decoded incrementally.

**Parameter `supportsScheduledPlayback`:** Whether voices can start against the audio clock.

**Parameter `supportsSpatialAudio`:** Whether listener-relative spatial playback is available.

**Parameter `maxListeners`:** Maximum simultaneously active listeners.

**Parameter `sampleRate`:** Device output sample rate in frames per second.
