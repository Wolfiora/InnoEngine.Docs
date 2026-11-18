---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.events.runtime-script.b769708cdced8a07
symbol: scripting:Inno.Core.Events:T:InnoEngine.Events.EventHub
title: EventHub
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
sourceFingerprint: 24d0b3917961fad682727111c62ed76e910e25321bf26d433f34c26baa6fde83
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
