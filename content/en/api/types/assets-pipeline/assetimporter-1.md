---
title: "AssetImporter`1"
description: "Reference for AssetImporter`1 in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.a53826563b06fcc0
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# ``AssetImporter`1``

This reference describes ``AssetImporter`1`` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.Pipeline.AssetImporter`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e54576c4ad58c514) | Method |
| [`ExportAsync`](#api-192f597fb8127bce) | Method |
| [`ImportAsync`](#api-719040c65c93a5ab) | Method |
| [`targetAssetType`](#api-4a9abcc64edd2083) | Property |

## Type declaration

<a id="api-a53826563b06fcc0"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetImporter`1 c3cf967a3248acdcff23b45e6ef73cb0cff020a2db43a707c5198716ba146098 -->

```csharp
public abstract class Inno.Assets.Pipeline.AssetImporter<TAsset> where TAsset : Inno.Assets.AssetObject : Inno.Assets.Pipeline.AssetImporter
```

Provides the strongly typed implementation base for an asset importer.

**Type parameter `TAsset`:** The concrete imported asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L101).

## `#ctor`

<a id="api-e54576c4ad58c514"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImporter`1.#ctor c0af1d6a52e67beb1ed2f96e3511c428ccf7f04d072c1580911616bab88c5c7f -->

```csharp
protected Inno.Assets.Pipeline.AssetImporter<TAsset>.AssetImporter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L101).

## `ExportAsync`

<a id="api-192f597fb8127bce"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImporter`1.ExportAsync(Inno.Assets.Pipeline.AssetExportContext,`0,System.Threading.CancellationToken) 9bd396bd00d81e51ed19b35eaf6e1ee8181df3c696b1005da2cee4dde5cf93bf -->

```csharp
protected virtual System.Threading.Tasks.ValueTask<System.ReadOnlyMemory<byte>?> Inno.Assets.Pipeline.AssetImporter<TAsset>.ExportAsync(Inno.Assets.Pipeline.AssetExportContext context, TAsset asset, System.Threading.CancellationToken cancellationToken)
```

Exports an asset back into source bytes.

**Parameter `context`:** The generation-bound source export services.

**Parameter `asset`:** The asset to export.

**Parameter `cancellationToken`:** Cancellation for the export.

**Returns:** The source bytes, or `null` when export is unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L144).

## `ImportAsync`

<a id="api-719040c65c93a5ab"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImporter`1.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{`0},System.Threading.CancellationToken) 482bfddf4a4171c7c0be45670d5bd5abe9c7191bf8794578a1f39a2bd6d8311b -->

```csharp
protected abstract System.Threading.Tasks.ValueTask Inno.Assets.Pipeline.AssetImporter<TAsset>.ImportAsync(Inno.Assets.Pipeline.AssetImportContext context, Inno.Assets.Pipeline.AssetImportWriter<TAsset> output, System.Threading.CancellationToken cancellationToken)
```

Imports one source into a managed asset and named artifact outputs.

**Parameter `context`:** The import transaction context.

**Parameter `output`:** The candidate output writer.

**Parameter `cancellationToken`:** Cancellation for the import.

**Returns:** An operation that completes when the candidate has been fully staged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L123).

## `targetAssetType`

<a id="api-4a9abcc64edd2083"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImporter`1.targetAssetType 38a605a211d09371699f90a5c1d0bf344d4b5aecc387061859d6fab79593bbfe -->

```csharp
public override sealed System.Type Inno.Assets.Pipeline.AssetImporter<TAsset>.targetAssetType { get; }
```

Gets the runtime asset type accepted by this importer implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L106).
