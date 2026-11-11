---
title: "DocumentationCommand"
description: "Reference for DocumentationCommand in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.d0ea3c8dac3a9f79
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationCommand`

This reference describes `DocumentationCommand` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ExecuteAsync`](#api-0d1b3db816720569) | Method |

## Type declaration

<a id="api-d0ea3c8dac3a9f79"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationCommand 5a281de8a00f3bbb1d2777769e07833d079c7d883307d05c1ca57e9bc9c00704 -->

```csharp
public static class Inno.Tooling.Documentation.DocumentationCommand
```

Adapts the shared documentation contracts to the existing Build command line.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationCommand.cs#L14).

## `ExecuteAsync`

<a id="api-0d1b3db816720569"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCommand.ExecuteAsync(System.String[],System.Threading.CancellationToken) f09afab21c39a82728f10b14344cdc763150eaffe17cdd360ac8a94d93f90465 -->

```csharp
public static System.Threading.Tasks.Task<int> Inno.Tooling.Documentation.DocumentationCommand.ExecuteAsync(string[] arguments, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Explicitly indexes a selected checkout or queries an already prepared immutable snapshot.

**Parameter `arguments`:** index, search, read, symbol, resource, status or catalog followed by engine-root, cache-root, docs-root,
snapshot, source-tree, query, page, project, surface, section, id, offset, limit and format as applicable.
Index requires docs-root. Read-only commands reject docs-root rather than implicitly refreshing mutable content.
Reads optionally accept evidence-file and evidence-sha256 selected by an authenticated preparation boundary.

**Parameter `cancellationToken`:** Cancels preparation or reading while preserving the previous complete generation.

**Returns:** Zero for valid results including empty searches; two for missing, ambiguous or mismatched targets.
Partial results have explicit continuations and do not assert contract completeness.

**Throws `System.ArgumentException`:** Options are absent, duplicated or invalid for the operation.

**Throws `System.IO.IOException`:** The selected source or snapshot cannot be safely read or published.

**Throws `System.OperationCanceledException`:** The caller cancels the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationCommand.cs#L41).
