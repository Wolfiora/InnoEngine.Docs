---
uid: api.directory.engine.assets
title: "Assets"
kind: landing
owners: []
---

# Assets

Find types in this project category. Each type links to its exact declarations and member contracts.

## Categories

| Category | Purpose |
| --- | --- |
| [Pipeline](pipeline/index.md) | Authoring imports, source identities, settings, immutable artifacts and runtime export. |

## Types

| Type | Purpose |
| --- | --- |
| [ArtifactLease](artifactlease/index.md) | Keeps one verified immutable artifact generation available for an explicit lifetime. |
| [ArtifactRetention](artifactretention/index.md) | Counts explicit leases over immutable artifact keys independently of asset object residency. |
| [AssetArtifactInfo](assetartifactinfo/index.md) | Describes one named output in an immutable artifact bundle. |
| [AssetArtifactKey](assetartifactkey/index.md) | Identifies one immutable content-addressed artifact bundle. |
| [AssetChange](assetchange/index.md) | Describes one committed asset database change. |
| [AssetChangeKind](assetchangekind/index.md) | Identifies a committed asset database change. |
| [AssetChangeSet](assetchangeset/index.md) | Contains one atomically committed asset database revision. |
| [AssetDatabase](assetdatabase/index.md) | Loads canonical runtime assets exclusively from a verified catalog and content-addressed artifact bundles. |
| [AssetDependency](assetdependency/index.md) | Describes a persistent direct dependency on another asset. |
| [AssetDependencyCollection](assetdependencycollection/index.md) | Collects direct asset dependencies encountered by a serialization operation. |
| [AssetExecutionContext](assetexecutioncontext/index.md) | Binds one host-owned asset lookup to the current asynchronous script execution context. |
| [AssetImportStatus](assetimportstatus/index.md) | Identifies the current source and import state of an asset. |
| [AssetInfo](assetinfo/index.md) | Provides an immutable public snapshot of one cataloged asset. |
| [AssetLease&lt;TAsset&gt;](assetlease/index.md) | Keeps one canonical asset generation resident for an explicit lifetime. |
| [AssetObject](assetobject/index.md) | Provides the common runtime identity and payload contract for imported assets. |
| [AssetPath](assetpath/index.md) | Addresses one asset without conflating isolated source mounts. |
| [AssetPreparationStatistics](assetpreparationstatistics/index.md) | Reports owner-thread cold-load admission and unique encoded IO reservations without retaining assets or tasks. |
| [AssetPropertySnapshot](assetpropertysnapshot/index.md) | Contains native properties and automatically captured asset dependencies without retaining their owner or typed object. |
| [AssetReferenceInfo](assetreferenceinfo/index.md) | Provides a stable diagnostic snapshot of references known to the asset pipeline. |
| [AssetReferenceKind](assetreferencekind/index.md) | Identifies a reference source known to the asset pipeline. |
| [AssetReferenceLocation](assetreferencelocation/index.md) | Describes one engine-known reference location for an asset. |
| [AssetReferenceProtocol](assetreferenceprotocol/index.md) | Defines the open cross-domain protocol used to resolve persistent asset identities. |
| [AssetResidencyProvider](assetresidencyprovider/index.md) | Provides controlled lease construction to concrete asset residency implementations. |
| [AssetResidencyStatistics](assetresidencystatistics/index.md) | Reports current explicit runtime asset residency accounting. |
| [AssetRuntimeContentInfo](assetruntimecontentinfo/index.md) | Describes one deployed runtime-only asset content snapshot. |
| [AssetRuntimeOwner](assetruntimeowner/index.md) | Grants one database exclusive mutation authority over the asset instances it initializes. |
| [Assets](assets/index.md) | Provides script-facing asset queries through the lookup bound to the current runtime session. |
| [AssetSerializationContext](assetserializationcontext/index.md) | Creates complete asset-aware converter contexts from an owner-provided reference generation. |
| [AssetSourceId](assetsourceid/index.md) | Identifies one isolated asset source mount. |
| [AssetSourceKind](assetsourcekind/index.md) | Identifies the durable source role recorded by an asset metadata sidecar. |
| [BinaryAsset](binaryasset/index.md) | Describes an imported opaque binary payload. |
| [IAssetArtifactLookup](iassetartifactlookup/index.md) | Resolves verified named outputs from immutable asset artifact bundles. |
| [IAssetLookup](iassetlookup/index.md) | Defines the read-only asset lookup boundary shared by authoring and deployed runtime databases. |
| [IAssetPropertyStateResolver](iassetpropertystateresolver/index.md) | Restores nested neutral asset properties with the owning database&#39;s converter generation and references. |
| [IAssetReferenceResolver](iassetreferenceresolver/index.md) | Resolves persistent asset references against one isolated asset database generation. |
| [IAssetResidency](iassetresidency/index.md) | Exposes explicit asynchronous asset and artifact residency ownership. |
| [RetentionScope](retentionscope/index.md) | Owns multiple asset, artifact, or subsystem leases as one reverse-order lifetime. |
| [TextAsset](textasset/index.md) | Stores decoded text content and its language hint. |

