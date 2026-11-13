---
uid: api.238d821ed9ecc998c2e7e2e430f55aaf93888eea45ab12531b6a274face234a0
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.EventDispatcher.Enqueue(InnoEngine.Events.Event)"
source: xml
reviewed: e21be8a7f1452e521a06e1d746fc1145e4a8f9ac01835ebc751da381903723be
title: "Enqueue"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Enqueues an event for later processing via `M:InnoEngine.Events.EventDispatcher.Flush`.

**Parameter `e`:** The event instance to enqueue.

**Exception `T:System.InvalidOperationException`:** The queue is full; the event was not accepted.
