---
title: "DependencyGraph`1"
description: "Reference for DependencyGraph`1 in Inno.Core.Collections."
uid: api.inno.core.collections.446588c1dbf12be6
kind: api
owners:
  - Inno.Core.Collections
apiSurface: source-clr
contracts:
  - project.inno-core-collections#graph-and-store-contract
---
# ``DependencyGraph`1``

This reference describes ``DependencyGraph`1`` in `Inno.Core.Collections`. Read the [shared contract](../../projects/inno-core-collections.md#graph-and-store-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0568e8f596adeca9) | Method |
| [`AddDependency`](#api-86bb652d006aa5e3) | Method |
| [`AddNode`](#api-72fe0bfd9171982f) | Method |
| [`Clear`](#api-8084ab8c30f3ee38) | Method |
| [`ContainsNode`](#api-2ea6d0b4de56c184) | Method |
| [`DependsOn`](#api-dcc60a5cfd3fd4ae) | Method |
| [`GetDependencies`](#api-d64166c0b2c8d4f5) | Method |
| [`GetDependents`](#api-41c2aa3cd57ac6b6) | Method |
| [`GetStronglyConnectedComponents`](#api-ed96995e9b62aefe) | Method |
| [`RemoveDependency`](#api-bad1571da18303f2) | Method |
| [`RemoveNode`](#api-c1dfd16b621fafb2) | Method |
| [`ReplaceDependencies`](#api-4842ae688c8b64b4) | Method |
| [`TopologicalSort`](#api-19c01874a1554d65) | Method |
| [`TryFindCycle`](#api-3e6c579e95f0221e) | Method |
| [`count`](#api-09794fb3ef202502) | Property |
| [`version`](#api-24d407030235a2a9) | Property |

## Type declaration

<a id="api-446588c1dbf12be6"></a>
<!-- api: T:Inno.Core.Collections.DependencyGraph`1 e920aee4d52578b0890bef8fe27cf32a501279b9484ab240da358fc141a0d8a3 -->

```csharp
public sealed class Inno.Core.Collections.DependencyGraph<TKey> where TKey : notnull
```

Stores a directed dependency graph and provides deterministic dependency queries.

**Type parameter `TKey`:** The node key type.

**Constraints:** An edge from `node` to `dependency` means that `node` depends on
`dependency`. The graph accepts cycles; operations that require an acyclic graph,
such as ``Inno.Core.Collections.DependencyGraph`1.TopologicalSort``, report them explicitly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L19).

## `#ctor`

<a id="api-0568e8f596adeca9"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.#ctor(System.Collections.Generic.IEqualityComparer{`0},System.Collections.Generic.IComparer{`0}) aaed2b90b37cad2309de5b49eb01818f49118fd8cfae0b837e4d63536e467b4c -->

```csharp
public Inno.Core.Collections.DependencyGraph<TKey>.DependencyGraph(System.Collections.Generic.IEqualityComparer<TKey>? equalityComparer = null, System.Collections.Generic.IComparer<TKey>? orderingComparer = null)
```

Creates an empty dependency graph.

**Parameter `equalityComparer`:** Optional node equality comparer.

**Parameter `orderingComparer`:** Optional ordering comparer used to make query results deterministic. When omitted,
node insertion order is used.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L83).

## `AddDependency`

<a id="api-86bb652d006aa5e3"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.AddDependency(`0,`0) 1bd841b00ab9ff9f115b999122ce6754ef76aaa920b342965f70afaa851d6443 -->

```csharp
public bool Inno.Core.Collections.DependencyGraph<TKey>.AddDependency(TKey node, TKey dependency)
```

Adds an edge indicating that one node depends on another.

**Parameter `node`:** The dependent node.

**Parameter `dependency`:** The required dependency.

**Returns:** `true` when the edge was added.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L231).

## `AddNode`

<a id="api-72fe0bfd9171982f"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.AddNode(`0) 6be82d165497ec0679a40577ea9d1bccdde909bd12fd7cc9040804cde8375607 -->

```csharp
public bool Inno.Core.Collections.DependencyGraph<TKey>.AddNode(TKey node)
```

Adds a node when it does not already exist.

**Parameter `node`:** The node key.

**Returns:** `true` when a node was added.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L164).

## `Clear`

<a id="api-8084ab8c30f3ee38"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.Clear 05c0e54c313c3205c16f50ab53a53c95fe4b2a7eb0c9bb19abde0c4148ee6fbd -->

```csharp
public void Inno.Core.Collections.DependencyGraph<TKey>.Clear()
```

Removes every node and edge.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L572).

## `ContainsNode`

<a id="api-2ea6d0b4de56c184"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.ContainsNode(`0) 744d5e53cab2d395ac558a9101a8e83f9e13ae8ddf91bbaabb3bc702cc27918f -->

```csharp
public bool Inno.Core.Collections.DependencyGraph<TKey>.ContainsNode(TKey node)
```

Determines whether a node exists.

**Parameter `node`:** The node key.

**Returns:** `true` when the node exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L142).

## `DependsOn`

<a id="api-dcc60a5cfd3fd4ae"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.DependsOn(`0,`0,System.Boolean) 8cd7140c4874723297f6d94540283924da910a5f2e190264e816045fab1caeae -->

```csharp
public bool Inno.Core.Collections.DependencyGraph<TKey>.DependsOn(TKey node, TKey dependency, bool recursive = false)
```

Determines whether one node directly or transitively depends on another.

**Parameter `node`:** The dependent node.

**Parameter `dependency`:** The dependency to find.

**Parameter `recursive`:** Whether transitive edges should be searched.

**Returns:** `true` when the dependency exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L389).

## `GetDependencies`

<a id="api-d64166c0b2c8d4f5"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.GetDependencies(`0,System.Boolean) 196c043a4ebd8ebfeae024f873ae6b47959fbb9c652993846645cfd69749a98d -->

```csharp
public System.Collections.Generic.IReadOnlyList<TKey> Inno.Core.Collections.DependencyGraph<TKey>.GetDependencies(TKey node, bool recursive = false)
```

Gets direct or transitive dependencies of a node.

**Parameter `node`:** The node to query.

**Parameter `recursive`:** Whether transitive dependencies should be included.

**Returns:** A stable dependency snapshot, or an empty list when the node is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L350).

## `GetDependents`

<a id="api-41c2aa3cd57ac6b6"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.GetDependents(`0,System.Boolean) 34ac3282e8fd24658a3471c8278905acac68180ebe15c06c7c363e25f959f7c6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<TKey> Inno.Core.Collections.DependencyGraph<TKey>.GetDependents(TKey node, bool recursive = false)
```

Gets direct or transitive dependents of a node.

**Parameter `node`:** The node to query.

**Parameter `recursive`:** Whether transitive dependents should be included.

**Returns:** A stable dependent snapshot, or an empty list when the node is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L368).

## `GetStronglyConnectedComponents`

<a id="api-ed96995e9b62aefe"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.GetStronglyConnectedComponents 2a74d053a2df410c23d560f7ab1b7b951fea5d117e28b1b0a4006864f306562a -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Collections.Generic.IReadOnlyList<TKey>> Inno.Core.Collections.DependencyGraph<TKey>.GetStronglyConnectedComponents()
```

Gets every strongly connected component in deterministic order.

**Returns:** A stable snapshot containing cyclic components and single-node acyclic components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L501).

## `RemoveDependency`

<a id="api-bad1571da18303f2"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.RemoveDependency(`0,`0) 42da340c7d7ce8aa05d50a072a893b94b93c6b6c23aa2d87ef5bf2de53caf97d -->

```csharp
public bool Inno.Core.Collections.DependencyGraph<TKey>.RemoveDependency(TKey node, TKey dependency)
```

Removes a dependency edge.

**Parameter `node`:** The dependent node.

**Parameter `dependency`:** The required dependency.

**Returns:** `true` when the edge was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L265).

## `RemoveNode`

<a id="api-c1dfd16b621fafb2"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.RemoveNode(`0) a43f5eac9324267e2dd3fbeaa579d33e6894406e0cb5448aa00fb97a48904ae0 -->

```csharp
public bool Inno.Core.Collections.DependencyGraph<TKey>.RemoveNode(TKey node)
```

Removes a node and every incoming and outgoing edge connected to it.

**Parameter `node`:** The node key.

**Returns:** `true` when the node was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L190).

## `ReplaceDependencies`

<a id="api-4842ae688c8b64b4"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.ReplaceDependencies(`0,System.Collections.Generic.IEnumerable{`0}) 32610903c0525b3207fd586e9084f3eb7ac331a460b7b2b9d8fdb743385ce112 -->

```csharp
public void Inno.Core.Collections.DependencyGraph<TKey>.ReplaceDependencies(TKey node, System.Collections.Generic.IEnumerable<TKey> dependencies)
```

Atomically replaces every direct dependency of a node.

**Parameter `node`:** The dependent node.

**Parameter `dependencies`:** The complete replacement dependency set.

**Throws `System.ArgumentNullException`:** Thrown when `dependencies` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L302).

## `TopologicalSort`

<a id="api-19c01874a1554d65"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.TopologicalSort 95f4c1d2765b8edde73a7f2ca2d0dbb5f425afddcf63985817f123d692eb53e4 -->

```csharp
public System.Collections.Generic.IReadOnlyList<TKey> Inno.Core.Collections.DependencyGraph<TKey>.TopologicalSort()
```

Returns an order in which every dependency precedes its dependents.

**Returns:** A deterministic topological ordering.

**Throws `System.InvalidOperationException`:** Thrown when the graph contains a cycle. The exception message contains a complete cycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L432).

## `TryFindCycle`

<a id="api-3e6c579e95f0221e"></a>
<!-- api: M:Inno.Core.Collections.DependencyGraph`1.TryFindCycle(System.Collections.Generic.IReadOnlyList{`0}@) e5c469390be3264bd2619dfba18c127f866969b10dbcb32500fb869be3078efd -->

```csharp
public bool Inno.Core.Collections.DependencyGraph<TKey>.TryFindCycle(out System.Collections.Generic.IReadOnlyList<TKey> cycle)
```

Tries to find one complete cycle in the graph.

**Parameter `cycle`:** A closed cycle whose first and last nodes are equal, or an empty list when acyclic.

**Returns:** `true` when a cycle was found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L481).

## `count`

<a id="api-09794fb3ef202502"></a>
<!-- api: P:Inno.Core.Collections.DependencyGraph`1.count a859deaaea7482cb6386772413a0fa725d7a590276e74cec0f3dfd9d5206be31 -->

```csharp
public int Inno.Core.Collections.DependencyGraph<TKey>.count { get; }
```

Gets the number of nodes in the graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L95).

## `version`

<a id="api-24d407030235a2a9"></a>
<!-- api: P:Inno.Core.Collections.DependencyGraph`1.version 67b2c380140dda8c292d1652b6de3738acc0b389bc284b5a0e23f74ac64c0190 -->

```csharp
public long Inno.Core.Collections.DependencyGraph<TKey>.version { get; }
```

Gets the structural version of the graph.

**Constraints:** The version changes after every successful structural mutation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/DependencyGraph/DependencyGraph.cs#L117).
