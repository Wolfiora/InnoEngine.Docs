---
title: "MaDeviceJobThread"
description: "Reference for MaDeviceJobThread in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.be24e4f74249347b
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDeviceJobThread`

This reference describes `MaDeviceJobThread` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`HasThread`](#api-c053636e22ec176d) | Field |
| [`JobQueue`](#api-d01c1206173d0f90) | Field |
| [`Thread`](#api-4351fb0f95fee545) | Field |

## Type declaration

<a id="api-be24e4f74249347b"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDeviceJobThread 881e335c1ef38cbcdb577f42effae9c4adbcc8f00aa7e752fd4ace735547fdc1 -->

```csharp
public struct Inno.Native.MiniAudio.MaDeviceJobThread
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19865).

## `HasThread`

<a id="api-c053636e22ec176d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceJobThread.HasThread 893cbeb9c6c5b8d1ce71ce0ce3c7ea5bc0570c865a22a9c78486695f25af51ae -->

```csharp
public uint Inno.Native.MiniAudio.MaDeviceJobThread.HasThread
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19872).

## `JobQueue`

<a id="api-d01c1206173d0f90"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceJobThread.JobQueue 2dfce99fc72a27c6dc70be3ea18a6fcd5ed48db7a23780b31db956bcc7511722 -->

```csharp
public Inno.Native.MiniAudio.MaJobQueue Inno.Native.MiniAudio.MaDeviceJobThread.JobQueue
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19870).

## `Thread`

<a id="api-4351fb0f95fee545"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceJobThread.Thread 1d6176addd3463100ebf7649172293a910bb06b1c116cef8416d787230ae4f4f -->

```csharp
public void* Inno.Native.MiniAudio.MaDeviceJobThread.Thread
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19868).
