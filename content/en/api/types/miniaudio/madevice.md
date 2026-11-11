---
title: "MaDevice"
description: "Reference for MaDevice in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.0122678851af65c1
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDevice`

This reference describes `MaDevice` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AnonymousField24`](#api-d6d5fa162e7a6e62) | Field |
| [`Capture`](#api-35f6990dd5d09190) | Field |
| [`DuplexRb`](#api-4812f5912c884e7a) | Field |
| [`IsOwnerOfContext`](#api-8eeab70706e33670) | Field |
| [`MasterVolumeFactor`](#api-348d9ec280efdb11) | Field |
| [`NoClip`](#api-98fdafb6acca1651) | Field |
| [`NoDisableDenormals`](#api-b00febae7bd0d68d) | Field |
| [`NoFixedSizedCallback`](#api-93b3f8fd42347a11) | Field |
| [`NoPreSilencedOutputBuffer`](#api-ed068cc90fafc526) | Field |
| [`OnData`](#api-336c4bac930c59b9) | Field |
| [`OnNotification`](#api-cec107eda6aaf31a) | Field |
| [`OnStop`](#api-91a4913f514c496a) | Field |
| [`PContext`](#api-6fcf15e5de7be9fd) | Field |
| [`Playback`](#api-9ece8ddf27d16e9c) | Field |
| [`PUserData`](#api-980fdb11579387f7) | Field |
| [`Resampling`](#api-c06d3c968ae5aa2c) | Field |
| [`SampleRate`](#api-7b28837001aac695) | Field |
| [`StartEvent`](#api-0ef41ee338d7b29c) | Field |
| [`StartStopLock`](#api-628c7a406ac607c6) | Field |
| [`State`](#api-16010db001ca4ad8) | Field |
| [`StopEvent`](#api-67ae1caa289d2400) | Field |
| [`Thread`](#api-2c576df975e82397) | Field |
| [`Type`](#api-414ef92d64e24deb) | Field |
| [`WakeupEvent`](#api-17d767060e4fd7e3) | Field |
| [`WorkResult`](#api-42b2cd74dc50f682) | Field |

## Type declaration

<a id="api-0122678851af65c1"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDevice 47ced80eafd57de2d60b44d611b6990e543a1e7adac0db637be5f36df11b5f77 -->

```csharp
public struct Inno.Native.MiniAudio.MaDevice
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18885).

## `AnonymousField24`

<a id="api-d6d5fa162e7a6e62"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.AnonymousField24 b3ca49a074f5f2437a5f6f1e87cf146507e4b70868ed9c3c76db903cc9944740 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceAnonymousUnion449ffa5266c92352 Inno.Native.MiniAudio.MaDevice.AnonymousField24
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18936).

## `Capture`

<a id="api-35f6990dd5d09190"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.Capture 841a3d605a1c59c9aa2ab88775d66a3bea34e7d93117ab6baefabbf9dc16a830 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceAnonymousStructA841964e7abf2f30 Inno.Native.MiniAudio.MaDevice.Capture
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18934).

## `DuplexRb`

<a id="api-4812f5912c884e7a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.DuplexRb 44e04d7d037fdc49530b32067af4c82df09d41630c543e012b2f9ea76cf8cf92 -->

```csharp
public Inno.Native.MiniAudio.MaDuplexRb Inno.Native.MiniAudio.MaDevice.DuplexRb
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18928).

## `IsOwnerOfContext`

<a id="api-8eeab70706e33670"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.IsOwnerOfContext 1324ecc8e6812c6643b31abe840f7af0670bf38c7169af476a292eb52302b847 -->

```csharp
public byte Inno.Native.MiniAudio.MaDevice.IsOwnerOfContext
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18916).

## `MasterVolumeFactor`

<a id="api-348d9ec280efdb11"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.MasterVolumeFactor ee3e2f17bd000572d88205fbbc8b990e9a204f18281f6f11024042b72362672a -->

```csharp
public Inno.Native.MiniAudio.MaAtomicFloat Inno.Native.MiniAudio.MaDevice.MasterVolumeFactor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18926).

## `NoClip`

<a id="api-98fdafb6acca1651"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.NoClip d6aa272eda0b9023fd01c1e17b6c979618d6d6e3dc4d261684fd09a19cca771d -->

```csharp
public byte Inno.Native.MiniAudio.MaDevice.NoClip
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18920).

## `NoDisableDenormals`

<a id="api-b00febae7bd0d68d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.NoDisableDenormals 5dab082c2775018e41b104af8881acec03a1bc5d93ff64478aa170fd140a8af2 -->

```csharp
public byte Inno.Native.MiniAudio.MaDevice.NoDisableDenormals
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18922).

## `NoFixedSizedCallback`

<a id="api-93b3f8fd42347a11"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.NoFixedSizedCallback d573db510ae3f7aa9e5ed78db6c070dcb60f02f64eb38aa7641178b430c36947 -->

```csharp
public byte Inno.Native.MiniAudio.MaDevice.NoFixedSizedCallback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18924).

## `NoPreSilencedOutputBuffer`

<a id="api-ed068cc90fafc526"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.NoPreSilencedOutputBuffer 565510397a5a07cb2f4e81ef9c2f42848ae768d32adddf1983fe582fee672860 -->

```csharp
public byte Inno.Native.MiniAudio.MaDevice.NoPreSilencedOutputBuffer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18918).

## `OnData`

<a id="api-336c4bac930c59b9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.OnData 83704cc384efa2c05564b876fd1d9237add581f32b98147d9da19f538e4e4a6b -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, void*, void*, uint, void> Inno.Native.MiniAudio.MaDevice.OnData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18896).

## `OnNotification`

<a id="api-cec107eda6aaf31a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.OnNotification 8e46b698a3120b2ecd114eca0515ef59bcf0c3a588163a6c9e076abd04304a04 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDeviceNotification*, void> Inno.Native.MiniAudio.MaDevice.OnNotification
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18898).

## `OnStop`

<a id="api-91a4913f514c496a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.OnStop accc68495a3c1286902f2bdfbf794b1f65cce884b6c10ddf50e425ee9201ba29 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, void> Inno.Native.MiniAudio.MaDevice.OnStop
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18900).

## `PContext`

<a id="api-6fcf15e5de7be9fd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.PContext 229b40cf5b628b7f1cf7827d5e594d022951a97243ab23ed962fe91c6748c2dc -->

```csharp
public Inno.Native.MiniAudio.MaContext* Inno.Native.MiniAudio.MaDevice.PContext
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18888).

## `Playback`

<a id="api-9ece8ddf27d16e9c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.Playback 2b919a0c6980d1b2b71ca8c1ed3861d1011a5e10cf79f6f9eb77f40b5a4c5224 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceAnonymousStruct68a5ba979e18360d Inno.Native.MiniAudio.MaDevice.Playback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18932).

## `PUserData`

<a id="api-980fdb11579387f7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.PUserData d06e2f0be9de57997a1b59377f40610416676ea4a30b67f19afdbee8c154faa9 -->

```csharp
public void* Inno.Native.MiniAudio.MaDevice.PUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18902).

## `Resampling`

<a id="api-c06d3c968ae5aa2c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.Resampling 374ec59fb7d8046ebcec70fb8093c024457f5f6ff81b23631f89ce5f92d9dac3 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceAnonymousStruct405cf6900db62736 Inno.Native.MiniAudio.MaDevice.Resampling
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18930).

## `SampleRate`

<a id="api-7b28837001aac695"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.SampleRate 47e9f63ffa26c672f0ab40bdeb7b4c6e77a28e567e66ca9a1323b4c808e80b86 -->

```csharp
public uint Inno.Native.MiniAudio.MaDevice.SampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18892).

## `StartEvent`

<a id="api-0ef41ee338d7b29c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.StartEvent ad5797e12108c694ae0e51c9345bfac1dda80143a06b60d2e11c55e5445d4130 -->

```csharp
public void* Inno.Native.MiniAudio.MaDevice.StartEvent
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18908).

## `StartStopLock`

<a id="api-628c7a406ac607c6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.StartStopLock df5e760cd241055d79765bbfa3c70710af92a758f00e5b59db755d5caa7f2304 -->

```csharp
public void* Inno.Native.MiniAudio.MaDevice.StartStopLock
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18904).

## `State`

<a id="api-16010db001ca4ad8"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.State cd76faec6012177ba8118dca082107b2d4cb9847031feddc83202f547224ec56 -->

```csharp
public Inno.Native.MiniAudio.MaAtomicDeviceState Inno.Native.MiniAudio.MaDevice.State
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18894).

## `StopEvent`

<a id="api-67ae1caa289d2400"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.StopEvent afd4b5894bec3ff80b5903edd49cc7293861fa80dd96fa3a9e37c865d17e80f7 -->

```csharp
public void* Inno.Native.MiniAudio.MaDevice.StopEvent
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18910).

## `Thread`

<a id="api-2c576df975e82397"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.Thread 305ef424023856c8a158557b8247ae3cecc9a188dc9e8657f887570184fb3838 -->

```csharp
public void* Inno.Native.MiniAudio.MaDevice.Thread
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18912).

## `Type`

<a id="api-414ef92d64e24deb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.Type 25bd5d1a37e29ca8461caeeaa12c56d5b6f53b68960eaef8427e0a3e42e3b666 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceType Inno.Native.MiniAudio.MaDevice.Type
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18890).

## `WakeupEvent`

<a id="api-17d767060e4fd7e3"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.WakeupEvent ca93471dbc19475f2f8f50004722bd37608047ab0d52bd272f366e7cf795f0cc -->

```csharp
public void* Inno.Native.MiniAudio.MaDevice.WakeupEvent
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18906).

## `WorkResult`

<a id="api-42b2cd74dc50f682"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDevice.WorkResult 6838dc1cc136122ab7189bd4ed5a87317ae44f98f506eee6aae976ea8302dec8 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaDevice.WorkResult
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18914).
