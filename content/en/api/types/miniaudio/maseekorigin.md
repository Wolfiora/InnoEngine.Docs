---
title: "MaSeekOrigin"
description: "Reference for MaSeekOrigin in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.8b4e70bec707ef0d
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaSeekOrigin`

This reference describes `MaSeekOrigin` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_seek_origin_current`](#api-ec857312b706489a) | Field |
| [`ma_seek_origin_end`](#api-8999a64734bf8ceb) | Field |
| [`ma_seek_origin_start`](#api-985c8e5f323b1a05) | Field |

## Type declaration

<a id="api-8b4e70bec707ef0d"></a>
<!-- api: T:Inno.Native.MiniAudio.MaSeekOrigin 5301b9d072afc6ed94c304386e6beb3944cfd7d15d597fe145211b24d4290589 -->

```csharp
public enum Inno.Native.MiniAudio.MaSeekOrigin : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23998).

## `ma_seek_origin_current`

<a id="api-ec857312b706489a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSeekOrigin.ma_seek_origin_current 57733e37463b6d92305518c8ccc17e9e86e50607a790591b0a0b01c36a3fbd16 -->

```csharp
Inno.Native.MiniAudio.MaSeekOrigin.ma_seek_origin_current = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24001).

## `ma_seek_origin_end`

<a id="api-8999a64734bf8ceb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSeekOrigin.ma_seek_origin_end 8ccd68f2a67c3816604cdada29225521ca94d696418344dcc8e131213a1d9168 -->

```csharp
Inno.Native.MiniAudio.MaSeekOrigin.ma_seek_origin_end = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24002).

## `ma_seek_origin_start`

<a id="api-985c8e5f323b1a05"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSeekOrigin.ma_seek_origin_start 706b6b48eceef2cc78692d06e8b182ef85b47e7c9e2e6091dba7f6f52cdf09b5 -->

```csharp
Inno.Native.MiniAudio.MaSeekOrigin.ma_seek_origin_start = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24000).
