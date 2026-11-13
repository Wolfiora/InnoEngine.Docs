---
uid: api.inno.core.events.14f7c7ecccf57f7c
symbol: "engine:Inno.Core.Events:T:Inno.Core.Events.WindowVisibilityChangedEvent"
source: xml
reviewed: 26644622ced46d8d0abe7d8bb8b5a8468c5b9b785196e15ca5656dac568d4b88
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
