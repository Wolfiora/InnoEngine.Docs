---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.events.runtime-script.b769708cdced8a07
symbol: scripting:Inno.Core.Events:T:InnoEngine.Events.EventHub
title: EventHub
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
reviewed: 2a21a1f8a3021f93b43f04db7ade0aa17e1347950c41dfa16351a92a8313373c
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-events#dispatch-and-lifetime-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Dispatch visits the concrete event type before its base types. Within each type bucket, listeners are ordered by priority (descending) and registration order (ascending). Callbacks execute on the dispatching thread; subscription disposal does not join an active callback.
