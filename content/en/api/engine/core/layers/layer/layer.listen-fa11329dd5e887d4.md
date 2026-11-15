---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fa11329dd5e887d411a0410332ba035159e94da59535d545bc1d66eaecd8649f
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.Layer.Listen``1(System.Action{``0},System.Int32)
title: Layer.Listen
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: 33a44d970bf7bedcc69eac800d2e03be788ab1611f4d6d419570f9b787a85455

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Subscribes to an event for the lifetime of this layer attachment.

## Type parameters

**Type parameter `TEvent`:** The event type handled by the callback.

## Parameters

**Parameter `handler`:** The callback invoked when the event reaches this layer.

**Parameter `priority`:** The listener priority inside this layer. Higher values run earlier.

## Returns

A token that can remove the subscription before the layer detaches.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the layer is not currently attached to a stack.
