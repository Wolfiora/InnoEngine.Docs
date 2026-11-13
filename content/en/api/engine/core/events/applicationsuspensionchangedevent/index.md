---
uid: api.inno.core.events.2e381feb534c056b
symbol: "engine:Inno.Core.Events:T:Inno.Core.Events.ApplicationSuspensionChangedEvent"
source: xml
reviewed: 250d6e564c8a828b96ef23d20940bcbc2d91df44dafd4222f3ac01b7c3447cd5
title: "ApplicationSuspensionChangedEvent"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
contracts:
- project.inno-core-events#dispatch-and-lifetime-contract
aliases: []
---

Reports whether the application must stop advancing frames until the platform resumes it.

**Parameter `isSuspended`:** Whether the platform has suspended application execution.
