---
uid: api.inno.core.events.runtime-script.7bcc2c6aae71e4e1
symbol: "scripting:Inno.Core.Events:T:InnoEngine.Events.EventDispatcher"
source: xml
reviewed: 8daad018348e6def63effc27b85fbd622608cddec16961d194d628cc21e3baf9
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
