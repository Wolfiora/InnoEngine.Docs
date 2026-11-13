---
uid: api.inno.core.events.cbb7274ff8371a01
symbol: "engine:Inno.Core.Events:T:Inno.Core.Events.EventHub"
source: xml
reviewed: 2475c7350684a6d39bbd6d52aae8f8ec4ee3d8392c1c02ec81ce1e2d5c83d4d8
title: "EventHub"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
contracts:
- project.inno-core-events#dispatch-and-lifetime-contract
aliases: []
---

A disposable subscription hub bound to a single `T:Inno.Core.Events.EventDispatcher`.

## Remarks

Dispatch visits the concrete event type before its base types. Within each type bucket, listeners are ordered by priority (descending) and registration order (ascending). Callbacks execute on the dispatching thread; subscription disposal does not join an active callback.
