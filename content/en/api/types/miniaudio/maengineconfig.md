---
title: "MaEngineConfig"
description: "Reference for MaEngineConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.19ad99698c4bbabf
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEngineConfig`

This reference describes `MaEngineConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AllocationCallbacks`](#api-b46b2d701d85308b) | Field |
| [`Channels`](#api-4fef5d999690c8c5) | Field |
| [`DataCallback`](#api-30e5d97999a3ade6) | Field |
| [`DefaultVolumeSmoothTimeInPcmFrames`](#api-3da7de0450377a23) | Field |
| [`GainSmoothTimeInFrames`](#api-bcd507927e593455) | Field |
| [`GainSmoothTimeInMilliseconds`](#api-5fe699e84caf204a) | Field |
| [`ListenerCount`](#api-4a4695ded8e28a78) | Field |
| [`MonoExpansionMode`](#api-1c4866154bb75e36) | Field |
| [`NoAutoStart`](#api-204458febbe0128e) | Field |
| [`NoDevice`](#api-b54288e2fdef485b) | Field |
| [`NotificationCallback`](#api-d506675dd681a5cd) | Field |
| [`OnProcess`](#api-6279e1205d6286ab) | Field |
| [`PContext`](#api-3417396295b1ba9b) | Field |
| [`PDevice`](#api-dd6c4fe238dd937d) | Field |
| [`PeriodSizeInFrames`](#api-71a4bbd5825e1c22) | Field |
| [`PeriodSizeInMilliseconds`](#api-fe1e48325afed211) | Field |
| [`PitchResampling`](#api-107e6ddfc718dfd9) | Field |
| [`PLog`](#api-e1841edfdda3bc69) | Field |
| [`PPlaybackDeviceId`](#api-caf447cc80dc1bcb) | Field |
| [`PProcessUserData`](#api-c003842af04b04dd) | Field |
| [`PreMixStackSizeInBytes`](#api-2431018d5fdc91e4) | Field |
| [`PResourceManager`](#api-b4fcc023ff28426d) | Field |
| [`PResourceManagerVfs`](#api-bf21aae364bba6ad) | Field |
| [`ResourceManagerResampling`](#api-bb86d6cc4e4b9eec) | Field |
| [`SampleRate`](#api-677073e7370ecba3) | Field |

## Type declaration

<a id="api-19ad99698c4bbabf"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEngineConfig 0b012f45bfbf619a48e1b4797379a6fde0fb9162dd7a82dd24fe8899db1c4889 -->

```csharp
public struct Inno.Native.MiniAudio.MaEngineConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20366).

## `AllocationCallbacks`

<a id="api-b46b2d701d85308b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.AllocationCallbacks 485cdbfeab0e8561be9e863dbcdca0e35f56180a791607a9c7917083757e78e4 -->

```csharp
public Inno.Native.MiniAudio.MaAllocationCallbacks Inno.Native.MiniAudio.MaEngineConfig.AllocationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20401).

## `Channels`

<a id="api-4fef5d999690c8c5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.Channels a48f1006c9b679edd5d637646942451af7c3253ea9aaa14abd097f17c69e29a3 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineConfig.Channels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20385).

## `DataCallback`

<a id="api-30e5d97999a3ade6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.DataCallback 14e6778c49204853433483b42b39085f506a9a58e9764b72861e42221a28040c -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, void*, void*, uint, void> Inno.Native.MiniAudio.MaEngineConfig.DataCallback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20377).

## `DefaultVolumeSmoothTimeInPcmFrames`

<a id="api-3da7de0450377a23"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.DefaultVolumeSmoothTimeInPcmFrames bd93aafa3104f809befa3131c4d80caf5199c3ff68561444cc943c3b36451142 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineConfig.DefaultVolumeSmoothTimeInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20397).

## `GainSmoothTimeInFrames`

<a id="api-bcd507927e593455"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.GainSmoothTimeInFrames 00b5165f445a57818c22af52d6d1e907793b2db77b54ba7a9582a7dbcfcf55ad -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineConfig.GainSmoothTimeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20393).

## `GainSmoothTimeInMilliseconds`

<a id="api-5fe699e84caf204a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.GainSmoothTimeInMilliseconds 4c21d98a63c0b7f5ce471161287c63089fac3e4611fe335401000e070a162468 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineConfig.GainSmoothTimeInMilliseconds
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20395).

## `ListenerCount`

<a id="api-4a4695ded8e28a78"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.ListenerCount 9a45156b194e07057acc780c1d82e14203829e7875d151b7b7e6b774058f1bed -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineConfig.ListenerCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20383).

## `MonoExpansionMode`

<a id="api-1c4866154bb75e36"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.MonoExpansionMode d640b8bc8fe51996bd7fc6ce22857c695075005591854b2d68f0493616273dc3 -->

```csharp
public Inno.Native.MiniAudio.MaMonoExpansionMode Inno.Native.MiniAudio.MaEngineConfig.MonoExpansionMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20407).

## `NoAutoStart`

<a id="api-204458febbe0128e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.NoAutoStart 8b35a210989f51310a606acfec3e686c38412e02706237867cc4136a0e282904 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineConfig.NoAutoStart
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20403).

## `NoDevice`

<a id="api-b54288e2fdef485b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.NoDevice fbff0c99e266f42ca4df944e148c9cf4377e30c9a214e6cbef5777960299e3eb -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineConfig.NoDevice
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20405).

## `NotificationCallback`

<a id="api-d506675dd681a5cd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.NotificationCallback 6e69ff1da17abc7ceef4d58a764037f8f602b8a96bd8b206bde0b200912a51dc -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDeviceNotification*, void> Inno.Native.MiniAudio.MaEngineConfig.NotificationCallback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20379).

## `OnProcess`

<a id="api-6279e1205d6286ab"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.OnProcess 1dc94f79f7c13d3fc38cb427fbc6992b9d65e68d70d9ffee5d6957ee51dfb2c2 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, float*, ulong, void> Inno.Native.MiniAudio.MaEngineConfig.OnProcess
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20411).

## `PContext`

<a id="api-3417396295b1ba9b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.PContext eb722fa2f7eab32ae6e0c74e63ef692d4d059cadfc56f585feac5a9dd8702084 -->

```csharp
public Inno.Native.MiniAudio.MaContext* Inno.Native.MiniAudio.MaEngineConfig.PContext
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20371).

## `PDevice`

<a id="api-dd6c4fe238dd937d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.PDevice 1ea3901ce21470cf7d65fdc3bcfe5e93fe3f1c19fbc954aed1d178a04222cb0c -->

```csharp
public Inno.Native.MiniAudio.MaDevice* Inno.Native.MiniAudio.MaEngineConfig.PDevice
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20373).

## `PeriodSizeInFrames`

<a id="api-71a4bbd5825e1c22"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.PeriodSizeInFrames 43bd15c085b617b62723f4f5dd66621ba328cced3153aad569b6856acebaf5e1 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineConfig.PeriodSizeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20389).

## `PeriodSizeInMilliseconds`

<a id="api-fe1e48325afed211"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.PeriodSizeInMilliseconds b0475372350ecfc4e61c9678a58c8178f7704600a18b7a40ce453ca02043ba29 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineConfig.PeriodSizeInMilliseconds
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20391).

## `PitchResampling`

<a id="api-107e6ddfc718dfd9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.PitchResampling 30a47dc838a513997958ca15f3d6e6197203e7366119d7eef38f87e3605de68f -->

```csharp
public Inno.Native.MiniAudio.MaResamplerConfig Inno.Native.MiniAudio.MaEngineConfig.PitchResampling
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20417).

## `PLog`

<a id="api-e1841edfdda3bc69"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.PLog c5149af04ee541baa1a5662af1b8209a7204d095d75b56936a074f0afbfbf98a -->

```csharp
public Inno.Native.MiniAudio.MaLog* Inno.Native.MiniAudio.MaEngineConfig.PLog
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20381).

## `PPlaybackDeviceId`

<a id="api-caf447cc80dc1bcb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.PPlaybackDeviceId 4efcacc851a027a2319f31df8851936270300866a759110efb47ec18c5c9dcbd -->

```csharp
public Inno.Native.MiniAudio.MaDeviceId* Inno.Native.MiniAudio.MaEngineConfig.PPlaybackDeviceId
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20375).

## `PProcessUserData`

<a id="api-c003842af04b04dd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.PProcessUserData 479b7a1a6ab72efcfe70c091bbdef2830ff72ee24a1e4dfd4b7e10cd305f4864 -->

```csharp
public void* Inno.Native.MiniAudio.MaEngineConfig.PProcessUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20413).

## `PreMixStackSizeInBytes`

<a id="api-2431018d5fdc91e4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.PreMixStackSizeInBytes 389bf27f7a6bc713bdbb3ad06972649c1ca696715fcf29e1707b6761d2276d4f -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineConfig.PreMixStackSizeInBytes
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20399).

## `PResourceManager`

<a id="api-b4fcc023ff28426d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.PResourceManager a64e7aee7a32a1bb3db8b5d122241716d2d1ca38d82cb19a94177d1ebacd3de4 -->

```csharp
public Inno.Native.MiniAudio.MaResourceManager* Inno.Native.MiniAudio.MaEngineConfig.PResourceManager
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20369).

## `PResourceManagerVfs`

<a id="api-bf21aae364bba6ad"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.PResourceManagerVfs 9ef436e44e72e10c6f7eadc299f39744456071e18a4e8c5389b0e18ffd91619e -->

```csharp
public void* Inno.Native.MiniAudio.MaEngineConfig.PResourceManagerVfs
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20409).

## `ResourceManagerResampling`

<a id="api-bb86d6cc4e4b9eec"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.ResourceManagerResampling 5d2d912e84487490a14471a1f99110ede1159e0da0692f48aa1fe0dee08016a1 -->

```csharp
public Inno.Native.MiniAudio.MaResamplerConfig Inno.Native.MiniAudio.MaEngineConfig.ResourceManagerResampling
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20415).

## `SampleRate`

<a id="api-677073e7370ecba3"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineConfig.SampleRate 277b110be83ace95fd31b8262492104b89fd5ccc5b6397462f3c1d85bd9e980d -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineConfig.SampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20387).
