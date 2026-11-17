---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9db3f90d6fb213b1a3391f27952190b44a1a5981c426f13ceff9af15ba7d35a3
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.#ctor(System.Func{Inno.Core.Events.EventHub})
title: LayerStack.Constructor
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: 15bb9f6e37556a3e4c5e15cb28e51a775b661dc6a92401fe7e42e7426dee497b
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
