---
title: "MaResourceManagerDataSourceConfig"
description: "Reference for MaResourceManagerDataSourceConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.e4558adc613a34ff
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaResourceManagerDataSourceConfig`

This reference describes `MaResourceManagerDataSourceConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Flags`](#api-48a0ad21ecd5b446) | Field |
| [`InitialSeekPointInPcmFrames`](#api-9bfe6b180cf3c890) | Field |
| [`IsLooping`](#api-b73dfae716034fb0) | Field |
| [`LoopPointBegInPcmFrames`](#api-b981b92f16cb217c) | Field |
| [`LoopPointEndInPcmFrames`](#api-072f47f67ca641e5) | Field |
| [`PFilePath`](#api-f4c580d9edc197e8) | Field |
| [`PFilePathW`](#api-69b22ff42325afb1) | Field |
| [`PNotifications`](#api-ed8d2bb3fbbbe7bb) | Field |
| [`RangeBegInPcmFrames`](#api-8112cb4dd127b110) | Field |
| [`RangeEndInPcmFrames`](#api-828c4d9d3a390ed0) | Field |

## Type declaration

<a id="api-e4558adc613a34ff"></a>
<!-- api: T:Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig 3f8755892f13f2ac640c24785fed098b7ca8c783e450ec696c75b5cc9797d1f1 -->

```csharp
public struct Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23610).

## `Flags`

<a id="api-48a0ad21ecd5b446"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.Flags ab553fca846974348699357c1e6a9482e3b7877bc31e439d5247ddde15a23687 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.Flags
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23629).

## `InitialSeekPointInPcmFrames`

<a id="api-9bfe6b180cf3c890"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.InitialSeekPointInPcmFrames 769e30ca347ff5e8b03d92cb9048a979426c03c55013999d7a04363ef02cba64 -->

```csharp
public ulong Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.InitialSeekPointInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23619).

## `IsLooping`

<a id="api-b73dfae716034fb0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.IsLooping e1d363c43f2afeae71240252713dab2319eb78d595e66b06e54619418c124d79 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.IsLooping
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23631).

## `LoopPointBegInPcmFrames`

<a id="api-b981b92f16cb217c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.LoopPointBegInPcmFrames 02b9932ce4d1feb2b10e262e513d00873b1522f88778d035c48df2040c6f8fa8 -->

```csharp
public ulong Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.LoopPointBegInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23625).

## `LoopPointEndInPcmFrames`

<a id="api-072f47f67ca641e5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.LoopPointEndInPcmFrames b06fd58166e094e1bbcee1a7fa52b7fd405313dbc40cd586c0dbc0d7c87f0dab -->

```csharp
public ulong Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.LoopPointEndInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23627).

## `PFilePath`

<a id="api-f4c580d9edc197e8"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.PFilePath f909c25d2072264237b99d2176c9c63537f5b6c826217df1abd76c5df5f023fc -->

```csharp
public sbyte* Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.PFilePath
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23613).

## `PFilePathW`

<a id="api-69b22ff42325afb1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.PFilePathW 8efaa9c8ab7958ef2574514d2e7ee7b40726112dd9bf2735dc0712c4b8a2f89f -->

```csharp
public ushort* Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.PFilePathW
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23615).

## `PNotifications`

<a id="api-ed8d2bb3fbbbe7bb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.PNotifications 316cc21a9252b979473ac23185d63f3fea2c47b6d2daf4de3a87d819e402a13a -->

```csharp
public Inno.Native.MiniAudio.MaResourceManagerPipelineNotifications* Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.PNotifications
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23617).

## `RangeBegInPcmFrames`

<a id="api-8112cb4dd127b110"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.RangeBegInPcmFrames 188ddd7ddcfc0b82d9ddef85f208ebc504d968a62755875b308c09d41f7addde -->

```csharp
public ulong Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.RangeBegInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23621).

## `RangeEndInPcmFrames`

<a id="api-828c4d9d3a390ed0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.RangeEndInPcmFrames 029db31d05b200f68410d2319cff33274c781d6000c27a23cae057bc9f216464 -->

```csharp
public ulong Inno.Native.MiniAudio.MaResourceManagerDataSourceConfig.RangeEndInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23623).
