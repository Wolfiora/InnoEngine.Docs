---
title: "MaDeviceType"
description: "Reference for MaDeviceType in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.6528aff890e085c7
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDeviceType`

This reference describes `MaDeviceType` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_device_type_capture`](#api-de6441fa40aea638) | Field |
| [`ma_device_type_duplex`](#api-6c143aa09cc8b71d) | Field |
| [`ma_device_type_loopback`](#api-35d599ecfc3d2dc4) | Field |
| [`ma_device_type_playback`](#api-1a745f626c5fd3fd) | Field |

## Type declaration

<a id="api-6528aff890e085c7"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDeviceType cbbcddecc801bb325b7b8bc382fdc2b7202960949cdca29a106f4f18b31f1b20 -->

```csharp
public enum Inno.Native.MiniAudio.MaDeviceType : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20089).

## `ma_device_type_capture`

<a id="api-de6441fa40aea638"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceType.ma_device_type_capture fa0cee5d2d47e81c0e43caf1d36880eac681f6d856517d667e2eef7d5e253cae -->

```csharp
Inno.Native.MiniAudio.MaDeviceType.ma_device_type_capture = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20092).

## `ma_device_type_duplex`

<a id="api-6c143aa09cc8b71d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceType.ma_device_type_duplex de0fab38d34f4d1c9bfcfc5b03cccab9328c56a7241342c6d4ee8ad265966abd -->

```csharp
Inno.Native.MiniAudio.MaDeviceType.ma_device_type_duplex = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20093).

## `ma_device_type_loopback`

<a id="api-35d599ecfc3d2dc4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceType.ma_device_type_loopback 6a73cdfe54dbe7e45bb95c569dd7b3d979e5620d87d4051a2e4f5d53241aedc6 -->

```csharp
Inno.Native.MiniAudio.MaDeviceType.ma_device_type_loopback = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20094).

## `ma_device_type_playback`

<a id="api-1a745f626c5fd3fd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceType.ma_device_type_playback 69a7532bc25287086432a1e84def40271102f836271b50f906d82cddcf54e0e7 -->

```csharp
Inno.Native.MiniAudio.MaDeviceType.ma_device_type_playback = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20091).
