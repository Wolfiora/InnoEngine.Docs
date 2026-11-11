---
title: "FontImporter"
description: "Reference for FontImporter in Inno.Text.Assets."
uid: api.inno.text.assets.bb62dea43dbbbe91
kind: api
owners:
  - Inno.Text.Assets
apiSurface: source-clr
contracts:
  - project.inno-text-assets#import-contract
---
# `FontImporter`

This reference describes `FontImporter` in `Inno.Text.Assets`. Read the [shared contract](../../projects/inno-text-assets.md#import-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.Pipeline.AssetImporter<Inno.Text.FontAsset>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d55e485df986749e) | Method |
| [`ImportAsync`](#api-0ab65585af4f0788) | Method |
| [`supportedExtensions`](#api-91b4822cbda82ce0) | Property |

## Type declaration

<a id="api-bb62dea43dbbbe91"></a>
<!-- api: T:Inno.Text.Assets.FontImporter 550c947138e75fe96f9ae533890adac3ceca05a30e333f61ff4656f17504c287 -->

```csharp
public sealed class Inno.Text.Assets.FontImporter : Inno.Assets.Pipeline.AssetImporter<Inno.Text.FontAsset>
```

Imports OpenType fonts into compact metadata and immutable encoded font artifacts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Assets/FontImporter.cs#L16).

## `#ctor`

<a id="api-d55e485df986749e"></a>
<!-- api: M:Inno.Text.Assets.FontImporter.#ctor 648b45149e24f73a4ffe3195cf20190ae1fc414f4c7d8a6e6918b54a3eeda827 -->

```csharp
public Inno.Text.Assets.FontImporter.FontImporter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Assets/FontImporter.cs#L16).

## `ImportAsync`

<a id="api-0ab65585af4f0788"></a>
<!-- api: M:Inno.Text.Assets.FontImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Text.FontAsset},System.Threading.CancellationToken) 758ccdd86e98e2cc3241988968ac8daad50999e8166b81598cfb75a9f7fc1839 -->

```csharp
protected override System.Threading.Tasks.ValueTask Inno.Text.Assets.FontImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext context, Inno.Assets.Pipeline.AssetImportWriter<Inno.Text.FontAsset> output, System.Threading.CancellationToken cancellationToken)
```

Validates the source container and emits runtime metadata plus encoded font data.

**Parameter `context`:** The source import context.

**Parameter `output`:** The candidate artifact writer.

**Parameter `cancellationToken`:** Cancellation observed by artifact writes.

**Returns:** An operation that completes after both artifacts are staged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Assets/FontImporter.cs#L38).

## `supportedExtensions`

<a id="api-91b4822cbda82ce0"></a>
<!-- api: P:Inno.Text.Assets.FontImporter.supportedExtensions c79e4558d0f8b06a7b17d8813e97acddafcb30cb2f7c21301f994ecc3a729f8d -->

```csharp
public override System.Collections.Generic.IReadOnlyList<string> Inno.Text.Assets.FontImporter.supportedExtensions { get; }
```

Gets the supported OpenType source extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Assets/FontImporter.cs#L21).
