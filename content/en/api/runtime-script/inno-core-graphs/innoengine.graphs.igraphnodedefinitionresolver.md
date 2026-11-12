---
title: "IGraphNodeDefinitionResolver"
description: "Reference for IGraphNodeDefinitionResolver in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.b2532d223043a748
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `IGraphNodeDefinitionResolver`

This reference describes `IGraphNodeDefinitionResolver` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`TryResolve`](#api-b97675a9d72522fd) | Method |

## Type declaration

<a id="api-b2532d223043a748"></a>
<!-- api: T:InnoEngine.Graphs.IGraphNodeDefinitionResolver f682756e40d403c3cfa814e7752d1bd3760b1033f88ded2f1036e4b1ba7d0057 -->

```csharp
public interface InnoEngine.Graphs.IGraphNodeDefinitionResolver
```

Resolves generation-scoped node definitions by stable identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L171).

## `TryResolve`

<a id="api-b97675a9d72522fd"></a>
<!-- api: M:InnoEngine.Graphs.IGraphNodeDefinitionResolver.TryResolve(System.String,InnoEngine.Graphs.GraphNodeDefinition@) 621862d92e9b3e8df5deff881fff238d283c659f24e93a686c8e761317efae03 -->

```csharp
bool InnoEngine.Graphs.IGraphNodeDefinitionResolver.TryResolve(string definitionId, out InnoEngine.Graphs.GraphNodeDefinition? definition)
```

Tries to resolve an active node definition.

**Parameter `definitionId`:** Stable definition identifier.

**Parameter `definition`:** Receives the generation-scoped definition.

**Returns:** `true` when active; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L185).
