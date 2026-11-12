---
title: "GraphPortCapacity"
description: "Reference for GraphPortCapacity in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.d07c327d0471c2ce
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphPortCapacity`

This reference describes `GraphPortCapacity` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Multiple`](#api-d533bc2a27d61f1f) | Field |
| [`Single`](#api-3bae0211ee0d76a2) | Field |

## Type declaration

<a id="api-d07c327d0471c2ce"></a>
<!-- api: T:InnoEngine.Graphs.GraphPortCapacity 99c67bbd7423d32cb42cd6addfdf22f75c011528667339dad7d974c411697eb2 -->

```csharp
public enum InnoEngine.Graphs.GraphPortCapacity : int
```

Declares how many edges may connect to a graph port.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L24).

## `Multiple`

<a id="api-d533bc2a27d61f1f"></a>
<!-- api: F:InnoEngine.Graphs.GraphPortCapacity.Multiple 6da27043c6f9c0a9208c7995e33c7f66514eb21ab166ab9009e13c1fe620f1de -->

```csharp
InnoEngine.Graphs.GraphPortCapacity.Multiple = 1
```

Any number of edges may connect to the port.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L33).

## `Single`

<a id="api-3bae0211ee0d76a2"></a>
<!-- api: F:InnoEngine.Graphs.GraphPortCapacity.Single 3e5889734dd750f1110c3833a38d70b148dfa4bb2afae018211d10288cfe66fc -->

```csharp
InnoEngine.Graphs.GraphPortCapacity.Single = 0
```

At most one edge may connect to the port.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L29).
