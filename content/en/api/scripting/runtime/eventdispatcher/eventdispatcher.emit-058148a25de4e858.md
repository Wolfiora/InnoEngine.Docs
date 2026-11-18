---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.058148a25de4e85816d96c9489db0e8372097ca8a7adf69635d084fc26089e8a
symbol: scripting:Inno.Core.Events:M:InnoEngine.Events.EventDispatcher.Emit(InnoEngine.Events.Event)
title: EventDispatcher.Emit
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
sourceFingerprint: 076c9d777776df0dc5fe873be50c097efd1280b1b7562aa0cf6572ade5f4c3e5
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
