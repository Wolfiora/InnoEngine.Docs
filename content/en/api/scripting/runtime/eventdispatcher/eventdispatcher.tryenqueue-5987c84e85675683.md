---
uid: api.5987c84e856756835db22525c9a799307d347e11d2f7efba0561e5db30d27313
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.EventDispatcher.TryEnqueue(InnoEngine.Events.Event)"
source: xml
reviewed: f5eca7287b5327c5f413b0faeb4e24be5acd4aeb9d2025b0744446409c8e9742
title: "EventDispatcher.TryEnqueue"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Attempts to enqueue without silently dropping a critical event on overload.

**Parameter `e`:** The event whose ownership transfers only on success.

**Returns:** False when capacity is exhausted; the caller retains the event.

**Exception `T:System.ArgumentNullException`:** The event is null.
