---
uid: api.inno.core.events.2e381feb534c056b
symbol: "engine:Inno.Core.Events:T:Inno.Core.Events.ApplicationSuspensionChangedEvent"
source: xml
reviewed: 81bd9f9b166b862ef63a5344aa084a0314af3682cdb3d67d7d91dca783fa3a97
title: "ApplicationSuspensionChangedEvent"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
contracts:
- project.inno-core-events#dispatch-and-lifetime-contract
aliases: []
---

Reports whether the application must stop advancing frames until the platform resumes it.

## Parameters

**Parameter `isSuspended`:** Whether the platform has suspended application execution.
