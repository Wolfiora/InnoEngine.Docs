---
title: Add an asset importer or build processor
description: Participate in discovery, dependency tracking, named output
  publication and settings without owning the whole pipeline.
uid: extending.asset-importers
kind: how-to
owners:
  - Inno.Assets.Pipeline
contracts:
  - project.inno-assets-pipeline#authoring-ownership-contract
  - project.inno-assets-pipeline#artifact-and-export-contract
---
# Add an asset importer or build processor

Implement the authoring extension for your asset format inside its responsible module. The pipeline owns discovery, source identities, dependency tracking and publication; the extension describes the conversion and its real inputs.

## Declare discovery and the output contract

Use the actual `AssetImporter`/`AssetImporter<T>` contract and `AssetImporterAttribute` with a globally stable protocol ID. Declare the target asset type and supported normalized extensions. Discovery conflicts are errors rather than a nondeterministic choice between importers.

Use the shared serialization and stable type identity protocol for persisted asset/settings values. A `CreateImportSettings` override returns a fresh serializable settings value, or null when the importer has no settings. Import settings use the existing sidecar representation; do not create a parallel settings file or a format-specific persistence system.

Consult the [exact importer declarations](../architecture/projects/inno-assets-pipeline.md) for required overrides and contexts. A build processor is a separate aggregate transformation using its declared discovery contract; it does not replace source import ownership.

Plugin importer source belongs to the plugin's Editor assembly. Its explicitly exported entry points use `InnoEditor.Assets`, not the runtime plugin surface. Structured source helpers accept context-provided `AssetSerializationServices`; they do not expose the host's type catalog, serialization registry or candidate resolver to the plugin. `EditorAssets` provides the current Editor session's limited mutation and detached-value operations, not ownership of the pipeline or its publication graph.

## Record the dependencies actually used

Read source and artifact inputs through the supplied context. `AssetImportContext.AcquireArtifact` records the artifact dependency and returns a lease that the caller releases. Export contexts expose the current owner's artifact lookup. Do not reopen arbitrary old cache files or treat a remembered path as a valid retained input.

Importer settings come from the candidate generation's restored value. Asset references within settings participate in import dependency tracking and mount permissions; they are not automatically runtime dependencies. Mutating the import-time settings value does not write authoring metadata.

## Write named outputs

Use `AssetImportWriter<T>.WriteArtifactAsync` or the aggregate `AssetArtifactWriter` to stage output. Names must be unique. The writer copies the supplied byte memory, so the caller may reuse that input buffer after the write completes. Output publication remains owned by the pipeline.

Choose `Runtime` for deployable outputs and `AuthoringOnly` for authoring-only cache data. Reserved `runtime` and `asset-state` outputs remain runtime outputs. The scope is recorded in the immutable manifest and fingerprint; export projects the runtime subset without knowing your asset type.

Report diagnostics through the provided mechanism and propagate cancellation. A pre-canceled write, duplicate output, invalid scope or invalid name fails rather than publishing partial success. No completed task alone proves that the resulting artifact was published or certified for a product.

## Extend sample rewriting separately

Source-language rewriting uses the stable-ID `IAssetSampleSourceRewriter` discovery contract. Work only in the transaction-owned staging area and observe its cancellation token. C# rewriting belongs to the scripting compiler; asset services do not acquire a Roslyn dependency. Do not access live asset objects, the Editor or thread-bound native state from the background rewriter.

Validate success, cancellation, missing dependencies, corrupt settings, read-only mounts and retry/reload behavior through the responsible domain/integration owner. See [asset publication](../architecture/asset-publication.md) for the rollback and retirement obligations surrounding your callback.
