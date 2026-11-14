---
uid: api.8261a8ee25639100bb91a50ef86f7ab315fa17420b1b51944814b6a460a6ba43
symbol: "engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.TryEnqueue(Inno.Core.Events.Event)"
source: xml
reviewed: bcfbc32017a92492b33dff50e372e1e641c0d59e96d4c556ad7963c94575b512
title: "EventDispatcher.TryEnqueue"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Attempts to enqueue without silently dropping a critical event on overload.

**Parameter `e`:** The event whose ownership transfers only on success.

**Returns:** False when capacity is exhausted; the caller retains the event.

**Exception `T:System.ArgumentNullException`:** The event is null.
