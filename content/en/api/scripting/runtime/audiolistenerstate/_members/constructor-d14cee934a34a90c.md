---
uid: api.d14cee934a34a90cb6162766306374f34c0f78caee69a55fa65649401414fae8
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioListenerState.#ctor(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3)"
source: xml
reviewed: 3145bc2d4aa48225f7c392b61f759156a0c2681de295bbf906e4c76a16633f82
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Creates a listener transform snapshot.

**Parameter `position`:** World-space listener position.

**Parameter `direction`:** World-space listener forward direction.

**Parameter `up`:** World-space listener up direction.

**Parameter `velocity`:** World-space listener velocity.

**Exception `T:System.ArgumentOutOfRangeException`:** Any position, direction, up, or velocity component is non-finite.
