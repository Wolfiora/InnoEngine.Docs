---
title: "AssetExportContext"
description: "Reference for AssetExportContext in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.8170004457d8b4f0
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetExportContext`

This reference describes `AssetExportContext` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`artifacts`](#api-a12921bd7c7a729c) | Property |
| [`serialization`](#api-2a1c2cb8aa16057c) | Property |
| [`services`](#api-b8ef27d8f532ca8c) | Property |
| [`types`](#api-79623a641067fa5a) | Property |

## Type declaration

<a id="api-8170004457d8b4f0"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetExportContext f4ff324e8adc21e0b0ea74332f571a4bd526014779cdcda84b4615ec8c9b997d -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetExportContext
```

Provides generation-bound services for one editable asset source export.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetExportContext.cs#L12).

## `artifacts`

<a id="api-a12921bd7c7a729c"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetExportContext.artifacts 82132500d2875833a43a2d027b4f6d77e13e1a70e08f14118e8c06b16b7babc2 -->

```csharp
public Inno.Assets.IAssetArtifactLookup Inno.Assets.Pipeline.AssetExportContext.artifacts { get; }
```

Gets the owner-bound immutable outputs used to reconstruct editable sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetExportContext.cs#L46).

## `serialization`

<a id="api-2a1c2cb8aa16057c"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetExportContext.serialization 9e505754d467bccc742a1efdd80b69df711890cb9009c002bbf1ebb84f112495 -->

```csharp
public Inno.Core.Serialization.SerializationRegistry Inno.Assets.Pipeline.AssetExportContext.serialization { get; }
```

Gets the serialization registry bound to the active export generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetExportContext.cs#L35).

## `services`

<a id="api-b8ef27d8f532ca8c"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetExportContext.services ab5b1da6a6a948f6a71129354a8c654b51487ff589e22977001e53358729c830 -->

```csharp
public Inno.Assets.Pipeline.AssetSerializationServices Inno.Assets.Pipeline.AssetExportContext.services { get; }
```

Gets the narrow structured serialization API bound to this export generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetExportContext.cs#L40).

## `types`

<a id="api-79623a641067fa5a"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetExportContext.types b7f955e25ac26e5a488d78d2584e4246cdf15eb83b7462cef2ca7f3f716fb72a -->

```csharp
public Inno.Extensibility.Types.TypeCatalog Inno.Assets.Pipeline.AssetExportContext.types { get; }
```

Gets the type catalog bound to the active export generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetExportContext.cs#L29).
