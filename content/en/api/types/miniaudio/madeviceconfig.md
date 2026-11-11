---
title: "MaDeviceConfig"
description: "Reference for MaDeviceConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.68e793133410a3d7
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDeviceConfig`

This reference describes `MaDeviceConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Aaudio`](#api-0099c99cb0030359) | Field |
| [`Alsa`](#api-00ab3b054221b0e5) | Field |
| [`Capture`](#api-4339ef32828d46a6) | Field |
| [`Coreaudio`](#api-de526472f57382f9) | Field |
| [`DataCallback`](#api-368b895bae1d7c5f) | Field |
| [`DeviceType`](#api-8735583ba0a18de6) | Field |
| [`NoClip`](#api-ad42c65d4879daa4) | Field |
| [`NoDisableDenormals`](#api-d1c4f99dbb28311c) | Field |
| [`NoFixedSizedCallback`](#api-d5c93d0f19fa6c06) | Field |
| [`NoPreSilencedOutputBuffer`](#api-877b94bd3a3ef533) | Field |
| [`NotificationCallback`](#api-913b95bc78d6df73) | Field |
| [`Opensl`](#api-46962a57b427d4ed) | Field |
| [`PerformanceProfile`](#api-4ca8decb9127fbf8) | Field |
| [`Periods`](#api-382505a966946d59) | Field |
| [`PeriodSizeInFrames`](#api-cbb17866f5c40127) | Field |
| [`PeriodSizeInMilliseconds`](#api-74479e7189c7de13) | Field |
| [`Playback`](#api-3413de2a5b68eb59) | Field |
| [`Pulse`](#api-bec656a68d8613cf) | Field |
| [`PUserData`](#api-fc544ed1de8bf284) | Field |
| [`Resampling`](#api-50e89b3a33f20e8f) | Field |
| [`SampleRate`](#api-7c097e9bd12758ed) | Field |
| [`StopCallback`](#api-bbd2387c6470da0e) | Field |
| [`Wasapi`](#api-834b9b2a65b2d2c6) | Field |

## Type declaration

<a id="api-68e793133410a3d7"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDeviceConfig 9a3c04bea69dfd3cac81e5a25d33fd95bbf9bdda0687793866d1980da3407c94 -->

```csharp
public struct Inno.Native.MiniAudio.MaDeviceConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19394).

## `Aaudio`

<a id="api-0099c99cb0030359"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.Aaudio 64a26e800778760d54deee8df629fff4294c93d2580ceb95ad5f26dff6d2d38f -->

```csharp
public Inno.Native.MiniAudio.MaDeviceConfigAnonymousStruct1a945a4ef0e54b15 Inno.Native.MiniAudio.MaDeviceConfig.Aaudio
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19441).

## `Alsa`

<a id="api-00ab3b054221b0e5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.Alsa 36fa653c2673faa76d1f8d8cf2fdd2ae61e1236916352c3d8e1f908b9af26807 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceConfigAnonymousStruct48b4ba25a7d0b304 Inno.Native.MiniAudio.MaDeviceConfig.Alsa
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19433).

## `Capture`

<a id="api-4339ef32828d46a6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.Capture 98ef2d02eb7dea83961dd339abf6c749a25466fb4fddd0019dcdd845fade047f -->

```csharp
public Inno.Native.MiniAudio.MaDeviceConfigAnonymousStruct0565c2863d098d59 Inno.Native.MiniAudio.MaDeviceConfig.Capture
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19429).

## `Coreaudio`

<a id="api-de526472f57382f9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.Coreaudio 928efe78fbb90cb281d6e943c93515706c6ea6fe30d1ec73327f8bc2e49ef18b -->

```csharp
public Inno.Native.MiniAudio.MaDeviceConfigAnonymousStructD49a53f210d254b2 Inno.Native.MiniAudio.MaDeviceConfig.Coreaudio
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19437).

## `DataCallback`

<a id="api-368b895bae1d7c5f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.DataCallback fe984735c0546087896d38a37e07830191a11ab10f88549c6a496c879eeb25de -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, void*, void*, uint, void> Inno.Native.MiniAudio.MaDeviceConfig.DataCallback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19417).

## `DeviceType`

<a id="api-8735583ba0a18de6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.DeviceType 7b632558b38979b782d1647426de22429d0c0b7ef343296f1cf6a667fb0def78 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceType Inno.Native.MiniAudio.MaDeviceConfig.DeviceType
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19397).

## `NoClip`

<a id="api-ad42c65d4879daa4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.NoClip 7c1a7a99665183467991d1812c39a2f33acd21050aefffbc32ee76c337129d88 -->

```csharp
public byte Inno.Native.MiniAudio.MaDeviceConfig.NoClip
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19411).

## `NoDisableDenormals`

<a id="api-d1c4f99dbb28311c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.NoDisableDenormals 9eef34a7048da74fe2395f26c7ea9a7224b1902ca7878e59498b3bfa828652f0 -->

```csharp
public byte Inno.Native.MiniAudio.MaDeviceConfig.NoDisableDenormals
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19413).

## `NoFixedSizedCallback`

<a id="api-d5c93d0f19fa6c06"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.NoFixedSizedCallback b760a2a6f53fcee65ae04ad844cdf4513a866d496867d6862d9739fba8dbfde1 -->

```csharp
public byte Inno.Native.MiniAudio.MaDeviceConfig.NoFixedSizedCallback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19415).

## `NoPreSilencedOutputBuffer`

<a id="api-877b94bd3a3ef533"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.NoPreSilencedOutputBuffer c21c7faeb7b6586d900179e27e4d79c957cf597ff09765ef51d115730ac9a702 -->

```csharp
public byte Inno.Native.MiniAudio.MaDeviceConfig.NoPreSilencedOutputBuffer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19409).

## `NotificationCallback`

<a id="api-913b95bc78d6df73"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.NotificationCallback 16e2a4f991236711ae3b2c716b696b7589be1cb0b4a7addf92f78a486ad133a9 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDeviceNotification*, void> Inno.Native.MiniAudio.MaDeviceConfig.NotificationCallback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19419).

## `Opensl`

<a id="api-46962a57b427d4ed"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.Opensl 8d45e52f1d20898a380e4b309c1785e011fb23f4de46fd01e2f77513e83f8c24 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceConfigAnonymousStruct82c1cf4d27d7314d Inno.Native.MiniAudio.MaDeviceConfig.Opensl
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19439).

## `PerformanceProfile`

<a id="api-4ca8decb9127fbf8"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.PerformanceProfile 07cc7eafe3d1d530302876e0f7554688883053686b9648df7432db441ef62911 -->

```csharp
public Inno.Native.MiniAudio.MaPerformanceProfile Inno.Native.MiniAudio.MaDeviceConfig.PerformanceProfile
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19407).

## `Periods`

<a id="api-382505a966946d59"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.Periods 2ea3f75f33688f12cf969aff5d9ccbb387ec4e0cb939548cd8f060928eeec69c -->

```csharp
public uint Inno.Native.MiniAudio.MaDeviceConfig.Periods
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19405).

## `PeriodSizeInFrames`

<a id="api-cbb17866f5c40127"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.PeriodSizeInFrames c9ad3bb7524aaddff11afb5de8bd9f202aa2aab1eff79da2f34b189e4c60db9d -->

```csharp
public uint Inno.Native.MiniAudio.MaDeviceConfig.PeriodSizeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19401).

## `PeriodSizeInMilliseconds`

<a id="api-74479e7189c7de13"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.PeriodSizeInMilliseconds fe35b54597d8617d7eae6aa2bca9e6080f7f20c147f533b6e0c76e40d99f6295 -->

```csharp
public uint Inno.Native.MiniAudio.MaDeviceConfig.PeriodSizeInMilliseconds
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19403).

## `Playback`

<a id="api-3413de2a5b68eb59"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.Playback 3e39f35d50bf58db775518baff03994517932ffd4da3656b47167e6fc126a9d0 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceConfigAnonymousStruct84db77115cd2b80e Inno.Native.MiniAudio.MaDeviceConfig.Playback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19427).

## `Pulse`

<a id="api-bec656a68d8613cf"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.Pulse a242d3e09d38e86ef8a2400290c5d932b174fe7f657c86794f81df3dce559ce6 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceConfigAnonymousStructD748817f3e1ac316 Inno.Native.MiniAudio.MaDeviceConfig.Pulse
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19435).

## `PUserData`

<a id="api-fc544ed1de8bf284"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.PUserData f1a63486cff2923752cf750310068e3b22d031f13cb6b562a64e87c1a3e8bf01 -->

```csharp
public void* Inno.Native.MiniAudio.MaDeviceConfig.PUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19423).

## `Resampling`

<a id="api-50e89b3a33f20e8f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.Resampling 012e2113c5a7795ed0b2d454b59684f73ff9385c5c59beb6484ce705bcaa07a7 -->

```csharp
public Inno.Native.MiniAudio.MaResamplerConfig Inno.Native.MiniAudio.MaDeviceConfig.Resampling
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19425).

## `SampleRate`

<a id="api-7c097e9bd12758ed"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.SampleRate 7ef6f7f95835b548d8d09bae5727243d06c997943a7e7849cd10d278a48ffd63 -->

```csharp
public uint Inno.Native.MiniAudio.MaDeviceConfig.SampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19399).

## `StopCallback`

<a id="api-bbd2387c6470da0e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.StopCallback ae07d0880b3a3db242db08a7b6fd886296e836ab1e1e861b1f9a2446183e27af -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDevice*, void> Inno.Native.MiniAudio.MaDeviceConfig.StopCallback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19421).

## `Wasapi`

<a id="api-834b9b2a65b2d2c6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceConfig.Wasapi 20e9a6f7316870a6c5caf594961ad781d0bde8f33470c4b6b39df96b347bd0b3 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceConfigAnonymousStruct79f44ea843b7392f Inno.Native.MiniAudio.MaDeviceConfig.Wasapi
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19431).
