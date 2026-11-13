---
uid: api.inno.core.events.2736f51e923170ec
symbol: "engine:Inno.Core.Events:T:Inno.Core.Events.TextInputEvent"
source: xml
reviewed: 3e4fdd7cca769c273430995a4c25d3a05ad26799c9bf2fa07c3f14a532a1ceb0
title: "TextInputEvent"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
contracts:
- project.inno-core-events#dispatch-and-lifetime-contract
aliases: []
---

Raised when the platform commits UTF-8 text through keyboard, IME, or virtual-keyboard input.

**Parameter `windowId`:** The source window identifier.

**Parameter `text`:** The committed Unicode text.
