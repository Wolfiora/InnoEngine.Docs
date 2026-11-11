---
title: "MaAudioBufferConfig"
description: "Reference for MaAudioBufferConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.5ad5f59e561894b4
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaAudioBufferConfig`

This reference describes `MaAudioBufferConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AllocationCallbacks`](#api-f2a1c7db6d0a189d) | Field |
| [`Channels`](#api-1edb8821d9a0e7d4) | Field |
| [`Format`](#api-c38678dcd2d6970a) | Field |
| [`PData`](#api-471a7013de785799) | Field |
| [`SampleRate`](#api-0f7e904b564a95e3) | Field |
| [`SizeInFrames`](#api-e255526c0fcc8659) | Field |

## Type declaration

<a id="api-5ad5f59e561894b4"></a>
<!-- api: T:Inno.Native.MiniAudio.MaAudioBufferConfig 28b05886c3547baba4af02509ab4608365553cf4496b781414e73ce57fce74e0 -->

```csharp
public struct Inno.Native.MiniAudio.MaAudioBufferConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16975).

## `AllocationCallbacks`

<a id="api-f2a1c7db6d0a189d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferConfig.AllocationCallbacks 4fee3ef4135266cff9abc9a2978435c3fd2522ad11d87b45feefc8281a1f2fb0 -->

```csharp
public Inno.Native.MiniAudio.MaAllocationCallbacks Inno.Native.MiniAudio.MaAudioBufferConfig.AllocationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16988).

## `Channels`

<a id="api-1edb8821d9a0e7d4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferConfig.Channels fa872b5568832ed17c833c051d14c10fb5c6fa517569d827da80e0d62b3614b3 -->

```csharp
public uint Inno.Native.MiniAudio.MaAudioBufferConfig.Channels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16980).

## `Format`

<a id="api-c38678dcd2d6970a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferConfig.Format 84447d12cf61c921c1ffd30769d6b57338e7112215c15bfeb618482ad82ce098 -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaAudioBufferConfig.Format
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16978).

## `PData`

<a id="api-471a7013de785799"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferConfig.PData 8e53b5eca8cf89223140f867517374e95eb305b0bf8f3128a94a36d5887bb456 -->

```csharp
public void* Inno.Native.MiniAudio.MaAudioBufferConfig.PData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16986).

## `SampleRate`

<a id="api-0f7e904b564a95e3"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferConfig.SampleRate 15ffab6667b3b27cad25f0802bedad0db662fd707bf7af6bac8b0db9def516b1 -->

```csharp
public uint Inno.Native.MiniAudio.MaAudioBufferConfig.SampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16982).

## `SizeInFrames`

<a id="api-e255526c0fcc8659"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferConfig.SizeInFrames 07e4cff8403fbb51bf6ce5efb7aa76fd3c7244b170736fd89205f37aedae37be -->

```csharp
public ulong Inno.Native.MiniAudio.MaAudioBufferConfig.SizeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16984).
