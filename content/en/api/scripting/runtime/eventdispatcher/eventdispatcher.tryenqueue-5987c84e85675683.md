---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5987c84e856756835db22525c9a799307d347e11d2f7efba0561e5db30d27313
symbol: scripting:Inno.Core.Events:M:InnoEngine.Events.EventDispatcher.TryEnqueue(InnoEngine.Events.Event)
title: EventDispatcher.TryEnqueue
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
sourceFingerprint: 5b94f64aeb515dda94efe9140fa2f79c5453377fe1cc12726ee558f499dbdf03
apiScope: Runtime
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
