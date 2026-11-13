---
uid: api.inno.core.events.cbb7274ff8371a01
symbol: "engine:Inno.Core.Events:T:Inno.Core.Events.EventHub"
source: xml
reviewed: d884f8944fe808180effbca7d5c57b51d184314655f503c5e241119d9610c3b9
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
