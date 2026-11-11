---
title: "DocumentationSnapshot"
description: "Reference for DocumentationSnapshot in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.b438c8aef139e820
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationSnapshot`

This reference describes `DocumentationSnapshot` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-3074b93f2ca8645b) | Method |
| [`ExportCatalogAsync`](#api-489036dd8e8b32de) | Method |
| [`QueryAsync`](#api-ff200ecb1c784d87) | Method |
| [`identity`](#api-62a54f2e4bfddb95) | Property |
| [`sourceTree`](#api-1e62dff512cb2d15) | Property |

## Type declaration

<a id="api-b438c8aef139e820"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationSnapshot fa9e999b6cf12cf0898d0b7d406d50791ba954cde0b60ec505bd0a3aebad5237 -->

```csharp
public sealed class Inno.Tooling.Documentation.DocumentationSnapshot : System.IDisposable
```

Owns a protected immutable snapshot and answers transport-independent documentation requests.
Concurrent queries are supported; the owner must finish them before disposing the session.
Exact reads and symbol lookups do not initialize keyword-search postings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationSnapshot.cs#L18).

## `Dispose`

<a id="api-3074b93f2ca8645b"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationSnapshot.Dispose e9575438d288f3ac4a4678790c3d55a5b5cc1882c962d8e546773050f5a81053 -->

```csharp
public void Inno.Tooling.Documentation.DocumentationSnapshot.Dispose()
```

Releases this generation's shared reading protection after all its queries finish.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationSnapshot.cs#L197).

## `ExportCatalogAsync`

<a id="api-489036dd8e8b32de"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationSnapshot.ExportCatalogAsync(System.Threading.CancellationToken) 8afb7fc585874d0a789d8bef7b529826dd3e9a2ddf42798b1e7b4548922e6c7f -->

```csharp
public System.Threading.Tasks.Task<Inno.Tooling.Documentation.DocumentationCatalogReport> Inno.Tooling.Documentation.DocumentationSnapshot.ExportCatalogAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Exports canonical metadata for coverage, navigation and rendered-anchor verification.
Reads protected cached pages only; it does not rescan a checkout or refresh the snapshot.

**Parameter `cancellationToken`:** Cancels reads without changing the selected generation or source content.

**Returns:** Complete page and project metadata. Missing project entries remain null; API evidence remains explicit.

**Throws `System.IO.IOException`:** A cached page is missing, corrupt or outside its owned boundary.

**Throws `System.InvalidOperationException`:** The session was opened for a different engine source tree.

**Throws `System.OperationCanceledException`:** Export was canceled before the complete report was returned.

**Throws `System.ObjectDisposedException`:** The session has released its reading protection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationSnapshot.cs#L63).

## `QueryAsync`

<a id="api-ff200ecb1c784d87"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationSnapshot.QueryAsync(Inno.Tooling.Documentation.DocumentationRequest,System.Threading.CancellationToken) c0be5ad6e806b1684dc3004b5bedeb5f78784932ee087270358981f52ba6d0c3 -->

```csharp
public System.Threading.Tasks.Task<Inno.Tooling.Documentation.DocumentationResult> Inno.Tooling.Documentation.DocumentationSnapshot.QueryAsync(Inno.Tooling.Documentation.DocumentationRequest request, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Searches, reads, resolves symbols or resources, or reports binding status without mutating the index.

**Constraints:** Equally ranked multiword heading matches prefer task guides. Exact symbol and identifier searches
retain their reference priority; excerpts still require explicit contract reads.

**Parameter `request`:** A structured operation against this snapshot. Search excerpts are never returned as complete contracts.

**Parameter `cancellationToken`:** Cancels query work or page lease acquisition; the session remains reusable after cancellation.

**Returns:** Explicit content, empty, ambiguity, missing, continuation or mismatch results with snapshot provenance.

**Throws `System.ArgumentException`:** The operation, offset, limit or required selector is invalid.

**Throws `System.IO.IOException`:** A selected immutable payload is missing, corrupt or escapes the cache boundary.

**Throws `System.OperationCanceledException`:** The operation was canceled before its result was returned.

**Throws `System.ObjectDisposedException`:** The session has released its reading protection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationSnapshot.cs#L130).

## `identity`

<a id="api-62a54f2e4bfddb95"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationSnapshot.identity 42b3ec5a2d0770c516a088e0d14883f02384781a8447d7438e0dfff6c8477c66 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationSnapshot.identity { get; }
```

Gets the exact generation shared by every result in this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationSnapshot.cs#L34).

## `sourceTree`

<a id="api-1e62dff512cb2d15"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationSnapshot.sourceTree 357fe3f3df2f78564da2e1d6db0da4314443a35538d74bedc93758b33b1dcef5 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationSnapshot.sourceTree { get; }
```

Gets the source-tree identity recorded by the documentation binding, without asserting source API verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationSnapshot.cs#L39).
