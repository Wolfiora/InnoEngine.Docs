---
title: "MaBackendCallbacks"
description: "Reference for MaBackendCallbacks in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.589c1903cb7aeb32
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaBackendCallbacks`

This reference describes `MaBackendCallbacks` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`OnContextEnumerateDevices`](#api-0b722c6c357091f1) | Field |
| [`OnContextGetDeviceInfo`](#api-c59169761e8480c8) | Field |
| [`OnContextInit`](#api-9236703c4584431d) | Field |
| [`OnContextUninit`](#api-d0ec56713da2b9e1) | Field |
| [`OnDeviceDataLoop`](#api-2c98ff7afcb8defc) | Field |
| [`OnDeviceDataLoopWakeup`](#api-904942369558e9fe) | Field |
| [`OnDeviceGetInfo`](#api-c781e404bad636d0) | Field |
| [`OnDeviceInit`](#api-39b08a31960db357) | Field |
| [`OnDeviceRead`](#api-9a57f4db463e2bab) | Field |
| [`OnDeviceStart`](#api-265551867d74f1a4) | Field |
| [`OnDeviceStop`](#api-d68db46c0a105e00) | Field |
| [`OnDeviceUninit`](#api-994313f80a1c75d2) | Field |
| [`OnDeviceWrite`](#api-c8e957bb087921a6) | Field |

## Type declaration

<a id="api-589c1903cb7aeb32"></a>
<!-- api: T:Inno.Native.MiniAudio.MaBackendCallbacks 82bf91cf40cd3a3b3febf6f35edfd1c57f4ec07c1f157f60bcb93e759c3cd77c -->

```csharp
public struct Inno.Native.MiniAudio.MaBackendCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17064).

## `OnContextEnumerateDevices`

<a id="api-0b722c6c357091f1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnContextEnumerateDevices 6c7b1138f3d2d6bc72cbb8e04b7e3172d1cad9a1ad3b03d7fbbc20be7e791100 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaContext*, delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaContext*, Inno.Native.MiniAudio.MaDeviceType, Inno.Native.MiniAudio.MaDeviceInfo*, void*, uint>, void*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnContextEnumerateDevices
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17071).

## `OnContextGetDeviceInfo`

<a id="api-c59169761e8480c8"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnContextGetDeviceInfo c28fb4aaab34b96b1ec5accd053fb6e4dcb5d2c1dae9a66da2e8ca45d3a11f26 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaContext*, Inno.Native.MiniAudio.MaDeviceType, Inno.Native.MiniAudio.MaDeviceId*, Inno.Native.MiniAudio.MaDeviceInfo*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnContextGetDeviceInfo
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17073).

## `OnContextInit`

<a id="api-9236703c4584431d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnContextInit 048a835369df2093e21429db1a92133f680256d1f6748c11c558f06592b7dbd6 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaContext*, Inno.Native.MiniAudio.MaContextConfig*, Inno.Native.MiniAudio.MaBackendCallbacks*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnContextInit
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17067).

## `OnContextUninit`

<a id="api-d0ec56713da2b9e1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnContextUninit d2cba83511fdadf6c86276efa96d6e70402f0f51c7525147a0204c9eb6d4c822 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaContext*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnContextUninit
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17069).

## `OnDeviceDataLoop`

<a id="api-2c98ff7afcb8defc"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceDataLoop 51db88c2c4f620b99f81b9d824d289c976cd43c0274f4ac2cd2937b11e52dc65 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceDataLoop
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17087).

## `OnDeviceDataLoopWakeup`

<a id="api-904942369558e9fe"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceDataLoopWakeup b849d34833ba22dbcfdc8a40cf380452bc35018e9335db0eaf069744a160ef4f -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceDataLoopWakeup
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17089).

## `OnDeviceGetInfo`

<a id="api-c781e404bad636d0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceGetInfo 876c2e2f0090aae590fedec7cd24724332b95b6b8b41158273c99fe452dcde9b -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, Inno.Native.MiniAudio.MaDeviceType, Inno.Native.MiniAudio.MaDeviceInfo*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceGetInfo
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17091).

## `OnDeviceInit`

<a id="api-39b08a31960db357"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceInit b542e794559c9b7d812d3bb3e8a0cce0f83cf39fa57b044bfef63419ea2ea03d -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, Inno.Native.MiniAudio.MaDeviceConfig*, Inno.Native.MiniAudio.MaDeviceDescriptor*, Inno.Native.MiniAudio.MaDeviceDescriptor*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceInit
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17075).

## `OnDeviceRead`

<a id="api-9a57f4db463e2bab"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceRead 86761f1901ed44b12633f2b26619bcbd27f22c835b035e1c652063b6a477bc67 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, void*, uint, uint*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceRead
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17083).

## `OnDeviceStart`

<a id="api-265551867d74f1a4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceStart 02c5629b65cbd2d39cf0888328303ae93a5eb6344fdfd702b5b8f949a175c578 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceStart
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17079).

## `OnDeviceStop`

<a id="api-d68db46c0a105e00"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceStop fa4854c88a640404b0e3ecf66df56bfc0568d3eaa4c3f0e13290d7702e023845 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceStop
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17081).

## `OnDeviceUninit`

<a id="api-994313f80a1c75d2"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceUninit d36da64c4c7d7281dbdd7075d59f919c031cfc02e433dda446c16ad91fc7c0e8 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceUninit
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17077).

## `OnDeviceWrite`

<a id="api-c8e957bb087921a6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceWrite 6b86c7267eb5f3114d900f85c1bb775cdb95461ecdea65eaf59818e40e27ff75 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, void*, uint, uint*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaBackendCallbacks.OnDeviceWrite
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17085).
