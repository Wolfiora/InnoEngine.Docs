---
title: "MaStreamLayout"
description: "Reference for MaStreamLayout in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.f44eb49c8025ef86
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaStreamLayout`

This reference describes `MaStreamLayout` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_stream_layout_deinterleaved`](#api-585947a94c4d379f) | Field |
| [`ma_stream_layout_interleaved`](#api-7ff50c8fec502803) | Field |

## Type declaration

<a id="api-f44eb49c8025ef86"></a>
<!-- api: T:Inno.Native.MiniAudio.MaStreamLayout beef273d2c66d961b5eb5b37eaf96ff942e33e72c6d4156757f22c1c6bc21b41 -->

```csharp
public enum Inno.Native.MiniAudio.MaStreamLayout : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24591).

## `ma_stream_layout_deinterleaved`

<a id="api-585947a94c4d379f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaStreamLayout.ma_stream_layout_deinterleaved 09c38ac890a9595008e7086870e01e6fc8f7bb857345cc00c44a0fbe628ae582 -->

```csharp
Inno.Native.MiniAudio.MaStreamLayout.ma_stream_layout_deinterleaved = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24594).

## `ma_stream_layout_interleaved`

<a id="api-7ff50c8fec502803"></a>
<!-- api: F:Inno.Native.MiniAudio.MaStreamLayout.ma_stream_layout_interleaved de65443d7de6e13b849c5218ed0bb6e59da269952ccb44d9327c6cf476924d56 -->

```csharp
Inno.Native.MiniAudio.MaStreamLayout.ma_stream_layout_interleaved = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24593).
