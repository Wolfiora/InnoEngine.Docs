---
title: "AssetImporter"
description: "Reference for AssetImporter in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.705b704638344ef9
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `AssetImporter`

This reference describes `AssetImporter` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-938ed193646699b5) | Method |
| [`CreateImportSettings`](#api-4982401f0bfaf83f) | Method |
| [`deploymentScope`](#api-e8c862aae21cd387) | Property |
| [`importerId`](#api-8942ef0e11b16c48) | Property |
| [`supportedExtensions`](#api-6710b7d73189c8a1) | Property |
| [`targetAssetType`](#api-c2fc4efdcfca5d18) | Property |

## Type declaration

<a id="api-705b704638344ef9"></a>
<!-- api: T:InnoEditor.Assets.AssetImporter 051a44a19d0458b6b649ff12ff887fa8a951c8112eafe367dd9f4db10a164f10 -->

```csharp
public abstract class InnoEditor.Assets.AssetImporter
```

Defines metadata shared by automatically discovered asset importers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L38).

## `#ctor`

<a id="api-938ed193646699b5"></a>
<!-- api: M:InnoEditor.Assets.AssetImporter.#ctor 3e0085a672da165177c3be37b8c171460a229cc836efd0aef3c84b9a47e686e5 -->

```csharp
protected InnoEditor.Assets.AssetImporter.AssetImporter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L38).

## `CreateImportSettings`

<a id="api-4982401f0bfaf83f"></a>
<!-- api: M:InnoEditor.Assets.AssetImporter.CreateImportSettings 21eb0b1a1050eb3ff317a952ac106e4caffe3467184574db838ff06ea5b34e71 -->

```csharp
public virtual InnoEngine.Serialization.ISerializable? InnoEditor.Assets.AssetImporter.CreateImportSettings()
```

Creates a detached settings value for this importer in the current extension generation.

**Returns:** A fresh serializable value with a registered stable type identity, or null when this importer has no settings.
Defaults must be deterministic; implementations must not retain the returned instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L71).

## `deploymentScope`

<a id="api-e8c862aae21cd387"></a>
<!-- api: P:InnoEditor.Assets.AssetImporter.deploymentScope 4f4720453214421674028e0e5b2e13782b7827a2b72f6c986b69910e1c5ae9c5 -->

```csharp
public virtual InnoEditor.Assets.AssetDeploymentScope InnoEditor.Assets.AssetImporter.deploymentScope { get; }
```

Gets whether imported assets are deployed or retained only for authoring workflows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L52).

## `importerId`

<a id="api-8942ef0e11b16c48"></a>
<!-- api: P:InnoEditor.Assets.AssetImporter.importerId d32043c111e6cb1c4246843ca0a62d5434e9950defd7e524a3ae5536d031cfa3 -->

```csharp
public string InnoEditor.Assets.AssetImporter.importerId { get; }
```

Gets the stable importer implementation identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L45).

## `supportedExtensions`

<a id="api-6710b7d73189c8a1"></a>
<!-- api: P:InnoEditor.Assets.AssetImporter.supportedExtensions cab5a5d285b42a594469810736332761ef936e2e7376dbaa0473eceedb7325d1 -->

```csharp
public abstract System.Collections.Generic.IReadOnlyList<string> InnoEditor.Assets.AssetImporter.supportedExtensions { get; }
```

Gets the normalized source extensions accepted by this importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L62).

## `targetAssetType`

<a id="api-c2fc4efdcfca5d18"></a>
<!-- api: P:InnoEditor.Assets.AssetImporter.targetAssetType 31a0beab648afa8064f80a61a7125051c0d23fda8cf0c4e0d730e1ad2703a7ee -->

```csharp
public abstract System.Type InnoEditor.Assets.AssetImporter.targetAssetType { get; }
```

Gets the concrete asset type produced by this importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L57).
