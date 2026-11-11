---
title: "GraphPortDirection"
description: "Reference for GraphPortDirection in Inno.Core.Graphs."
uid: api.inno.core.graphs.38d846da63d8ef99
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphPortDirection`

This reference describes `GraphPortDirection` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Input`](#api-c56f6ddd70052505) | Field |
| [`Output`](#api-85e064e80b29d06d) | Field |

## Type declaration

<a id="api-38d846da63d8ef99"></a>
<!-- api: T:Inno.Core.Graphs.GraphPortDirection 6ec0ffd4a25ad5cf1fe3d6c25a01604460ea32ab3dc3ec380d94e0397ed83154 -->

```csharp
public enum Inno.Core.Graphs.GraphPortDirection : int
```

Declares the direction in which values flow through a graph port.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L9).

## `Input`

<a id="api-c56f6ddd70052505"></a>
<!-- api: F:Inno.Core.Graphs.GraphPortDirection.Input c5d5bc2b79261a7050cf3d29a4b9ba0b34a0c0e22b0c5dfa3ffeb2b61da80173 -->

```csharp
Inno.Core.Graphs.GraphPortDirection.Input = 0
```

Receives a value from another node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L14).

## `Output`

<a id="api-85e064e80b29d06d"></a>
<!-- api: F:Inno.Core.Graphs.GraphPortDirection.Output f59e6bb57e1fd794339af9e53aff5023f8a1841ddb26fdcc53aeffcbfd5d3cb1 -->

```csharp
Inno.Core.Graphs.GraphPortDirection.Output = 1
```

Produces a value for another node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L18).
