---
uid: api.9d4a0d89e7232ff9e5d3f0340609c7b66a39cdc66c8d820f79f71cb3bad0ca1d
symbol: "engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.Enqueue(Inno.Core.Events.Event)"
source: xml
reviewed: dba50c3356ffe640bd240fec385e7952e892ad723d251304aac6f34f6ddb2534
title: "Enqueue"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Enqueues an event for later processing via `M:Inno.Core.Events.EventDispatcher.Flush`.

**Parameter `e`:** The event instance to enqueue.

**Exception `T:System.InvalidOperationException`:** The queue is full; the event was not accepted.
