---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fa11329dd5e887d411a0410332ba035159e94da59535d545bc1d66eaecd8649f
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.Layer.Listen``1(System.Action{``0},System.Int32)
title: Layer.Listen
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
sourceFingerprint: 9c2fe7cb5f072462c10b8c99d294b65cc24f998a34446ceb75bf3fe3b46769bd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TEvent`:** The event type handled by the callback.

## Parameters

**Parameter `handler`:** The callback invoked when the event reaches this layer.

**Parameter `priority`:** The listener priority inside this layer. Higher values run earlier.

## Returns

A token that can remove the subscription before the layer detaches.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the layer is not currently attached to a stack.
