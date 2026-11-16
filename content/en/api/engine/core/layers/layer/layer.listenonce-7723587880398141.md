---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7723587880398141abc103d8f7c4230fb3bee488c6f58e2a8cd8849c0b31765d
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.Layer.ListenOnce``1(System.Action{``0},System.Int32)
title: Layer.ListenOnce
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: ebda02a1ea20985505ac6ba92695c2c05b18eddb6323c26e8b778e149239eeb5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TEvent`:** The event type handled by the callback.

## Parameters

**Parameter `handler`:** The callback invoked at most once when the event reaches this layer.

**Parameter `priority`:** The listener priority inside this layer. Higher values run earlier.

## Returns

A token that can cancel the one-shot subscription before it runs.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the layer is not currently attached to a stack.
