---
title: "NativeAssetSourceSerialization"
description: "Reference for NativeAssetSourceSerialization in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.96c8c9dc5b950a71
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `NativeAssetSourceSerialization`

This reference describes `NativeAssetSourceSerialization` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```Export``1```](#api-27f47e35e39b0463) | Method |
| [```Import``1```](#api-14886a35811cfda3) | Method |

## Type declaration

<a id="api-96c8c9dc5b950a71"></a>
<!-- api: T:Inno.Assets.Pipeline.NativeAssetSourceSerialization 4e0b364f06a25c3bcdfa816459a34fef8b5e80aa5a40f5b3af8a8df1f44344f4 -->

```csharp
public static class Inno.Assets.Pipeline.NativeAssetSourceSerialization
```

Imports and exports editable asset source state through the common native serializer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Serialization/NativeAssetSourceSerialization.cs#L13).

## ```Export``1```

<a id="api-27f47e35e39b0463"></a>
<!-- api: M:Inno.Assets.Pipeline.NativeAssetSourceSerialization.Export``1(``0,Inno.Assets.Pipeline.AssetSerializationServices) 073b8b71e38d51551ae78a55cb473c8e310c3b6dc30d5c6412555f4cf616bdb8 -->

```csharp
public static byte[] Inno.Assets.Pipeline.NativeAssetSourceSerialization.Export<TAsset>(TAsset asset, Inno.Assets.Pipeline.AssetSerializationServices services) where TAsset : Inno.Assets.AssetObject
```

Serializes one asset's editable properties and direct asset dependencies.

**Type parameter `TAsset`:** Concrete asset source type.

**Parameter `asset`:** Unsaved or loaded asset whose editable state should be captured.

**Parameter `services`:** The generation-bound serialization services supplied by the export context.

**Returns:** Deterministic native source bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Serialization/NativeAssetSourceSerialization.cs#L30).

## ```Import``1```

<a id="api-14886a35811cfda3"></a>
<!-- api: M:Inno.Assets.Pipeline.NativeAssetSourceSerialization.Import``1(System.ReadOnlySpan{System.Byte},Inno.Assets.Pipeline.AssetSerializationServices,System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency}@) 9341a5060186200cdcf604ba1262a7f939f861a8165adf37182013545819ec53 -->

```csharp
public static TAsset Inno.Assets.Pipeline.NativeAssetSourceSerialization.Import<TAsset>(System.ReadOnlySpan<byte> bytes, Inno.Assets.Pipeline.AssetSerializationServices services, out System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetDependency> dependencies) where TAsset : Inno.Assets.AssetObject
```

Restores one concrete asset and its declared direct dependencies.

**Type parameter `TAsset`:** Concrete asset source type.

**Parameter `bytes`:** Native source bytes.

**Parameter `dependencies`:** Receives persistent dependencies discovered during export.

**Parameter `services`:** The generation-bound serialization and reference services supplied by the import context.

**Returns:** A detached asset ready for an import transaction.

**Throws `System.InvalidOperationException`:** Thrown when the source type identity is incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Serialization/NativeAssetSourceSerialization.cs#L73).
