---
title: "GraphPortDirection"
description: "Reference for GraphPortDirection in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.505f71509c4a3565
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphPortDirection`

This reference describes `GraphPortDirection` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Input`](#api-fc68cadad0205648) | Field |
| [`Output`](#api-c02d6f2a4cb6ae90) | Field |

## Type declaration

<a id="api-505f71509c4a3565"></a>
<!-- api: T:InnoEngine.Graphs.GraphPortDirection b07c656727813d1ed79302c803d9402d65b80c838151487b48304eaceb572412 -->

```csharp
public enum InnoEngine.Graphs.GraphPortDirection : int
```

Declares the direction in which values flow through a graph port.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L9).

## `Input`

<a id="api-fc68cadad0205648"></a>
<!-- api: F:InnoEngine.Graphs.GraphPortDirection.Input fa01041e9401f5aef8aa3cd8ced98ea9bd201de049e41909ce72546f923ad7bd -->

```csharp
InnoEngine.Graphs.GraphPortDirection.Input = 0
```

Receives a value from another node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L14).

## `Output`

<a id="api-c02d6f2a4cb6ae90"></a>
<!-- api: F:InnoEngine.Graphs.GraphPortDirection.Output b4b7085657f29204e62801f4a17c8e1fa5dc51e40c3c9be04164601b5388c8d6 -->

```csharp
InnoEngine.Graphs.GraphPortDirection.Output = 1
```

Produces a value for another node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L18).
