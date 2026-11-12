---
title: "AssetImporter`1"
description: "Reference for AssetImporter`1 in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.b66d11c08f3600a5
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# ``AssetImporter`1``

This reference describes ``AssetImporter`1`` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Assets.AssetImporter`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-14ee30fdb7605cfa) | Method |
| [`ExportAsync`](#api-3882bf54c7525b82) | Method |
| [`ImportAsync`](#api-9b1495da383fb549) | Method |
| [`targetAssetType`](#api-370d143ad26f8aed) | Property |

## Type declaration

<a id="api-b66d11c08f3600a5"></a>
<!-- api: T:InnoEditor.Assets.AssetImporter`1 b03ad857968e5a6b817ca7c80207374bf6393b421c3287ef5a49598c809e441d -->

```csharp
public abstract class InnoEditor.Assets.AssetImporter<TAsset> where TAsset : InnoEngine.Assets.AssetObject : InnoEditor.Assets.AssetImporter
```

Provides the strongly typed implementation base for an asset importer.

**Type parameter `TAsset`:** The concrete imported asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L101).

## `#ctor`

<a id="api-14ee30fdb7605cfa"></a>
<!-- api: M:InnoEditor.Assets.AssetImporter`1.#ctor 3d05346b26142165244ee679d222a2e75aa036ded6dde2a0462c75664effe2a8 -->

```csharp
protected InnoEditor.Assets.AssetImporter<TAsset>.AssetImporter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L101).

## `ExportAsync`

<a id="api-3882bf54c7525b82"></a>
<!-- api: M:InnoEditor.Assets.AssetImporter`1.ExportAsync(InnoEditor.Assets.AssetExportContext,`0,System.Threading.CancellationToken) e4cebf66c70cebd8a442a9726086dd28ff3ca67a09ada2f2f3d84e3bb51512d2 -->

```csharp
protected virtual System.Threading.Tasks.ValueTask<System.ReadOnlyMemory<byte>?> InnoEditor.Assets.AssetImporter<TAsset>.ExportAsync(InnoEditor.Assets.AssetExportContext context, TAsset asset, System.Threading.CancellationToken cancellationToken)
```

Exports an asset back into source bytes.

**Parameter `context`:** The generation-bound source export services.

**Parameter `asset`:** The asset to export.

**Parameter `cancellationToken`:** Cancellation for the export.

**Returns:** The source bytes, or `null` when export is unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L144).

## `ImportAsync`

<a id="api-9b1495da383fb549"></a>
<!-- api: M:InnoEditor.Assets.AssetImporter`1.ImportAsync(InnoEditor.Assets.AssetImportContext,InnoEditor.Assets.AssetImportWriter{`0},System.Threading.CancellationToken) 2afa329ff662f64e66fcf007872c71ee0c21a78d3e699e54bc7151f97d5b2b34 -->

```csharp
protected abstract System.Threading.Tasks.ValueTask InnoEditor.Assets.AssetImporter<TAsset>.ImportAsync(InnoEditor.Assets.AssetImportContext context, InnoEditor.Assets.AssetImportWriter<TAsset> output, System.Threading.CancellationToken cancellationToken)
```

Imports one source into a managed asset and named artifact outputs.

**Parameter `context`:** The import transaction context.

**Parameter `output`:** The candidate output writer.

**Parameter `cancellationToken`:** Cancellation for the import.

**Returns:** An operation that completes when the candidate has been fully staged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L123).

## `targetAssetType`

<a id="api-370d143ad26f8aed"></a>
<!-- api: P:InnoEditor.Assets.AssetImporter`1.targetAssetType f7d13f016ebdbaba14a067e4bc4d7fc70ad32aaca3f3250f7893e89a7cef96cd -->

```csharp
public override sealed System.Type InnoEditor.Assets.AssetImporter<TAsset>.targetAssetType { get; }
```

Gets the runtime asset type accepted by this importer implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L106).
