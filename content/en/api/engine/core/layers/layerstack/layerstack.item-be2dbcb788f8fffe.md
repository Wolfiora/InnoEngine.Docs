---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.be2dbcb788f8fffe2bdbc8be0bec85cee084269bd5ef40bf0f6c813e144743f1
symbol: engine:Inno.Core.Layers:P:Inno.Core.Layers.LayerStack.Item(System.Int32)
title: LayerStack.Item
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
sourceFingerprint: 3b36b2a645bd659cbaea92c8558fd8c9e89e3eb0891481f03cdee39868b23c58
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `index`:** The zero-based stack position.

## Returns

The attached layer at the requested position.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `index` is outside the current stack.
