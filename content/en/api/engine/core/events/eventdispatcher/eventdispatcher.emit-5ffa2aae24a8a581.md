---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5ffa2aae24a8a5815ce26440dbddc9b874731283c454db5e7814c6421d42f26f
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.Emit(Inno.Core.Events.Event)
title: EventDispatcher.Emit
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
reviewed: 279e45160efb118724284bac174c1e0a5fcf80eaea639fddafc3c3db4cfdc303

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Remarks

Hub dispatch stops when the event is marked globally handled. Completion observers are still notified. A failed hub propagates its exception without reporting successful completion.

## Parameters

**Parameter `e`:** The event instance to dispatch.
