---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5ffa2aae24a8a5815ce26440dbddc9b874731283c454db5e7814c6421d42f26f
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventDispatcher.Emit(Inno.Core.Events.Event)
title: EventDispatcher.Emit
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
sourceFingerprint: c0a90b8ef7e067259213cad17fda9ec420e89c06b4710ebdb0a69167c4f7e8cd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `e`:** The event instance to dispatch.

## Remarks

Hub dispatch stops when the event is marked globally handled. Completion observers are still notified. A failed hub propagates its exception without reporting successful completion.
