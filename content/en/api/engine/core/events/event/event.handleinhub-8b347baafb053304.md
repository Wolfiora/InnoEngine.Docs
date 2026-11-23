---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8b347baafb053304aa218ac10650bc7f3e9b1156091748a6ab090448ec4822a5
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.Event.HandleInHub
title: Event.HandleInHub
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
sourceFingerprint: aee26c2e70f545688934d7d72cfc211aeadf1cc957ddd91db0dbab68c927aeb2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when called outside a valid hub dispatch context for this event.

## Remarks

Hub handling stops remaining listeners in the current hub but does not affect following hubs.
