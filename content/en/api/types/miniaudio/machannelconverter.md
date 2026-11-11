---
title: "MaChannelConverter"
description: "Reference for MaChannelConverter in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.f230c0381d751199
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaChannelConverter`

This reference describes `MaChannelConverter` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`ChannelsIn`](#api-e2cba1118021b816) | Field |
| [`ChannelsOut`](#api-403167225e6c400a) | Field |
| [`ConversionPath`](#api-053d9c87782fc877) | Field |
| [`Format`](#api-3897f31ce2c91ac8) | Field |
| [`MixingMode`](#api-181b3fe145a33673) | Field |
| [`OwnsHeap`](#api-5d32e0539f5eed32) | Field |
| [`PChannelMapIn`](#api-304cc3054e1d1319) | Field |
| [`PChannelMapOut`](#api-e72b3dd4f47d27ec) | Field |
| [`PHeap`](#api-db6fc4931e6490cd) | Field |
| [`PShuffleTable`](#api-1e72a5d133444a90) | Field |
| [`Weights`](#api-e50acfa353b8964e) | Field |

## Type declaration

<a id="api-f230c0381d751199"></a>
<!-- api: T:Inno.Native.MiniAudio.MaChannelConverter 55db3ace338f9458ab3e21e4b9a3c2d25e5092075b64a3a5b340f76f6202295f -->

```csharp
public struct Inno.Native.MiniAudio.MaChannelConverter
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17426).

## `ChannelsIn`

<a id="api-e2cba1118021b816"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverter.ChannelsIn 82872fb29be4de352199fd7082a86d708a5559affdb1e8ab44125e3a913436c7 -->

```csharp
public uint Inno.Native.MiniAudio.MaChannelConverter.ChannelsIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17431).

## `ChannelsOut`

<a id="api-403167225e6c400a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverter.ChannelsOut d7d2ffdc4a4de62748748d58e1ee9b1ea90c9a72168fd99a8e7b923154673619 -->

```csharp
public uint Inno.Native.MiniAudio.MaChannelConverter.ChannelsOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17433).

## `ConversionPath`

<a id="api-053d9c87782fc877"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverter.ConversionPath ae20a940d2f340ba71c54cfb6e75fff4f70d31da107f5070d52ea52d438e043d -->

```csharp
public Inno.Native.MiniAudio.MaChannelConversionPath Inno.Native.MiniAudio.MaChannelConverter.ConversionPath
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17437).

## `Format`

<a id="api-3897f31ce2c91ac8"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverter.Format 73021555e88b2fda7e96c34157813f1b332eda9198b4f694c3d6bd843d0addbc -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaChannelConverter.Format
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17429).

## `MixingMode`

<a id="api-181b3fe145a33673"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverter.MixingMode 2b3a8674eeaa83b17c34b937027d318b07c5ec8bba8b4e919cc37d2b4738c63c -->

```csharp
public Inno.Native.MiniAudio.MaChannelMixMode Inno.Native.MiniAudio.MaChannelConverter.MixingMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17435).

## `OwnsHeap`

<a id="api-5d32e0539f5eed32"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverter.OwnsHeap 19b67635d3372387c1b64bafae7b60f8e4472d23c1239701d970b6e6124b2756 -->

```csharp
public uint Inno.Native.MiniAudio.MaChannelConverter.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17449).

## `PChannelMapIn`

<a id="api-304cc3054e1d1319"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverter.PChannelMapIn 8c2993c2f82601804d88c24b2a959a011f842cfee160653b952eb172f9cd9d12 -->

```csharp
public byte* Inno.Native.MiniAudio.MaChannelConverter.PChannelMapIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17439).

## `PChannelMapOut`

<a id="api-e72b3dd4f47d27ec"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverter.PChannelMapOut f65a3ab0d9992da5412af307f3cd7286e308633b8b503d739d52bbb6a0335b36 -->

```csharp
public byte* Inno.Native.MiniAudio.MaChannelConverter.PChannelMapOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17441).

## `PHeap`

<a id="api-db6fc4931e6490cd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverter.PHeap b74e34908494713cbde41b2ac586e1dde557abfdae7dfc4622d2d7639457e1ed -->

```csharp
public void* Inno.Native.MiniAudio.MaChannelConverter.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17447).

## `PShuffleTable`

<a id="api-1e72a5d133444a90"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverter.PShuffleTable 8d9ea99c98d0e5caab5207086532b12226f2fccbc2c8fd3209534576f871b6db -->

```csharp
public byte* Inno.Native.MiniAudio.MaChannelConverter.PShuffleTable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17443).

## `Weights`

<a id="api-e50acfa353b8964e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverter.Weights 39353e82b003b89b55261f80d1ecdc6ea10ffef1bc3b2036d3fe3cf0e0e3b860 -->

```csharp
public Inno.Native.MiniAudio.MaChannelConverterAnonymousUnion7025e92e25c444e2 Inno.Native.MiniAudio.MaChannelConverter.Weights
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17445).
