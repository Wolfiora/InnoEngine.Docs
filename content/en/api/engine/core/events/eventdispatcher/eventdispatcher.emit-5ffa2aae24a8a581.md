---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5ffa2aae24a8a5815ce26440dbddc9b874731283c454db5e7814c6421d42f26f
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.Emit(Inno.Core.Events.Event)
title: EventDispatcher.Emit
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
reviewed: e586d474b9791da82709c7be6f679fbcb103c7217abb0d1706e6a5a541b4beac
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Hub dispatch stops when the event is marked globally handled. Completion observers are still notified. A failed hub propagates its exception without reporting successful completion.

## Parameters

**Parameter `e`:** The event instance to dispatch.
