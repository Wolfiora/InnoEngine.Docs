---
title: "MaResamplerConfig"
description: "Reference for MaResamplerConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.c6d7d405d974d54a
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaResamplerConfig`

This reference describes `MaResamplerConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Algorithm`](#api-daece72cecb45e94) | Field |
| [`Channels`](#api-7a77c2b8cee539d9) | Field |
| [`Format`](#api-a4ef9b4d3e195967) | Field |
| [`Linear`](#api-e81b4837edd8ed0c) | Field |
| [`PBackendUserData`](#api-7ca8a97aa600b141) | Field |
| [`PBackendVTable`](#api-8bfb01999a7e7485) | Field |
| [`SampleRateIn`](#api-1728a261fb3723d9) | Field |
| [`SampleRateOut`](#api-bd5bc023a13e320a) | Field |

## Type declaration

<a id="api-c6d7d405d974d54a"></a>
<!-- api: T:Inno.Native.MiniAudio.MaResamplerConfig 87d96d62e1638baf4992cb432f52919a14a146582f69e4546b3b336690fff2ac -->

```csharp
public struct Inno.Native.MiniAudio.MaResamplerConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23278).

## `Algorithm`

<a id="api-daece72cecb45e94"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplerConfig.Algorithm ce94c5721c2752a88de86a1def6fc8578f8e8c609edcd05d96ee260bddf222cf -->

```csharp
public Inno.Native.MiniAudio.MaResampleAlgorithm Inno.Native.MiniAudio.MaResamplerConfig.Algorithm
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23289).

## `Channels`

<a id="api-7a77c2b8cee539d9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplerConfig.Channels 49974ed88de672ca9041144c9ddba79394fa39fb653061725738d2987825b873 -->

```csharp
public uint Inno.Native.MiniAudio.MaResamplerConfig.Channels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23283).

## `Format`

<a id="api-a4ef9b4d3e195967"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplerConfig.Format b407fabe5585e7605d1b61ce1b6243abf39964a23eb05138663e63b89e1b1c96 -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaResamplerConfig.Format
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23281).

## `Linear`

<a id="api-e81b4837edd8ed0c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplerConfig.Linear 9a9423c7575dd27b1b1b65c20c9cffd37f583d06d677339887fca336fb235f74 -->

```csharp
public Inno.Native.MiniAudio.MaResamplerConfigAnonymousStruct816361d296299c5c Inno.Native.MiniAudio.MaResamplerConfig.Linear
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23295).

## `PBackendUserData`

<a id="api-7ca8a97aa600b141"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplerConfig.PBackendUserData 39100a24782255ae242531a5cf1811df31929097e62d63001878ffe2652c08a5 -->

```csharp
public void* Inno.Native.MiniAudio.MaResamplerConfig.PBackendUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23293).

## `PBackendVTable`

<a id="api-8bfb01999a7e7485"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplerConfig.PBackendVTable a2544102800a92e8a611c85dd3abb7348faf3f25335dfa66bf483cf100a2eaa3 -->

```csharp
public Inno.Native.MiniAudio.MaResamplingBackendVtable* Inno.Native.MiniAudio.MaResamplerConfig.PBackendVTable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23291).

## `SampleRateIn`

<a id="api-1728a261fb3723d9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplerConfig.SampleRateIn 9296fdc902dde213acd6edb3a70db8bb07bef6ade101b9e45b6e35f621aad592 -->

```csharp
public uint Inno.Native.MiniAudio.MaResamplerConfig.SampleRateIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23285).

## `SampleRateOut`

<a id="api-bd5bc023a13e320a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplerConfig.SampleRateOut c23fe6ea9a9fde00b089ecd0388b935975a9b06d831072935123401690c25884 -->

```csharp
public uint Inno.Native.MiniAudio.MaResamplerConfig.SampleRateOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23287).
