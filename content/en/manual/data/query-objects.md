---
title: Query objects through typed indexes
description: Keep one reference-identity collection with explicit keys, snapshot reads and bounded query candidates.
uid: manual.data.query-objects
kind: how-to
owners:
  - Inno.Core.Collections
contracts:
  - project.inno-core-collections#graph-and-store-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Collections
---
# Query objects through typed indexes

`IndexedObjectStore<T>` combines dense storage with multiple typed indexes. It stores reference-type objects by reference identity; it does not create, pool, dispose or retire them. Use it when several lookups must refer to the same explicitly owned objects.

## Define keys, then assign values

The following host example creates a unique ID key and an ordered priority key. Index values are supplied explicitly through the entry returned by `Add`; changing an object's property does not update its index automatically.

```csharp
using System;
using System.Collections.Generic;
using Inno.Core.Collections;

static WorkItem? FindItem(Guid id)
{
    var store = new IndexedObjectStore<WorkItem>();
    IndexedObjectKey<Guid> byId = store.DefineKey<Guid>("id", IndexedObjectKeyFlags.Unique);
    IndexedObjectKey<int> byPriority = store.DefineKey<int>(
        "priority", IndexedObjectKeyFlags.Ordered, Comparer<int>.Default);
    WorkItem item = new(id, 10);
    store.Add(item).Set(byId, item.id).Set(byPriority, item.priority);
    return store.First(byId, id);
}

internal sealed record WorkItem(
    Guid id,
    int priority
);
```

`Unique` permits at most one object for a key value; collision throws rather than replacing another object. Updating an existing unique value validates the replacement before removing its old mapping. `Ordered` requires an explicit ordering comparer. An unordered key uses hash lookup without sorted traversal.

## Compose a query

`Query().Find(key, value)` supplies an indexed condition. Add `Where` predicates or custom `IIndexedObjectQueryCondition<T>` conditions, then choose `Get`, `GetFast` or `First`. `OrderBy` requires a key declared as ordered.

The executor prefers the indexed condition with the smallest estimated candidate count and verifies remaining conditions against that set. An ordered query sorts candidate objects using their maintained order key instead of always walking the entire ordered index. `First` finds the least matching order value without constructing the full result.

When only unindexed predicates are available, a scan is necessary. Equal order values use the current dense storage position as a tie-breaker. If ordering must remain stable across removals, supply your own unique ordered sequence value.

## Select snapshot or fast reads

| Read style | Result |
| --- | --- |
| `Find`, `All`, query `Get` | A detached collection of matching object references. Later structural edits do not change membership in that result. |
| `FindFast`, `AllFast`, query `GetFast` | Lazy enumeration that avoids a full result copy and detects store-version changes. |
| `First` | The first matching reference, or null. |

A snapshot does **not** clone its objects or make their mutable fields immutable. The lifecycle owner must keep those objects valid for the reader. Fast enumeration is not a concurrent-write protocol: prevent mutation for its duration and treat invalidation as an explicit failure.

Custom conditions can estimate a candidate count (`int.MaxValue` when unknown), return a direct candidate, expose a candidate set and validate each object. They must provide a complete candidate set for their condition; an underestimate that omits candidates changes results. Keep predicates/comparers free of store mutation and reentrant public queries: snapshot execution can hold the store's nonrecursive read lock while invoking them.

## Reset or remove data deliberately

`Remove(item)` removes that reference and its indexed values. `RemoveAll` removes objects while retaining key definitions. `Clear` removes both objects and keys. None disposes the objects.

Keys are local to one store. Always discard them after `Clear` and reacquire new handles after defining keys again. The current representation does not provide a durable reset epoch: an old same-type key may look valid after IDs are reused. `RemoveKey` also requires that the caller supply a key from the exact owning store. Do not use `isValid` as permission to pass foreign or pre-reset handles.

Key handles weakly refer to their store and do not extend its lifetime. Entry handles refer to objects still admitted to that store; removing and re-adding the same reference is not a persistent identity protocol. Use the engine's [identity model](../identity-and-missing.md) when references must survive reconstruction or reload.

See the [Collections reference](../../api/projects/inno-core-collections.md) for all key and query interfaces.
