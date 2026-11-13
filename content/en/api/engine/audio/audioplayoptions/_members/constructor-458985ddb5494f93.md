---
uid: api.458985ddb5494f932e3e98081ec6b05f48280f6d4226f0c8487fbbea259db5e9
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioPlayOptions.#ctor(System.Single,System.Single,System.Single,System.Boolean,System.Int32,System.Nullable{Inno.Audio.AudioBusId},Inno.Audio.AudioClipLoadMode,System.Nullable{Inno.Audio.AudioSpatialOptions})"
source: xml
reviewed: cc5b9e57108049d6076a059e57d04f3ab6b364cbffad7c3b34614cadb2dbead2
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
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
