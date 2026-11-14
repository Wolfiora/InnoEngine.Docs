---
uid: api.directory.engine.assets.pipeline
title: "Pipeline"
kind: landing
owners: []
---

# Pipeline

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [AssetArtifactWriter](assetartifactwriter/index.md) | Collects immutable named outputs for an aggregate asset build. |
| [AssetBuildContext&lt;TDefinition&gt;](assetbuildcontext/index.md) | Provides a stable input snapshot to an aggregate asset build. |
| [AssetBuildProcessor](assetbuildprocessor-664fe76ab091/index.md) | Defines an automatically discovered aggregate asset build processor. |
| [AssetBuildProcessor&lt;TDefinition&gt;](assetbuildprocessor-c95d221fcd2d/index.md) | Provides a strongly typed aggregate asset build processor. |
| [AssetBuildProcessorAttribute](assetbuildprocessorattribute/index.md) | Declares the immutable cache protocol identity of an automatically discovered asset build processor. |
| [AssetCacheOptions](assetcacheoptions/index.md) | Controls cleanup of rebuildable asset database data. |
| [AssetCatalogCandidate](assetcatalogcandidate/index.md) | Owns the isolated catalog storage used to validate one candidate Asset Pipeline generation. |
| [AssetChangedEvent](assetchangedevent/index.md) | Batched file-system change event for asset source files. |
| [AssetDeploymentScope](assetdeploymentscope/index.md) | Defines whether an imported asset participates in deployed runtime content. |
| [AssetExportContext](assetexportcontext/index.md) | Provides generation-bound services for one editable asset source export. |
| [AssetFileEntry](assetfileentry/index.md) | One node in the asset source filesystem index. |
| [AssetFileSystem](assetfilesystem/index.md) | Indexed asset source filesystem model backed by T:Inno.Assets.Pipeline.AssetWatcher. |
| [AssetImportContext](assetimportcontext/index.md) | Collects source data and dependency declarations for one import operation. |
| [AssetImporter](assetimporter-036da995f840/index.md) | Defines metadata shared by automatically discovered asset importers. |
| [AssetImporter&lt;TAsset&gt;](assetimporter-2a9d6c3a467c/index.md) | Provides the strongly typed implementation base for an asset importer. |
| [AssetImporterAttribute](assetimporterattribute/index.md) | Declares the immutable protocol identity of an automatically discovered asset importer. |
| [AssetImportExtensionUnavailableException](assetimportextensionunavailableexception/index.md) | Reports a required authoring extension absent from the current generation. |
| [AssetImportFailure](assetimportfailure/index.md) | Describes a writable-source import failure introduced after an earlier health snapshot. |
| [AssetImportHealthSnapshot](assetimporthealthsnapshot/index.md) | Represents an immutable observation of writable-source import failures at one point in time. |
| [AssetImportSettingsSnapshot](assetimportsettingssnapshot/index.md) | Provides a detached settings value and an optimistic concurrency token for its source sidecar. |
| [AssetImportWriter&lt;TAsset&gt;](assetimportwriter/index.md) | Collects the complete candidate output of one source import. |
| [AssetLoader](assetloader/index.md) | Coordinates importing, persistent cataloging, canonical loading, reloading and collection for one source and artifact root pair. |
| [AssetPipeline](assetpipeline/index.md) | Provides the single application-level entry point for importing, loading, saving and collecting assets. |
| [AssetPipelineMode](assetpipelinemode/index.md) | Defines which side of the asset pipeline an T:Inno.Assets.Pipeline.AssetPipeline instance serves. |
| [AssetPipelineOptions](assetpipelineoptions/index.md) | Initialization options for T:Inno.Assets.Pipeline.AssetPipeline. |
| [AssetSample](assetsample/index.md) | Defines authoring sample directories and their installed Plugin behavior. |
| [AssetSampleImportTransaction](assetsampleimporttransaction/index.md) | Owns a cancellable sample clone, its pinned generation and its owner-thread publication. |
| [AssetSampleSourceRewriterAttribute](assetsamplesourcerewriterattribute/index.md) | Registers a source-language sample transformer through the reloadable type catalog. |
| [AssetSampleTransformContext](assetsampletransformcontext/index.md) | Gives a source-language extension access to a staged sample clone before serialized references are remapped. |
| [AssetSerializationServices](assetserializationservices/index.md) | Provides generation-bound structured serialization without exposing host registries to importer extensions. |
| [AssetSourceMount](assetsourcemount/index.md) | Maps one isolated asset source to a controlled physical root. |
| [AssetSourceMountTransaction](assetsourcemounttransaction/index.md) | Holds an isolated source-mount candidate that can be inspected before it atomically replaces the active Asset Database. |
| [AssetSourcePolicy](assetsourcepolicy/index.md) | Defines which physical entries are excluded from an asset source tree. |
| [AssetSourceSnapshot](assetsourcesnapshot/index.md) | Contains detached authoring bytes and conflict-detection state. |
| [AssetSourceStore](assetsourcestore/index.md) | Reads detached authoring bytes and saves them independently of successful import. |
| [EditorAssets](editorassets/index.md) | Provides Editor-script asset mutations through the authoring pipeline bound by the current host. |
| [IAssetSampleSourceRewriter](iassetsamplesourcerewriter/index.md) | Rewrites a source language in a private sample clone before source assets are published. |
| [IAssetSourceSnapshot](iassetsourcesnapshot/index.md) | Provides read-only authoring source access for active or isolated candidate compilation. |
| [NativeAssetSourceSerialization](nativeassetsourceserialization/index.md) | Imports and exports editable asset source state through the common native serializer. |

