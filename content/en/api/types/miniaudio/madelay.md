---
title: "MaDelay"
description: "Reference for MaDelay in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.ea6b72553f503aef
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDelay`

This reference describes `MaDelay` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`BufferSizeInFrames`](#api-8c2cb5c9d657b240) | Field |
| [`Config`](#api-ac91f7e46f2824d0) | Field |
| [`Cursor`](#api-f763f1fe366d453f) | Field |
| [`PBuffer`](#api-c658d62653e4b4c3) | Field |

## Type declaration

<a id="api-ea6b72553f503aef"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDelay 86996e2de9ac76fd231a0faeca0ccb09eabdb2bc6fec0cbb87d1f5338ecf2714 -->

```csharp
public struct Inno.Native.MiniAudio.MaDelay
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18779).

## `BufferSizeInFrames`

<a id="api-8c2cb5c9d657b240"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDelay.BufferSizeInFrames 0dc8b1ae06bf033f8afb21a6109779542e1804c8791127f1246b696c7127c1fd -->

```csharp
public uint Inno.Native.MiniAudio.MaDelay.BufferSizeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18786).

## `Config`

<a id="api-ac91f7e46f2824d0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDelay.Config 9b38576d7330007fc0be3e9a6042e90f7a4751729d1b7778b1e61cd4d5689293 -->

```csharp
public Inno.Native.MiniAudio.MaDelayConfig Inno.Native.MiniAudio.MaDelay.Config
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18782).

## `Cursor`

<a id="api-f763f1fe366d453f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDelay.Cursor a05f5b6f9d0429fb4a84fa9087702f272451c34e3496eea1470de692f45262fd -->

```csharp
public uint Inno.Native.MiniAudio.MaDelay.Cursor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18784).

## `PBuffer`

<a id="api-c658d62653e4b4c3"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDelay.PBuffer 30e4543da92441fed195b05e14ee4efe2eb22d9747d87d66e9070486b57c93e2 -->

```csharp
public float* Inno.Native.MiniAudio.MaDelay.PBuffer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18788).
