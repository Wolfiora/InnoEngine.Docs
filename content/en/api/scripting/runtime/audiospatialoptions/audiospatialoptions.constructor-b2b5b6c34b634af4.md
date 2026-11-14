---
uid: api.b2b5b6c34b634af4357b104e06c9bfb41cc21b0fc972c9009bd0eba1ac169fd5
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioSpatialOptions.#ctor(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Audio.AudioDistanceModel,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)"
source: xml
reviewed: e86690903e79c192f4b9ec6de7bea4614549ec8c67212f6d33677c458180a86b
title: "AudioSpatialOptions.Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Creates spatial playback parameters.

## Parameters

**Parameter `position`:** World-space source position.

**Parameter `direction`:** World-space source forward direction.

**Parameter `velocity`:** World-space source velocity used for Doppler calculation.

**Parameter `distanceModel`:** Distance attenuation model.

**Parameter `minDistance`:** Distance at which attenuation begins.

**Parameter `maxDistance`:** Distance beyond which attenuation is clamped.

**Parameter `rolloff`:** Attenuation strength for the selected distance model.

**Parameter `coneInnerAngle`:** Full-volume source cone angle in degrees.

**Parameter `coneOuterAngle`:** Outer source cone angle in degrees.

**Parameter `coneOuterGain`:** Gain outside the outer cone.

**Parameter `dopplerFactor`:** Doppler effect multiplier.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** A vector or scalar is non-finite, a spatial bound is invalid, or the distance model is undefined.
