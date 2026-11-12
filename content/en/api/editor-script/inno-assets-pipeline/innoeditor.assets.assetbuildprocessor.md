---
title: "AssetBuildProcessor"
description: "Reference for AssetBuildProcessor in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.23f936c0ccd17d42
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `AssetBuildProcessor`

This reference describes `AssetBuildProcessor` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d667507c60de9e26) | Method |
| [`definitionType`](#api-c8bad5ed6f216d6a) | Property |
| [`processorId`](#api-a5ceabc64a55cfff) | Property |

## Type declaration

<a id="api-23f936c0ccd17d42"></a>
<!-- api: T:InnoEditor.Assets.AssetBuildProcessor 6dcfa559f8607cf44bdd4abdb016bc923808c1e5511dbaf338dfdf9c781ce5b7 -->

```csharp
public abstract class InnoEditor.Assets.AssetBuildProcessor
```

Defines an automatically discovered aggregate asset build processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L37).

## `#ctor`

<a id="api-d667507c60de9e26"></a>
<!-- api: M:InnoEditor.Assets.AssetBuildProcessor.#ctor 62163b1dd05d01a160c837f7593d2f840550d962a1e56cd6af86ac4270867dfa -->

```csharp
protected InnoEditor.Assets.AssetBuildProcessor.AssetBuildProcessor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L37).

## `definitionType`

<a id="api-c8bad5ed6f216d6a"></a>
<!-- api: P:InnoEditor.Assets.AssetBuildProcessor.definitionType 92c58ea02d4cf5c71a26a10bd287fd5d67ef43034c71e276bec7ae25067481b3 -->

```csharp
public abstract System.Type InnoEditor.Assets.AssetBuildProcessor.definitionType { get; }
```

Gets the definition type accepted by this processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L51).

## `processorId`

<a id="api-a5ceabc64a55cfff"></a>
<!-- api: P:InnoEditor.Assets.AssetBuildProcessor.processorId 22d1ecf66a1b59351f4c0d839bdac3d49c11c9a838b8028795c619c77ea0d2eb -->

```csharp
public string InnoEditor.Assets.AssetBuildProcessor.processorId { get; }
```

Gets the stable processor identifier used by build cache keys.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L44).
