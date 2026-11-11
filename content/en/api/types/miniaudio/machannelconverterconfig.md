---
title: "MaChannelConverterConfig"
description: "Reference for MaChannelConverterConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.e560e68248295965
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaChannelConverterConfig`

This reference describes `MaChannelConverterConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`CalculateLfeFromSpatialChannels`](#api-e5349bfbedd340b7) | Field |
| [`ChannelsIn`](#api-4fd9bac4d7dbb4c5) | Field |
| [`ChannelsOut`](#api-dc6f7c20c17e32a6) | Field |
| [`Format`](#api-aa83b1808418278a) | Field |
| [`MixingMode`](#api-f8a527725bcfe910) | Field |
| [`PChannelMapIn`](#api-d1433e65a57125d7) | Field |
| [`PChannelMapOut`](#api-b78a222875a06125) | Field |
| [`PpWeights`](#api-d52831761392d25a) | Field |

## Type declaration

<a id="api-e560e68248295965"></a>
<!-- api: T:Inno.Native.MiniAudio.MaChannelConverterConfig 8fadc5783387ea50b8391cd53067f34c75cfb327215baca94bc52e51838adbcd -->

```csharp
public struct Inno.Native.MiniAudio.MaChannelConverterConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17490).

## `CalculateLfeFromSpatialChannels`

<a id="api-e5349bfbedd340b7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverterConfig.CalculateLfeFromSpatialChannels 9d27071351cc2b5038989f4d0fe21a81eba423c4589e043e1d339a8471ac011f -->

```csharp
public uint Inno.Native.MiniAudio.MaChannelConverterConfig.CalculateLfeFromSpatialChannels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17505).

## `ChannelsIn`

<a id="api-4fd9bac4d7dbb4c5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverterConfig.ChannelsIn 5b7a2ca6bf5c96adc3b8ac3a4a2c4c266aed638d63aeeb5da4dd50928fd8b698 -->

```csharp
public uint Inno.Native.MiniAudio.MaChannelConverterConfig.ChannelsIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17495).

## `ChannelsOut`

<a id="api-dc6f7c20c17e32a6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverterConfig.ChannelsOut 2e5f5806139f61e6fb91f9d7f85dfd5f6e53a3355b26231b5d48e8d692c3f0c5 -->

```csharp
public uint Inno.Native.MiniAudio.MaChannelConverterConfig.ChannelsOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17497).

## `Format`

<a id="api-aa83b1808418278a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverterConfig.Format b4a952498fa582c711fe8a11fd299aa6e47809815e098c14e4b3279f1f04b6d7 -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaChannelConverterConfig.Format
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17493).

## `MixingMode`

<a id="api-f8a527725bcfe910"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverterConfig.MixingMode 88482c2d09642602d158e6f5b63ccfb15d2f0a85ff2803ac7c5b50fca4bdcb68 -->

```csharp
public Inno.Native.MiniAudio.MaChannelMixMode Inno.Native.MiniAudio.MaChannelConverterConfig.MixingMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17503).

## `PChannelMapIn`

<a id="api-d1433e65a57125d7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverterConfig.PChannelMapIn 2191d1bf4315a97278f6f4b6b07b47f59e496f256684f4baa8ff8a5dbd5ecf0a -->

```csharp
public byte* Inno.Native.MiniAudio.MaChannelConverterConfig.PChannelMapIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17499).

## `PChannelMapOut`

<a id="api-b78a222875a06125"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverterConfig.PChannelMapOut 076ab55238f05d66a5d7fcb3817f9e692d7222a2f9cd00fbbbd1127e0671db2a -->

```csharp
public byte* Inno.Native.MiniAudio.MaChannelConverterConfig.PChannelMapOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17501).

## `PpWeights`

<a id="api-d52831761392d25a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaChannelConverterConfig.PpWeights db755ab9d6b4656d9d2eb46c37ff3fcd1528ea56226909a43d7914849bc9bbe7 -->

```csharp
public float** Inno.Native.MiniAudio.MaChannelConverterConfig.PpWeights
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17507).
