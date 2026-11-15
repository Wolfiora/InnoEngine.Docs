---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9d4a0d89e7232ff9e5d3f0340609c7b66a39cdc66c8d820f79f71cb3bad0ca1d
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.Enqueue(Inno.Core.Events.Event)
title: EventDispatcher.Enqueue
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
reviewed: 8377d464f6e40baf4468bd1f6b8beb035dcdc74556be9469ef09784f26e3a34c

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Enqueues an event for later processing via `M:Inno.Core.Events.EventDispatcher.Flush`.

## Parameters

**Parameter `e`:** The event instance to enqueue.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The queue is full; the event was not accepted.
