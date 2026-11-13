---
uid: api.inno.core.events.48b0cbce21ed23c6
symbol: "engine:Inno.Core.Events:T:Inno.Core.Events.EventDispatcher"
source: xml
reviewed: f842f13bcbd7a1c6be9932b6bbfdeec0589e8ac1cb7738de390cff772be67cb8
title: "EventDispatcher"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
contracts:
- project.inno-core-events#dispatch-and-lifetime-contract
aliases: []
---

Thread-safe event dispatcher that owns a set of `T:Inno.Core.Events.EventHub` instances and routes events to hubs in descending `P:Inno.Core.Events.EventHub.order`.
