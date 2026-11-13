---
uid: api.8b347baafb053304aa218ac10650bc7f3e9b1156091748a6ab090448ec4822a5
symbol: "engine:Inno.Core.Events:M:Inno.Core.Events.Event.HandleInHub"
source: xml
reviewed: 9be787ee5b2f3c0c542edb40e3f222b36c26563bc28c65b689db7d9f0eb737d8
title: "HandleInHub"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Marks this event as handled in the current hub only.

## Remarks

Hub handling stops remaining listeners in the current hub but does not affect following hubs.

**Exception `T:System.InvalidOperationException`:** Thrown when called outside a valid hub dispatch context for this event.
