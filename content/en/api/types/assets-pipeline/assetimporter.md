---
title: "AssetImporter"
description: "Reference for AssetImporter in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.247ab0b142aca207
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetImporter`

This reference describes `AssetImporter` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-510a7e9077329f54) | Method |
| [`CreateImportSettings`](#api-470663acc5ba88e9) | Method |
| [`deploymentScope`](#api-bc1eecd5ee8271dc) | Property |
| [`importerId`](#api-2fe2e08964fac787) | Property |
| [`supportedExtensions`](#api-7b42efc4cd990522) | Property |
| [`targetAssetType`](#api-e53298994ff0b342) | Property |

## Type declaration

<a id="api-247ab0b142aca207"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetImporter 7369cff44353cee2325071055cc125eb12202948c657b0a5560b6449d2460b2e -->

```csharp
public abstract class Inno.Assets.Pipeline.AssetImporter
```

Defines metadata shared by automatically discovered asset importers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L38).

## `#ctor`

<a id="api-510a7e9077329f54"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImporter.#ctor 4ac9a05b558bc3678ed308c70d78d67e3d590ee87279f3ad221cac13f989ea69 -->

```csharp
protected Inno.Assets.Pipeline.AssetImporter.AssetImporter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L38).

## `CreateImportSettings`

<a id="api-470663acc5ba88e9"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImporter.CreateImportSettings dc0feb90d66f1e31460acb169d2fa8b8745b375ea20d984f586c429b943d25fb -->

```csharp
public virtual Inno.Core.Serialization.ISerializable? Inno.Assets.Pipeline.AssetImporter.CreateImportSettings()
```

Creates a detached settings value for this importer in the current extension generation.

**Returns:** A fresh serializable value with a registered stable type identity, or null when this importer has no settings.
Defaults must be deterministic; implementations must not retain the returned instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L71).

## `deploymentScope`

<a id="api-bc1eecd5ee8271dc"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImporter.deploymentScope f730448a83ec0a4cb9058872d6facef8f711383a1773f32d73aaab1c04f6adc2 -->

```csharp
public virtual Inno.Assets.Pipeline.AssetDeploymentScope Inno.Assets.Pipeline.AssetImporter.deploymentScope { get; }
```

Gets whether imported assets are deployed or retained only for authoring workflows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L52).

## `importerId`

<a id="api-2fe2e08964fac787"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImporter.importerId b1a072dac0310298f11293ccae3887eb907f4d36f7f253ff808e8e5d8c74c535 -->

```csharp
public string Inno.Assets.Pipeline.AssetImporter.importerId { get; }
```

Gets the stable importer implementation identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L45).

## `supportedExtensions`

<a id="api-7b42efc4cd990522"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImporter.supportedExtensions 2a6e45b90b1b9c59578bf581b30984f202e85daccaeae49341a76248c753b3aa -->

```csharp
public abstract System.Collections.Generic.IReadOnlyList<string> Inno.Assets.Pipeline.AssetImporter.supportedExtensions { get; }
```

Gets the normalized source extensions accepted by this importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L62).

## `targetAssetType`

<a id="api-e53298994ff0b342"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImporter.targetAssetType 42e14fecd083f9ba22427f16b65f5680dfafc0919d3a6fba15de4f7e4184abb6 -->

```csharp
public abstract System.Type Inno.Assets.Pipeline.AssetImporter.targetAssetType { get; }
```

Gets the concrete asset type produced by this importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L57).
