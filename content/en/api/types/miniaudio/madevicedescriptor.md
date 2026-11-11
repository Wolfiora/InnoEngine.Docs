---
title: "MaDeviceDescriptor"
description: "Reference for MaDeviceDescriptor in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.e2fd1f5900559f92
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDeviceDescriptor`

This reference describes `MaDeviceDescriptor` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`ChannelMap`](#api-b54169747dae9e31) | Field |
| [`Channels`](#api-482abd53bc0015d4) | Field |
| [`Format`](#api-9794faa4f1865172) | Field |
| [`PDeviceId`](#api-28bd8db1694e03d7) | Field |
| [`PeriodCount`](#api-56336e6bbcfd571e) | Field |
| [`PeriodSizeInFrames`](#api-973798e432d7c84a) | Field |
| [`PeriodSizeInMilliseconds`](#api-981c88ae4bcfc7b6) | Field |
| [`SampleRate`](#api-939e2365c2fe50bb) | Field |
| [`ShareMode`](#api-014beeaa79ace7b6) | Field |

## Type declaration

<a id="api-e2fd1f5900559f92"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDeviceDescriptor a69cf192d4c194d48eca8e1f3e3166dc4316e7a538378b24c67144242c8fdb2d -->

```csharp
public struct Inno.Native.MiniAudio.MaDeviceDescriptor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19698).

## `ChannelMap`

<a id="api-b54169747dae9e31"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceDescriptor.ChannelMap 909273a1d603c243b46c5567dce21145d7f8b61e36233c02c44ce4dcb9b5cbe4 -->

```csharp
public Inno.Native.MiniAudio.NativeArray_84d2a1a3ae107f27 Inno.Native.MiniAudio.MaDeviceDescriptor.ChannelMap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19711).

## `Channels`

<a id="api-482abd53bc0015d4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceDescriptor.Channels 96b1fede226b60eecca816c1d56bf486f9b8eb849766971e38028d8d0b2c9258 -->

```csharp
public uint Inno.Native.MiniAudio.MaDeviceDescriptor.Channels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19707).

## `Format`

<a id="api-9794faa4f1865172"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceDescriptor.Format a7821a0704b12ea045f1e7d0caa00ea87b0be6c9d0a8869288b3a42b18b0c9c9 -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaDeviceDescriptor.Format
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19705).

## `PDeviceId`

<a id="api-28bd8db1694e03d7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceDescriptor.PDeviceId bfd4406bcc616025c6a98c617f789b9076bb511abcc5dec110e0f10711e8b6c1 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceId* Inno.Native.MiniAudio.MaDeviceDescriptor.PDeviceId
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19701).

## `PeriodCount`

<a id="api-56336e6bbcfd571e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceDescriptor.PeriodCount 0675fe267a62abddef31bc7951a0714bd1ccc42fcb1126cf5efd46cc36bac41b -->

```csharp
public uint Inno.Native.MiniAudio.MaDeviceDescriptor.PeriodCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19717).

## `PeriodSizeInFrames`

<a id="api-973798e432d7c84a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceDescriptor.PeriodSizeInFrames 4bf9961492395c120196b993f64d26e2cc34e91537bf7b95c8edb1155e15b63a -->

```csharp
public uint Inno.Native.MiniAudio.MaDeviceDescriptor.PeriodSizeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19713).

## `PeriodSizeInMilliseconds`

<a id="api-981c88ae4bcfc7b6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceDescriptor.PeriodSizeInMilliseconds cedc4c4812252882101d12481a5f42de7697ddacbca065c36bbf979e19402ede -->

```csharp
public uint Inno.Native.MiniAudio.MaDeviceDescriptor.PeriodSizeInMilliseconds
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19715).

## `SampleRate`

<a id="api-939e2365c2fe50bb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceDescriptor.SampleRate d2f81eb9318cdf365349ddcfa04bb613552406d52952952d2d6152f4bb21b23c -->

```csharp
public uint Inno.Native.MiniAudio.MaDeviceDescriptor.SampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19709).

## `ShareMode`

<a id="api-014beeaa79ace7b6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDeviceDescriptor.ShareMode 065edce86d81691fa072bddcf96d075d2b5a88e70c9bae5e8028afdaf96a8321 -->

```csharp
public Inno.Native.MiniAudio.MaShareMode Inno.Native.MiniAudio.MaDeviceDescriptor.ShareMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19703).
