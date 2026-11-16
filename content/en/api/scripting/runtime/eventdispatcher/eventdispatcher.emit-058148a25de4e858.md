---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.058148a25de4e85816d96c9489db0e8372097ca8a7adf69635d084fc26089e8a
symbol: scripting:Inno.Core.Events:M:InnoEngine.Events.EventDispatcher.Emit(InnoEngine.Events.Event)
title: EventDispatcher.Emit
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
reviewed: ad9b49aa02225142f9eb547f7f01992857b081baf54119e3af9d44ec15b4c241
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Hub dispatch stops when the event is marked globally handled. Completion observers are still notified. A failed hub propagates its exception without reporting successful completion.

## Parameters

**Parameter `e`:** The event instance to dispatch.
