---
title: "AnimationClipImporter"
description: "Reference for AnimationClipImporter in Inno.Animation.Assets."
uid: api.inno.animation.assets.9d0b70bb326ead8c
kind: api
owners:
  - Inno.Animation.Assets
apiSurface: source-clr
contracts:
  - project.inno-animation-assets#import-and-export-contract
---
# `AnimationClipImporter`

This reference describes `AnimationClipImporter` in `Inno.Animation.Assets`. Read the [shared contract](../../projects/inno-animation-assets.md#import-and-export-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.Pipeline.AssetImporter<Inno.Animation.AnimationClipAsset>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7cb3155a3548a354) | Method |
| [`ExportAsync`](#api-53b84da331b1c8fe) | Method |
| [`ImportAsync`](#api-a5b553643505c091) | Method |
| [`supportedExtensions`](#api-1f0090d19f77b631) | Property |

## Type declaration

<a id="api-9d0b70bb326ead8c"></a>
<!-- api: T:Inno.Animation.Assets.AnimationClipImporter 9cff76bc432be1b46030adf8673ba1240dae217679cd709746c5d78ee497a35a -->

```csharp
public sealed class Inno.Animation.Assets.AnimationClipImporter : Inno.Assets.Pipeline.AssetImporter<Inno.Animation.AnimationClipAsset>
```

Imports and exports structured `.ianim` animation clip sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Assets/AnimationClipImporter.cs#L15).

## `#ctor`

<a id="api-7cb3155a3548a354"></a>
<!-- api: M:Inno.Animation.Assets.AnimationClipImporter.#ctor 898c50a05c8b1b4851c1b58a0f7bb77a9691db616138c51babcfde1170ec02b8 -->

```csharp
public Inno.Animation.Assets.AnimationClipImporter.AnimationClipImporter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Assets/AnimationClipImporter.cs#L15).

## `ExportAsync`

<a id="api-53b84da331b1c8fe"></a>
<!-- api: M:Inno.Animation.Assets.AnimationClipImporter.ExportAsync(Inno.Assets.Pipeline.AssetExportContext,Inno.Animation.AnimationClipAsset,System.Threading.CancellationToken) 329e732f1be52f35299d5c40b166d30154f57a37d429b7b7d8e038b721495c13 -->

```csharp
protected override System.Threading.Tasks.ValueTask<System.ReadOnlyMemory<byte>?> Inno.Animation.Assets.AnimationClipImporter.ExportAsync(Inno.Assets.Pipeline.AssetExportContext context, Inno.Animation.AnimationClipAsset asset, System.Threading.CancellationToken cancellationToken)
```

Serializes one validated animation clip back to its writable source mount.

**Parameter `context`:** Generation-bound source serialization services.

**Parameter `asset`:** Animation clip to export.

**Parameter `cancellationToken`:** Cancellation token observed before source bytes are returned.

**Returns:** The complete current structured source bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Assets/AnimationClipImporter.cs#L76).

## `ImportAsync`

<a id="api-a5b553643505c091"></a>
<!-- api: M:Inno.Animation.Assets.AnimationClipImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Animation.AnimationClipAsset},System.Threading.CancellationToken) 8750fdda437a66889fe0930e26936b2b52caee203644281d6a8acc7b31ebe263 -->

```csharp
protected override System.Threading.Tasks.ValueTask Inno.Animation.Assets.AnimationClipImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext context, Inno.Assets.Pipeline.AssetImportWriter<Inno.Animation.AnimationClipAsset> output, System.Threading.CancellationToken cancellationToken)
```

Imports one validated structured animation clip.

**Parameter `context`:** Candidate source bytes and serialization generation.

**Parameter `output`:** Writer that receives the clip and immutable runtime artifact.

**Parameter `cancellationToken`:** Token that cancels artifact staging.

**Returns:** An operation that completes after the runtime artifact is staged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Assets/AnimationClipImporter.cs#L39).

## `supportedExtensions`

<a id="api-1f0090d19f77b631"></a>
<!-- api: P:Inno.Animation.Assets.AnimationClipImporter.supportedExtensions d34c591b16348c674864efadc6a51e47fbc4022437c6c623235de937d7931d50 -->

```csharp
public override System.Collections.Generic.IReadOnlyList<string> Inno.Animation.Assets.AnimationClipImporter.supportedExtensions { get; }
```

Gets the current structured animation source extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Assets/AnimationClipImporter.cs#L22).
