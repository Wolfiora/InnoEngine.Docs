---
uid: api.54c92d16b165f43c0d68024f0ef7da23e253e7484c12801c1b8f0628bdb1d422
symbol: "engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.#ctor(Inno.Core.Events.EventDispatcher,Inno.Animation.IAnimationBindingSink,System.Int32)"
source: xml
reviewed: 650342ed35cb3ced5d803038213b89c567eb4ce78998f180a06f146b20386864
title: "Constructor"
kind: api
owners: [Inno.Animation.Runtime]
apiSurface: source-clr
---

Creates one isolated animation runtime generation.

**Parameter `events`:** Session event dispatcher that receives marker events.

**Parameter `bindings`:** Required output boundary; sampling-only playback must use an explicit sampling target.

**Parameter `maxPlaybacks`:** Positive active playback capacity; rejection occurs before allocating a handle.
