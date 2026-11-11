---
title: "AssetSerializationContext"
description: "Reference for AssetSerializationContext in Inno.Assets."
uid: api.inno.assets.c46383f931d8102f
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetSerializationContext`

This reference describes `AssetSerializationContext` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-e61ec1420d1df84a) | Method |

## Type declaration

<a id="api-c46383f931d8102f"></a>
<!-- api: T:Inno.Assets.AssetSerializationContext a9b15a881b4365e01385653fa74dfd25ae1eda8eb458e8a9235cd417b4f051ab -->

```csharp
public static class Inno.Assets.AssetSerializationContext
```

Creates complete asset-aware converter contexts from an owner-provided reference generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetSerializationContext.cs#L10).

## `Create`

<a id="api-e61ec1420d1df84a"></a>
<!-- api: M:Inno.Assets.AssetSerializationContext.Create(Inno.Assets.IAssetReferenceResolver,Inno.Assets.AssetDependencyCollection) 9165563fd5737b3733eb88ce87f21166781b5af8d94822f1f7c5378ea065c72d -->

```csharp
public static Inno.Core.Serialization.SerializationContext Inno.Assets.AssetSerializationContext.Create(Inno.Assets.IAssetReferenceResolver references, Inno.Assets.AssetDependencyCollection? dependencies = null)
```

Creates a context containing the required asset resolver and an optional dependency collector.

**Parameter `references`:** The authoritative asset reference resolver for the operation's complete generation.

**Parameter `dependencies`:** Optional collector that records direct asset dependencies during serialization.

**Returns:** A complete immutable asset-aware serialization context.

**Throws `System.ArgumentNullException`:** Thrown when `references` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetSerializationContext.cs#L27).
