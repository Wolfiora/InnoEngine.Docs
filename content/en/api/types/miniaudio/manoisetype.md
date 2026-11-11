---
title: "MaNoiseType"
description: "Reference for MaNoiseType in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.8282a4a80614552f
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaNoiseType`

This reference describes `MaNoiseType` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_noise_type_brownian`](#api-21356d632e662b55) | Field |
| [`ma_noise_type_pink`](#api-2c22235d23c34abb) | Field |
| [`ma_noise_type_white`](#api-1acf61410eb12b7a) | Field |

## Type declaration

<a id="api-8282a4a80614552f"></a>
<!-- api: T:Inno.Native.MiniAudio.MaNoiseType 64f0a5b08934b4ab43d99fb16d88ad9c6128aa7b98bd0fa981cba51e5ecc2fbb -->

```csharp
public enum Inno.Native.MiniAudio.MaNoiseType : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22631).

## `ma_noise_type_brownian`

<a id="api-21356d632e662b55"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNoiseType.ma_noise_type_brownian 1059b318383f59b2544ff32bafefe27e0c5300a5d721425dcc53da44b525fef9 -->

```csharp
Inno.Native.MiniAudio.MaNoiseType.ma_noise_type_brownian = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22635).

## `ma_noise_type_pink`

<a id="api-2c22235d23c34abb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNoiseType.ma_noise_type_pink 4d7054f88790af6b262c8378656bd23c211aa5fd21d06d332d711ac830825ba7 -->

```csharp
Inno.Native.MiniAudio.MaNoiseType.ma_noise_type_pink = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22634).

## `ma_noise_type_white`

<a id="api-1acf61410eb12b7a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNoiseType.ma_noise_type_white d854bd4302bbc34deec28075054582567f13f71f0f1d276f853942e89eae7ac8 -->

```csharp
Inno.Native.MiniAudio.MaNoiseType.ma_noise_type_white = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22633).
