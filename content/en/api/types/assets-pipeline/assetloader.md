---
title: "AssetLoader"
description: "Reference for AssetLoader in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.519c82050a3e339e
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetLoader`

This reference describes `AssetLoader` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`, `Inno.Assets.IAssetReferenceResolver`, `Inno.Assets.IAssetArtifactLookup`, `Inno.Assets.IAssetPropertyStateResolver`.

## Members

| Member | Kind |
| --- | --- |
| [`AssetReloaded`](#api-9bb47e78fae91cdf) | Event |
| [`#ctor`](#api-97f385b6f5b5c77e) | Method |
| [`#ctor`](#api-1a22cb3d3bc38074) | Method |
| [`AcquireArtifact`](#api-a3a5447cf69741ff) | Method |
| [`ApplySourceChanges`](#api-7fdfe710d496ce50) | Method |
| [`BuildAsync`](#api-dbc0e6b79cc10589) | Method |
| [`CaptureWritableImportHealth`](#api-0975c1c6d8cfc46a) | Method |
| [`CollectArtifacts`](#api-d38c555516b64f17) | Method |
| [`Dispose`](#api-fd74d42d4db5fec5) | Method |
| [`ExportRuntimeArtifacts`](#api-cc17199751f3d033) | Method |
| [`ExportRuntimeArtifacts`](#api-d9ade27935fc16f2) | Method |
| [`FindIntroducedImportFailures`](#api-db3b528f5cceddcf) | Method |
| [`GetDependencies`](#api-4497d51d023c2f3e) | Method |
| [`GetImportDependencies`](#api-c7924880846ee075) | Method |
| [`GetImportSettings`](#api-c2d64e9843b92588) | Method |
| [`GetLoadedPaths`](#api-47f9f9840f6a82f3) | Method |
| [`GetReferenceInfo`](#api-8e13aa9226c41637) | Method |
| [`Import`](#api-6a7ed8427a8495d4) | Method |
| [`Load`](#api-1a973b49d1e6ec29) | Method |
| [`Load`](#api-b7a7273cbc5da394) | Method |
| [`LoadAsync`](#api-cf20befb457a8f10) | Method |
| [`LoadAsync`](#api-d6be633df077931a) | Method |
| [`PrepareCatalogCandidate`](#api-65323b668c5e8ce4) | Method |
| [`RefreshRegistries`](#api-f7c509417b207791) | Method |
| [`Rescan`](#api-ab0bc2d476560e0c) | Method |
| [`ResolveReference`](#api-58a30d27669eb0d0) | Method |
| [```RestoreProperties``1```](#api-9474cbd09e24cef8) | Method |
| [`Save`](#api-a27c8e44fd49c2d1) | Method |
| [`Save`](#api-c05fce96a53ed856) | Method |
| [`SaveImportSettings`](#api-6563573f2cd58a37) | Method |
| [`TryGetArtifact`](#api-4a98fcfa19b193ed) | Method |
| [`TryGetAssetType`](#api-4c793a0adfe9881a) | Method |
| [`TryGetInfo`](#api-29a93d4f82c7c8b7) | Method |
| [`TryGetInfo`](#api-d5a28fbb19075783) | Method |
| [`TryGetPersistentId`](#api-96c70cd618b77929) | Method |
| [`TryLoad`](#api-e6f4f4f538384c1b) | Method |
| [`TryLoad`](#api-5746809a893d0ecf) | Method |
| [`UnloadUnusedAssets`](#api-0175f797e7ad44f4) | Method |
| [`WaitForIdle`](#api-971738b4df6c831a) | Method |
| [`artifactRoot`](#api-f190057a1c00a454) | Property |
| [`assetRoot`](#api-ef2011b1c8ec5478) | Property |
| [`libraryRoot`](#api-5a2ab230b19190a9) | Property |

## Type declaration

<a id="api-519c82050a3e339e"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetLoader 95223649cf1c50cbc54d41eed497b9d707774f3dfd43961893b3de4a9eb9e2cd -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetLoader : System.IDisposable, Inno.Assets.IAssetReferenceResolver, Inno.Assets.IAssetArtifactLookup, Inno.Assets.IAssetPropertyStateResolver
```

Coordinates importing, persistent cataloging, canonical loading, reloading and collection
for one source and artifact root pair.

Resolves import settings and dependency invalidation for the asset loader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Catalog.cs#L27).

## `AssetReloaded`

<a id="api-9bb47e78fae91cdf"></a>
<!-- api: E:Inno.Assets.Pipeline.AssetLoader.AssetReloaded 65a4e0f8764e480d381f63804abb6b4024e770368fea39310f311fd98e7543e0 -->

```csharp
public System.Action<Inno.Assets.AssetObject>? Inno.Assets.Pipeline.AssetLoader.AssetReloaded
```

Occurs after a loaded canonical asset is updated in place.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.cs#L308).

## `#ctor`

<a id="api-97f385b6f5b5c77e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Identity.IdentityAllocator,Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Logging.LogRouter,System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount},System.String,Inno.Assets.Pipeline.AssetSourcePolicy,System.Boolean) e1187274c3c855fc9fc672879b658b6e90b0050f2f9ae287af50516fff2b3040 -->

```csharp
public Inno.Assets.Pipeline.AssetLoader.AssetLoader(Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Identity.IdentityAllocator identities, Inno.Core.Diagnostics.DiagnosticHub diagnostics, Inno.Core.Logging.LogRouter logs, System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetSourceMount> mounts, string libraryRoot, Inno.Assets.Pipeline.AssetSourcePolicy? sourcePolicy = null, bool runtimeArtifactsOnly = false)
```

Creates an asset loader over one project source and zero or more isolated sources.

**Parameter `types`:** The immutable type-generation owner used to discover importers and resolve asset types.

**Parameter `serialization`:** The serialization registry used for catalog, metadata, and asset state persistence.

**Parameter `identities`:** The identity allocator that owns every canonical asset loaded by this instance.

**Parameter `logs`:** The explicitly owned router receiving importer and catalog diagnostics.

**Parameter `diagnostics`:** The diagnostic hub that owns import, build, catalog, and reference reports.

**Parameter `mounts`:** Complete isolated source mount snapshot.

**Parameter `libraryRoot`:** Absolute rebuildable Library root.

**Parameter `sourcePolicy`:** Source filtering policy, or `null` for defaults.

**Parameter `runtimeArtifactsOnly`:** Whether to trust a deployed read-only catalog and skip every source reconciliation operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.cs#L197).

## `#ctor`

<a id="api-1a22cb3d3bc38074"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Identity.IdentityAllocator,Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Logging.LogRouter,System.String,System.String,Inno.Assets.Pipeline.AssetSourcePolicy) 6c55ab0b19ee3a28d4c8e8bc8a5e80cb898e7f5db13d0819397e9ddbf3af7034 -->

```csharp
public Inno.Assets.Pipeline.AssetLoader.AssetLoader(Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Identity.IdentityAllocator identities, Inno.Core.Diagnostics.DiagnosticHub diagnostics, Inno.Core.Logging.LogRouter logs, string assetRoot, string libraryRoot, Inno.Assets.Pipeline.AssetSourcePolicy? sourcePolicy = null)
```

Creates an asset loader for one source and Library root pair.

**Parameter `types`:** The immutable type-generation owner used to discover importers and resolve asset types.

**Parameter `serialization`:** The serialization registry used for catalog, metadata, and asset state persistence.

**Parameter `identities`:** The identity allocator that owns every canonical asset loaded by this instance.

**Parameter `logs`:** The explicitly owned router receiving importer and catalog diagnostics.

**Parameter `diagnostics`:** The diagnostic hub that owns import, build, catalog, and reference reports.

**Parameter `assetRoot`:** The absolute source root.

**Parameter `libraryRoot`:** The absolute rebuildable Library root.

**Parameter `sourcePolicy`:** The source filtering policy, or `null` for defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.cs#L145).

## `AcquireArtifact`

<a id="api-a3a5447cf69741ff"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.AcquireArtifact(System.Guid,System.String) a967a5a438d32bc8d91cfa21715622096e65472bdf4f0c56a63569ad71fa6805 -->

```csharp
public Inno.Assets.ArtifactLease Inno.Assets.Pipeline.AssetLoader.AcquireArtifact(System.Guid persistentId, string outputName)
```

Acquires an immutable output while excluding concurrent artifact collection.

**Parameter `persistentId`:** The source asset's persistent identity.

**Parameter `outputName`:** The required output protocol.

**Returns:** A lease retaining this exact artifact key, even after reimport or source deletion.

**Throws `System.InvalidOperationException`:** No current output can be resolved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Residency.cs#L109).

## `ApplySourceChanges`

<a id="api-7fdfe710d496ce50"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.ApplySourceChanges(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetChangedEvent}) 95e04117ff3f2434efe6f4444f4e8ba925d1aac1b144c81714b86a9d4e9ef3ef -->

```csharp
public void Inno.Assets.Pipeline.AssetLoader.ApplySourceChanges(System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetChangedEvent> changes)
```

Applies normalized source file changes to the persistent catalog.

**Parameter `changes`:** The normalized source changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.SourceChanges.cs#L60).

## `BuildAsync`

<a id="api-dbc0e6b79cc10589"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.BuildAsync(Inno.Assets.AssetObject,System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetInfo},System.Threading.CancellationToken) aab8a46616c82d63a9adda75119d65d0ed17527af38f94a5fc77b1d92aeb1f87 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Assets.AssetArtifactKey> Inno.Assets.Pipeline.AssetLoader.BuildAsync(Inno.Assets.AssetObject definition, System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetInfo> inputs, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Builds and validates the requested artifact asynchronously before publishing it.

**Parameter `definition`:** The build definition asset.

**Parameter `inputs`:** The immutable input catalog snapshots.

**Parameter `cancellationToken`:** Cancellation for the candidate build.

**Returns:** The content-addressed output bundle key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Importing.cs#L55).

## `CaptureWritableImportHealth`

<a id="api-0975c1c6d8cfc46a"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.CaptureWritableImportHealth b39f0b8d89c8a2544d4d8bcd655d2c61182bb4e7cebc3f8909627975501f051a -->

```csharp
public Inno.Assets.Pipeline.AssetImportHealthSnapshot Inno.Assets.Pipeline.AssetLoader.CaptureWritableImportHealth()
```

Captures the current failure identity of every writable source without exposing catalog internals.

**Returns:** An immutable health snapshot suitable for validating a later candidate generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Diagnostics.cs#L35).

## `CollectArtifacts`

<a id="api-d38c555516b64f17"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.CollectArtifacts(System.TimeSpan,System.Int64) 6cb1811c53d209600b6ee6ab9ee9974b33bdfad6d551a8ac473a36f32f761a47 -->

```csharp
public int Inno.Assets.Pipeline.AssetLoader.CollectArtifacts(System.TimeSpan gracePeriod, long maximumSizeBytes)
```

Collects unreachable content-addressed artifacts.

**Parameter `gracePeriod`:** The minimum age of an unreachable bundle.

**Parameter `maximumSizeBytes`:** The cache size limit, or zero for no limit.

**Returns:** The number of removed artifact bundles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Residency.cs#L41).

## `Dispose`

<a id="api-fd74d42d4db5fec5"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.Dispose 3c06c091ac69374610d15458930ed5c9ed743fff4f17a622eb94007c8afb91a4 -->

```csharp
public void Inno.Assets.Pipeline.AssetLoader.Dispose()
```

Stops new loads and releases canonical assets before their registries and diagnostics.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A load, serialized operation or unload hook is still active. Retain the loader and retry after quiescence.

**Throws `System.AggregateException`:** Completed releases failed; all quiescent resources have still been attempted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Retirement.cs#L38).

## `ExportRuntimeArtifacts`

<a id="api-cc17199751f3d033"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.ExportRuntimeArtifacts(System.String,System.Threading.CancellationToken) c713ca3b279f05b3282b9c828d02a5ca51f886017c15dc2df6ab908ba1cf4e06 -->

```csharp
public Inno.Assets.AssetRuntimeContentInfo Inno.Assets.Pipeline.AssetLoader.ExportRuntimeArtifacts(string destinationLibraryRoot, System.Threading.CancellationToken cancellationToken)
```

Exports the validated runtime artifact closure while observing cooperative cancellation between files.

**Parameter `destinationLibraryRoot`:** The empty directory that receives the runtime-only asset database.

**Parameter `cancellationToken`:** The token checked before every artifact file is copied.

**Returns:** Counts and source identities represented by the exported snapshot.

**Throws `System.InvalidOperationException`:** Thrown when artifacts are incomplete or transitive source inputs no longer certify the imported snapshot.

**Throws `System.OperationCanceledException`:** Thrown when cancellation is requested before the snapshot finishes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.RuntimeExport.cs#L66).

## `ExportRuntimeArtifacts`

<a id="api-d9ade27935fc16f2"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.ExportRuntimeArtifacts(System.String) 75ff490ec84eb5fa1e83452631c858ee32acbd7d3fbb080f9f18fd2d0978fe0b -->

```csharp
public Inno.Assets.AssetRuntimeContentInfo Inno.Assets.Pipeline.AssetLoader.ExportRuntimeArtifacts(string destinationLibraryRoot)
```

Writes a source-free runtime catalog and its exact immutable artifact closure.

**Parameter `destinationLibraryRoot`:** Empty destination that becomes the deployed content root.

**Returns:** Counts and source identities for the exported runtime snapshot.

**Throws `System.InvalidOperationException`:** Thrown when runtime artifacts are incomplete, a deployed reference is authoring-only,
or a transitive authoring input has failed or become stale.

**Throws `System.IO.IOException`:** Thrown when the destination is not empty or content cannot be copied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.RuntimeExport.cs#L45).

## `FindIntroducedImportFailures`

<a id="api-db3b528f5cceddcf"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.FindIntroducedImportFailures(Inno.Assets.Pipeline.AssetImportHealthSnapshot) 81be78f4ae0738b9f59ffa6bf6dbc99b7e5e1a33e430b6b923c1783c8d72a810 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetImportFailure> Inno.Assets.Pipeline.AssetLoader.FindIntroducedImportFailures(Inno.Assets.Pipeline.AssetImportHealthSnapshot baseline)
```

Finds writable-source failures that are new or changed relative to an earlier health snapshot.

**Parameter `baseline`:** The health snapshot captured before the candidate generation was activated.

**Returns:** A deterministic path-ordered collection containing only introduced or changed failures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Diagnostics.cs#L59).

## `GetDependencies`

<a id="api-4497d51d023c2f3e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.GetDependencies(Inno.Assets.AssetObject,System.Boolean) 59551b6d6800f6467b7422241a700fc366dd3e0631deca3efc1d9a4d84706c3a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetDependency> Inno.Assets.Pipeline.AssetLoader.GetDependencies(Inno.Assets.AssetObject asset, bool recursive = false)
```

Gets direct or transitive runtime dependencies of an asset.

**Parameter `asset`:** The asset to query.

**Parameter `recursive`:** Whether transitive dependencies should be included.

**Returns:** The persistent dependency descriptors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Dependencies.cs#L41).

## `GetImportDependencies`

<a id="api-c7924880846ee075"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.GetImportDependencies(Inno.Assets.AssetObject,System.Boolean) 438c0e4a4eec27ef2a750a18ebc8e9b43c15885e139bdc040601e56e373aacd3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetPath> Inno.Assets.Pipeline.AssetLoader.GetImportDependencies(Inno.Assets.AssetObject asset, bool recursive = false)
```

Gets source import dependencies that invalidate an asset artifact.

**Parameter `asset`:** The asset to query.

**Parameter `recursive`:** Whether transitive source dependencies should be included.

**Returns:** Canonical isolated source paths in stable order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Dependencies.cs#L61).

## `GetImportSettings`

<a id="api-c2d64e9843b92588"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.GetImportSettings(Inno.Assets.AssetPath) fab76a521aeeb43a73130dc22e4403ea286c87f043ea8a32d7fb9fd77a6bf8a5 -->

```csharp
public Inno.Assets.Pipeline.AssetImportSettingsSnapshot Inno.Assets.Pipeline.AssetLoader.GetImportSettings(Inno.Assets.AssetPath path)
```

Reads a detached importer settings value without changing source metadata.

**Parameter `path`:** The isolated source path, not its sidecar path.

**Returns:** The current settings and the metadata fingerprint required for a subsequent save.

**Throws `System.NotSupportedException`:** The source has no registered importer.

**Throws `System.IO.InvalidDataException`:** The persisted settings cannot be restored by the current importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.ImportSettings.cs#L31).

## `GetLoadedPaths`

<a id="api-47f9f9840f6a82f3"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.GetLoadedPaths 121a690a65d82e2bcb120e056c099bbdc8e565670d7bda539c9651cee6dfbf66 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetPath> Inno.Assets.Pipeline.AssetLoader.GetLoadedPaths()
```

Gets isolated source paths of all canonical loaded assets.

**Returns:** A stable isolated path snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Catalog.cs#L209).

## `GetReferenceInfo`

<a id="api-8e13aa9226c41637"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.GetReferenceInfo(Inno.Assets.AssetObject) 13047aa12fdcfe067b16bc31d2b91b50a618c1d18a8a6c4758a3c83fe5c3cb34 -->

```csharp
public Inno.Assets.AssetReferenceInfo Inno.Assets.Pipeline.AssetLoader.GetReferenceInfo(Inno.Assets.AssetObject asset)
```

Gets an engine-known reference diagnostic snapshot.

**Parameter `asset`:** The asset to inspect.

**Returns:** The reference diagnostic snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Dependencies.cs#L86).

## `Import`

<a id="api-6a7ed8427a8495d4"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.Import(Inno.Assets.AssetPath) 271669d9bdf9714f521349c0cec3ed7fb17b2c0b126ec721d3fce698bb8eb2b8 -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.Import(Inno.Assets.AssetPath path)
```

Imports one isolated source file into metadata and a runtime artifact.

**Parameter `path`:** The isolated source path.

**Returns:** `true` when an importer handled the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Importing.cs#L38).

## `Load`

<a id="api-1a973b49d1e6ec29"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.Load(Inno.Assets.AssetPath,System.Type) d07b0054c2d226710c0e224d46b52de0ebfce3aafbca2619d1083c0540d3ef4f -->

```csharp
public Inno.Assets.AssetObject? Inno.Assets.Pipeline.AssetLoader.Load(Inno.Assets.AssetPath path, System.Type requestedAssetType)
```

Loads a canonical asset by isolated source path.

**Parameter `path`:** The isolated source path.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Returns:** The canonical asset, including retained last-good content after a diagnosed import failure,
or `null` when unavailable or incompatible.

**Constraints:** Writable source content is verified independently of timestamps. Temporarily blocked source
verification follows the existing failed-import protocol; it does not certify cached content as current.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Loading.cs#L46).

## `Load`

<a id="api-b7a7273cbc5da394"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.Load(System.Guid,System.Type) a553a5b1f0ec8eee7ccd3891988b623bdee4fd2995529129acf27d9f6acad99f -->

```csharp
public Inno.Assets.AssetObject? Inno.Assets.Pipeline.AssetLoader.Load(System.Guid persistentId, System.Type requestedAssetType)
```

Loads a canonical asset by persistent identity.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Returns:** The canonical asset, or `null` when unavailable or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Loading.cs#L90).

## `LoadAsync`

<a id="api-cf20befb457a8f10"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.LoadAsync(Inno.Assets.AssetPath,System.Type,System.Threading.CancellationToken) 7b341400938250cbd9679f3bb704fe45d864b05ee731ca437bdf9bd60e38f6ba -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Assets.AssetObject?> Inno.Assets.Pipeline.AssetLoader.LoadAsync(Inno.Assets.AssetPath path, System.Type requestedAssetType, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Asynchronously loads a canonical asset by isolated source path.

**Parameter `path`:** The isolated source path.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Parameter `cancellationToken`:** Cancellation for the current caller's wait.

**Returns:** The canonical asset, or `null` when unavailable or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Loading.cs#L137).

## `LoadAsync`

<a id="api-d6be633df077931a"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.LoadAsync(System.Guid,System.Type,System.Threading.CancellationToken) a8203a297ee24caa9129db0df4c874a38ae5e60db978ed41f4268622094e31ac -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Assets.AssetObject?> Inno.Assets.Pipeline.AssetLoader.LoadAsync(System.Guid persistentId, System.Type requestedAssetType, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Asynchronously loads a canonical asset by persistent identity.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Parameter `cancellationToken`:** Cancellation for the current caller's wait.

**Returns:** The canonical asset, or `null` when unavailable or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Loading.cs#L177).

## `PrepareCatalogCandidate`

<a id="api-65323b668c5e8ce4"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.PrepareCatalogCandidate(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount},Inno.Assets.Pipeline.AssetSourcePolicy) 6292585066819ca440c4add109ec0fdd4798bfb95467bba5f7d96bbc1de57684 -->

```csharp
public Inno.Assets.Pipeline.AssetCatalogCandidate Inno.Assets.Pipeline.AssetLoader.PrepareCatalogCandidate(System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetSourceMount> mounts, Inno.Assets.Pipeline.AssetSourcePolicy? sourcePolicy = null)
```

Creates an isolated source-mount and catalog candidate without changing the active catalog.

**Parameter `mounts`:** The complete source-mount snapshot to validate.

**Parameter `sourcePolicy`:** The source policy for the candidate, or `null` to reuse this loader's policy.

**Returns:** A candidate that owns its catalog staging storage and exposes the isolated loader to its owner.

**Throws `System.ArgumentException`:** Thrown when the mount snapshot is empty, duplicated, or has no writable project source.

**Throws `System.IO.IOException`:** Thrown when the active catalog cannot be copied into candidate storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Catalog.cs#L47).

## `RefreshRegistries`

<a id="api-f7c509417b207791"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.RefreshRegistries ab9bad4c724c1283d7d8edc442a1927c557386ed01393b18d0d510dd0ea13220 -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.RefreshRegistries()
```

Refreshes extension registries and reimports affected sources when their snapshot changed.

**Returns:** `true` when the importer registry changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.cs#L344).

## `Rescan`

<a id="api-ab0bc2d476560e0c"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.Rescan(System.Threading.CancellationToken) 11c6de8597cfb5ae553b7ade391a320c2e5776dc88b5f7b689f811b5da2e99d2 -->

```csharp
public void Inno.Assets.Pipeline.AssetLoader.Rescan(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reconciles source files, metadata, artifacts and the in-memory catalog.

**Parameter `cancellationToken`:** Cancellation for reconciliation and importer work; unpublished candidates can be discarded after it drains.

**Throws `System.OperationCanceledException`:** Reconciliation or an importer observes cancellation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.SourceChanges.cs#L38).

## `ResolveReference`

<a id="api-58a30d27669eb0d0"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.ResolveReference(System.Guid,System.Guid,System.String,System.Type) f2716b6e22ab87843802850dc5e99f2934b561ad15670a07ddfc1fe2f69d4295 -->

```csharp
public Inno.Assets.AssetObject Inno.Assets.Pipeline.AssetLoader.ResolveReference(System.Guid persistentId, System.Guid stableTypeId, string lastKnownPath, System.Type expectedType)
```

Resolves a serialized reference or creates a persistent missing placeholder.

**Parameter `persistentId`:** The referenced persistent identity.

**Parameter `stableTypeId`:** The referenced stable asset type identity.

**Parameter `lastKnownPath`:** The last known source-relative path.

**Parameter `expectedType`:** The declared destination type.

**Returns:** A compatible canonical asset or missing placeholder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Loading.cs#L219).

## ```RestoreProperties``1```

<a id="api-9474cbd09e24cef8"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.RestoreProperties``1(System.Guid,System.Byte[],``0) a86a840ae9c5dcf8b274e413b5f34d9cd9b1d66203662ab6e72acdd0a8b27bb3 -->

```csharp
public void Inno.Assets.Pipeline.AssetLoader.RestoreProperties<TValue>(System.Guid stableTypeId, byte[] propertyData, TValue target) where TValue : class, Inno.Core.Serialization.ISerializable
```

Restores serialized properties to the existing asset object.

**Parameter `stableTypeId`:** The stable type id consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `propertyData`:** The property data consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

**Type parameter `TValue`:** Serialized asset object type receiving restored properties.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.cs#L101).

## `Save`

<a id="api-a27c8e44fd49c2d1"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.Save(Inno.Assets.AssetObject) efc944490aeee4b62d4d8a4d5c1118de391d043e8a18ea16d1f79d2f7a9ca457 -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.Save(Inno.Assets.AssetObject asset)
```

Saves an asset back to its current source path.

**Parameter `asset`:** The asset to export.

**Returns:** `true` when an importer exported the asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Saving.cs#L38).

## `Save`

<a id="api-c05fce96a53ed856"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.Save(Inno.Assets.AssetPath,Inno.Assets.AssetObject) d5bbebdd91d6ac94d7940c3cc3dea571f324518a06d6eeed8ae81162bbbd49ba -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.Save(Inno.Assets.AssetPath path, Inno.Assets.AssetObject asset)
```

Saves an asset to its initial or existing isolated source path while preserving an existing destination identity.

**Parameter `path`:** The isolated source path.

**Parameter `asset`:** The asset to export. Detached replacement values do not replace an existing source's persistent identity.

**Returns:** `true` when an importer exported the asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Saving.cs#L58).

## `SaveImportSettings`

<a id="api-6563573f2cd58a37"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.SaveImportSettings(Inno.Assets.AssetPath,Inno.Core.Serialization.ISerializable,System.String) 8201bad1a42745585fb4bd5ba5ed43e50177088761187a52f27928a9c547be08 -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.SaveImportSettings(Inno.Assets.AssetPath path, Inno.Core.Serialization.ISerializable? settings, string expectedFingerprint)
```

Atomically saves importer settings and reimports the source. Failed imports retain both the saved settings
and the previous successful artifact; callers must inspect the returned import status separately from saving.

**Parameter `path`:** The writable isolated source path.

**Parameter `settings`:** A value of the current importer's settings type, or null to reset to defaults.

**Parameter `expectedFingerprint`:** The fingerprint returned when the settings were read.

**Returns:** True when reimport succeeds; false when settings were saved but reimport failed.

**Throws `System.IO.IOException`:** The sidecar changed externally or could not be written.

**Throws `System.InvalidOperationException`:** The source is read-only or belongs to an isolated candidate.

**Throws `System.ArgumentException`:** The settings have a different type from the current importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.ImportSettings.cs#L68).

## `TryGetArtifact`

<a id="api-4a98fcfa19b193ed"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@) 6657238bbfd6e07d966fbab25fce2c13ba264e54435666599f890845c7230611 -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.TryGetArtifact(System.Guid persistentId, string outputName, out Inno.Assets.AssetArtifactInfo? artifact)
```

Tries to resolve a named output from the current artifact bundle.

**Parameter `persistentId`:** The stable persistent identity used for lookup.

**Parameter `outputName`:** The stable artifact output name used for lookup.

**Parameter `artifact`:** The resolved immutable artifact payload returned to the caller.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Residency.cs#L74).

## `TryGetAssetType`

<a id="api-4c793a0adfe9881a"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.TryGetAssetType(Inno.Assets.AssetPath,System.Type@) 84683e601716de239e52420e68079f8a811b54bbe968697ff18b0c7cdaa15a98 -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.TryGetAssetType(Inno.Assets.AssetPath path, out System.Type? assetType)
```

Tries to resolve the concrete asset type without loading it.

**Parameter `path`:** The isolated source path.

**Parameter `assetType`:** The resolved type.

**Returns:** `true` when the type can be resolved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Catalog.cs#L189).

## `TryGetInfo`

<a id="api-29a93d4f82c7c8b7"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.TryGetInfo(Inno.Assets.AssetPath,Inno.Assets.AssetInfo@) e22544201b82538a4fbf19847ed7942e8f39e321772a8f0a670e434a91ebbdc0 -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.TryGetInfo(Inno.Assets.AssetPath path, out Inno.Assets.AssetInfo? info)
```

Tries to get a catalog snapshot by isolated source path.

**Parameter `path`:** The isolated source path.

**Parameter `info`:** The immutable catalog snapshot when found.

**Returns:** `true` when the source is cataloged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Catalog.cs#L114).

## `TryGetInfo`

<a id="api-d5a28fbb19075783"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.TryGetInfo(System.Guid,Inno.Assets.AssetInfo@) 77024dd64d4cb9684f445fabda024a748305cc9e167e43ce86a7d32da660f066 -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.TryGetInfo(System.Guid persistentId, out Inno.Assets.AssetInfo? info)
```

Tries to get a catalog snapshot by persistent identity.

**Parameter `persistentId`:** The stable persistent identity used for lookup.

**Parameter `info`:** The resolved immutable metadata returned to the caller.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Catalog.cs#L140).

## `TryGetPersistentId`

<a id="api-96c70cd618b77929"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.TryGetPersistentId(Inno.Assets.AssetPath,System.Guid@) da83aa99d5ed20dabb5fed0ce3de211d91a927ccd9c1ff4b53dab60288f422cd -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.TryGetPersistentId(Inno.Assets.AssetPath path, out System.Guid persistentId)
```

Tries to resolve a persistent identity without loading the asset.

**Parameter `path`:** The isolated source path.

**Parameter `persistentId`:** The resolved identity.

**Returns:** `true` when catalog metadata exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Catalog.cs#L163).

## `TryLoad`

<a id="api-e6f4f4f538384c1b"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.TryLoad(Inno.Assets.AssetPath,System.Type,Inno.Assets.AssetObject@) ab8f9b38fe406f788905e3e09d4677dae4aceda30af43f1a91d0f18b0a6e1706 -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.TryLoad(Inno.Assets.AssetPath path, System.Type requestedAssetType, out Inno.Assets.AssetObject? asset)
```

Tries to load a canonical asset by isolated source path.

**Parameter `path`:** The isolated source path.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Parameter `asset`:** The canonical asset when successful.

**Returns:** `true` when a compatible asset was loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Loading.cs#L69).

## `TryLoad`

<a id="api-5746809a893d0ecf"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.TryLoad(System.Guid,System.Type,Inno.Assets.AssetObject@) 4a7bffeaa7eddb79555c5a64e43ef2e4a138a8d5849c73da1c7d489575d81729 -->

```csharp
public bool Inno.Assets.Pipeline.AssetLoader.TryLoad(System.Guid persistentId, System.Type requestedAssetType, out Inno.Assets.AssetObject? asset)
```

Tries to load a canonical asset by persistent identity.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Parameter `asset`:** The canonical asset when successful.

**Returns:** `true` when a compatible asset was loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Loading.cs#L113).

## `UnloadUnusedAssets`

<a id="api-0175f797e7ad44f4"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.UnloadUnusedAssets e212787f63e89535d69ab777bc450ae050817ae8f5e820ba36f2a8748e6b961d -->

```csharp
public int Inno.Assets.Pipeline.AssetLoader.UnloadUnusedAssets()
```

Collects canonical assets that have no external managed references.

**Returns:** The number of released canonical assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.Residency.cs#L126).

## `WaitForIdle`

<a id="api-971738b4df6c831a"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetLoader.WaitForIdle 854f56ee75701270c7f686387a0598b9e2ea83834a33bfb62cddb5688298f3d8 -->

```csharp
public void Inno.Assets.Pipeline.AssetLoader.WaitForIdle()
```

Waits for pending import and build work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.cs#L336).

## `artifactRoot`

<a id="api-f190057a1c00a454"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetLoader.artifactRoot 8a78ac6cced9ca0490d0d1611330bd0cdc338d1971024d599d5e44530350a5f7 -->

```csharp
public string Inno.Assets.Pipeline.AssetLoader.artifactRoot { get; }
```

Gets the derived content-addressed artifact root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.cs#L303).

## `assetRoot`

<a id="api-ef2011b1c8ec5478"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetLoader.assetRoot 79b39bd6f92ad6df8ca48cfb08fba492eafdd69646a88ab7c207490b3a8190b2 -->

```csharp
public string Inno.Assets.Pipeline.AssetLoader.assetRoot { get; }
```

Gets the absolute source root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.cs#L293).

## `libraryRoot`

<a id="api-5a2ab230b19190a9"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetLoader.libraryRoot cfed4fafe346507bd81b7c21cb18f1a088ff25175130cfe6c636fa7e1f4d1aa1 -->

```csharp
public string Inno.Assets.Pipeline.AssetLoader.libraryRoot { get; }
```

Gets the absolute rebuildable Library root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetLoader.cs#L298).
