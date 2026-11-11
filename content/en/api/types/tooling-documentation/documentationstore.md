---
title: "DocumentationStore"
description: "Reference for DocumentationStore in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.d0a329f2862c54a4
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationStore`

This reference describes `DocumentationStore` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`IndexAsync`](#api-8f18acab1d71a98c) | Method |
| [`OpenAsync`](#api-b8bc22b1f77b1b78) | Method |

## Type declaration

<a id="api-d0a329f2862c54a4"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationStore 693e15a7d37719bd0cb1d75ba404ebde6019725a11d6c98d3ee14c0cac6d4f7c -->

```csharp
public static class Inno.Tooling.Documentation.DocumentationStore
```

Publishes immutable documentation generations and opens protected read-only snapshots.
No operation invokes an SDK, product build or network client.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationStore.cs#L20).

## `IndexAsync`

<a id="api-8f18acab1d71a98c"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationStore.IndexAsync(System.String,System.String,System.String,System.Threading.CancellationToken) b35587de99efada37510d45891f187d361c42a5c0a98f8f3c84fce5cc5a20469 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Tooling.Documentation.DocumentationResult> Inno.Tooling.Documentation.DocumentationStore.IndexAsync(string workspaceRoot, string documentationRoot, string cacheRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Explicitly scans a Docs checkout and publishes a consistent generation using reusable parsed pages.

**Parameter `workspaceRoot`:** Absolute workspace owning the cache registration; may be the engine or Docs checkout.

**Parameter `documentationRoot`:** Explicit Docs checkout containing content/en and reference/engine.lock.json. No sibling path is inferred.

**Parameter `cacheRoot`:** Exclusive documentation cache boundary beneath workspaceRoot, outside the authored content tree.

**Parameter `cancellationToken`:** Cancels scanning, waiting and preparation before atomic selection. The previous generation remains readable.

**Returns:** The published snapshot identity and the number of parsed and reused pages; source API remains unverified.
Query-only changes rebuild the index while reusing pages whose parser, source and payload identities match.

**Constraints:** Independent page preparation uses at most four workers and retains each page's exclusive lease.
Catalog validation and generation publication occur only after all workers finish. Worker parsing
and registration timing totals can overlap; PagePreparation reports their enclosing wall time.

**Throws `System.IO.IOException`:** Inputs change during preparation, paths escape ownership, or a reference, contract or inclusion is invalid.

**Throws `System.OperationCanceledException`:** Preparation is canceled. Completed immutable payloads remain registered for safe maintenance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationStore.cs#L60).

## `OpenAsync`

<a id="api-b8bc22b1f77b1b78"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationStore.OpenAsync(System.String,System.String,System.String,System.Threading.CancellationToken) 00453d25efd80ca32248e6063e2cb311d9d671867883696dacec0f01fca65ebe -->

```csharp
public static System.Threading.Tasks.Task<Inno.Tooling.Documentation.DocumentationSnapshot> Inno.Tooling.Documentation.DocumentationStore.OpenAsync(string cacheRoot, string? snapshot = null, string? expectedSourceTree = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Opens one immutable generation without scanning authored content or acquiring an update lock.

**Parameter `cacheRoot`:** Absolute prepared cache root. This method does not prepare or download missing content.

**Parameter `snapshot`:** Exact generation identity, or null to resolve the currently published pointer once.

**Parameter `expectedSourceTree`:** Expected engine input tree, or null when the caller only needs the explicitly bound documentation snapshot.

**Parameter `cancellationToken`:** Cancels reading lease acquisition and manifest loading.

**Returns:** A caller-owned query session. Dispose it after the final query to release its generation reading lease.

**Throws `System.IO.IOException`:** The snapshot is missing, corrupt, outside its boundary or produced by an incompatible parser schema.

**Throws `System.OperationCanceledException`:** Reading acquisition is canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationStore.cs#L237).
