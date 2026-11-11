---
title: "MaSoundConfig"
description: "Reference for MaSoundConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.69e44e1ca454f6f0
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaSoundConfig`

This reference describes `MaSoundConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`ChannelsIn`](#api-0d4513afc4b6d766) | Field |
| [`ChannelsOut`](#api-8ecd5c2a47015efb) | Field |
| [`EndCallback`](#api-7e415a42c4fddecd) | Field |
| [`Flags`](#api-967ea5e5865cd5ce) | Field |
| [`InitialAttachmentInputBusIndex`](#api-b6ffc8f4e6e4ae7a) | Field |
| [`InitialSeekPointInPcmFrames`](#api-0232ff91ccfe5230) | Field |
| [`InitNotifications`](#api-a737fe62308fe3b6) | Field |
| [`IsLooping`](#api-728bb873b9a5b071) | Field |
| [`LoopPointBegInPcmFrames`](#api-58c6eb93d24f3798) | Field |
| [`LoopPointEndInPcmFrames`](#api-be25fb476825ce2f) | Field |
| [`MonoExpansionMode`](#api-5aa71b910d7dbf0a) | Field |
| [`PDataSource`](#api-91e0c560f14f087e) | Field |
| [`PDoneFence`](#api-85865f40cf81473c) | Field |
| [`PEndCallbackUserData`](#api-1671c65897be2efc) | Field |
| [`PFilePath`](#api-9ebabb33e000ddf1) | Field |
| [`PFilePathW`](#api-6f9d147730c10f96) | Field |
| [`PInitialAttachment`](#api-95ee0bfb3b87c1da) | Field |
| [`PitchResampling`](#api-39f51c64ea8914d2) | Field |
| [`RangeBegInPcmFrames`](#api-d953433f1c420e69) | Field |
| [`RangeEndInPcmFrames`](#api-fbdd4c6626cc5b07) | Field |
| [`VolumeSmoothTimeInPcmFrames`](#api-8ea1ea58bfc72b2e) | Field |

## Type declaration

<a id="api-69e44e1ca454f6f0"></a>
<!-- api: T:Inno.Native.MiniAudio.MaSoundConfig 8efbc3d0ed4c4254ceb5d90cfb9669029f5c91405db18ee46eaf5a5b3679914b -->

```csharp
public struct Inno.Native.MiniAudio.MaSoundConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24148).

## `ChannelsIn`

<a id="api-0d4513afc4b6d766"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.ChannelsIn 4da5e6088fec25fbfd0260dfa31bf2bab561907efc68b3ba8e39a1229c7eef3f -->

```csharp
public uint Inno.Native.MiniAudio.MaSoundConfig.ChannelsIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24161).

## `ChannelsOut`

<a id="api-8ecd5c2a47015efb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.ChannelsOut 88358e176767ba1114cee7668f75d403781a94fa87658f9c1c1ed3386aa1bbc4 -->

```csharp
public uint Inno.Native.MiniAudio.MaSoundConfig.ChannelsOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24163).

## `EndCallback`

<a id="api-7e415a42c4fddecd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.EndCallback 0d06f95b528a4356187073b7d3489571ddfe9df9506a7607f1ededc8019b1976 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, Inno.Native.MiniAudio.MaSound*, void> Inno.Native.MiniAudio.MaSoundConfig.EndCallback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24181).

## `Flags`

<a id="api-967ea5e5865cd5ce"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.Flags 8a5bedb58fdafbe58b84cc17322ab07b5737995b6e917a58489edf9ada8dd35d -->

```csharp
public uint Inno.Native.MiniAudio.MaSoundConfig.Flags
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24167).

## `InitialAttachmentInputBusIndex`

<a id="api-b6ffc8f4e6e4ae7a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.InitialAttachmentInputBusIndex 51e00693da7f2e7ea7b358fa554f72f7660c1c1079b2ac1f5485bdfb53ebc00d -->

```csharp
public uint Inno.Native.MiniAudio.MaSoundConfig.InitialAttachmentInputBusIndex
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24159).

## `InitialSeekPointInPcmFrames`

<a id="api-0232ff91ccfe5230"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.InitialSeekPointInPcmFrames 38ddc60b309b92347bc8e35cea62514bf677b6e11a5a4e7b2acc32f72ec65b38 -->

```csharp
public ulong Inno.Native.MiniAudio.MaSoundConfig.InitialSeekPointInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24171).

## `InitNotifications`

<a id="api-a737fe62308fe3b6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.InitNotifications 82d9f070e99c77baf4cf152767de5b86e6c10fa201528886a9dfeeb3d398dbe0 -->

```csharp
public Inno.Native.MiniAudio.MaResourceManagerPipelineNotifications Inno.Native.MiniAudio.MaSoundConfig.InitNotifications
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24187).

## `IsLooping`

<a id="api-728bb873b9a5b071"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.IsLooping b5331bad83393d934fe5ac1823f7372a4f0beacfeda6bc5428d0276316c0e444 -->

```csharp
public uint Inno.Native.MiniAudio.MaSoundConfig.IsLooping
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24191).

## `LoopPointBegInPcmFrames`

<a id="api-58c6eb93d24f3798"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.LoopPointBegInPcmFrames badd30f43c6da396e4a0ec657a2116fec34e09c5249f8fe1da9b17c83ea39f11 -->

```csharp
public ulong Inno.Native.MiniAudio.MaSoundConfig.LoopPointBegInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24177).

## `LoopPointEndInPcmFrames`

<a id="api-be25fb476825ce2f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.LoopPointEndInPcmFrames 122eb0abba34c30b7d056e4c2f2528b8554afdd2d2de0e7cd16c023923efb95f -->

```csharp
public ulong Inno.Native.MiniAudio.MaSoundConfig.LoopPointEndInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24179).

## `MonoExpansionMode`

<a id="api-5aa71b910d7dbf0a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.MonoExpansionMode 8b6ca813f2a8278994da17f6cbd99e50ff5f5f975b60935d215b1e7bf75156b6 -->

```csharp
public Inno.Native.MiniAudio.MaMonoExpansionMode Inno.Native.MiniAudio.MaSoundConfig.MonoExpansionMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24165).

## `PDataSource`

<a id="api-91e0c560f14f087e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.PDataSource 8a3de6f1d55ba957661548c04b9a0aef4efffd18b6361bce586f89bed0e568d9 -->

```csharp
public void* Inno.Native.MiniAudio.MaSoundConfig.PDataSource
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24155).

## `PDoneFence`

<a id="api-85865f40cf81473c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.PDoneFence f075851e9db60f2bded2f97662bd6346e51517df5055f1fec70b0112b42a93c5 -->

```csharp
public Inno.Native.MiniAudio.MaFence* Inno.Native.MiniAudio.MaSoundConfig.PDoneFence
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24189).

## `PEndCallbackUserData`

<a id="api-1671c65897be2efc"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.PEndCallbackUserData ecca5bf999e0400b9c9f5e1973b615023381967d8d1b8c56228e4eb6cd5a2306 -->

```csharp
public void* Inno.Native.MiniAudio.MaSoundConfig.PEndCallbackUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24183).

## `PFilePath`

<a id="api-9ebabb33e000ddf1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.PFilePath 37d67b857381b855debf03dd953a5f6199926cfb7ce666e081d1252625d457c9 -->

```csharp
public sbyte* Inno.Native.MiniAudio.MaSoundConfig.PFilePath
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24151).

## `PFilePathW`

<a id="api-6f9d147730c10f96"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.PFilePathW 69b050ef30bebf9517717995e048b09da174fc1a02175508972b2580340e4e3f -->

```csharp
public ushort* Inno.Native.MiniAudio.MaSoundConfig.PFilePathW
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24153).

## `PInitialAttachment`

<a id="api-95ee0bfb3b87c1da"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.PInitialAttachment a4672ed3dde31deb1fa22af704ff5bafbf8a1769380d8ea4dac078c00dd4aefb -->

```csharp
public void* Inno.Native.MiniAudio.MaSoundConfig.PInitialAttachment
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24157).

## `PitchResampling`

<a id="api-39f51c64ea8914d2"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.PitchResampling d573019e98df8cb5f38ffb1c80ae857c51eaeed486f57852d723eada23ddf265 -->

```csharp
public Inno.Native.MiniAudio.MaResamplerConfig Inno.Native.MiniAudio.MaSoundConfig.PitchResampling
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24185).

## `RangeBegInPcmFrames`

<a id="api-d953433f1c420e69"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.RangeBegInPcmFrames e520e22d59cedc0eb4c75addc7ebd1243a0738f19dfb97995254f21490e3b232 -->

```csharp
public ulong Inno.Native.MiniAudio.MaSoundConfig.RangeBegInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24173).

## `RangeEndInPcmFrames`

<a id="api-fbdd4c6626cc5b07"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.RangeEndInPcmFrames 17be88fae2f39dd0425211360716e3734b0be89368d4626c20d6d6f2d9056275 -->

```csharp
public ulong Inno.Native.MiniAudio.MaSoundConfig.RangeEndInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24175).

## `VolumeSmoothTimeInPcmFrames`

<a id="api-8ea1ea58bfc72b2e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundConfig.VolumeSmoothTimeInPcmFrames db29eee5d830ff4fa34690907282ac384eec85b1ab091f55ffae96d5ba8a8e35 -->

```csharp
public uint Inno.Native.MiniAudio.MaSoundConfig.VolumeSmoothTimeInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24169).
