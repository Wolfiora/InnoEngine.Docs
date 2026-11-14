---
uid: api.5ffa2aae24a8a5815ce26440dbddc9b874731283c454db5e7814c6421d42f26f
symbol: "engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.Emit(Inno.Core.Events.Event)"
source: xml
reviewed: 279e45160efb118724284bac174c1e0a5fcf80eaea639fddafc3c3db4cfdc303
title: "EventDispatcher.Emit"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Immediately dispatches an event to all valid hubs in priority order.

## Remarks

Hub dispatch stops when the event is marked globally handled. Completion observers are still notified. A failed hub propagates its exception without reporting successful completion.

**Parameter `e`:** The event instance to dispatch.
