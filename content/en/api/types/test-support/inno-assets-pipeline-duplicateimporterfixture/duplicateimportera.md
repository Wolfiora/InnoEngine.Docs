---
title: "DuplicateImporterA"
description: "Reference for DuplicateImporterA in Inno.Assets.Pipeline.DuplicateImporterFixture."
uid: api.inno.assets.pipeline.duplicateimporterfixture.a75767a489a391a6
kind: api
owners:
  - Inno.Assets.Pipeline.DuplicateImporterFixture
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline-duplicateimporterfixture
---
# `DuplicateImporterA`

This reference describes `DuplicateImporterA` in `Inno.Assets.Pipeline.DuplicateImporterFixture`. Read the [shared contract](../../../../contributing/testing/support/inno-assets-pipeline-duplicateimporterfixture.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.Pipeline.AssetImporter<Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterAsset>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-362b43a637776a1f) | Method |
| [`ImportAsync`](#api-d575e9763d940862) | Method |
| [`supportedExtensions`](#api-88461df44779c26a) | Property |

## Type declaration

<a id="api-a75767a489a391a6"></a>
<!-- api: T:Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterA 05f3fe076c8e4bf2bd012da83360d2cec7c3614c357b0021591f3cee9974f154 -->

```csharp
public sealed class Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterA : Inno.Assets.Pipeline.AssetImporter<Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterAsset>
```

Deliberately shares its importer identity with `Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterB` to test candidate rejection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/assets/fixtures/Inno.Assets.Pipeline.DuplicateImporterFixture/DuplicateImporters.cs#L21).

## `#ctor`

<a id="api-362b43a637776a1f"></a>
<!-- api: M:Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterA.#ctor 127d132f1d1f6394537f91e7ccabc487339ea4a2e9c92bf0c7e62db99a88ce6b -->

```csharp
public Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterA.DuplicateImporterA()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/assets/fixtures/Inno.Assets.Pipeline.DuplicateImporterFixture/DuplicateImporters.cs#L21).

## `ImportAsync`

<a id="api-d575e9763d940862"></a>
<!-- api: M:Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterA.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterAsset},System.Threading.CancellationToken) 10c9fa3779605279d89bfcb5977b530650557bb6ad3cd64e6dc9738060a570b7 -->

```csharp
protected override System.Threading.Tasks.ValueTask Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterA.ImportAsync(Inno.Assets.Pipeline.AssetImportContext context, Inno.Assets.Pipeline.AssetImportWriter<Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterAsset> output, System.Threading.CancellationToken cancellationToken)
```

Supplies a fixture asset and writes the source bytes as its runtime artifact through the borrowed writer.

**Parameter `context`:** The current source snapshot owned by the import operation.

**Parameter `output`:** The borrowed writer receiving the candidate asset and artifact.

**Parameter `cancellationToken`:** Cancels the artifact write without publishing a complete candidate.

**Returns:** The artifact write operation, preserving its failure or cancellation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/assets/fixtures/Inno.Assets.Pipeline.DuplicateImporterFixture/DuplicateImporters.cs#L35).

## `supportedExtensions`

<a id="api-88461df44779c26a"></a>
<!-- api: P:Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterA.supportedExtensions 83b34452fb500846beacac5bf173163dd5dba0ac8ed1381ae51664383d008031 -->

```csharp
public override System.Collections.Generic.IReadOnlyList<string> Inno.Assets.Pipeline.DuplicateImporterFixture.DuplicateImporterA.supportedExtensions { get; }
```

Gets this fixture's extension; distinct extensions do not make duplicate importer identities valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/assets/fixtures/Inno.Assets.Pipeline.DuplicateImporterFixture/DuplicateImporters.cs#L26).
