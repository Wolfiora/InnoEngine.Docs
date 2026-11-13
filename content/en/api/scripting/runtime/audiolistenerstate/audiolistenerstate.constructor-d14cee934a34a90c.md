---
uid: api.d14cee934a34a90cb6162766306374f34c0f78caee69a55fa65649401414fae8
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioListenerState.#ctor(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3)"
source: xml
reviewed: 5eb75c13c4696ed44ea0a11b9b571e451bb9c19ec52e5aa68096b7e7e5e0dd8e
title: "AudioListenerState.Constructor"
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
