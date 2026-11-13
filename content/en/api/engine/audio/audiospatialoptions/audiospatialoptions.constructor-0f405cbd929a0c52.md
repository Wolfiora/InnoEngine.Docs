---
uid: api.0f405cbd929a0c5204a57b182cdbfe8dd964cfcb59785b6545438500558df87c
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioSpatialOptions.#ctor(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Audio.AudioDistanceModel,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)"
source: xml
reviewed: ff13d44fad3159c049c2b6490b7ea3d21b9bdad3284668ff3aa26122bbbe08e5
title: "AudioSpatialOptions.Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates spatial playback parameters.

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

**Exception `T:System.ArgumentOutOfRangeException`:** A vector or scalar is non-finite, a spatial bound is invalid, or the distance model is undefined.
