---
uid: api.5ce3e14a1daf2425298e737ed3bebdf071eec9fd7a58d039ade30f0b6f2fe646
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioCapabilities.#ctor(System.Boolean,System.Boolean,System.Boolean,System.Int32,System.Int32)"
source: xml
reviewed: b7719a054dfcd2e82dc0f6285fa962127a2b674a230727f2586d0309000f1e8a
title: "Constructor"
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
