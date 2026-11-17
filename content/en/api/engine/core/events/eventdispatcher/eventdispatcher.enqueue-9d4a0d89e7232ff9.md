---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9d4a0d89e7232ff9e5d3f0340609c7b66a39cdc66c8d820f79f71cb3bad0ca1d
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.Enqueue(Inno.Core.Events.Event)
title: EventDispatcher.Enqueue
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
reviewed: 8a11fdc8b6424fc8434b3d282af481a104e76f1ccda285e9d0da77f3ba4c03bc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `e`:** The event instance to enqueue.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The queue is full; the event was not accepted.
