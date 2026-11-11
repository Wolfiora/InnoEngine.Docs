---
title: "PathBoundary"
description: "Reference for PathBoundary in Inno.Core.IO."
uid: api.inno.core.io.6cedee446ec53227
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `PathBoundary`

This reference describes `PathBoundary` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`EnumerateFiles`](#api-d8f02a011244d08f) | Method |
| [`RequireContained`](#api-c6174c709948650d) | Method |
| [`RequireUnlinkedPath`](#api-85d791b42e880687) | Method |
| [`Resolve`](#api-2e31127307b4c891) | Method |

## Type declaration

<a id="api-6cedee446ec53227"></a>
<!-- api: T:Inno.Core.IO.PathBoundary 0ad3e89ceadb1714e27e89c0d056376b5a84c4e64d9e9a2dafae34bb4fea6a7e -->

```csharp
public static class Inno.Core.IO.PathBoundary
```

Resolves paths while enforcing an explicit filesystem ownership boundary.

**Constraints:** Ownership uses ordinal spelling on every filesystem, including case-insensitive volumes.
Callers must retain the root's spelling when constructing child paths. Case aliases are
deliberately rejected: operating-system identity does not determine volume case semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/PathBoundary.cs#L15).

## `EnumerateFiles`

<a id="api-d8f02a011244d08f"></a>
<!-- api: M:Inno.Core.IO.PathBoundary.EnumerateFiles(System.String) 040f40bd02c1fe7f75238b925d0d710c6a0cc2b551d6f4d0e1d485086bcb7c82 -->

```csharp
public static System.Collections.Generic.IEnumerable<string> Inno.Core.IO.PathBoundary.EnumerateFiles(string root)
```

Enumerates regular files in an owned tree without following filesystem links.

**Parameter `root`:** The existing physical root whose files and subdirectories belong to the caller.

**Returns:** Absolute file paths in unspecified order; enumeration does not retain open file handles.

**Throws `System.IO.IOException`:** The root or any entry is a symbolic link, junction or other reparse point, or cannot be inspected.

**Throws `System.IO.DirectoryNotFoundException`:** The root does not exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/PathBoundary.cs#L133).

## `RequireContained`

<a id="api-c6174c709948650d"></a>
<!-- api: M:Inno.Core.IO.PathBoundary.RequireContained(System.String,System.String) 37c0667f4908b4082cab988fe20ca9c7643ae7de2e0495f6a192988f9b817760 -->

```csharp
public static string Inno.Core.IO.PathBoundary.RequireContained(string root, string path)
```

Validates and normalizes an absolute path beneath a root.

**Parameter `root`:** The owning root directory.

**Parameter `path`:** The path to validate.

**Returns:** The normalized absolute contained path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/PathBoundary.cs#L55).

## `RequireUnlinkedPath`

<a id="api-85d791b42e880687"></a>
<!-- api: M:Inno.Core.IO.PathBoundary.RequireUnlinkedPath(System.String,System.String) 5ad613260e635819e1900f9b4b60f767e3648ca3ced8872adb54470dd1688245 -->

```csharp
public static string Inno.Core.IO.PathBoundary.RequireUnlinkedPath(string root, string path)
```

Resolves an owned path while rejecting existing links in its containment chain.

**Parameter `root`:** The trusted ownership root, which may not exist yet.

**Parameter `path`:** The absolute existing or future path beneath that root.

**Returns:** The normalized contained path after every existing entry from the root has been inspected.

**Throws `System.IO.IOException`:** The path escapes the boundary or an existing entry is a link or reparse point.

**Constraints:** This validates the observed filesystem state. Concurrent mutations require an owner lease;
it does not grant protection against unrelated actors replacing paths after validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/PathBoundary.cs#L86).

## `Resolve`

<a id="api-2e31127307b4c891"></a>
<!-- api: M:Inno.Core.IO.PathBoundary.Resolve(System.String,System.String) cc99c2d6f00316405ddf0393de8ec8c9f6a7bfdc74bb87140a7c775f36421f15 -->

```csharp
public static string Inno.Core.IO.PathBoundary.Resolve(string root, string relativePath)
```

Resolves a relative path beneath a root and rejects traversal outside that root.

**Parameter `root`:** The owning root directory.

**Parameter `relativePath`:** The relative path to resolve.

**Returns:** The normalized absolute contained path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/PathBoundary.cs#L29).
