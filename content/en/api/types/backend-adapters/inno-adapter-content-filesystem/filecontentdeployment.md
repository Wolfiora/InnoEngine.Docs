---
title: "FileContentDeployment"
description: "Reference for FileContentDeployment in Inno.Adapter.Content.FileSystem."
uid: api.inno.adapter.content.filesystem.6aaba1dd9c3acb44
kind: api
owners:
  - Inno.Adapter.Content.FileSystem
apiSurface: source-clr
contracts:
  - project.inno-adapter-content-filesystem
---
# `FileContentDeployment`

This reference describes `FileContentDeployment` in `Inno.Adapter.Content.FileSystem`. Read the [shared contract](../../../projects/inno-adapter-content-filesystem.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f3a2378981a633f1) | Method |
| [`PrepareAsync`](#api-235d796a9fdd076c) | Method |
| [`ReadDocumentAsync`](#api-c9901ee644057714) | Method |

## Type declaration

<a id="api-6aaba1dd9c3acb44"></a>
<!-- api: T:Inno.Adapter.Content.FileSystem.FileContentDeployment 18aba7a96749f34df499fd058efd4d92d59386df675e43092566febeefcb9aa4 -->

```csharp
public sealed class Inno.Adapter.Content.FileSystem.FileContentDeployment
```

Reads explicit file deployments using the shared content protocol and verified generation cache.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentDeployment.cs#L15).

## `#ctor`

<a id="api-f3a2378981a633f1"></a>
<!-- api: M:Inno.Adapter.Content.FileSystem.FileContentDeployment.#ctor(System.String,System.String) 366e4cf4d8d6de9e79d38ab72c5027ccd11a8df82f36ca69fd99caba87ed40fe -->

```csharp
public Inno.Adapter.Content.FileSystem.FileContentDeployment.FileContentDeployment(string contentDirectory, string cacheRoot)
```

Captures explicit deployment and application cache locations without inspecting platform layout.

**Parameter `contentDirectory`:** The directory containing the current deployment's metadata and content pack.

**Parameter `cacheRoot`:** The host-owned root beneath which application-scoped verified generations are prepared.

**Throws `System.ArgumentException`:** A location is empty or cannot be normalized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentDeployment.cs#L35).

## `PrepareAsync`

<a id="api-235d796a9fdd076c"></a>
<!-- api: M:Inno.Adapter.Content.FileSystem.FileContentDeployment.PrepareAsync(Inno.Content.ContentPackDescriptor,Inno.Storage.StorageScope,Inno.Core.Serialization.SerializationGeneration,System.Threading.CancellationToken) a3a7ee753b02bc5be97eb596f317da666096db9df544af974c4ea50dd63045ef -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Content.IRuntimeContentStore> Inno.Adapter.Content.FileSystem.FileContentDeployment.PrepareAsync(Inno.Content.ContentPackDescriptor pack, Inno.Storage.StorageScope scope, Inno.Core.Serialization.SerializationGeneration serialization, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Opens, verifies and materializes one immutable content pack into an application-scoped generation.

**Parameter `pack`:** The frozen expected pack identity.

**Parameter `scope`:** The portable application namespace.

**Parameter `serialization`:** The owning serialization generation.

**Parameter `cancellationToken`:** Cancels acquisition and candidate preparation before publication.

**Returns:** An owned verified store; the caller must dispose it after all readers retire.

**Throws `System.IO.InvalidDataException`:** The pack or its index fails integrity validation.

**Throws `System.OperationCanceledException`:** Preparation was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentDeployment.cs#L69).

## `ReadDocumentAsync`

<a id="api-c9901ee644057714"></a>
<!-- api: M:Inno.Adapter.Content.FileSystem.FileContentDeployment.ReadDocumentAsync(System.String,System.Threading.CancellationToken) fd533836db97f7ed5d8fd7b1319b0d3a22ce8d4ca228e45afddbb56499d51a90 -->

```csharp
public System.Threading.Tasks.Task<byte[]> Inno.Adapter.Content.FileSystem.FileContentDeployment.ReadDocumentAsync(string fileName, System.Threading.CancellationToken cancellationToken)
```

Acquires a bounded metadata document directly beneath the declared deployment root.

**Parameter `fileName`:** A single portable document filename, without directory segments.

**Parameter `cancellationToken`:** Cancels the owned stream read.

**Returns:** Owned document bytes; an absent or changing document fails explicitly.

**Throws `System.ArgumentException`:** The filename is not a single portable segment.

**Throws `System.IO.InvalidDataException`:** The document is empty, too large or changes during acquisition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentDeployment.cs#L118).
