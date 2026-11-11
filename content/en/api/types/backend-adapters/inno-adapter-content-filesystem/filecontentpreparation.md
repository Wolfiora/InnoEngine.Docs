---
title: "FileContentPreparation"
description: "Reference for FileContentPreparation in Inno.Adapter.Content.FileSystem."
uid: api.inno.adapter.content.filesystem.7a5565f16ec08f58
kind: api
owners:
  - Inno.Adapter.Content.FileSystem
apiSurface: source-clr
contracts:
  - project.inno-adapter-content-filesystem
---
# `FileContentPreparation`

This reference describes `FileContentPreparation` in `Inno.Adapter.Content.FileSystem`. Read the [shared contract](../../../projects/inno-adapter-content-filesystem.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`PrepareAsync`](#api-7de727bfadd21a9f) | Method |

## Type declaration

<a id="api-7a5565f16ec08f58"></a>
<!-- api: T:Inno.Adapter.Content.FileSystem.FileContentPreparation 537cbd1aa483689184717d29db2a295ca3c1bf3b913252ba0ab1e77de1aac0a6 -->

```csharp
public static class Inno.Adapter.Content.FileSystem.FileContentPreparation
```

Coordinates complete cache validation, generation publication, and reader-safe retirement across processes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentPreparation.cs#L13).

## `PrepareAsync`

<a id="api-7de727bfadd21a9f"></a>
<!-- api: M:Inno.Adapter.Content.FileSystem.FileContentPreparation.PrepareAsync(Inno.Content.IRuntimeContentStore,Inno.Adapter.Content.FileSystem.FileContentCacheOptions,System.Threading.CancellationToken) c72fa1fc27ce413d8d17bd1147ffaf38620aeb6b0e00c4a9657b7af0b6aeb447 -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Adapter.Content.FileSystem.FileContentStore> Inno.Adapter.Content.FileSystem.FileContentPreparation.PrepareAsync(Inno.Content.IRuntimeContentStore source, Inno.Adapter.Content.FileSystem.FileContentCacheOptions options, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reuses only a completely verified generation or publishes a fully validated replacement.

**Parameter `source`:** The borrowed immutable store retained by the caller until preparation completes.

**Parameter `options`:** Host-selected cache ownership and bounded lock wait.

**Parameter `cancellationToken`:** Cancels preparation before ownership is returned; already committed content remains valid.

**Returns:** A caller-owned store pinning the selected generation, with separate post-publication cleanup diagnostics.

**Throws `System.IO.InvalidDataException`:** The source cannot produce the indexed content or candidate validation fails.

**Throws `System.TimeoutException`:** Another preparing process retains exclusive ownership beyond the host-selected timeout.

**Throws `System.OperationCanceledException`:** Preparation was canceled; no store ownership is returned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentPreparation.cs#L39).
