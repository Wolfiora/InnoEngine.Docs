---
title: "MaJobType"
description: "Reference for MaJobType in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.be6005a51b094615
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaJobType`

This reference describes `MaJobType` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`MA_JOB_TYPE_COUNT`](#api-e24cdb2cab85a6f9) | Field |
| [`MA_JOB_TYPE_CUSTOM`](#api-d4fef969dc1976ba) | Field |
| [`MA_JOB_TYPE_DEVICE_AAUDIO_REROUTE`](#api-b3187a00f458013a) | Field |
| [`MA_JOB_TYPE_QUIT`](#api-3d4b9f90071edf94) | Field |
| [`MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_BUFFER`](#api-b1da0337252f9806) | Field |
| [`MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_BUFFER_NODE`](#api-8a44890bb2130d83) | Field |
| [`MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_STREAM`](#api-93aaa5d9bd309bca) | Field |
| [`MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_BUFFER`](#api-75fe0b5e10dcea3a) | Field |
| [`MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_BUFFER_NODE`](#api-8be064bbdd9f3ed5) | Field |
| [`MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_STREAM`](#api-d072a3cb9c547c8a) | Field |
| [`MA_JOB_TYPE_RESOURCE_MANAGER_PAGE_DATA_BUFFER_NODE`](#api-22521337660342a0) | Field |
| [`MA_JOB_TYPE_RESOURCE_MANAGER_PAGE_DATA_STREAM`](#api-0e4d5b109a8f827c) | Field |
| [`MA_JOB_TYPE_RESOURCE_MANAGER_SEEK_DATA_STREAM`](#api-76aa8a96f9b89655) | Field |

## Type declaration

<a id="api-be6005a51b094615"></a>
<!-- api: T:Inno.Native.MiniAudio.MaJobType a039b311acfcace86e4ca64e0b49b9b4a0404047379f327d9b7997162cdfcf41 -->

```csharp
public enum Inno.Native.MiniAudio.MaJobType : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21692).

## `MA_JOB_TYPE_COUNT`

<a id="api-e24cdb2cab85a6f9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_COUNT 57c6b0a623b648c41a3867de68d49884ce3411ac0574b856c69c1270f3c6200e -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_COUNT = 12
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21706).

## `MA_JOB_TYPE_CUSTOM`

<a id="api-d4fef969dc1976ba"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_CUSTOM a9518a13d3c8cabaede80620fe10a2ccdf2d9bf2512f4c1a5079e4be82a9e1cb -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_CUSTOM = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21695).

## `MA_JOB_TYPE_DEVICE_AAUDIO_REROUTE`

<a id="api-b3187a00f458013a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_DEVICE_AAUDIO_REROUTE 954c60dcc9afbce9f7d07b2a463632c7f83c00f7ec4566edb95f90d51d2ea32f -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_DEVICE_AAUDIO_REROUTE = 11
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21705).

## `MA_JOB_TYPE_QUIT`

<a id="api-3d4b9f90071edf94"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_QUIT 7f390ec959070c147ed40303f80df6a36cb15141d1988b237f7231d9f6c7fe5d -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_QUIT = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21694).

## `MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_BUFFER`

<a id="api-b1da0337252f9806"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_BUFFER 96e7193b099501b87a163711c7e73243a99644b2e68514f25c92ce4ac15f15eb -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_BUFFER = 6
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21700).

## `MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_BUFFER_NODE`

<a id="api-8a44890bb2130d83"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_BUFFER_NODE be86fbd557b994a8e175a5f1add4f3dd3de54d83aa517b0d8228bbdb7ec20bfe -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_BUFFER_NODE = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21697).

## `MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_STREAM`

<a id="api-93aaa5d9bd309bca"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_STREAM df48e9a4aba3436c967734ce745f9310aa20fa9ad15e7487243efbee3ede3ccb -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_FREE_DATA_STREAM = 8
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21702).

## `MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_BUFFER`

<a id="api-75fe0b5e10dcea3a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_BUFFER c5e29b28dd00c242774437d24980efaf3a28c5ce7854aa50946c4013fc138dc9 -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_BUFFER = 5
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21699).

## `MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_BUFFER_NODE`

<a id="api-8be064bbdd9f3ed5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_BUFFER_NODE 08cec4df23f9766e6607c993941a605309e6d142a44578e8b76d86d3b4b600f2 -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_BUFFER_NODE = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21696).

## `MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_STREAM`

<a id="api-d072a3cb9c547c8a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_STREAM d801ec9e3705ae81d90fb106744ad2862a517567fc7dba6d5382d6f9db05d823 -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_LOAD_DATA_STREAM = 7
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21701).

## `MA_JOB_TYPE_RESOURCE_MANAGER_PAGE_DATA_BUFFER_NODE`

<a id="api-22521337660342a0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_PAGE_DATA_BUFFER_NODE c7fd3071dc1280acfaed7c144530fe582e484c6bf72b74d61b0e51ac1e938386 -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_PAGE_DATA_BUFFER_NODE = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21698).

## `MA_JOB_TYPE_RESOURCE_MANAGER_PAGE_DATA_STREAM`

<a id="api-0e4d5b109a8f827c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_PAGE_DATA_STREAM 0e7bb93b34baeb88756c82f7aa10b7b10edfb6521c5682953c5e3f13bbd913f2 -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_PAGE_DATA_STREAM = 9
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21703).

## `MA_JOB_TYPE_RESOURCE_MANAGER_SEEK_DATA_STREAM`

<a id="api-76aa8a96f9b89655"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_SEEK_DATA_STREAM 074e7d4a55121e729a42f8d0588fef012aab1e272ac4d804957bd93c594ec361 -->

```csharp
Inno.Native.MiniAudio.MaJobType.MA_JOB_TYPE_RESOURCE_MANAGER_SEEK_DATA_STREAM = 10
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21704).
