---
uid: api.5ce3e14a1daf2425298e737ed3bebdf071eec9fd7a58d039ade30f0b6f2fe646
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioCapabilities.#ctor(System.Boolean,System.Boolean,System.Boolean,System.Int32,System.Int32)"
source: xml
reviewed: 6a01bb5539ffeca4be9e6002c738ddb72342f01301310c19c3fb46e1a77440de
title: "AudioCapabilities.Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates an immutable audio capability snapshot.

**Parameter `supportsStreaming`:** Whether clips can be decoded incrementally.

**Parameter `supportsScheduledPlayback`:** Whether voices can start against the audio clock.

**Parameter `supportsSpatialAudio`:** Whether listener-relative spatial playback is available.

**Parameter `maxListeners`:** Maximum simultaneously active listeners.

**Parameter `sampleRate`:** Device output sample rate in frames per second.
