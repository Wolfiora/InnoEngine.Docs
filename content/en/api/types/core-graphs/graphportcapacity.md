---
title: "GraphPortCapacity"
description: "Reference for GraphPortCapacity in Inno.Core.Graphs."
uid: api.inno.core.graphs.bfb56b4b28c64963
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphPortCapacity`

This reference describes `GraphPortCapacity` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Multiple`](#api-28e03d5786ce3350) | Field |
| [`Single`](#api-e2c7d82eac0ad1d3) | Field |

## Type declaration

<a id="api-bfb56b4b28c64963"></a>
<!-- api: T:Inno.Core.Graphs.GraphPortCapacity 021b9f65ab8deeea61be9c1d2b419aa2befb446e1e3854c4b47e736235328851 -->

```csharp
public enum Inno.Core.Graphs.GraphPortCapacity : int
```

Declares how many edges may connect to a graph port.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L24).

## `Multiple`

<a id="api-28e03d5786ce3350"></a>
<!-- api: F:Inno.Core.Graphs.GraphPortCapacity.Multiple 4fcea5ea5656fa10d82289c20c4ef81355efed1a90cbc96fb87ad08a0111f507 -->

```csharp
Inno.Core.Graphs.GraphPortCapacity.Multiple = 1
```

Any number of edges may connect to the port.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L33).

## `Single`

<a id="api-e2c7d82eac0ad1d3"></a>
<!-- api: F:Inno.Core.Graphs.GraphPortCapacity.Single 8b9aec7066566cbca252de05ed0957b8be0cf18afe9e0fecf724d9c17b312616 -->

```csharp
Inno.Core.Graphs.GraphPortCapacity.Single = 0
```

At most one edge may connect to the port.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L29).
