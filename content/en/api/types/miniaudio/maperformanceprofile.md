---
title: "MaPerformanceProfile"
description: "Reference for MaPerformanceProfile in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.b1d74a932f03be98
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaPerformanceProfile`

This reference describes `MaPerformanceProfile` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_performance_profile_conservative`](#api-52a7a1625a55786e) | Field |
| [`ma_performance_profile_low_latency`](#api-91209a465ff539d1) | Field |

## Type declaration

<a id="api-b1d74a932f03be98"></a>
<!-- api: T:Inno.Native.MiniAudio.MaPerformanceProfile 48be9eefb77ba380c10e9230f854b9a95c21f9c643c9e49731b01e765f1b482c -->

```csharp
public enum Inno.Native.MiniAudio.MaPerformanceProfile : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23080).

## `ma_performance_profile_conservative`

<a id="api-52a7a1625a55786e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaPerformanceProfile.ma_performance_profile_conservative 66b9f777673313465b470583b8eb648d47f4b358b63d2a94b041339eeb4b390b -->

```csharp
Inno.Native.MiniAudio.MaPerformanceProfile.ma_performance_profile_conservative = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23083).

## `ma_performance_profile_low_latency`

<a id="api-91209a465ff539d1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaPerformanceProfile.ma_performance_profile_low_latency 1c78515cff92cfe917de293c6bbd9a2ebc7450618302cba5f2f01ce0d803a25c -->

```csharp
Inno.Native.MiniAudio.MaPerformanceProfile.ma_performance_profile_low_latency = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23082).
