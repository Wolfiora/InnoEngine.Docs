---
title: "DocumentationCommand"
description: "Reference for DocumentationCommand in Inno.Tooling.Architecture."
uid: api.inno.tooling.architecture.87479b64d7760137
kind: api
owners:
  - Inno.Tooling.Architecture
apiSurface: source-clr
contracts:
  - project.inno-tooling-architecture#choose-the-evidence-you-need
---
# `DocumentationCommand`

This reference describes `DocumentationCommand` in `Inno.Tooling.Architecture`. Read the [shared contract](../../projects/inno-tooling-architecture.md#choose-the-evidence-you-need) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ExecuteAsync`](#api-939d4493f08270bb) | Method |
| [`GetProjectDocuments`](#api-ab5d4f2f87bd5a58) | Method |

## Type declaration

<a id="api-87479b64d7760137"></a>
<!-- api: T:Inno.Tooling.Architecture.DocumentationCommand b5ef56492a6fb3fda56415e3556e1d987f3943751b70002bca43b42942116872 -->

```csharp
public static class Inno.Tooling.Architecture.DocumentationCommand
```

Queries repository documentation without evaluating SDK projects, compiling products or invoking network services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Architecture/DocumentationCommand.cs#L14).

## `ExecuteAsync`

<a id="api-939d4493f08270bb"></a>
<!-- api: M:Inno.Tooling.Architecture.DocumentationCommand.ExecuteAsync(System.String[],System.Threading.CancellationToken) ac37fc1608a5d22da10aac1a2d7659a0c1c1f561e4a8fe620a5e0814f73f3f5a -->

```csharp
public static System.Threading.Tasks.Task<int> Inno.Tooling.Architecture.DocumentationCommand.ExecuteAsync(string[] arguments, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Indexes Markdown or retrieves search excerpts, complete sections and exact documented symbols.

**Parameter `arguments`:** The index, search, read or symbol operation followed by engine-root, query, project, page, section, id,
limit, offset and format options. Format is text or json; pages are relative to the repository root.
Offset resumes an explicitly partial section without discarding intervening Markdown.

**Parameter `cancellationToken`:** Cancels index preparation before publication while retaining the last complete index.

**Returns:** Zero after emitting a valid result, including explicit empty search results or ambiguity candidates.

**Throws `System.ArgumentException`:** An operation, option, project, section or symbol is absent, ambiguous as an input, or invalid.

**Throws `System.IO.IOException`:** A page is missing, a path escapes its owner, an inclusion is invalid or documentation changes during indexing.

**Throws `System.OperationCanceledException`:** The caller cancels indexing or ownership acquisition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Architecture/DocumentationCommand.cs#L66).

## `GetProjectDocuments`

<a id="api-ab5d4f2f87bd5a58"></a>
<!-- api: M:Inno.Tooling.Architecture.DocumentationCommand.GetProjectDocuments(System.String) b7d2172ae933ee9be3db0ca7b9a28294d8a48271a12f053250d8fc8d121a0b0e -->

```csharp
public static System.Collections.Generic.IReadOnlyDictionary<string, string> Inno.Tooling.Architecture.DocumentationCommand.GetProjectDocuments(string root)
```

Maps existing canonical pages and their included or same-name directory fragments to actual repository projects.
Missing project pages remain the responsibility of the required documentation structure check.

**Parameter `root`:** The absolute repository root containing docs and the existing source project inventory.

**Returns:** Repository-relative Markdown paths mapped to repository-relative project paths, without SDK evaluation.

**Throws `System.IO.InvalidDataException`:** Project pages are ambiguous, or an inclusion is absent, repeats or cycles.

**Throws `System.IO.IOException`:** A documentation path escapes its owner, follows a link or cannot be read.

**Throws `System.ArgumentException`:** The root is invalid or repository projects have duplicate names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Architecture/DocumentationCommand.cs#L35).
