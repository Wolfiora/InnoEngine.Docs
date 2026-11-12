---
title: "BinaryAsset"
description: "Reference for BinaryAsset in Inno.Assets."
uid: api.inno.assets.runtime-script.d87728a5a1044129
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `BinaryAsset`

This reference describes `BinaryAsset` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-54904fefd49f187d) | Method |
| [`#ctor`](#api-7ccf3d6523fe4d3a) | Method |
| [`byteLength`](#api-56a65d53aeca432f) | Property |

## Type declaration

<a id="api-d87728a5a1044129"></a>
<!-- api: T:InnoEngine.Assets.BinaryAsset 13d7ac993bd75f5154f138a9b6cced2b5aec4623c85ea72a17151350aed6712d -->

```csharp
public sealed class InnoEngine.Assets.BinaryAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Describes an imported opaque binary payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Types/BinaryAsset.cs#L11).

## `#ctor`

<a id="api-54904fefd49f187d"></a>
<!-- api: M:InnoEngine.Assets.BinaryAsset.#ctor 47dbb33be8ee771c952e6722c2c470b40d29c093e6d3785066251fa0996a27d5 -->

```csharp
public InnoEngine.Assets.BinaryAsset.BinaryAsset()
```

Creates an empty binary asset descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Types/BinaryAsset.cs#L22).

## `#ctor`

<a id="api-7ccf3d6523fe4d3a"></a>
<!-- api: M:InnoEngine.Assets.BinaryAsset.#ctor(System.Int32) b4088e592f4cc0947241210a967972ca24a1bc9dc22d547b700971443469f966 -->

```csharp
public InnoEngine.Assets.BinaryAsset.BinaryAsset(int byteLength)
```

Creates a binary asset descriptor with a byte length.

**Parameter `byteLength`:** Payload length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Types/BinaryAsset.cs#L32).

## `byteLength`

<a id="api-56a65d53aeca432f"></a>
<!-- api: P:InnoEngine.Assets.BinaryAsset.byteLength 56010b6c7898ad35074f31ec6e6a959eb55ea7046da28794dcfb3b034332580c -->

```csharp
public int InnoEngine.Assets.BinaryAsset.byteLength { get; }
```

Gets the imported payload length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Types/BinaryAsset.cs#L17).
