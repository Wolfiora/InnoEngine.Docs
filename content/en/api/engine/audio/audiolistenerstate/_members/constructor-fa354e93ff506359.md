---
uid: api.fa354e93ff506359fb2af575f71e66cfb1c49202a2c5d854839a7ee22eebef61
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioListenerState.#ctor(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3)"
source: xml
reviewed: cba991dac0fee9c8c1a5cee23a126fb9d72f3b950f800c20015a52de8249b868
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates a listener transform snapshot.

**Parameter `position`:** World-space listener position.

**Parameter `direction`:** World-space listener forward direction.

**Parameter `up`:** World-space listener up direction.

**Parameter `velocity`:** World-space listener velocity.

**Exception `T:System.ArgumentOutOfRangeException`:** Any position, direction, up, or velocity component is non-finite.
