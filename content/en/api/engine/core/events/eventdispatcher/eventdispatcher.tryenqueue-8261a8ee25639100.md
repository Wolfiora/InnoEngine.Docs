---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8261a8ee25639100bb91a50ef86f7ab315fa17420b1b51944814b6a460a6ba43
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.TryEnqueue(Inno.Core.Events.Event)
title: EventDispatcher.TryEnqueue
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
reviewed: bf37b7cb9a7cd1c1c75152a14679a27634c732b3cff20a10cb2b2583d0b123c1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `e`:** The event whose ownership transfers only on success.

## Returns

False when capacity is exhausted; the caller retains the event.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The event is null.
