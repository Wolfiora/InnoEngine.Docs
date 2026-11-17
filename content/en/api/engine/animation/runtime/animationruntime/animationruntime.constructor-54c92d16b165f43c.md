---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.54c92d16b165f43c0d68024f0ef7da23e253e7484c12801c1b8f0628bdb1d422
symbol: engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.#ctor(Inno.Core.Events.EventDispatcher,Inno.Animation.IAnimationBindingSink,System.Int32)
title: AnimationRuntime.Constructor
kind: api
owners:
- Inno.Animation.Runtime
apiSurface: source-clr
reviewed: 42662ad2084c35d1cdad97eaf8ca18b54d37d099958aaf32359f629638a8afbd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `events`:** Session event dispatcher that receives marker events.

**Parameter `bindings`:** Required output boundary; sampling-only playback must use an explicit sampling target.

**Parameter `maxPlaybacks`:** Positive active playback capacity; rejection occurs before allocating a handle.
