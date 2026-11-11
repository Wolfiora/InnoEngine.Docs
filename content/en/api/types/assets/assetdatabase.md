---
title: "AssetDatabase"
description: "Reference for AssetDatabase in Inno.Assets."
uid: api.inno.assets.6d1e482179c7cd34
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetDatabase`

This reference describes `AssetDatabase` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetResidencyProvider`.

**Direct interfaces:** `System.IDisposable`, `Inno.Assets.IAssetLookup`, `Inno.Assets.IAssetReferenceResolver`, `Inno.Assets.IAssetPropertyStateResolver`, `Inno.Assets.IAssetArtifactLookup`, `Inno.Assets.IAssetResidency`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-58a5b2ece2cde17e) | Method |
| [`AcquireArtifact`](#api-949f9bb696f72ba5) | Method |
| [```AcquireAsync``1```](#api-5507aba26fff2fc1) | Method |
| [```AcquireAsync``1```](#api-6853ba47f013d64a) | Method |
| [`CompletePendingLoads`](#api-8dc06b91879f4f41) | Method |
| [`Dispose`](#api-07704b30e0c50860) | Method |
| [`GetDependencies`](#api-3342e428f6dfa0cf) | Method |
| [```Load``1```](#api-f808248d0bfa59c0) | Method |
| [```Load``1```](#api-f6cbc5cbbda731bc) | Method |
| [```RestoreProperties``1```](#api-76ec6743082ff4d0) | Method |
| [`TrimToBudget`](#api-2d9a11b2bdd2d274) | Method |
| [`TryGetArtifact`](#api-3823f9d6ffc13129) | Method |
| [```TryLoad``1```](#api-32ac7fb8e49345e7) | Method |
| [```TryLoad``1```](#api-46e2fbffad0d2859) | Method |
| [`preparationStatistics`](#api-7906596192bfdb22) | Property |
| [`preparingBytes`](#api-d1101b010ac34d7d) | Property |
| [`residencyStatistics`](#api-0757e440a0d33554) | Property |

## Type declaration

<a id="api-6d1e482179c7cd34"></a>
<!-- api: T:Inno.Assets.AssetDatabase b7d64667c1798967f7320a26256a0d4b80bd5c11ad8c55f9506fb9131800e29b -->

```csharp
public sealed class Inno.Assets.AssetDatabase : Inno.Assets.AssetResidencyProvider, System.IDisposable, Inno.Assets.IAssetLookup, Inno.Assets.IAssetReferenceResolver, Inno.Assets.IAssetPropertyStateResolver, Inno.Assets.IAssetArtifactLookup, Inno.Assets.IAssetResidency
```

Loads canonical runtime assets exclusively from a verified catalog and content-addressed artifact bundles.

**Constraints:** This database never reads project source files, creates source mounts, runs importers, or writes content.
One runtime session owns one database instance and disposes it before releasing its identity services.

Separates immutable artifact preparation from owner-thread asset materialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L24).

## `#ctor`

<a id="api-58a5b2ece2cde17e"></a>
<!-- api: M:Inno.Assets.AssetDatabase.#ctor(Inno.Content.IRuntimeContentStore,Inno.Core.Serialization.SerializationGeneration,Inno.Extensibility.Types.TypeCacheSnapshot,Inno.Core.Identity.IdentityAllocator,System.Int64,System.Int64) 73dbecaa53b3e05401f9141685628464e44d4f026f187bfe4694a0ed09c6478c -->

```csharp
public Inno.Assets.AssetDatabase.AssetDatabase(Inno.Content.IRuntimeContentStore content, Inno.Core.Serialization.SerializationGeneration serialization, Inno.Extensibility.Types.TypeCacheSnapshot types, Inno.Core.Identity.IdentityAllocator identities, long residencyBudgetBytes = 9223372036854775807, long preparationBudgetBytes = 67108864)
```

Creates a read-only runtime asset database from one verified immutable content store.

**Parameter `content`:** The borrowed content store; its owner closes it after this database and all outstanding reads retire.

**Parameter `serialization`:** The immutable converter generation pinned by the owning runtime session.

**Parameter `identities`:** The session-owned allocator used for canonical runtime asset identities.

**Parameter `types`:** The immutable type generation pinned by this runtime session, without refreshing authoring registries.

**Parameter `residencyBudgetBytes`:** Maximum unpinned runtime payload bytes retained after lease release.

**Parameter `preparationBudgetBytes`:** Maximum encoded payload bytes reserved by unfinished cold-load closures, independently of residency.

**Throws `System.ArgumentNullException`:** Thrown when `serialization` is null.

**Throws `System.IO.InvalidDataException`:** Thrown when the deployed catalog or its runtime artifact closure is incomplete or malformed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L108).

## `AcquireArtifact`

<a id="api-949f9bb696f72ba5"></a>
<!-- api: M:Inno.Assets.AssetDatabase.AcquireArtifact(System.Guid,System.String) 117fa0b00aa986aca68634f921ef7a750b2bbe0e29e0765565ffcd42a4e3ca2e -->

```csharp
public Inno.Assets.ArtifactLease Inno.Assets.AssetDatabase.AcquireArtifact(System.Guid persistentId, string outputName)
```

Acquires one verified immutable artifact output for an explicit lifetime.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease over the verified deployed artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L466).

## ```AcquireAsync``1```

<a id="api-5507aba26fff2fc1"></a>
<!-- api: M:Inno.Assets.AssetDatabase.AcquireAsync``1(Inno.Assets.AssetPath,System.Threading.CancellationToken) 4d844535cbbea9c5459ec6cdaf148a00e96d50ed0147ac68280213b6ccc467ba -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Assets.AssetLease<TAsset>> Inno.Assets.AssetDatabase.AcquireAsync<TAsset>(Inno.Assets.AssetPath path, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : Inno.Assets.AssetObject
```

Acquires a canonical runtime asset by path for an explicit residency lifetime.

**Type parameter `TAsset`:** Required runtime asset contract.

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation observed during preparation and before owner-thread materialization.

**Returns:** A lease completed after verified preparation and owner-thread publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L329).

## ```AcquireAsync``1```

<a id="api-6853ba47f013d64a"></a>
<!-- api: M:Inno.Assets.AssetDatabase.AcquireAsync``1(System.Guid,System.Threading.CancellationToken) ddf09b54cdfe351d14e32f287d1bc995f164f9f049d6cac2bdc7125105980c98 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Assets.AssetLease<TAsset>> Inno.Assets.AssetDatabase.AcquireAsync<TAsset>(System.Guid persistentId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : Inno.Assets.AssetObject
```

Acquires a canonical runtime asset by persistent identity for an explicit residency lifetime.

**Type parameter `TAsset`:** Required runtime asset contract.

**Parameter `persistentId`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation observed during preparation and before owner-thread materialization.

**Returns:** A lease completed after verified preparation and owner-thread publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L360).

## `CompletePendingLoads`

<a id="api-8dc06b91879f4f41"></a>
<!-- api: M:Inno.Assets.AssetDatabase.CompletePendingLoads(System.Int32) 11fce5fd3cc4daf4c0797d8f14b8776db5bddccae1a8fcd756b487f10045bf99 -->

```csharp
public int Inno.Assets.AssetDatabase.CompletePendingLoads(int completionBudget = 8)
```

Publishes completed cold loads on the database owner thread without waiting for outstanding IO.

**Parameter `completionBudget`:** The maximum number of ready requests committed at this frame safety point.

**Returns:** The number of requests completed, failed, or canceled during this call.

**Throws `System.InvalidOperationException`:** The caller is not the owner thread that created this database.

**Throws `System.ObjectDisposedException`:** The database has already retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.Residency.cs#L70).

## `Dispose`

<a id="api-07704b30e0c50860"></a>
<!-- api: M:Inno.Assets.AssetDatabase.Dispose 616bd3353ac775fd4f929c850f8ddbdc63e9c91cf297f312daeb0050eafa81ce -->

```csharp
public void Inno.Assets.AssetDatabase.Dispose()
```

Stops publication and releases canonical assets before dependency edges and the payload read gate.

**Throws `Inno.Core.Execution.RetirementPendingException`:** An unload hook still owns active work. Retain this database and retry at the session retirement safe point.

**Throws `System.AggregateException`:** Completed releases failed after all quiescent resources were attempted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L508).

## `GetDependencies`

<a id="api-3342e428f6dfa0cf"></a>
<!-- api: M:Inno.Assets.AssetDatabase.GetDependencies(Inno.Assets.AssetObject) c00d91e5843c38b642d367aa8ed03ac6af7115396c01ed4b91a6bf228015c1e6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetDependency> Inno.Assets.AssetDatabase.GetDependencies(Inno.Assets.AssetObject asset)
```

Gets the direct persistent dependencies declared by one loaded or cataloged asset.

**Parameter `asset`:** The canonical asset whose deployed dependency descriptors are requested.

**Returns:** A deterministic immutable snapshot of direct dependencies.

**Throws `System.InvalidOperationException`:** Thrown when `asset` is not owned by this database.

**Throws `System.ObjectDisposedException`:** Thrown when this database has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L394).

## ```Load``1```

<a id="api-f808248d0bfa59c0"></a>
<!-- api: M:Inno.Assets.AssetDatabase.Load``1(Inno.Assets.AssetPath) 226fc320a8afa109d020995eaa7910213ee4da184ee088a0158f533c17b4a5fe -->

```csharp
public TAsset Inno.Assets.AssetDatabase.Load<TAsset>(Inno.Assets.AssetPath path) where TAsset : Inno.Assets.AssetObject
```

Loads the canonical asset at one catalog path.

**Type parameter `TAsset`:** The required runtime asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Returns:** The canonical asset instance owned by this database.

**Throws `System.InvalidOperationException`:** Thrown when no asset exists at the path or its concrete type is incompatible with
`TAsset`.

**Throws `System.ObjectDisposedException`:** Thrown when this database has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L175).

## ```Load``1```

<a id="api-f6cbc5cbbda731bc"></a>
<!-- api: M:Inno.Assets.AssetDatabase.Load``1(System.Guid) 949754cb9280e9ff976eec088a3c1ff554f36a77db8c0c37e7ff5288255d5724 -->

```csharp
public TAsset Inno.Assets.AssetDatabase.Load<TAsset>(System.Guid persistentId) where TAsset : Inno.Assets.AssetObject
```

Loads the canonical asset with one persistent identity.

**Type parameter `TAsset`:** The required runtime asset contract.

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Returns:** The canonical asset instance owned by this database.

**Throws `System.InvalidOperationException`:** Thrown when no asset has the identity or its concrete type is incompatible with
`TAsset`.

**Throws `System.ObjectDisposedException`:** Thrown when this database has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L206).

## ```RestoreProperties``1```

<a id="api-76ec6743082ff4d0"></a>
<!-- api: M:Inno.Assets.AssetDatabase.RestoreProperties``1(System.Guid,System.Byte[],``0) 2168d5a90d6986bae1123296fad5528bbae8cedcdb80968f7d64bf2b9d88c0eb -->

```csharp
public void Inno.Assets.AssetDatabase.RestoreProperties<TValue>(System.Guid stableTypeId, byte[] propertyData, TValue target) where TValue : class, Inno.Core.Serialization.ISerializable
```

Restores serialized properties to the existing asset object.

**Parameter `stableTypeId`:** The stable type id consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `propertyData`:** The property data consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

**Type parameter `TValue`:** Serialized asset object type receiving restored properties.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L64).

## `TrimToBudget`

<a id="api-2d9a11b2bdd2d274"></a>
<!-- api: M:Inno.Assets.AssetDatabase.TrimToBudget 4b2aada3307fd6b0954d726f0c2b46a10be1bd452ae27dc4c258e4c0e68ceef3 -->

```csharp
public int Inno.Assets.AssetDatabase.TrimToBudget()
```

Evicts least-recently-used unpinned assets until the configured payload budget is met.

**Returns:** The number of canonical assets released by this trim operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L490).

## `TryGetArtifact`

<a id="api-3823f9d6ffc13129"></a>
<!-- api: M:Inno.Assets.AssetDatabase.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@) b76846c11e65ada2600e727c0e12a36570e989a3592548efb201c86cd4b5d3f5 -->

```csharp
public bool Inno.Assets.AssetDatabase.TryGetArtifact(System.Guid persistentId, string outputName, out Inno.Assets.AssetArtifactInfo? artifact)
```

Tries to resolve one named immutable artifact output by persistent asset identity.

**Parameter `persistentId`:** The persistent identity of the artifact owner.

**Parameter `outputName`:** The exact artifact output name.

**Parameter `artifact`:** Receives verified output metadata without prescribing a physical deployment location.

**Returns:** `true` when the deployed bundle contains the requested output; otherwise,
    `false`.

**Throws `System.ObjectDisposedException`:** Thrown when this database has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L428).

## ```TryLoad``1```

<a id="api-32ac7fb8e49345e7"></a>
<!-- api: M:Inno.Assets.AssetDatabase.TryLoad``1(Inno.Assets.AssetPath,``0@) 21eea1515fb730415f6ca5c8ae0d288ef966cd642576e83e9c14900bc7f93a9e -->

```csharp
public bool Inno.Assets.AssetDatabase.TryLoad<TAsset>(Inno.Assets.AssetPath path, out TAsset? asset) where TAsset : Inno.Assets.AssetObject
```

Tries to load the canonical asset at one catalog path.

**Type parameter `TAsset`:** The required runtime asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the deployed catalog contains a compatible asset; otherwise,
    `false`.

**Throws `System.ObjectDisposedException`:** Thrown when this database has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L237).

## ```TryLoad``1```

<a id="api-46e2fbffad0d2859"></a>
<!-- api: M:Inno.Assets.AssetDatabase.TryLoad``1(System.Guid,``0@) 10ffc7765f0bb706c2a671ebd20505a25691acf2e2b5ed7bba8baf4c3ab8da20 -->

```csharp
public bool Inno.Assets.AssetDatabase.TryLoad<TAsset>(System.Guid persistentId, out TAsset? asset) where TAsset : Inno.Assets.AssetObject
```

Tries to load the canonical asset with one persistent identity.

**Type parameter `TAsset`:** The required runtime asset contract.

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the deployed catalog contains a compatible asset; otherwise,
    `false`.

**Throws `System.ObjectDisposedException`:** Thrown when this database has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L276).

## `preparationStatistics`

<a id="api-7906596192bfdb22"></a>
<!-- api: P:Inno.Assets.AssetDatabase.preparationStatistics a4b11b3842584e433965ab4f9e98663d3194ad2b2b10acc8262b090b7cab5195 -->

```csharp
public Inno.Assets.AssetPreparationStatistics Inno.Assets.AssetDatabase.preparationStatistics { get; }
```

Gets immutable cold-load admission, unique IO and peak reservation counters for this database lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.Residency.cs#L33).

## `preparingBytes`

<a id="api-d1101b010ac34d7d"></a>
<!-- api: P:Inno.Assets.AssetDatabase.preparingBytes 35f9740cd524ebae6bf4ddb4f124140ba348af1233e64ab0d5cabcbfac7b9554 -->

```csharp
public long Inno.Assets.AssetDatabase.preparingBytes { get; }
```

Gets encoded bytes reserved by cold-load closures, including completed IO awaiting owner publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.Residency.cs#L46).

## `residencyStatistics`

<a id="api-0757e440a0d33554"></a>
<!-- api: P:Inno.Assets.AssetDatabase.residencyStatistics f4fbeed29191753e74a28500f02e94ddecb30af2fdd895175644282de05d4994 -->

```csharp
public Inno.Assets.AssetResidencyStatistics Inno.Assets.AssetDatabase.residencyStatistics { get; }
```

Gets current materialized asset count, payload bytes, and the configured budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetDatabase.cs#L299).
