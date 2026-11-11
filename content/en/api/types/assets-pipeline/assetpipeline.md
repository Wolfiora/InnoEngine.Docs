---
title: "AssetPipeline"
description: "Reference for AssetPipeline in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.8e0d4e604735ad69
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetPipeline`

This reference describes `AssetPipeline` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetResidencyProvider`.

**Direct interfaces:** `System.IDisposable`, `Inno.Assets.IAssetLookup`, `Inno.Assets.IAssetReferenceResolver`, `Inno.Assets.IAssetPropertyStateResolver`, `Inno.Assets.IAssetArtifactLookup`, `Inno.Assets.IAssetResidency`, `Inno.Assets.Pipeline.IAssetSourceSnapshot`.

## Members

| Member | Kind |
| --- | --- |
| [`AssetReloaded`](#api-11f3df3e58d4e6c4) | Event |
| [`Changed`](#api-af524f48265cf975) | Event |
| [`SourceMountsChanged`](#api-41438fbf53adcba8) | Event |
| [`#ctor`](#api-da6f71a5a3d38d35) | Method |
| [`AcquireArtifact`](#api-1716a9668dd50fa5) | Method |
| [```AcquireAsync``1```](#api-72e7e5e9adaa675c) | Method |
| [```AcquireAsync``1```](#api-19d7c7d51f14445e) | Method |
| [`BuildAsync`](#api-883e4c6b1d8c6606) | Method |
| [```CaptureProperties``1```](#api-916195af43a0f4fa) | Method |
| [`CompleteExtensionDiscovery`](#api-6477549c5239a0aa) | Method |
| [`CreateDirectory`](#api-048d346c0067e281) | Method |
| [`CreateSourceStore`](#api-8c00d8e02e1f195c) | Method |
| [`Delete`](#api-9113a1d7b15054b2) | Method |
| [`Dispose`](#api-7f8e10876c7dad29) | Method |
| [`ExportRuntimeArtifacts`](#api-a85c283a30856bf7) | Method |
| [`ExportRuntimeArtifactsAsync`](#api-3e461f54d8ecdb32) | Method |
| [`GetDependencies`](#api-01e23c223ad38b25) | Method |
| [`GetFileSystemChildren`](#api-1e2375810aee6042) | Method |
| [`GetFileSystemEntries`](#api-9cd2e9b391fddafa) | Method |
| [`GetImportDependencies`](#api-ffc60e3cd5b8fd06) | Method |
| [`GetImportSettings`](#api-ea5f8e06ac4bac69) | Method |
| [`GetLoadedPaths`](#api-558770ad18bed32d) | Method |
| [`GetReferenceInfo`](#api-f272e5f2f930f607) | Method |
| [`Import`](#api-cdbccddfde2f13f6) | Method |
| [`Load`](#api-d921e1ad6dc4f1a5) | Method |
| [```Load``1```](#api-c2a3f87a2d980be6) | Method |
| [```Load``1```](#api-e9ca511798e3b83e) | Method |
| [```LoadAsync``1```](#api-d9aede2852e2508f) | Method |
| [```LoadAsync``1```](#api-d67040a06a09ffcd) | Method |
| [`Move`](#api-8c1db4bf7dabc71e) | Method |
| [`PrepareSampleImport`](#api-66fa0cfaa193a60c) | Method |
| [`PrepareSourceMounts`](#api-ad8659702616a16d) | Method |
| [`ReplaceSourceMounts`](#api-2a2675cf6368496b) | Method |
| [`Rescan`](#api-2d10a88859ba12e0) | Method |
| [```RestoreProperties``1```](#api-d8d77a2cae8ac0b0) | Method |
| [`Save`](#api-caecc956630a8d11) | Method |
| [`Save`](#api-23f276b7ea6fcf56) | Method |
| [`SaveImportSettings`](#api-9530b8ddaac487de) | Method |
| [`TryGetArtifact`](#api-5d290d9e10bdcdbc) | Method |
| [`TryGetAssetType`](#api-b06b7e2102f63a17) | Method |
| [`TryGetFileSystemEntry`](#api-06983e032f210555) | Method |
| [`TryGetInfo`](#api-2b20d5ebad7ac502) | Method |
| [`TryGetInfo`](#api-993a37a6c2032c0b) | Method |
| [`TryGetPersistentId`](#api-9fbf974052582fec) | Method |
| [```TryLoad``1```](#api-b674be52af60377d) | Method |
| [```TryLoad``1```](#api-03aca067e36c175d) | Method |
| [`UnloadUnusedAssets`](#api-ca8ce3b462fb897c) | Method |
| [`Update`](#api-d6a9ce3791bdc093) | Method |
| [`WaitForIdle`](#api-831c5aa5a17b90d8) | Method |
| [`artifactRoot`](#api-c0687ef48ba750df) | Property |
| [`assetRoot`](#api-8b0ac72716a5dde0) | Property |
| [`identities`](#api-1faa72a9408a9d24) | Property |
| [`isInitialized`](#api-a3488e7d9db25a0c) | Property |
| [`libraryRoot`](#api-8e359b909a717bdc) | Property |
| [`revision`](#api-05ba89a1553c0024) | Property |
| [`sourceMounts`](#api-73d32e4db959c926) | Property |

## Type declaration

<a id="api-8e0d4e604735ad69"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetPipeline 5035a02e23c83b956c04ee2ddd88a1565ce4cf5fbdab10447c7c53b528bf92ab -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetPipeline : Inno.Assets.AssetResidencyProvider, System.IDisposable, Inno.Assets.IAssetLookup, Inno.Assets.IAssetReferenceResolver, Inno.Assets.IAssetPropertyStateResolver, Inno.Assets.IAssetArtifactLookup, Inno.Assets.IAssetResidency, Inno.Assets.Pipeline.IAssetSourceSnapshot
```

Provides the single application-level entry point for importing, loading, saving and
collecting assets.

Owns cancellable Sample preparation and owner-thread publication through the shared source transaction.

Prepares isolated source catalogs and adopts them at the pipeline's owner-thread safe point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Artifacts.cs#L22).

## `AssetReloaded`

<a id="api-11f3df3e58d4e6c4"></a>
<!-- api: E:Inno.Assets.Pipeline.AssetPipeline.AssetReloaded 41ca3f6757e13eed8f61c3053e76644516797d25cc1e252391204a34f2044ed6 -->

```csharp
public System.Action<Inno.Assets.AssetObject>? Inno.Assets.Pipeline.AssetPipeline.AssetReloaded
```

Occurs after a canonical loaded asset has been updated in place.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L163).

## `Changed`

<a id="api-af524f48265cf975"></a>
<!-- api: E:Inno.Assets.Pipeline.AssetPipeline.Changed cbaf7fccfd389355f85a96f9e0c31ad0542e604009e4e942d47ae12ae491cbf6 -->

```csharp
public System.Action<Inno.Assets.AssetChangeSet>? Inno.Assets.Pipeline.AssetPipeline.Changed
```

Occurs after an asset database transaction has committed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L158).

## `SourceMountsChanged`

<a id="api-41438fbf53adcba8"></a>
<!-- api: E:Inno.Assets.Pipeline.AssetPipeline.SourceMountsChanged a1454209fb12e17589c106bd150cc9f64b5a0f9caac458081dacc885245a35e3 -->

```csharp
public System.Action? Inno.Assets.Pipeline.AssetPipeline.SourceMountsChanged
```

Occurs after a complete isolated source-mount generation is atomically replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L169).

## `#ctor`

<a id="api-da6f71a5a3d38d35"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.#ctor(Inno.Extensibility.Modules.ModuleHost,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Identity.IdentityAllocator,Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Logging.LogRouter,Inno.Assets.Pipeline.AssetPipelineOptions) 60c016943ff621be56c13fff85c89f31a2c1957093557e3022f489e0db34ff84 -->

```csharp
public Inno.Assets.Pipeline.AssetPipeline.AssetPipeline(Inno.Extensibility.Modules.ModuleHost modules, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Identity.IdentityAllocator identities, Inno.Core.Diagnostics.DiagnosticHub diagnostics, Inno.Core.Logging.LogRouter logs, Inno.Assets.Pipeline.AssetPipelineOptions options)
```

Creates one isolated authoring or deployed-runtime asset pipeline.

**Parameter `modules`:** The module host whose candidate generations coordinate importer refreshes.

**Parameter `types`:** The type catalog used to discover and resolve asset extensions.

**Parameter `serialization`:** The serialization registry used for metadata and canonical asset state.

**Parameter `identities`:** The identity allocator that owns every canonical asset in this pipeline.

**Parameter `logs`:** The explicitly owned router receiving asset pipeline diagnostics.

**Parameter `diagnostics`:** The diagnostic hub that owns source database and asset processing reports.

**Parameter `options`:** The asset source, artifact and watcher configuration.

**Throws `System.ArgumentNullException`:** Thrown when a required service is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L199).

## `AcquireArtifact`

<a id="api-1716a9668dd50fa5"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.AcquireArtifact(System.Guid,System.String) 368082e031ccf3f6e8135f4271a6da4bba317934413ff50e63aa2aac080ed260 -->

```csharp
public Inno.Assets.ArtifactLease Inno.Assets.Pipeline.AssetPipeline.AcquireArtifact(System.Guid persistentId, string outputName)
```

Acquires one verified authoring artifact generation for an explicit lifetime.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease over the currently committed immutable artifact generation.

**Throws `System.InvalidOperationException`:** Thrown when the requested artifact is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Artifacts.cs#L61).

## ```AcquireAsync``1```

<a id="api-72e7e5e9adaa675c"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.AcquireAsync``1(Inno.Assets.AssetPath,System.Threading.CancellationToken) 3cde1c269808b569c8042a722c38d9dd62de7be0a42cb4191e6bfd132beb7859 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Assets.AssetLease<TAsset>> Inno.Assets.Pipeline.AssetPipeline.AcquireAsync<TAsset>(Inno.Assets.AssetPath path, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : Inno.Assets.AssetObject
```

Asynchronously acquires a canonical authoring asset by path for an explicit managed lifetime.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease whose strong reference participates in the existing reachability sweep.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L225).

## ```AcquireAsync``1```

<a id="api-19d7c7d51f14445e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.AcquireAsync``1(System.Guid,System.Threading.CancellationToken) d7b0194ebcf1f3e8e673eec5f188fb0887ff3bdc190cbadd67361a39b5b6c9ef -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Assets.AssetLease<TAsset>> Inno.Assets.Pipeline.AssetPipeline.AcquireAsync<TAsset>(System.Guid persistentId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : Inno.Assets.AssetObject
```

Asynchronously acquires a canonical authoring asset by persistent identity.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `persistentId`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease whose strong reference participates in the existing reachability sweep.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L250).

## `BuildAsync`

<a id="api-883e4c6b1d8c6606"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.BuildAsync(Inno.Assets.AssetObject,System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetInfo},System.Threading.CancellationToken) 746e60183b815172ec80aa484b9c6d08c517534a2bee8daeab85adadb6080152 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Assets.AssetArtifactKey> Inno.Assets.Pipeline.AssetPipeline.BuildAsync(Inno.Assets.AssetObject definition, System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetInfo> inputs, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Runs an aggregate asset build using the processor registered for a definition.

**Parameter `definition`:** The build definition asset.

**Parameter `inputs`:** The immutable input catalog snapshots.

**Parameter `cancellationToken`:** Cancellation for the candidate build.

**Returns:** The content-addressed output bundle key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Artifacts.cs#L81).

## ```CaptureProperties``1```

<a id="api-916195af43a0f4fa"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.CaptureProperties``1(``0) c28815ed704a78cb2e0f789396509e0c7410ad587ec908f745d7d7fbb913c522 -->

```csharp
public Inno.Assets.AssetPropertySnapshot Inno.Assets.Pipeline.AssetPipeline.CaptureProperties<TValue>(TValue value) where TValue : class, Inno.Core.Serialization.ISerializable
```

Captures native settings and nested asset dependencies through this explicit authoring owner.

**Type parameter `TValue`:** Current settings type.

**Parameter `value`:** Typed settings, never retained by the returned snapshot.

**Returns:** Complete stable properties and dependencies without writing or importing an asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L116).

## `CompleteExtensionDiscovery`

<a id="api-6477549c5239a0aa"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.CompleteExtensionDiscovery b096539fa34eeffc9f9a28234a7ef937a881fbf3cf084a2a81de0b04ad7b6292 -->

```csharp
public void Inno.Assets.Pipeline.AssetPipeline.CompleteExtensionDiscovery()
```

Ends initial authoring extension discovery and strictly retries dependent imports.

**Constraints:** Call on the initialization thread after successful extension activation. Failed compilation must not call this method.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Discovery.cs#L31).

## `CreateDirectory`

<a id="api-048d346c0067e281"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.CreateDirectory(Inno.Assets.AssetPath) 3ad1ef7224b337a379a093d4e979c1dd53c829ff68b5889803c16c11f3fd0309 -->

```csharp
public void Inno.Assets.Pipeline.AssetPipeline.CreateDirectory(Inno.Assets.AssetPath path)
```

Creates a tracked source directory and its persistent metadata.

**Parameter `path`:** New isolated directory path.

**Throws `System.IO.DirectoryNotFoundException`:** Thrown when the parent directory does not exist.

**Throws `System.IO.IOException`:** Thrown when the target already exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Mutations.cs#L298).

## `CreateSourceStore`

<a id="api-8c00d8e02e1f195c"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.CreateSourceStore cb6192d87969ab73b464c080bedcc7cc56757854c8029b874f10864af477c6f8 -->

```csharp
public Inno.Assets.Pipeline.AssetSourceStore Inno.Assets.Pipeline.AssetPipeline.CreateSourceStore()
```

Creates a detached source editor sharing this owner's mounts, native converters and references.

**Returns:** A source store that must not outlive this asset pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L102).

## `Delete`

<a id="api-9113a1d7b15054b2"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.Delete(Inno.Assets.AssetPath) 2942cca6b3b8bb7e305d4c81c95a225ef379f9a8d516276cf80a45648e4c4e09 -->

```csharp
public void Inno.Assets.Pipeline.AssetPipeline.Delete(Inno.Assets.AssetPath path)
```

Deletes a source asset and its metadata while retaining a Library tombstone for existing references.

**Parameter `path`:** Existing isolated file or directory path.

**Throws `System.IO.FileNotFoundException`:** Thrown when the source does not exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Mutations.cs#L230).

## `Dispose`

<a id="api-7f8e10876c7dad29"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.Dispose 928eb72651a1f8342187f0f069be13e701dd5f3072f895998b152305cf4b2354 -->

```csharp
public void Inno.Assets.Pipeline.AssetPipeline.Dispose()
```

Releases watchers, catalog participants, canonical objects, and rebuildable staging state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Retirement.cs#L27).

## `ExportRuntimeArtifacts`

<a id="api-a85c283a30856bf7"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.ExportRuntimeArtifacts(System.String) 8f3ad6e4a7592ea289436b237aae79120bd47eb1d821ef79edfcce152c568eaa -->

```csharp
public Inno.Assets.AssetRuntimeContentInfo Inno.Assets.Pipeline.AssetPipeline.ExportRuntimeArtifacts(string destinationContentRoot)
```

Exports the current source-free runtime catalog and its exact artifact closure.

**Parameter `destinationContentRoot`:** Empty destination for the deployed asset database.

**Returns:** Counts and source identities for the deployed runtime snapshot.

**Throws `System.InvalidOperationException`:** Thrown when runtime artifacts are incomplete, a deployed reference is authoring-only,
or a transitive authoring input has failed or changed since import. Last-good inputs do not certify an export.

**Throws `System.IO.IOException`:** Thrown when the destination is not empty or cannot be written.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Artifacts.cs#L108).

## `ExportRuntimeArtifactsAsync`

<a id="api-3e461f54d8ecdb32"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.ExportRuntimeArtifactsAsync(System.String,System.Threading.CancellationToken) 02a9c0e4bea9e2370e450d3214145ee9a02b5314ea78d4d61ea89d1950faca8d -->

```csharp
public System.Threading.Tasks.Task<Inno.Assets.AssetRuntimeContentInfo> Inno.Assets.Pipeline.AssetPipeline.ExportRuntimeArtifactsAsync(string destinationContentRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Exports a runtime-only artifact snapshot on a worker without loading artifact files into memory.

**Constraints:** Keeps generation admission and serialization pinned until the worker completes, fails or cancels.
A pending or faulted generation cannot start a new export.

**Parameter `destinationContentRoot`:** The empty destination that receives the runtime asset database.

**Parameter `cancellationToken`:** The token checked while individual artifact files are copied.

**Returns:** A task that completes with counts and source identities for the captured runtime snapshot.

**Throws `System.InvalidOperationException`:** Thrown when runtime artifacts are incomplete, transitive authoring inputs have failed or become stale,
or the asset service is not available.

**Throws `System.OperationCanceledException`:** Thrown when cancellation is requested before export completes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Artifacts.cs#L144).

## `GetDependencies`

<a id="api-01e23c223ad38b25"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.GetDependencies(Inno.Assets.AssetObject,System.Boolean) 65fcd196b5987b312f4dac33b6cbadc38ca42a315a21f9f3475f862991160b66 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetDependency> Inno.Assets.Pipeline.AssetPipeline.GetDependencies(Inno.Assets.AssetObject asset, bool recursive = false)
```

Gets direct or transitive runtime dependencies of an asset.

**Parameter `asset`:** The asset to query.

**Parameter `recursive`:** Whether transitive dependencies should be included.

**Returns:** The dependency descriptors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L304).

## `GetFileSystemChildren`

<a id="api-1e2375810aee6042"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.GetFileSystemChildren(Inno.Assets.AssetPath) 8c42fe2dd76087b5e982e9245b5e819941d9fa7fbfc5b10f81e93e3b010da0f0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetFileEntry> Inno.Assets.Pipeline.AssetPipeline.GetFileSystemChildren(Inno.Assets.AssetPath parent)
```

Gets immediate indexed children of a source directory.

**Parameter `parent`:** The isolated parent path.

**Returns:** The immediate child entry snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Changes.cs#L84).

## `GetFileSystemEntries`

<a id="api-9cd2e9b391fddafa"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.GetFileSystemEntries(System.Boolean) db33915bd768a8c56184ab791af8b6480a866a17fafb6146eca8a9594fd0f695 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetFileEntry> Inno.Assets.Pipeline.AssetPipeline.GetFileSystemEntries(bool includeDirectories = true)
```

Gets indexed source entries.

**Parameter `includeDirectories`:** Whether directories should be included.

**Returns:** The stable source entry snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Changes.cs#L72).

## `GetImportDependencies`

<a id="api-ffc60e3cd5b8fd06"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.GetImportDependencies(Inno.Assets.AssetObject,System.Boolean) cf00533e73cc63f2ae7cef0c88f2f5db2446655bfc16eef5aa6145290b674cc0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetPath> Inno.Assets.Pipeline.AssetPipeline.GetImportDependencies(Inno.Assets.AssetObject asset, bool recursive = false)
```

Gets source import dependencies that invalidate an asset artifact.

**Parameter `asset`:** The asset to query.

**Parameter `recursive`:** Whether transitive source dependencies should be included.

**Returns:** Canonical isolated source paths in stable order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L322).

## `GetImportSettings`

<a id="api-ea5f8e06ac4bac69"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.GetImportSettings(Inno.Assets.AssetPath) c0b49cc828f4fcd4ae9d3ace936dbf07284497bde818ef8c52744aa09aecdfce -->

```csharp
public Inno.Assets.Pipeline.AssetImportSettingsSnapshot Inno.Assets.Pipeline.AssetPipeline.GetImportSettings(Inno.Assets.AssetPath path)
```

Reads a detached settings copy for the currently registered importer.

**Parameter `path`:** The isolated source path.

**Returns:** The settings copy and the fingerprint required for saving it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Mutations.cs#L57).

## `GetLoadedPaths`

<a id="api-558770ad18bed32d"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.GetLoadedPaths 6d97e1b8e3707058adfe2f81605eab3af5a42f5d5aed6ec8edc551d7ce2dbcfa -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetPath> Inno.Assets.Pipeline.AssetPipeline.GetLoadedPaths()
```

Gets isolated source paths for all canonical loaded assets.

**Returns:** A stable isolated path snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L290).

## `GetReferenceInfo`

<a id="api-f272e5f2f930f607"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.GetReferenceInfo(Inno.Assets.AssetObject) 5f4d50813534efd966db96660ebec193c61c178b1f3452af1bfb66ccc65ab813 -->

```csharp
public Inno.Assets.AssetReferenceInfo Inno.Assets.Pipeline.AssetPipeline.GetReferenceInfo(Inno.Assets.AssetObject asset)
```

Gets an engine-known reference diagnostic snapshot.

**Parameter `asset`:** The asset to inspect.

**Returns:** The reference diagnostic snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L337).

## `Import`

<a id="api-cdbccddfde2f13f6"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.Import(Inno.Assets.AssetPath) 4de84129fee72c5496be81cb12779605fc6dccd675413f5ded180a15454ffa61 -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.Import(Inno.Assets.AssetPath path)
```

Imports one source asset from an isolated source mount.

**Parameter `path`:** The isolated source path.

**Returns:** `true` when an importer handled the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Mutations.cs#L33).

## `Load`

<a id="api-d921e1ad6dc4f1a5"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.Load(Inno.Assets.AssetPath,System.Type) 20c51371cb35013b14dd7d862430a537e93282d05adc8bbb8aabae8e1427999e -->

```csharp
public Inno.Assets.AssetObject Inno.Assets.Pipeline.AssetPipeline.Load(Inno.Assets.AssetPath path, System.Type assetType)
```

Loads a canonical asset using a runtime asset type selected by an authoring workflow.

**Parameter `path`:** The isolated source path.

**Parameter `assetType`:** The required concrete or base asset type.

**Returns:** The canonical asset instance assignable to `assetType`.

**Throws `System.ArgumentNullException`:** Thrown when `assetType` is `null`.

**Throws `System.ArgumentException`:** Thrown when `assetType` does not derive from `Inno.Assets.AssetObject`.

**Throws `System.InvalidOperationException`:** Thrown when no compatible canonical asset can be loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L65).

## ```Load``1```

<a id="api-c2a3f87a2d980be6"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.Load``1(Inno.Assets.AssetPath) 724609f8ea2cb28db579231a511e56be17eb0a0c4f62e020e954e571cb7bf971 -->

```csharp
public TAsset Inno.Assets.Pipeline.AssetPipeline.Load<TAsset>(Inno.Assets.AssetPath path) where TAsset : Inno.Assets.AssetObject
```

Loads a canonical asset by isolated source path.

**Type parameter `TAsset`:** The required asset type.

**Parameter `path`:** The isolated source path.

**Returns:** The canonical asset instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L36).

## ```Load``1```

<a id="api-e9ca511798e3b83e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.Load``1(System.Guid) ed907d8fdd7a6071391081570e53226bb3b33e55d3ceb9d63ac0d67ca77950a5 -->

```csharp
public TAsset Inno.Assets.Pipeline.AssetPipeline.Load<TAsset>(System.Guid persistentId) where TAsset : Inno.Assets.AssetObject
```

Loads a canonical asset by persistent identity.

**Type parameter `TAsset`:** The required asset type.

**Parameter `persistentId`:** The persistent asset identity.

**Returns:** The canonical asset instance.

**Throws `System.InvalidOperationException`:** Thrown when no compatible asset can be loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L95).

## ```LoadAsync``1```

<a id="api-d9aede2852e2508f"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.LoadAsync``1(Inno.Assets.AssetPath,System.Threading.CancellationToken) 35a5dc273114b2ea0a76280d05a3a308b02fdae1946e5acc61d397d44c69e921 -->

```csharp
public System.Threading.Tasks.ValueTask<TAsset> Inno.Assets.Pipeline.AssetPipeline.LoadAsync<TAsset>(Inno.Assets.AssetPath path, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : Inno.Assets.AssetObject
```

Asynchronously loads a canonical asset by isolated source path.

**Type parameter `TAsset`:** The required asset type.

**Parameter `path`:** The isolated source path.

**Parameter `cancellationToken`:** Cancellation for the current caller's wait.

**Returns:** The canonical asset instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L167).

## ```LoadAsync``1```

<a id="api-d67040a06a09ffcd"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.LoadAsync``1(System.Guid,System.Threading.CancellationToken) 5d92621f04a3b87abae64bad676e83cf622aef64fa97bf36a260d16a7045b8a3 -->

```csharp
public System.Threading.Tasks.ValueTask<TAsset> Inno.Assets.Pipeline.AssetPipeline.LoadAsync<TAsset>(System.Guid persistentId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : Inno.Assets.AssetObject
```

Asynchronously loads a canonical asset by persistent identity.

**Type parameter `TAsset`:** The required asset type.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for the current caller's wait.

**Returns:** The canonical asset instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L196).

## `Move`

<a id="api-8c1db4bf7dabc71e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.Move(Inno.Assets.AssetPath,Inno.Assets.AssetPath) cc443a482776259923e81b6e2d3b0a509bd98e36475259f42fc7470b7682e984 -->

```csharp
public void Inno.Assets.Pipeline.AssetPipeline.Move(Inno.Assets.AssetPath source, Inno.Assets.AssetPath target)
```

Moves a source asset while preserving its persistent identity and generated metadata.

**Parameter `source`:** Existing isolated source path.

**Parameter `target`:** New isolated source path.

**Throws `System.IO.FileNotFoundException`:** Thrown when the source does not exist.

**Throws `System.IO.IOException`:** Thrown when the target source or metadata already exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Mutations.cs#L163).

## `PrepareSampleImport`

<a id="api-66fa0cfaa193a60c"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.PrepareSampleImport(Inno.Assets.AssetPath) 17de6c63fadeaab1fd09be813334ea40d3975ed239746e2ed95ea6e9012e2a1a -->

```csharp
public Inno.Assets.Pipeline.AssetSampleImportTransaction Inno.Assets.Pipeline.AssetPipeline.PrepareSampleImport(Inno.Assets.AssetPath source)
```

Starts a private background sample clone without waiting for file copying or transformation.

**Parameter `source`:** An indexed installed Plugin sample directory whose final segment starts with `~`.

**Returns:** The generation-pinned transaction to advance, validate and commit on this pipeline's owner thread.

**Throws `System.ArgumentException`:** The source is not an installed sample directory.

**Throws `System.IO.IOException`:** The destination name already exists.

**Throws `System.InvalidOperationException`:** Another mutation or generation transaction is active, or this is not the initialization thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetPipeline.Samples.cs#L48).

## `PrepareSourceMounts`

<a id="api-ad8659702616a16d"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.PrepareSourceMounts(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount}) 25bd463f9ab3638c55589dab78a76148969f115cadf08fcffec9e2b86710b751 -->

```csharp
public Inno.Assets.Pipeline.AssetSourceMountTransaction Inno.Assets.Pipeline.AssetPipeline.PrepareSourceMounts(System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetSourceMount> mounts)
```

Builds and validates an isolated source-mount candidate without changing active AssetPipeline state.

**Parameter `mounts`:** A writable project source followed by zero or more read-only sources.

**Returns:** A transaction that can be inspected, activated, completed, or rolled back.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetPipeline.SourceMounts.cs#L172).

## `ReplaceSourceMounts`

<a id="api-2a2675cf6368496b"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.ReplaceSourceMounts(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount}) ffa9944d488ff7869b39eb9e08578cf852adf428c8af928e8716775af25417c7 -->

```csharp
public void Inno.Assets.Pipeline.AssetPipeline.ReplaceSourceMounts(System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetSourceMount> mounts)
```

Validates and atomically replaces the complete source-mount generation while preserving the active
generation after any candidate failure.

**Parameter `mounts`:** A writable project source followed by zero or more read-only sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetPipeline.SourceMounts.cs#L155).

## `Rescan`

<a id="api-2d10a88859ba12e0"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.Rescan dce859661553869983c7c77489ca6b465cfa9d92446c85b086bb0afc32bb2546 -->

```csharp
public void Inno.Assets.Pipeline.AssetPipeline.Rescan()
```

Reconciles source files, generated files and the persistent catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Changes.cs#L27).

## ```RestoreProperties``1```

<a id="api-d8d77a2cae8ac0b0"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.RestoreProperties``1(System.Guid,System.Byte[],``0) 9972270e1410f3ab743438b0bcaf7b3739080a3f43513b8827d523c2bd8522df -->

```csharp
public void Inno.Assets.Pipeline.AssetPipeline.RestoreProperties<TValue>(System.Guid stableTypeId, byte[] propertyData, TValue target) where TValue : class, Inno.Core.Serialization.ISerializable
```

Restores serialized properties to the existing asset object.

**Parameter `stableTypeId`:** The stable type id consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `propertyData`:** The property data consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

**Type parameter `TValue`:** Serialized asset object type receiving restored properties.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L138).

## `Save`

<a id="api-caecc956630a8d11"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.Save(Inno.Assets.AssetObject) dcdb8644ec571e835622e181b322ac249165b4ad821d0978084b08eca71af5af -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.Save(Inno.Assets.AssetObject asset)
```

Saves an asset to its current source path.

**Parameter `asset`:** The asset to save.

**Returns:** `true` when an importer exported the asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Mutations.cs#L107).

## `Save`

<a id="api-23f276b7ea6fcf56"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.Save(Inno.Assets.AssetPath,Inno.Assets.AssetObject) 5a2405e1eafc1242118296a409f843c4d272f59583f25a17ea73110591cff423 -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.Save(Inno.Assets.AssetPath path, Inno.Assets.AssetObject asset)
```

Saves an asset to a writable isolated source path, preserving the destination source identity when it exists.

**Parameter `path`:** Writable isolated source path.

**Parameter `asset`:** Asset to save. A detached value replaces the destination content without replacing its persistent identity.

**Returns:** `true` when an importer exported the asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Mutations.cs#L125).

## `SaveImportSettings`

<a id="api-9530b8ddaac487de"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.SaveImportSettings(Inno.Assets.AssetPath,Inno.Core.Serialization.ISerializable,System.String) 8bc04949f18444aee3ba5f5504974f2d24bf8900b6114a7aa7c6c6d684c07b2e -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.SaveImportSettings(Inno.Assets.AssetPath path, Inno.Core.Serialization.ISerializable? settings, string expectedFingerprint)
```

Saves import settings with conflict detection and immediately attempts to reimport the source.

**Parameter `path`:** The writable isolated source path.

**Parameter `settings`:** The edited settings, or null to reset to importer defaults.

**Parameter `expectedFingerprint`:** The fingerprint obtained when reading the settings.

**Returns:** True when settings were saved and reimport succeeded; false when the saved settings failed import.

**Throws `System.IO.IOException`:** The settings changed externally or could not be written.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Mutations.cs#L82).

## `TryGetArtifact`

<a id="api-5d290d9e10bdcdbc"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@) d83983ac28e4bd5003a9cdbf8ef397d6bad57290cdee764115827569a551083c -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.TryGetArtifact(System.Guid persistentId, string outputName, out Inno.Assets.AssetArtifactInfo? artifact)
```

Tries to resolve a named artifact output.

**Parameter `persistentId`:** The artifact owner identity.

**Parameter `outputName`:** The named output.

**Parameter `artifact`:** The output information when available.

**Returns:** `true` when the output exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Artifacts.cs#L39).

## `TryGetAssetType`

<a id="api-b06b7e2102f63a17"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.TryGetAssetType(Inno.Assets.AssetPath,System.Type@) 7a81732bf21e259ccf6c3afa9048c9e3b4ce878f5880f00213215491fc39ca4c -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.TryGetAssetType(Inno.Assets.AssetPath path, out System.Type? assetType)
```

Tries to resolve an asset type without loading the asset.

**Parameter `path`:** The isolated source path.

**Parameter `assetType`:** The resolved concrete asset type.

**Returns:** `true` when the type can be resolved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Discovery.cs#L51).

## `TryGetFileSystemEntry`

<a id="api-06983e032f210555"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.TryGetFileSystemEntry(Inno.Assets.AssetPath,Inno.Assets.Pipeline.AssetFileEntry@) 6cddc30bbf6d48a309a43f1ecbd0f59042d56b546a3be9499ba6b40bf0aa1abe -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.TryGetFileSystemEntry(Inno.Assets.AssetPath path, out Inno.Assets.Pipeline.AssetFileEntry entry)
```

Tries to resolve an indexed source entry.

**Parameter `path`:** The isolated source path.

**Parameter `entry`:** The resolved source entry.

**Returns:** `true` when the entry exists and is not generated metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Changes.cs#L98).

## `TryGetInfo`

<a id="api-2b20d5ebad7ac502"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.TryGetInfo(Inno.Assets.AssetPath,Inno.Assets.AssetInfo@) 349c621c35f01b2683dadcc451bd126b43a7d85a90caf9100890793cd7238ea3 -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.TryGetInfo(Inno.Assets.AssetPath path, out Inno.Assets.AssetInfo? info)
```

Tries to get a catalog snapshot by source-relative path.

**Parameter `path`:** The isolated source path.

**Parameter `info`:** The catalog snapshot when available.

**Returns:** `true` when the path is cataloged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Discovery.cs#L85).

## `TryGetInfo`

<a id="api-993a37a6c2032c0b"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.TryGetInfo(System.Guid,Inno.Assets.AssetInfo@) 98e1ad66421c414075bd5a67e1bfe9d720175ed8596d3a35c6885b2127fca292 -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.TryGetInfo(System.Guid persistentId, out Inno.Assets.AssetInfo? info)
```

Tries to get a catalog snapshot by persistent identity.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `info`:** The catalog snapshot when available.

**Returns:** `true` when the identity is cataloged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Discovery.cs#L102).

## `TryGetPersistentId`

<a id="api-9fbf974052582fec"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.TryGetPersistentId(Inno.Assets.AssetPath,System.Guid@) cf5da3b610eecf772d84a06b80cf89de21c084e5b95db3ee624577602cc6a439 -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.TryGetPersistentId(Inno.Assets.AssetPath path, out System.Guid persistentId)
```

Tries to resolve a persistent identity without loading the asset.

**Parameter `path`:** The isolated source path.

**Parameter `persistentId`:** The resolved persistent identity.

**Returns:** `true` when catalog metadata exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Discovery.cs#L68).

## ```TryLoad``1```

<a id="api-b674be52af60377d"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.TryLoad``1(Inno.Assets.AssetPath,``0@) 2c3c347c46c802c2989aff2e88442a496d43b1f0f7a6f60abb6b2521fe9e530c -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.TryLoad<TAsset>(Inno.Assets.AssetPath path, out TAsset? asset) where TAsset : Inno.Assets.AssetObject
```

Tries to load a canonical asset by isolated source path.

**Type parameter `TAsset`:** The required asset type.

**Parameter `path`:** The isolated source path.

**Parameter `asset`:** The canonical asset when successful.

**Returns:** `true` when a compatible asset was loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L117).

## ```TryLoad``1```

<a id="api-03aca067e36c175d"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.TryLoad``1(System.Guid,``0@) bdd1fd212159b0e6de88a97f244e187cce0230e34a3f6aefc8c5a0ec0de26012 -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.TryLoad<TAsset>(System.Guid persistentId, out TAsset? asset) where TAsset : Inno.Assets.AssetObject
```

Tries to load a canonical asset by persistent identity.

**Type parameter `TAsset`:** The required asset type.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `asset`:** The canonical asset when successful.

**Returns:** `true` when a compatible asset was loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Loading.cs#L142).

## `UnloadUnusedAssets`

<a id="api-ca8ce3b462fb897c"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.UnloadUnusedAssets df21298a1b46f36c10e27f0b74d9aa35cc7472cee339af3569a76bbce2cee659 -->

```csharp
public int Inno.Assets.Pipeline.AssetPipeline.UnloadUnusedAssets()
```

Collects assets that have no external managed references.

**Returns:** The number of released canonical assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Retirement.cs#L40).

## `Update`

<a id="api-d6a9ce3791bdc093"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.Update 0407e77145b396497d44000321cd120ab7e5f8ee23554257a1d32ed88db08bee -->

```csharp
public void Inno.Assets.Pipeline.AssetPipeline.Update()
```

Applies queued source and build changes on the initialization thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.Changes.cs#L39).

## `WaitForIdle`

<a id="api-831c5aa5a17b90d8"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipeline.WaitForIdle cb88a01faf31145f5c18f80f0fa584723069c68ff301831cf9315cc0e9ec60b2 -->

```csharp
public void Inno.Assets.Pipeline.AssetPipeline.WaitForIdle()
```

Waits until queued source watcher changes have been processed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L294).

## `artifactRoot`

<a id="api-c0687ef48ba750df"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipeline.artifactRoot 8bf672ac429bf684373166ef5c9c568eb967142f9561815ddd77598898c01395 -->

```csharp
public string Inno.Assets.Pipeline.AssetPipeline.artifactRoot { get; private set; }
```

Gets the absolute generated artifact root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L75).

## `assetRoot`

<a id="api-8b0ac72716a5dde0"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipeline.assetRoot ca8ef964864a3417e101b00fbc99def56a359ec643a3595e732973c3b5fbe29f -->

```csharp
public string Inno.Assets.Pipeline.AssetPipeline.assetRoot { get; private set; }
```

Gets the absolute source asset root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L65).

## `identities`

<a id="api-1faa72a9408a9d24"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipeline.identities 66ff661991e796a86987891474b81c9f617d8fc2f86db94aef29d1e899761c83 -->

```csharp
public Inno.Core.Identity.IdentityAllocator Inno.Assets.Pipeline.AssetPipeline.identities { get; }
```

Gets the authoring identity domain shared by canonical assets and addressable source entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L93).

## `isInitialized`

<a id="api-a3488e7d9db25a0c"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipeline.isInitialized 13003daf16999a5329b2a415e3e44af126b1b333ee80399eb09725851493af3b -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipeline.isInitialized { get; private set; }
```

Gets whether asset services are initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L60).

## `libraryRoot`

<a id="api-8e359b909a717bdc"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipeline.libraryRoot 1f8db3bd3d081ed773fe89eb9f4717ef66c5382905d2ceff2ba540ef31148d0f -->

```csharp
public string Inno.Assets.Pipeline.AssetPipeline.libraryRoot { get; private set; }
```

Gets the absolute root containing rebuildable asset database data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L70).

## `revision`

<a id="api-05ba89a1553c0024"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipeline.revision 24238ab9b2fbf47e3d0d251a457ca8e9e22446d821cb2e9c6ace6b744a0f68f2 -->

```csharp
public long Inno.Assets.Pipeline.AssetPipeline.revision { get; }
```

Gets the monotonic identity of the current committed asset and source-mount state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L81).

## `sourceMounts`

<a id="api-73d32e4db959c926"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipeline.sourceMounts 4515198cbf6592ac143eb2d4175d03f2a69182c9e73bd31ad74c3b09de48ed35 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetSourceMount> Inno.Assets.Pipeline.AssetPipeline.sourceMounts { get; private set; }
```

Gets the active isolated source mount snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipeline.cs#L87).
