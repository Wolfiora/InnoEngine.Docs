---
title: "MaPagedAudioBufferPage"
description: "Reference for MaPagedAudioBufferPage in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.2eeb47b5051168ed
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaPagedAudioBufferPage`

This reference describes `MaPagedAudioBufferPage` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`PAudioData`](#api-0cb9b0667dd09a09) | Field |
| [`PNext`](#api-bcba86889c3f729c) | Field |
| [`SizeInFrames`](#api-8ba09fb04ba70d73) | Field |

## Type declaration

<a id="api-2eeb47b5051168ed"></a>
<!-- api: T:Inno.Native.MiniAudio.MaPagedAudioBufferPage d2bed49dcd300fe0698e52276b21162e158b502f57e89ba1ccebb1c6a2070a32 -->

```csharp
public struct Inno.Native.MiniAudio.MaPagedAudioBufferPage
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22864).

## `PAudioData`

<a id="api-0cb9b0667dd09a09"></a>
<!-- api: F:Inno.Native.MiniAudio.MaPagedAudioBufferPage.PAudioData 79738aa06c5fd84dd9d86add705c55dd5deb86c43d5385cb341c91e5bd9e1160 -->

```csharp
public Inno.Native.MiniAudio.NativeArray_ded1899ba091cc15 Inno.Native.MiniAudio.MaPagedAudioBufferPage.PAudioData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22871).

## `PNext`

<a id="api-bcba86889c3f729c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaPagedAudioBufferPage.PNext 612c628c70062aa9ae76d0f6c3994163be3a4e842d39001c7cf3bf3975f6b838 -->

```csharp
public Inno.Native.MiniAudio.MaPagedAudioBufferPage* Inno.Native.MiniAudio.MaPagedAudioBufferPage.PNext
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22867).

## `SizeInFrames`

<a id="api-8ba09fb04ba70d73"></a>
<!-- api: F:Inno.Native.MiniAudio.MaPagedAudioBufferPage.SizeInFrames 6e75c783074e754762a92fcdec7bff04ba6e580f339cc24c02ed532e362bee24 -->

```csharp
public ulong Inno.Native.MiniAudio.MaPagedAudioBufferPage.SizeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22869).
