---
title: "MaDataConverterConfig"
description: "Reference for MaDataConverterConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.08e241a8145cc315
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDataConverterConfig`

This reference describes `MaDataConverterConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AllowDynamicSampleRate`](#api-1db6445c15ae0651) | Field |
| [`CalculateLfeFromSpatialChannels`](#api-e8e0c1992029bf07) | Field |
| [`ChannelMixMode`](#api-61bd16077792bf85) | Field |
| [`ChannelsIn`](#api-1f3f55a4334e2812) | Field |
| [`ChannelsOut`](#api-685074a47b4dfebb) | Field |
| [`DitherMode`](#api-08097d70c6995428) | Field |
| [`FormatIn`](#api-af95cf982ece2bac) | Field |
| [`FormatOut`](#api-4d2ee36a9abb9df0) | Field |
| [`PChannelMapIn`](#api-e019e8f75bee9617) | Field |
| [`PChannelMapOut`](#api-23238f7334ece5f2) | Field |
| [`PpChannelWeights`](#api-ce38fdfa1a4161b9) | Field |
| [`Resampling`](#api-88d6710db1129518) | Field |
| [`SampleRateIn`](#api-0eef20b9773c0eee) | Field |
| [`SampleRateOut`](#api-cc4c179d135155d2) | Field |

## Type declaration

<a id="api-08e241a8145cc315"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDataConverterConfig c3db6b64018c98a131ee86abb0f6c5dcadccc39e1a1c40be7378d69dc1d79aff -->

```csharp
public struct Inno.Native.MiniAudio.MaDataConverterConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18295).

## `AllowDynamicSampleRate`

<a id="api-1db6445c15ae0651"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.AllowDynamicSampleRate d1cd103773225528618398f6321a752826cec9022414b5d1cd3fd3c17ace340c -->

```csharp
public uint Inno.Native.MiniAudio.MaDataConverterConfig.AllowDynamicSampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18322).

## `CalculateLfeFromSpatialChannels`

<a id="api-e8e0c1992029bf07"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.CalculateLfeFromSpatialChannels c7fb55b0f1fc04463c06856faa3d2490d44025bb79a1f1db17e49d265749c125 -->

```csharp
public uint Inno.Native.MiniAudio.MaDataConverterConfig.CalculateLfeFromSpatialChannels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18318).

## `ChannelMixMode`

<a id="api-61bd16077792bf85"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.ChannelMixMode d12f388cff96a37011820e90c28cb6f57d2075162f5d8eb1e305aa280cc3f0ac -->

```csharp
public Inno.Native.MiniAudio.MaChannelMixMode Inno.Native.MiniAudio.MaDataConverterConfig.ChannelMixMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18316).

## `ChannelsIn`

<a id="api-1f3f55a4334e2812"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.ChannelsIn f777d9756118519dc6ed1d5545113b760cbf901a2e2a3c12e16082ecc74d962a -->

```csharp
public uint Inno.Native.MiniAudio.MaDataConverterConfig.ChannelsIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18302).

## `ChannelsOut`

<a id="api-685074a47b4dfebb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.ChannelsOut d5678bbbe96939f2a2e2dd97da0837f05ac8325ee7f75c60c04e5844630ffa31 -->

```csharp
public uint Inno.Native.MiniAudio.MaDataConverterConfig.ChannelsOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18304).

## `DitherMode`

<a id="api-08097d70c6995428"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.DitherMode a25e50403d656d308dee90efac0010d223a0ba1572e9e0fc243d272f03faa1ea -->

```csharp
public Inno.Native.MiniAudio.MaDitherMode Inno.Native.MiniAudio.MaDataConverterConfig.DitherMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18314).

## `FormatIn`

<a id="api-af95cf982ece2bac"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.FormatIn 64ae10d823fe816d1cf0e13900772887d15c609a9ebe69e1683b7f9bdf3e2b70 -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaDataConverterConfig.FormatIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18298).

## `FormatOut`

<a id="api-4d2ee36a9abb9df0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.FormatOut f193d9896df56323ca866e7c8a097b09c7cdb87b68d1f7f97ae18395a010939c -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaDataConverterConfig.FormatOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18300).

## `PChannelMapIn`

<a id="api-e019e8f75bee9617"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.PChannelMapIn bcb6e2785a27ebace14f178852220497bc445980f6aaa2562c08cf45da15f2c7 -->

```csharp
public byte* Inno.Native.MiniAudio.MaDataConverterConfig.PChannelMapIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18310).

## `PChannelMapOut`

<a id="api-23238f7334ece5f2"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.PChannelMapOut bb52643041c2b3eb15b8bffdbfac0cbceeb874edb8a6ab796db818848f222f87 -->

```csharp
public byte* Inno.Native.MiniAudio.MaDataConverterConfig.PChannelMapOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18312).

## `PpChannelWeights`

<a id="api-ce38fdfa1a4161b9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.PpChannelWeights 1130bdbb8a4ad05316133ffa5f44a8029ce668aaf029736dd857de64b31e7c03 -->

```csharp
public float** Inno.Native.MiniAudio.MaDataConverterConfig.PpChannelWeights
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18320).

## `Resampling`

<a id="api-88d6710db1129518"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.Resampling 215a1f8dd352b0b0160aa807663cb12aa0e781080a0736c247763737a62ad74a -->

```csharp
public Inno.Native.MiniAudio.MaResamplerConfig Inno.Native.MiniAudio.MaDataConverterConfig.Resampling
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18324).

## `SampleRateIn`

<a id="api-0eef20b9773c0eee"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.SampleRateIn 6b19e0817a5dfe4c67dfd9b39bb3c41bb7bf479123a87c1d170c5db543aaf89e -->

```csharp
public uint Inno.Native.MiniAudio.MaDataConverterConfig.SampleRateIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18306).

## `SampleRateOut`

<a id="api-cc4c179d135155d2"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverterConfig.SampleRateOut b57f94e05a17125ab11fc3061f277bcffb770c21943666740f4d0aa9eb2ee3e5 -->

```csharp
public uint Inno.Native.MiniAudio.MaDataConverterConfig.SampleRateOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18308).
