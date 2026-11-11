---
title: "MaResourceManagerDataSourceFlags"
description: "Reference for MaResourceManagerDataSourceFlags in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.e3f09dabe6eec67d
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaResourceManagerDataSourceFlags`

This reference describes `MaResourceManagerDataSourceFlags` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_ASYNC`](#api-b2bf70a2bfbd8656) | Field |
| [`MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_DECODE`](#api-8fdc6f971a2999ae) | Field |
| [`MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_LOOPING`](#api-11acc6832984635e) | Field |
| [`MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_STREAM`](#api-bebf4acc2257d05c) | Field |
| [`MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_UNKNOWN_LENGTH`](#api-d98f93110ec4a78e) | Field |
| [`MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_WAIT_INIT`](#api-869e2cdf2406399c) | Field |

## Type declaration

<a id="api-e3f09dabe6eec67d"></a>
<!-- api: T:Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags ccac5c30be24361d5a7e53dbbe7567466734b26597d6f436f511499be342aea4 -->

```csharp
public enum Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23647).

## `MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_ASYNC`

<a id="api-b2bf70a2bfbd8656"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_ASYNC 4eb83b5fd8193e20b7396020da4f5aaee1a2d4ed2a822989563e0cb953a05904 -->

```csharp
Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_ASYNC = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23651).

## `MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_DECODE`

<a id="api-8fdc6f971a2999ae"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_DECODE 7a57832ab590a32509c8b42f046ffaa5205c0d2b97e6e54074b040c0e43c1c31 -->

```csharp
Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_DECODE = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23650).

## `MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_LOOPING`

<a id="api-11acc6832984635e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_LOOPING 6cb94d22adb5aa9605ba6501ebe5a8986ab20decdbcc8103dba3e2b0494f9e81 -->

```csharp
Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_LOOPING = 32
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23654).

## `MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_STREAM`

<a id="api-bebf4acc2257d05c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_STREAM 94faf9bc21f890f37402c4a3b59233737d6df30dced93b563ffc98cb04d5158b -->

```csharp
Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_STREAM = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23649).

## `MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_UNKNOWN_LENGTH`

<a id="api-d98f93110ec4a78e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_UNKNOWN_LENGTH 9172f15d58c533f82c14ec0e8929ca8901340e825579f57a157fb2eac4fd8045 -->

```csharp
Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_UNKNOWN_LENGTH = 16
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23653).

## `MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_WAIT_INIT`

<a id="api-869e2cdf2406399c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_WAIT_INIT 5a222e653824344a872e2bc37d22582697e203475a63d826b3ec03afa780d878 -->

```csharp
Inno.Native.MiniAudio.MaResourceManagerDataSourceFlags.MA_RESOURCE_MANAGER_DATA_SOURCE_FLAG_WAIT_INIT = 8
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23652).
