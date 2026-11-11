---
title: "MaContext"
description: "Reference for MaContext in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.75b55bbd2fa0d353
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaContext`

This reference describes `MaContext` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AllocationCallbacks`](#api-153d7ae4a2fe9b53) | Field |
| [`AnonymousField14`](#api-0ef189974e26a81f) | Field |
| [`AnonymousField15`](#api-f1aa7e3abc776daf) | Field |
| [`Backend`](#api-a34e1c7f249fe3d0) | Field |
| [`Callbacks`](#api-8add20e77b255fcc) | Field |
| [`CaptureDeviceInfoCount`](#api-5ebe31d572abc28c) | Field |
| [`DeviceEnumLock`](#api-2cadc9f9ca4f2efc) | Field |
| [`DeviceInfoCapacity`](#api-cdd827aa112763ce) | Field |
| [`DeviceInfoLock`](#api-422b8b209a649872) | Field |
| [`Log`](#api-5624a544f17921be) | Field |
| [`PDeviceInfos`](#api-a86f8f5a69f67a63) | Field |
| [`PlaybackDeviceInfoCount`](#api-e52180873f637195) | Field |
| [`PLog`](#api-d5d303d279b0be10) | Field |
| [`PUserData`](#api-44f4a4e060cfb88c) | Field |
| [`ThreadPriority`](#api-e818be270ae0a1c6) | Field |
| [`ThreadStackSize`](#api-233e9ce8167b1368) | Field |

## Type declaration

<a id="api-75b55bbd2fa0d353"></a>
<!-- api: T:Inno.Native.MiniAudio.MaContext 74b7682deb2d7126367235828d4e4dc416c4d2d1a5054367ef268362019bf5b9 -->

```csharp
public struct Inno.Native.MiniAudio.MaContext
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17604).

## `AllocationCallbacks`

<a id="api-153d7ae4a2fe9b53"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.AllocationCallbacks 0c285d309480063849621f998273bfdc375a595e2ba23c166a7b3750d0ee2296 -->

```csharp
public Inno.Native.MiniAudio.MaAllocationCallbacks Inno.Native.MiniAudio.MaContext.AllocationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17621).

## `AnonymousField14`

<a id="api-0ef189974e26a81f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.AnonymousField14 a6607d31bb1dac8bf2d3482639b0d0d7da3d390919e9e899f2b69b4c7b636d08 -->

```csharp
public Inno.Native.MiniAudio.MaContextAnonymousUnion3dfceaecfb81c0d8 Inno.Native.MiniAudio.MaContext.AnonymousField14
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17635).

## `AnonymousField15`

<a id="api-f1aa7e3abc776daf"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.AnonymousField15 1a9fe880502851cd6fe2359742f11eeb29de05599388a4aa8ccd12100cae75ec -->

```csharp
public Inno.Native.MiniAudio.MaContextAnonymousUnionBedbc270a69d8c34 Inno.Native.MiniAudio.MaContext.AnonymousField15
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17637).

## `Backend`

<a id="api-a34e1c7f249fe3d0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.Backend 18b540034cdd2268a54aff1288ad7152ae06f464f05c005f33a11f557fcb7fa5 -->

```csharp
public Inno.Native.MiniAudio.MaBackend Inno.Native.MiniAudio.MaContext.Backend
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17609).

## `Callbacks`

<a id="api-8add20e77b255fcc"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.Callbacks 28b509fcaab92616a9d6077466007adf3c0154e0288676bfe5e37d930202aeb3 -->

```csharp
public Inno.Native.MiniAudio.MaBackendCallbacks Inno.Native.MiniAudio.MaContext.Callbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17607).

## `CaptureDeviceInfoCount`

<a id="api-5ebe31d572abc28c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.CaptureDeviceInfoCount 4f8adcdc3fd692159788bf17b6edcd611441424aecc9341623790a3d729fc666 -->

```csharp
public uint Inno.Native.MiniAudio.MaContext.CaptureDeviceInfoCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17631).

## `DeviceEnumLock`

<a id="api-2cadc9f9ca4f2efc"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.DeviceEnumLock 6feca4944ab16ea9639b189becc8be8ebdc03e027855675fd5d040697f5131dd -->

```csharp
public void* Inno.Native.MiniAudio.MaContext.DeviceEnumLock
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17623).

## `DeviceInfoCapacity`

<a id="api-cdd827aa112763ce"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.DeviceInfoCapacity 3e2586af0852863b9ecaeb732e4dc6771bf7fd6dfb281664a7a8db97dea47330 -->

```csharp
public uint Inno.Native.MiniAudio.MaContext.DeviceInfoCapacity
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17627).

## `DeviceInfoLock`

<a id="api-422b8b209a649872"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.DeviceInfoLock 4b71c0e4136a52de6b1af1885d52c253987adf777bb619ff2579c64efd0129b9 -->

```csharp
public void* Inno.Native.MiniAudio.MaContext.DeviceInfoLock
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17625).

## `Log`

<a id="api-5624a544f17921be"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.Log 6eae8db7fee112396418f07b8106308ca1a8915531b3d9818ed3be16908c049d -->

```csharp
public Inno.Native.MiniAudio.MaLog Inno.Native.MiniAudio.MaContext.Log
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17613).

## `PDeviceInfos`

<a id="api-a86f8f5a69f67a63"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.PDeviceInfos 406b269548a05bda49b52a1c71e68c9d6fcae28969a48d73dd59b419619e90e8 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceInfo* Inno.Native.MiniAudio.MaContext.PDeviceInfos
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17633).

## `PlaybackDeviceInfoCount`

<a id="api-e52180873f637195"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.PlaybackDeviceInfoCount 63b2c34d046d82ce2d32ab6b46234a15dc9b70e4c221c979c2668c16ad3acb70 -->

```csharp
public uint Inno.Native.MiniAudio.MaContext.PlaybackDeviceInfoCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17629).

## `PLog`

<a id="api-d5d303d279b0be10"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.PLog 3875f128f5f53d12ed6c2b6b402a802bcc293646825944d772c6c9be13d50139 -->

```csharp
public Inno.Native.MiniAudio.MaLog* Inno.Native.MiniAudio.MaContext.PLog
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17611).

## `PUserData`

<a id="api-44f4a4e060cfb88c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.PUserData 3bf7a5ed163d8e02efd477d7264651f969f3b6844392500c05e827211f6ceca4 -->

```csharp
public void* Inno.Native.MiniAudio.MaContext.PUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17619).

## `ThreadPriority`

<a id="api-e818be270ae0a1c6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.ThreadPriority be41aae1c7bd271fef8cbc14d3ac1fca57294be62546f252a8b58fd165a974c0 -->

```csharp
public Inno.Native.MiniAudio.MaThreadPriority Inno.Native.MiniAudio.MaContext.ThreadPriority
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17615).

## `ThreadStackSize`

<a id="api-233e9ce8167b1368"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContext.ThreadStackSize e9c539661d71df0a3efd5bef8193f0f49ad9d00c25e76f566bb421aec51dc97d -->

```csharp
public ulong Inno.Native.MiniAudio.MaContext.ThreadStackSize
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17617).
