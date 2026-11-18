---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9db3f90d6fb213b1a3391f27952190b44a1a5981c426f13ceff9af15ba7d35a3
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.#ctor(System.Func{Inno.Core.Events.EventHub})
title: LayerStack.Constructor
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
sourceFingerprint: a382f65a5e48d6ac4e48dc6935ad6afaee350c3b4fdd15a5a62cdf2d01916c73
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `eventHubFactory`:** The factory used to create a distinct event hub for every attached layer.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `eventHubFactory` is `null`.
