---
title: "PhysicalPathResolver"
description: "Reference for PhysicalPathResolver in Inno.Core.IO."
uid: api.inno.core.io.a1a9e8edbe3f8b47
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `PhysicalPathResolver`

This reference describes `PhysicalPathResolver` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cf1407e1b2346f81) | Method |
| [`Resolve`](#api-0824882ccfe33282) | Method |

## Type declaration

<a id="api-a1a9e8edbe3f8b47"></a>
<!-- api: T:Inno.Core.IO.PhysicalPathResolver 5f704a5a3c26e67473d2381b57156552d323e349e4984eb6fd657d69a7f7f43d -->

```csharp
public sealed class Inno.Core.IO.PhysicalPathResolver
```

Resolves filesystem aliases within one caller-owned reading phase without granting write authority.

**Constraints:** Instances are not thread-safe. Create a fresh instance when validating filesystem changes.
Resolved paths still require an explicit PathBoundary check before ownership or mutation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/PhysicalPathResolver.cs#L14).

## `#ctor`

<a id="api-cf1407e1b2346f81"></a>
<!-- api: M:Inno.Core.IO.PhysicalPathResolver.#ctor(System.StringComparer) 705c07f61030f2fcd43c48492e374c4429b8c8fafbecba3c3bd1f0fff2c0d74a -->

```csharp
public Inno.Core.IO.PhysicalPathResolver.PhysicalPathResolver(System.StringComparer? comparer = null)
```

Creates a phase-local resolver with the caller's known path-comparison semantics.

**Parameter `comparer`:** The known filesystem comparison, or null to retain ordinal spelling without assuming volume semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/PhysicalPathResolver.cs#L25).

## `Resolve`

<a id="api-0824882ccfe33282"></a>
<!-- api: M:Inno.Core.IO.PhysicalPathResolver.Resolve(System.String) f07437a622d192318080d81539a6dc4d0adedb26f088b9d0ae3efbc61e8975a9 -->

```csharp
public string Inno.Core.IO.PhysicalPathResolver.Resolve(string path)
```

Resolves existing link components and retains their observed physical spelling for this phase.

**Parameter `path`:** The file or directory to inspect; relative paths use the current working directory.

**Returns:** The observed physical path, without creating files or relaxing an ownership boundary.

**Throws `System.ArgumentException`:** The path is empty or invalid.

**Throws `System.IO.FileNotFoundException`:** A required filesystem entry is missing.

**Throws `System.IO.DirectoryNotFoundException`:** A required parent directory is missing.

**Throws `System.IO.IOException`:** A link is cyclic or cannot be resolved.

**Throws `System.UnauthorizedAccessException`:** Filesystem metadata or a link target cannot be read with the current permissions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/PhysicalPathResolver.cs#L55).
