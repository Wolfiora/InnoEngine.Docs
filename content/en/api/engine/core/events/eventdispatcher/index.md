---
uid: api.inno.core.events.48b0cbce21ed23c6
symbol: "engine:Inno.Core.Events:T:Inno.Core.Events.EventDispatcher"
source: xml
reviewed: 621f0691f5c89b4076439b57bf17ec0f9a4fe73777729cc8930381976f4723dc
title: "EventDispatcher"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
contracts:
- project.inno-core-events#dispatch-and-lifetime-contract
aliases: []
---

Thread-safe event dispatcher that owns a set of `T:Inno.Core.Events.EventHub` instances and routes events to hubs in descending `P:Inno.Core.Events.EventHub.order`.
