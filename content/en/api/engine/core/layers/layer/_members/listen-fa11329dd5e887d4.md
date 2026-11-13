---
uid: api.fa11329dd5e887d411a0410332ba035159e94da59535d545bc1d66eaecd8649f
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.Layer.Listen\u0060\u00601(System.Action{\u0060\u00600},System.Int32)"
source: xml
reviewed: 33a44d970bf7bedcc69eac800d2e03be788ab1611f4d6d419570f9b787a85455
title: "Listen"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Subscribes to an event for the lifetime of this layer attachment.

**Type parameter `TEvent`:** The event type handled by the callback.

**Parameter `handler`:** The callback invoked when the event reaches this layer.

**Parameter `priority`:** The listener priority inside this layer. Higher values run earlier.

**Returns:** A token that can remove the subscription before the layer detaches.

**Exception `T:System.InvalidOperationException`:** Thrown when the layer is not currently attached to a stack.
