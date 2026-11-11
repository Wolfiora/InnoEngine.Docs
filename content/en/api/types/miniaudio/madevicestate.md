---
title: "MaDeviceState"
description: "Reference for MaDeviceState in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.0d1e6f7a128a7a01
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDeviceState`

This reference describes `MaDeviceState` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_device_state_started`](#api-8aec72ef73ec5c5b) | Field |
| [`ma_device_state_starting`](#api-b680f2b9f66af1e5) | Field |
| [`ma_device_state_stopped`](#api-695d49e02dbbb97f) | Field |
| [`ma_device_state_stopping`](#api-5748655940015c30) | Field |
| [`ma_device_state_uninitialized`](#api-362d4eb9365e5c92) | Field |

## Type declaration

<a id="api-0d1e6f7a128a7a01"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDeviceState 3aa0ec474cc1ec17640faa7ec6faaa7446120fde1f610be5241cb6ef8b8c4922 -->

```csharp
public enum Inno.Native.MiniAudio.MaDeviceState : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20074).

## `ma_device_state_started`

<a id="api-8aec72ef73ec5c5b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceState.ma_device_state_started 94f16da8b44055f9fee8dedcac87f9082e6601c08228e3b8cc15d847a608550f -->

```csharp
Inno.Native.MiniAudio.MaDeviceState.ma_device_state_started = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20078).

## `ma_device_state_starting`

<a id="api-b680f2b9f66af1e5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceState.ma_device_state_starting aeb50853bdc9717427efe831ffde49361b55fed338feca7051bb8dcaacfe2107 -->

```csharp
Inno.Native.MiniAudio.MaDeviceState.ma_device_state_starting = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20079).

## `ma_device_state_stopped`

<a id="api-695d49e02dbbb97f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceState.ma_device_state_stopped b61824c5f2f9db232a797f940693d22a8b3aaa0e74818d26249e6b3d1a898374 -->

```csharp
Inno.Native.MiniAudio.MaDeviceState.ma_device_state_stopped = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20077).

## `ma_device_state_stopping`

<a id="api-5748655940015c30"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceState.ma_device_state_stopping 837e2020948beb047e0f63b2ab775233c4ee7c5a96f61dfc998fc32f18aaabc0 -->

```csharp
Inno.Native.MiniAudio.MaDeviceState.ma_device_state_stopping = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20080).

## `ma_device_state_uninitialized`

<a id="api-362d4eb9365e5c92"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceState.ma_device_state_uninitialized f003e438b068a0734983ed7ecf400e324d1dc07328a0a8d43d946949ce1b8078 -->

```csharp
Inno.Native.MiniAudio.MaDeviceState.ma_device_state_uninitialized = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20076).
