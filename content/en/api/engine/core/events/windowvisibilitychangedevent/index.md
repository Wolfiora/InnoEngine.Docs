---
uid: api.inno.core.events.14f7c7ecccf57f7c
symbol: "engine:Inno.Core.Events:T:Inno.Core.Events.WindowVisibilityChangedEvent"
source: xml
reviewed: 3f0ea041e04154dfcd9136273802431974a1383457d4f03c7ca7d0ed043c3d5d
title: "WindowVisibilityChangedEvent"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
contracts:
- project.inno-core-events#dispatch-and-lifetime-contract
aliases: []
---

Reports whether a platform window can present visible content.

**Parameter `windowId`:** The application-local identity of the affected window.

**Parameter `isVisible`:** Whether the window is shown and not minimized.
