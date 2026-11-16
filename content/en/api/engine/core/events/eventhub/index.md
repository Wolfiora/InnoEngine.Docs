---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.events.cbb7274ff8371a01
symbol: engine:Inno.Core.Events:T:Inno.Core.Events.EventHub
title: EventHub
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
reviewed: 8f344131ef8a10ef2b94b72657625ebe1ddf0b18c2a6e636911fa5c2eb095c16
contracts:
- project.inno-core-events#dispatch-and-lifetime-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Dispatch visits the concrete event type before its base types. Within each type bucket, listeners are ordered by priority (descending) and registration order (ascending). Callbacks execute on the dispatching thread; subscription disposal does not join an active callback.
