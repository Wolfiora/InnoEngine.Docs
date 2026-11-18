---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.events.cbb7274ff8371a01
symbol: engine:Inno.Core.Events:T:Inno.Core.Events.EventHub
title: EventHub
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
sourceFingerprint: 0c35a5377c4e0de59f890dbd100915b5c6f7e62169ca711677de682be8df97a8
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
