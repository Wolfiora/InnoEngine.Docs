---
title: "MaSoundFlags"
description: "Reference for MaSoundFlags in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.91c7940a5da3831c
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaSoundFlags`

This reference describes `MaSoundFlags` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`MA_SOUND_FLAG_ASYNC`](#api-ff647b2a27fc8285) | Field |
| [`MA_SOUND_FLAG_DECODE`](#api-c9ad773ad49fe437) | Field |
| [`MA_SOUND_FLAG_LOOPING`](#api-e4d451f4826ce3a7) | Field |
| [`MA_SOUND_FLAG_NO_DEFAULT_ATTACHMENT`](#api-be0095f192070fde) | Field |
| [`MA_SOUND_FLAG_NO_PITCH`](#api-e49eb0e67ca6f745) | Field |
| [`MA_SOUND_FLAG_NO_SPATIALIZATION`](#api-8a8b40dd7861c346) | Field |
| [`MA_SOUND_FLAG_STREAM`](#api-b4f5616b37a053c7) | Field |
| [`MA_SOUND_FLAG_UNKNOWN_LENGTH`](#api-19e39ef2a21cc7de) | Field |
| [`MA_SOUND_FLAG_WAIT_INIT`](#api-cee24160869137b4) | Field |

## Type declaration

<a id="api-91c7940a5da3831c"></a>
<!-- api: T:Inno.Native.MiniAudio.MaSoundFlags 6f1377640a9dc74afeef258e7d76cba337cc72886e6cadcc73c87666bbcfc305 -->

```csharp
public enum Inno.Native.MiniAudio.MaSoundFlags : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24216).

## `MA_SOUND_FLAG_ASYNC`

<a id="api-ff647b2a27fc8285"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_ASYNC 098b8df8bcb1908b3fa5277496d9930c1e3b3ba3275a9e67fb0e1a711b2301d3 -->

```csharp
Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_ASYNC = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24220).

## `MA_SOUND_FLAG_DECODE`

<a id="api-c9ad773ad49fe437"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_DECODE 347c6492b2f890ded49c2ffd86947b2e136f16ef45b9f62a41c6aafd8d41ea77 -->

```csharp
Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_DECODE = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24219).

## `MA_SOUND_FLAG_LOOPING`

<a id="api-e4d451f4826ce3a7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_LOOPING c42c8739e14bf81dd35d2310e5bd5d1abc10133ca8c0aa6bb1a53c226932f832 -->

```csharp
Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_LOOPING = 32
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24223).

## `MA_SOUND_FLAG_NO_DEFAULT_ATTACHMENT`

<a id="api-be0095f192070fde"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_NO_DEFAULT_ATTACHMENT 31d1542e71844350b64ab07cde34b9d7e3e75d0b15ac1c54fc7a976e82d20a34 -->

```csharp
Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_NO_DEFAULT_ATTACHMENT = 4096
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24224).

## `MA_SOUND_FLAG_NO_PITCH`

<a id="api-e49eb0e67ca6f745"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_NO_PITCH 6064b85201d4ebb3ae9b7ff7fc30f291d69eb6886ac1dd2bc18b88085993e1b3 -->

```csharp
Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_NO_PITCH = 8192
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24225).

## `MA_SOUND_FLAG_NO_SPATIALIZATION`

<a id="api-8a8b40dd7861c346"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_NO_SPATIALIZATION a4ad0d524677a8da5a7a1c8f68cc54e13315c3a0d724efded4f9a4a3ebd59152 -->

```csharp
Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_NO_SPATIALIZATION = 16384
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24226).

## `MA_SOUND_FLAG_STREAM`

<a id="api-b4f5616b37a053c7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_STREAM 1672074ccb140ed452f58dc5571f6300b768bf7efb04d3534789404f64d0f80a -->

```csharp
Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_STREAM = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24218).

## `MA_SOUND_FLAG_UNKNOWN_LENGTH`

<a id="api-19e39ef2a21cc7de"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_UNKNOWN_LENGTH 8fcd3ab6c4d76473c151ad07fcc4d16d09642d9dc3ceb7de2e6eafbedba6cf1c -->

```csharp
Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_UNKNOWN_LENGTH = 16
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24222).

## `MA_SOUND_FLAG_WAIT_INIT`

<a id="api-cee24160869137b4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_WAIT_INIT 60f323b941a321731acc94c3239805179764f9964a3157cb8a3b52f1c44cce37 -->

```csharp
Inno.Native.MiniAudio.MaSoundFlags.MA_SOUND_FLAG_WAIT_INIT = 8
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24221).
