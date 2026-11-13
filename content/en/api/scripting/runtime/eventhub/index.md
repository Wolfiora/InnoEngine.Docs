---
uid: api.inno.core.events.runtime-script.b769708cdced8a07
symbol: "scripting:Inno.Core.Events:T:InnoEngine.Events.EventHub"
source: xml
reviewed: 0703ae551d6489baa0c748a7c612a50498e98d5f4ed7bac750ab62d2a185cf28
title: "EventHub"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-events#dispatch-and-lifetime-contract
aliases: []
---

A disposable subscription hub bound to a single `T:InnoEngine.Events.EventDispatcher`.

## Remarks

Dispatch visits the concrete event type before its base types. Within each type bucket, listeners are ordered by priority (descending) and registration order (ascending). Callbacks execute on the dispatching thread; subscription disposal does not join an active callback.
