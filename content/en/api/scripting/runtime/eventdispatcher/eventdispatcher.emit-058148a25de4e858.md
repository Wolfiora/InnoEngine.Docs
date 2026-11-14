---
uid: api.058148a25de4e85816d96c9489db0e8372097ca8a7adf69635d084fc26089e8a
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.EventDispatcher.Emit(InnoEngine.Events.Event)"
source: xml
reviewed: 2e631f1e0fdbbe83fe28da86c954e91ecd47b4d89d556aac437ad5c98858c5b7
title: "EventDispatcher.Emit"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Immediately dispatches an event to all valid hubs in priority order.

## Remarks

Hub dispatch stops when the event is marked globally handled. Completion observers are still notified. A failed hub propagates its exception without reporting successful completion.

**Parameter `e`:** The event instance to dispatch.
