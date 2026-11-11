---
title: "IGraphNodeDefinitionResolver"
description: "Reference for IGraphNodeDefinitionResolver in Inno.Core.Graphs."
uid: api.inno.core.graphs.97d8fe14c1fd515b
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `IGraphNodeDefinitionResolver`

This reference describes `IGraphNodeDefinitionResolver` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`TryResolve`](#api-5eeed7ae9c3c4d67) | Method |

## Type declaration

<a id="api-97d8fe14c1fd515b"></a>
<!-- api: T:Inno.Core.Graphs.IGraphNodeDefinitionResolver 1a492cc81eb2b6c1cf6009280216b04329af329e647e9032c074d3ce35e9eb57 -->

```csharp
public interface Inno.Core.Graphs.IGraphNodeDefinitionResolver
```

Resolves generation-scoped node definitions by stable identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L171).

## `TryResolve`

<a id="api-5eeed7ae9c3c4d67"></a>
<!-- api: M:Inno.Core.Graphs.IGraphNodeDefinitionResolver.TryResolve(System.String,Inno.Core.Graphs.GraphNodeDefinition@) cd6414c2877f5bfa0c9fb10fd9a90177cc32ccf102299794c32979bcc8a157b4 -->

```csharp
bool Inno.Core.Graphs.IGraphNodeDefinitionResolver.TryResolve(string definitionId, out Inno.Core.Graphs.GraphNodeDefinition? definition)
```

Tries to resolve an active node definition.

**Parameter `definitionId`:** Stable definition identifier.

**Parameter `definition`:** Receives the generation-scoped definition.

**Returns:** `true` when active; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L185).
