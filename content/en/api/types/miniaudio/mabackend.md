---
title: "MaBackend"
description: "Reference for MaBackend in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.bb961f8477c4d264
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaBackend`

This reference describes `MaBackend` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_backend_aaudio`](#api-618d4c0480f1cc9b) | Field |
| [`ma_backend_alsa`](#api-a693fa9117a81901) | Field |
| [`ma_backend_audio4`](#api-1254816483460e11) | Field |
| [`ma_backend_coreaudio`](#api-b1f2de0b80155539) | Field |
| [`ma_backend_custom`](#api-dbae4c389d8b99f7) | Field |
| [`ma_backend_dsound`](#api-c5fc2a14639691ab) | Field |
| [`ma_backend_jack`](#api-69993ae8d5b6415c) | Field |
| [`ma_backend_null`](#api-1c992a65e98871b4) | Field |
| [`ma_backend_opensl`](#api-54f53876f113479a) | Field |
| [`ma_backend_oss`](#api-23152568fd04f3d9) | Field |
| [`ma_backend_pulseaudio`](#api-bfb696b51b53a095) | Field |
| [`ma_backend_sndio`](#api-af026de47f660306) | Field |
| [`ma_backend_wasapi`](#api-3d69bc1aa587f96c) | Field |
| [`ma_backend_webaudio`](#api-b8a29893cdc54f99) | Field |
| [`ma_backend_winmm`](#api-cc273a40feafb622) | Field |

## Type declaration

<a id="api-bb961f8477c4d264"></a>
<!-- api: T:Inno.Native.MiniAudio.MaBackend 9eedf87c7e2100c1c21a32fdefeeaa831442dc1112a7463722362ac33960f0e8 -->

```csharp
public enum Inno.Native.MiniAudio.MaBackend : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17037).

## `ma_backend_aaudio`

<a id="api-618d4c0480f1cc9b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_aaudio b9c976437de3c1b74f13b33d0487fbfd661ea0c62b56b2349b555b2efb4ec2fa -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_aaudio = 10
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17049).

## `ma_backend_alsa`

<a id="api-a693fa9117a81901"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_alsa 8c6a40b60415ccca4600136aa9d0daaeb7435fbd5ecc734e3882b2384f365e56 -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_alsa = 8
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17047).

## `ma_backend_audio4`

<a id="api-1254816483460e11"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_audio4 03280db6456ea4d89f0e6421e3f5fbd85c61f99da8108394b1eec963dd5f9da1 -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_audio4 = 5
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17044).

## `ma_backend_coreaudio`

<a id="api-b1f2de0b80155539"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_coreaudio ffd1f07db4c784a71599e0fe3c9ace3f706ed6963ae887d42d25ff6820cda01c -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_coreaudio = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17042).

## `ma_backend_custom`

<a id="api-dbae4c389d8b99f7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_custom d476930bff5fa9dfe41d9d3116f2251e1d367df35b30b9e80eee9b33c83c492a -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_custom = 13
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17052).

## `ma_backend_dsound`

<a id="api-c5fc2a14639691ab"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_dsound 8f01573bdbba597a9898bc0a7779c9c0f9b5e73ef6ce9d1bfe710104c8ad2745 -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_dsound = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17040).

## `ma_backend_jack`

<a id="api-69993ae8d5b6415c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_jack 66387824b75d61239de381484183957121605d554cc0e6ef5e6fecbde5d819f6 -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_jack = 9
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17048).

## `ma_backend_null`

<a id="api-1c992a65e98871b4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_null 61386e0b0c53c41c2868ed2e99692bc06140434d09b4aaae564ee38d8dc64110 -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_null = 14
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17053).

## `ma_backend_opensl`

<a id="api-54f53876f113479a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_opensl 0d6cad80239835fd1723afbbe6efc381eca085127e1d825c2e6831cfea5200e2 -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_opensl = 11
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17050).

## `ma_backend_oss`

<a id="api-23152568fd04f3d9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_oss ece082939d1f4927f5acdc96b71ae9c122f3f480ccf69a78a42170045f25cef4 -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_oss = 6
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17045).

## `ma_backend_pulseaudio`

<a id="api-bfb696b51b53a095"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_pulseaudio 9762761360c71f82b0cdc957d294b0857d510cda9fd8f6833cde7a84d473aece -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_pulseaudio = 7
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17046).

## `ma_backend_sndio`

<a id="api-af026de47f660306"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_sndio e9f6d63a3077fd29a808351045e28a91c61200594397903e6c9b3510eae4aa7f -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_sndio = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17043).

## `ma_backend_wasapi`

<a id="api-3d69bc1aa587f96c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_wasapi 094e1be1ff7f4f140cb63ffaf1d99e36d586b4ff2b035c5180a97d9a6d92aea6 -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_wasapi = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17039).

## `ma_backend_webaudio`

<a id="api-b8a29893cdc54f99"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_webaudio 5c37327451661fc376ab5040ce4f8040f414d7b36367ec25bd437d8f3295533c -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_webaudio = 12
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17051).

## `ma_backend_winmm`

<a id="api-cc273a40feafb622"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackend.ma_backend_winmm 74f03f4ce41fc3ebb566e90a815b69da925945a6a1a316e783f6326066edb07a -->

```csharp
Inno.Native.MiniAudio.MaBackend.ma_backend_winmm = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17041).
