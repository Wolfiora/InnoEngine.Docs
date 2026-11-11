---
title: "FileContentStore"
description: "Reference for FileContentStore in Inno.Adapter.Content.FileSystem."
uid: api.inno.adapter.content.filesystem.1c431dc2c16d0df1
kind: api
owners:
  - Inno.Adapter.Content.FileSystem
apiSurface: source-clr
contracts:
  - project.inno-adapter-content-filesystem
---
# `FileContentStore`

This reference describes `FileContentStore` in `Inno.Adapter.Content.FileSystem`. Read the [shared contract](../../../projects/inno-adapter-content-filesystem.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Content.IRuntimeContentStore`.

## Members

| Member | Kind |
| --- | --- |
| [`Acquire`](#api-0bc602a001abda26) | Method |
| [`Dispose`](#api-1b387ee48a61be85) | Method |
| [`descriptor`](#api-8da3bb6aa95dd90f) | Property |
| [`index`](#api-3bed98d372ba475a) | Property |
| [`retirementDiagnostics`](#api-eea8173b47b97ceb) | Property |

## Type declaration

<a id="api-1c431dc2c16d0df1"></a>
<!-- api: T:Inno.Adapter.Content.FileSystem.FileContentStore 968fb7f9a0e36649ca7b458b0feccfdcb9b32754e041522b5a2f3b0c901ab596 -->

```csharp
public sealed class Inno.Adapter.Content.FileSystem.FileContentStore : Inno.Content.IRuntimeContentStore
```

Pins one fully verified filesystem generation while exposing only logical content reads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentStore.cs#L11).

## `Acquire`

<a id="api-0bc602a001abda26"></a>
<!-- api: M:Inno.Adapter.Content.FileSystem.FileContentStore.Acquire(Inno.Content.ContentKey) 96956a550eb1bdb111de2ecae17e6224681b2bd81de057ecbbddc2ddcdee3989 -->

```csharp
public Inno.Content.ContentReadLease Inno.Adapter.Content.FileSystem.FileContentStore.Acquire(Inno.Content.ContentKey key)
```

Pins an entry against source retirement and supplies independent read streams.

**Parameter `key`:** The exact assigned logical key.

**Returns:** A caller-owned lease whose streams remain usable after this store closes.

**Throws `System.IO.FileNotFoundException`:** The exact content key is not present.

**Throws `System.ObjectDisposedException`:** The store has closed and cannot issue new leases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentStore.cs#L40).

## `Dispose`

<a id="api-1b387ee48a61be85"></a>
<!-- api: M:Inno.Adapter.Content.FileSystem.FileContentStore.Dispose f5327f12eba3dd6d80de20733d087bdd1caf1616e6e55508bddf46dd31e66925 -->

```csharp
public void Inno.Adapter.Content.FileSystem.FileContentStore.Dispose()
```

Stops new reads and releases the store pin after existing leases and streams retain their own ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentStore.cs#L54).

## `descriptor`

<a id="api-8da3bb6aa95dd90f"></a>
<!-- api: P:Inno.Adapter.Content.FileSystem.FileContentStore.descriptor 5ddfd75bb9ca2b664e3f05d4c4190d2b89f59bc193a7bfaa62eb4e6e707d7188 -->

```csharp
public Inno.Content.ContentPackDescriptor Inno.Adapter.Content.FileSystem.FileContentStore.descriptor { get; }
```

Gets the immutable complete-pack identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentStore.cs#L29).

## `index`

<a id="api-3bed98d372ba475a"></a>
<!-- api: P:Inno.Adapter.Content.FileSystem.FileContentStore.index e1dba994eb16848bb64336021628bfbfd9c3423996295e19df9d66d45b7c6025 -->

```csharp
public Inno.Content.ContentPackIndex Inno.Adapter.Content.FileSystem.FileContentStore.index { get; }
```

Gets the immutable complete payload inventory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentStore.cs#L32).

## `retirementDiagnostics`

<a id="api-eea8173b47b97ceb"></a>
<!-- api: P:Inno.Adapter.Content.FileSystem.FileContentStore.retirementDiagnostics f6f9e5f762ee6ade39f926ff9412b9cfe8235709f55da446aa6ce94de0ec445f -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Adapter.Content.FileSystem.FileContentStore.retirementDiagnostics { get; }
```

Gets post-publication cleanup failures; these do not invalidate the verified published generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentStore.cs#L37).
