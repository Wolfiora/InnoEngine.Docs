---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cb1758b17a1b39d6eb1a4dd3cdd41a6d4007a59d7b6efaea386d43cec1271d8e
symbol: engine:Inno.Core.Events:E:Inno.Core.Events.EventDispatcher.dispatched
title: EventDispatcher.dispatched
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
reviewed: 523e7abd15b8a6cfdf65b9c4baa95c309861261f213c8293268c78e4f09ff6be
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Observers run synchronously on the dispatching thread and do not participate in consumption. They must not change consumption or call HandleInHub. Observer failures propagate to the caller. Owners must unsubscribe before retiring their callbacks or extensions.
