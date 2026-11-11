---
title: "MaDecoder"
description: "Reference for MaDecoder in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.9f0865cfc350aa46
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDecoder`

This reference describes `MaDecoder` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AllocationCallbacks`](#api-1911bad078a7fc39) | Field |
| [`Converter`](#api-2bdbcbbb9d50420b) | Field |
| [`Data`](#api-60b55de3d12c6f06) | Field |
| [`Ds`](#api-94d0dd3d7fb15283) | Field |
| [`InputCacheCap`](#api-3db443c33fc70adb) | Field |
| [`InputCacheConsumed`](#api-b6a42bc0a1689780) | Field |
| [`InputCacheRemaining`](#api-6506d00f84a1f520) | Field |
| [`OnRead`](#api-a1dbda38e7ad6e1c) | Field |
| [`OnSeek`](#api-c46c16bd8dc27009) | Field |
| [`OnTell`](#api-b833124754ba3b08) | Field |
| [`OutputChannels`](#api-71a6e9d9c3d5d910) | Field |
| [`OutputFormat`](#api-e391b773b4f43b10) | Field |
| [`OutputSampleRate`](#api-b59d7c29e0cb845b) | Field |
| [`PBackend`](#api-a56ee6286f396387) | Field |
| [`PBackendUserData`](#api-5f8ed6adbf563b47) | Field |
| [`PBackendVTable`](#api-8f65b6c3e714796e) | Field |
| [`PInputCache`](#api-b168d38dafae6aa7) | Field |
| [`PUserData`](#api-3ea425378a067781) | Field |
| [`ReadPointerInPcmFrames`](#api-a28e6c76387538b2) | Field |

## Type declaration

<a id="api-9f0865cfc350aa46"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDecoder a54b019f2273df8acb4e4ed766f8adb7ae02308865e9aa697fda1f37cf3b9cca -->

```csharp
public struct Inno.Native.MiniAudio.MaDecoder
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18504).

## `AllocationCallbacks`

<a id="api-1911bad078a7fc39"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.AllocationCallbacks e23ca26b7883f5053175f4f6e13c5ab4bbf26a9520df92920501e611be96c5a1 -->

```csharp
public Inno.Native.MiniAudio.MaAllocationCallbacks Inno.Native.MiniAudio.MaDecoder.AllocationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18541).

## `Converter`

<a id="api-2bdbcbbb9d50420b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.Converter cbffe04fd8613e5452992bc82960921515adc8cd372956eb4e6a5d7bc905b606 -->

```csharp
public Inno.Native.MiniAudio.MaDataConverter Inno.Native.MiniAudio.MaDecoder.Converter
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18531).

## `Data`

<a id="api-60b55de3d12c6f06"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.Data 92de848930563fbde23a5b623808c0f8b522a33518babfcbd640768c91c65782 -->

```csharp
public Inno.Native.MiniAudio.MaDecoderAnonymousUnionA916b61357319dbc Inno.Native.MiniAudio.MaDecoder.Data
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18543).

## `Ds`

<a id="api-94d0dd3d7fb15283"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.Ds 12a26007e56991a5bb4e2339d4fa6bbbaefd22d8b672c91d62904ac5969a7d0f -->

```csharp
public Inno.Native.MiniAudio.MaDataSourceBase Inno.Native.MiniAudio.MaDecoder.Ds
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18507).

## `InputCacheCap`

<a id="api-3db443c33fc70adb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.InputCacheCap afd438ae6a51ff1b7d993f2a5ca2ee28181b915d6a7e43f8f5a2ea907775c723 -->

```csharp
public ulong Inno.Native.MiniAudio.MaDecoder.InputCacheCap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18535).

## `InputCacheConsumed`

<a id="api-b6a42bc0a1689780"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.InputCacheConsumed 5c5c2b13a4c42c7f48e194468004c909913d08e9c5ef0b86dfa25564c37f3cd3 -->

```csharp
public ulong Inno.Native.MiniAudio.MaDecoder.InputCacheConsumed
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18537).

## `InputCacheRemaining`

<a id="api-6506d00f84a1f520"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.InputCacheRemaining 15d40e4f36601ba5995f0bcd8cc9d92b8e27e81a3a0ce904f32c435e9ae5e5d4 -->

```csharp
public ulong Inno.Native.MiniAudio.MaDecoder.InputCacheRemaining
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18539).

## `OnRead`

<a id="api-a1dbda38e7ad6e1c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.OnRead 957d16e51243545afd516f0d8ddaa74f215f0004a5ae03d4a600f237a378ba3f -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDecoder*, void*, ulong, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDecoder.OnRead
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18515).

## `OnSeek`

<a id="api-c46c16bd8dc27009"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.OnSeek 217863d65e97b26ed80f14fae4a2094b69c6ab32acabb9c86b0842b5038fadbf -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDecoder*, long, Inno.Native.MiniAudio.MaSeekOrigin, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDecoder.OnSeek
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18517).

## `OnTell`

<a id="api-b833124754ba3b08"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.OnTell e66b13b21e4f244bf5567162a38a3eb0b9a4130f500da8e761474c24896f6362 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDecoder*, long*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDecoder.OnTell
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18519).

## `OutputChannels`

<a id="api-71a6e9d9c3d5d910"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.OutputChannels e25f3c76bb50613a65c3c1ded2af3f891bf7f53eff24b0626456b65f23e7bee1 -->

```csharp
public uint Inno.Native.MiniAudio.MaDecoder.OutputChannels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18527).

## `OutputFormat`

<a id="api-e391b773b4f43b10"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.OutputFormat 970d1cfdebe2dc51efaeeb2aa0326e1417809f02050f03a3122534b25c29c49d -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaDecoder.OutputFormat
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18525).

## `OutputSampleRate`

<a id="api-b59d7c29e0cb845b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.OutputSampleRate 2bff242a411d197c9d12e6da1bb3eed7a5bd37c2ee0d087c8d0adc26e64491bf -->

```csharp
public uint Inno.Native.MiniAudio.MaDecoder.OutputSampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18529).

## `PBackend`

<a id="api-a56ee6286f396387"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.PBackend 21d654943b6be92eece825fa51a2e5e03935fec0278007ab437258fa2101c908 -->

```csharp
public void* Inno.Native.MiniAudio.MaDecoder.PBackend
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18509).

## `PBackendUserData`

<a id="api-5f8ed6adbf563b47"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.PBackendUserData f45129260bd3784d0a79a7aa117ecf344ee24662374b592f729561f69c82cc8a -->

```csharp
public void* Inno.Native.MiniAudio.MaDecoder.PBackendUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18513).

## `PBackendVTable`

<a id="api-8f65b6c3e714796e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.PBackendVTable f8c5f8392deecdc0ed061af921f5d889707df8cb248d5c3e8215152e9ecc0fdc -->

```csharp
public Inno.Native.MiniAudio.MaDecodingBackendVtable* Inno.Native.MiniAudio.MaDecoder.PBackendVTable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18511).

## `PInputCache`

<a id="api-b168d38dafae6aa7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.PInputCache 42bcdd5e3e71bbdb16f35f48ba3f47f6b2271e33de13458027349546ea1b3037 -->

```csharp
public void* Inno.Native.MiniAudio.MaDecoder.PInputCache
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18533).

## `PUserData`

<a id="api-3ea425378a067781"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.PUserData daa91da9646e22fca86be84ed54719fba79ae79b49978b4e4025daaaa8930d20 -->

```csharp
public void* Inno.Native.MiniAudio.MaDecoder.PUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18521).

## `ReadPointerInPcmFrames`

<a id="api-a28e6c76387538b2"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoder.ReadPointerInPcmFrames f16c946473c9dc02ee8402c2af5f94f3218489042e717250b9ca8bfcc2283da4 -->

```csharp
public ulong Inno.Native.MiniAudio.MaDecoder.ReadPointerInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18523).
