---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8b347baafb053304aa218ac10650bc7f3e9b1156091748a6ab090448ec4822a5
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.Event.HandleInHub
title: Event.HandleInHub
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
sourceFingerprint: 0b905b286e41d291bd883c0d5d85e1d805b9e2d7601af88bf6c7a7d8f69050cf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Hub handling stops remaining listeners in the current hub but does not affect following hubs.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when called outside a valid hub dispatch context for this event.
