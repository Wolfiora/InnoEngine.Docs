---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1ba67f401cc31cc9c27f8f8bbfba226968c17a29662b34cb3b4374a29973ce9d
symbol: engine:Inno.Runtime:M:Inno.Runtime.GameCodeDeployment.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameCodeModule})
title: GameCodeDeployment.Constructor
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 014a0f5ad2d84bf12ea5749e91ee119d9fe59baeb1b974063a1276774b3b6219
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `modules`:** Ordered immutable module contributions; an empty closure describes an engine-only composition.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A module is null or duplicated, an assembly has multiple owners, or an upstream module is absent.
