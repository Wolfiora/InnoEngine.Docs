---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cb1758b17a1b39d6eb1a4dd3cdd41a6d4007a59d7b6efaea386d43cec1271d8e
symbol: engine:Inno.Core.Events:E:Inno.Core.Events.EventDispatcher.dispatched
title: EventDispatcher.dispatched
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
sourceFingerprint: ea8f4c5aee3ecbcd1a1c572f92138dba2ece3b87778b48606d6863a639e6f311
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Observers run synchronously on the dispatching thread and do not participate in consumption. They must not change consumption or call HandleInHub. Observer failures propagate to the caller. Owners must unsubscribe before retiring their callbacks or extensions.
