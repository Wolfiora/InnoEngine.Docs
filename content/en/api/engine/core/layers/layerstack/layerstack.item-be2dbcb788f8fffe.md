---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.be2dbcb788f8fffe2bdbc8be0bec85cee084269bd5ef40bf0f6c813e144743f1
symbol: engine:Inno.Core.Layers:P:Inno.Core.Layers.LayerStack.Item(System.Int32)
title: LayerStack.Item
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: 4160111ea29f2ad063ca4e2e822fd26ce3b34ef85db704b402006dbc16a3e717
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
