---
title: "AssetPipelineMode"
description: "Reference for AssetPipelineMode in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.0e10f2707731eac1
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetPipelineMode`

This reference describes `AssetPipelineMode` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Authoring`](#api-acbc58906e86f4b3) | Field |
| [`RuntimeArtifacts`](#api-4a7e0e4845a821e9) | Field |

## Type declaration

<a id="api-0e10f2707731eac1"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetPipelineMode c5b2554a6924c49fca51c612098bf20286e096a8d7003e66859e4a131cf8557c -->

```csharp
public enum Inno.Assets.Pipeline.AssetPipelineMode : int
```

Defines which side of the asset pipeline an `Inno.Assets.Pipeline.AssetPipeline` instance serves.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineMode.cs#L6).

## `Authoring`

<a id="api-acbc58906e86f4b3"></a>
<!-- api: F:Inno.Assets.Pipeline.AssetPipelineMode.Authoring 7b302efd102386ccccdbb4567b9fdec3c0dc5d1cc2adce3dacb7778ffecf5f31 -->

```csharp
Inno.Assets.Pipeline.AssetPipelineMode.Authoring = 0
```

Reconciles writable source files and produces immutable artifacts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineMode.cs#L11).

## `RuntimeArtifacts`

<a id="api-4a7e0e4845a821e9"></a>
<!-- api: F:Inno.Assets.Pipeline.AssetPipelineMode.RuntimeArtifacts b8164c7a1ce121c2fcc33f68a71bd015b02fa8e4ecfb47bee95186d1ab04a67c -->

```csharp
Inno.Assets.Pipeline.AssetPipelineMode.RuntimeArtifacts = 1
```

Loads a read-only deployed catalog and its content-addressed artifacts without source files.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineMode.cs#L16).
