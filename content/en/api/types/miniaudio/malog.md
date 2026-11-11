---
title: "MaLog"
description: "Reference for MaLog in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.a027870e706f7c7f
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaLog`

This reference describes `MaLog` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AllocationCallbacks`](#api-00cbb8a2417d3419) | Field |
| [`CallbackCount`](#api-154c76379a085541) | Field |
| [`Callbacks`](#api-b3cdb7a3582c2d4f) | Field |
| [`Lock`](#api-7a277e0842ca9446) | Field |

## Type declaration

<a id="api-a027870e706f7c7f"></a>
<!-- api: T:Inno.Native.MiniAudio.MaLog de3c63f455a6ec130738603a1b6609188538d52aa254c2379d98dff01a3a9363 -->

```csharp
public struct Inno.Native.MiniAudio.MaLog
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21854).

## `AllocationCallbacks`

<a id="api-00cbb8a2417d3419"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLog.AllocationCallbacks db5f471b5c5721c36596365f7e07e137538505fcbd9383bb2508ad0a94505446 -->

```csharp
public Inno.Native.MiniAudio.MaAllocationCallbacks Inno.Native.MiniAudio.MaLog.AllocationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21861).

## `CallbackCount`

<a id="api-154c76379a085541"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLog.CallbackCount c0b367a86b091039814329cd4cd69bd892a94de5aca0b3572610d161fb75c6b4 -->

```csharp
public uint Inno.Native.MiniAudio.MaLog.CallbackCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21859).

## `Callbacks`

<a id="api-b3cdb7a3582c2d4f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLog.Callbacks a9a1419638500322fab622e7705df33ddf5c2c9e140287f6b3283dbb528012e2 -->

```csharp
public Inno.Native.MiniAudio.NativeArray_d8db4ca1d386799a Inno.Native.MiniAudio.MaLog.Callbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21857).

## `Lock`

<a id="api-7a277e0842ca9446"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLog.Lock c5f1c72374b0cc7345e30d8cf10e0aa5fb3bb89c46400c238d0559ece77e5f14 -->

```csharp
public void* Inno.Native.MiniAudio.MaLog.Lock
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21863).
