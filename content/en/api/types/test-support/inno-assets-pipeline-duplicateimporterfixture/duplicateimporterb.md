---
title: "DuplicateImporterB"
description: "Reference for DuplicateImporterB in Inno.Assets.Pipeline.DuplicateImporterFixture."
uid: api.inno.assets.pipeline.duplicateimporterfixture.13acab4962799900
kind: api
owners:
  - Inno.Assets.Pipeline.DuplicateImporterFixture
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline-duplicateimporterfixture
---
# `DuplicateImporterB`

This reference describes `DuplicateImporterB` in `Inno.Assets.Pipeline.DuplicateImporterFixture`. Read the [shared contract](../../../../contributing/testing/support/inno-assets-pipeline-duplicateimporterfixture.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.Pipeline.AssetImporter<Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterAsset>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0f4f377a22203550) | Method |
| [`ImportAsync`](#api-e2d0d3962baf51fa) | Method |
| [`supportedExtensions`](#api-9cee295618df23cd) | Property |

## Type declaration

<a id="api-13acab4962799900"></a>
<!-- api: T:Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterB 4017e4a99f4e8be41182bcc7c9040cc5dbdd230711af5e9780d1c6e4ed3cc9f0 -->

```csharp
public sealed class Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterB : Inno.Assets.Pipeline.AssetImporter<Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterAsset>
```

Deliberately conflicts with `Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterA` despite using a different file extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/assets/fixtures/Inno.Assets.Pipeline.DuplicateImporterFixture/DuplicateImporters.cs#L49).

## `#ctor`

<a id="api-0f4f377a22203550"></a>
<!-- api: M:Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterB.#ctor e07700b16d5756947748d39aecb4b6296fe244b7ccaac497c590c6e6005d8a60 -->

```csharp
public Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterB.DuplicateImporterB()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/assets/fixtures/Inno.Assets.Pipeline.DuplicateImporterFixture/DuplicateImporters.cs#L49).

## `ImportAsync`

<a id="api-e2d0d3962baf51fa"></a>
<!-- api: M:Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterB.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterAsset},System.Threading.CancellationToken) d3001f5504dfc2591adf18ca94842e417cbe62294e801e025835b35cab319d94 -->

```csharp
protected override System.Threading.Tasks.ValueTask Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterB.ImportAsync(Inno.Assets.Pipeline.AssetImportContext context, Inno.Assets.Pipeline.AssetImportWriter<Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterAsset> output, System.Threading.CancellationToken cancellationToken)
```

Supplies a fixture asset and writes the source bytes as its runtime artifact through the borrowed writer.

**Parameter `context`:** The current source snapshot owned by the import operation.

**Parameter `output`:** The borrowed writer receiving the candidate asset and artifact.

**Parameter `cancellationToken`:** Cancels the artifact write without publishing a complete candidate.

**Returns:** The artifact write operation, preserving its failure or cancellation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/assets/fixtures/Inno.Assets.Pipeline.DuplicateImporterFixture/DuplicateImporters.cs#L63).

## `supportedExtensions`

<a id="api-9cee295618df23cd"></a>
<!-- api: P:Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterB.supportedExtensions 663ce49d83c8d6ea31fcdf206966951926bfad5f2d4b9ccd0a4495ae8a4aae5d -->

```csharp
public override System.Collections.Generic.IReadOnlyList<string> Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterB.supportedExtensions { get; }
```

Gets the alternate extension used to prove identity conflicts are independent of extension selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/assets/fixtures/Inno.Assets.Pipeline.DuplicateImporterFixture/DuplicateImporters.cs#L54).
