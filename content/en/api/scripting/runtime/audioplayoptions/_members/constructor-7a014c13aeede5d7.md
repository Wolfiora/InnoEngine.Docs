---
uid: api.7a014c13aeede5d7261d3a5a90ee0355b1c2c60fdf75b7836564243fe1589504
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioPlayOptions.#ctor(System.Single,System.Single,System.Single,System.Boolean,System.Int32,System.Nullable{InnoEngine.Audio.AudioBusId},InnoEngine.Audio.AudioClipLoadMode,System.Nullable{InnoEngine.Audio.AudioSpatialOptions})"
source: xml
reviewed: f2db839f099e94e484258bf40d582795e9ffc7e38d450150507245ef5fb337c6
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Creates playback parameters.

**Parameter `volume`:** Linear gain applied to the voice.

**Parameter `pitch`:** Playback-rate multiplier.

**Parameter `pan`:** Stereo pan from negative one to positive one.

**Parameter `loop`:** Whether playback restarts after reaching the clip end.

**Parameter `priority`:** Voice retention priority; larger values are retained first.

**Parameter `bus`:** Destination mixer bus.

**Parameter `loadMode`:** Clip preparation override.

**Parameter `spatial`:** Optional spatial playback parameters.

**Exception `T:System.ArgumentOutOfRangeException`:** Gain, pitch, or pan is non-finite or outside its valid range, or the load mode is undefined.

**Exception `T:System.ArgumentException`:** The supplied destination bus is uninitialized.
