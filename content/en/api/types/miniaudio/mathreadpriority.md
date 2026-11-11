---
title: "MaThreadPriority"
description: "Reference for MaThreadPriority in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.ccb429d9aecb0bd1
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaThreadPriority`

This reference describes `MaThreadPriority` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_thread_priority_default`](#api-72ffe6e69651ea6b) | Field |
| [`ma_thread_priority_high`](#api-50588473ddcbda15) | Field |
| [`ma_thread_priority_highest`](#api-31a065b3ac9de0f1) | Field |
| [`ma_thread_priority_idle`](#api-0ee5dddab7389f4d) | Field |
| [`ma_thread_priority_low`](#api-f871c6fa8c6a5678) | Field |
| [`ma_thread_priority_lowest`](#api-c626055bd346e078) | Field |
| [`ma_thread_priority_normal`](#api-a5dcd5f166ab55e4) | Field |
| [`ma_thread_priority_realtime`](#api-372f5b42cd0d9313) | Field |

## Type declaration

<a id="api-ccb429d9aecb0bd1"></a>
<!-- api: T:Inno.Native.MiniAudio.MaThreadPriority 8e50a72fe03cbc2e31ee51c184f996a8662f7a579c73901689d3a441e0a204be -->

```csharp
public enum Inno.Native.MiniAudio.MaThreadPriority : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24612).

## `ma_thread_priority_default`

<a id="api-72ffe6e69651ea6b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_default a48ca2b082e9503137fbddc45c124697503b506c8c8ffb2eb2ed7a1cc98f3ecf -->

```csharp
Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_default = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24621).

## `ma_thread_priority_high`

<a id="api-50588473ddcbda15"></a>
<!-- api: F:Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_high 84a4ada8f58b58a857ffc745393e5dfa5cabc91f63dfa4431e0bd55667148e15 -->

```csharp
Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_high = -1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24618).

## `ma_thread_priority_highest`

<a id="api-31a065b3ac9de0f1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_highest cf561b0d6e8aa32c6e7241d0737b26fbc472f6e7bfbd6716f227fbc7eee61ed0 -->

```csharp
Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_highest = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24619).

## `ma_thread_priority_idle`

<a id="api-0ee5dddab7389f4d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_idle 9801e8f7e2d72a6a2f439b1663ebccd744908d9d85bd1b469e732cc6c3b91ba0 -->

```csharp
Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_idle = -5
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24614).

## `ma_thread_priority_low`

<a id="api-f871c6fa8c6a5678"></a>
<!-- api: F:Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_low bc92b51b7d0c62acfc4dd621f9947f8df9174ef495284b61f091e934777a2935 -->

```csharp
Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_low = -3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24616).

## `ma_thread_priority_lowest`

<a id="api-c626055bd346e078"></a>
<!-- api: F:Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_lowest b9123f03c562c9b04df0e353777471fde33b68a2cf8e121f1ef5e5588b95df1e -->

```csharp
Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_lowest = -4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24615).

## `ma_thread_priority_normal`

<a id="api-a5dcd5f166ab55e4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_normal 716017c3d8f8760ffa79b4be6d50cad9d557c0bf52909cd6a35953a0a869530a -->

```csharp
Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_normal = -2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24617).

## `ma_thread_priority_realtime`

<a id="api-372f5b42cd0d9313"></a>
<!-- api: F:Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_realtime c8ad637efd9e0d0c3aa8133a45b04964d78b787a9e075c59c0b42f6ca4973ca4 -->

```csharp
Inno.Native.MiniAudio.MaThreadPriority.ma_thread_priority_realtime = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24620).
