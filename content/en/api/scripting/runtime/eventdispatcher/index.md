---
uid: api.inno.core.events.runtime-script.7bcc2c6aae71e4e1
symbol: "scripting:Inno.Core.Events:T:InnoEngine.Events.EventDispatcher"
source: xml
reviewed: 5b3a9f012d038c49c8b1dd7e0ac92d6aef096ba1eb974ab1d85d9b344149759f
title: "EventDispatcher"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-events#dispatch-and-lifetime-contract
aliases: []
---

Thread-safe event dispatcher that owns a set of `T:InnoEngine.Events.EventHub` instances and routes events to hubs in descending `P:InnoEngine.Events.EventHub.order`.
