---
uid: api.inno.core.events.2736f51e923170ec
symbol: "engine:Inno.Core.Events:T:Inno.Core.Events.TextInputEvent"
source: xml
reviewed: 4812daebb715005ad242b5473adea16a84739b3dc7003702067857905e1cf8a5
title: "TextInputEvent"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
contracts:
- project.inno-core-events#dispatch-and-lifetime-contract
aliases: []
---

Raised when the platform commits UTF-8 text through keyboard, IME, or virtual-keyboard input.

## Parameters

**Parameter `windowId`:** The source window identifier.

**Parameter `text`:** The committed Unicode text.
