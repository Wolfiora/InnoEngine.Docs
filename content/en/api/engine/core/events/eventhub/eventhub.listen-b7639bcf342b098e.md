---
uid: api.b7639bcf342b098e6d34f34e3692569cfa9d9ae1948033c1a166b057e7cf3f3c
symbol: "engine:Inno.Core.Events:M:Inno.Core.Events.EventHub.Listen\u0060\u00601(System.Action{\u0060\u00600},System.Int32)"
source: xml
reviewed: 052f5727ce3eceb578119967e3a1a083601cec00fdc6b7bfba16f98e5e7f5dea
title: "EventHub.Listen"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Subscribes a listener for the specified event type.

**Type parameter `TEvent`:** Event type to listen for.

**Parameter `handler`:** Listener callback.

**Parameter `priority`:** Listener priority within the selected event type's bucket. Higher values run earlier; a base-type listener does not precede a concrete-type listener because of its priority.

**Returns:** A token that unsubscribes this listener when disposed.
