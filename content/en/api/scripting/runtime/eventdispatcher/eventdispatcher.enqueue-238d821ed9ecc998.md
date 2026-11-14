---
uid: api.238d821ed9ecc998c2e7e2e430f55aaf93888eea45ab12531b6a274face234a0
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.EventDispatcher.Enqueue(InnoEngine.Events.Event)"
source: xml
reviewed: ca741ee68493b700a2170de79d5b9edf826818d4ddc5f4e03a328e42d138de34
title: "EventDispatcher.Enqueue"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Enqueues an event for later processing via `M:InnoEngine.Events.EventDispatcher.Flush`.

**Parameter `e`:** The event instance to enqueue.

**Exception `T:System.InvalidOperationException`:** The queue is full; the event was not accepted.
