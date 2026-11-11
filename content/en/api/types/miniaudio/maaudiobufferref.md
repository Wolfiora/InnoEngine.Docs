---
title: "MaAudioBufferRef"
description: "Reference for MaAudioBufferRef in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.ad51a19e9634118e
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaAudioBufferRef`

This reference describes `MaAudioBufferRef` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Channels`](#api-90b78726e7d97301) | Field |
| [`Cursor`](#api-046d3342978d613d) | Field |
| [`Ds`](#api-1469f179600f2e17) | Field |
| [`Format`](#api-7feca9adc0e4f676) | Field |
| [`PData`](#api-91ecaebc68a5deb5) | Field |
| [`SampleRate`](#api-4142dfb0d88aefc0) | Field |
| [`SizeInFrames`](#api-03d4f77ba9b27955) | Field |

## Type declaration

<a id="api-ad51a19e9634118e"></a>
<!-- api: T:Inno.Native.MiniAudio.MaAudioBufferRef 88ddd7872c72ef48bc0e3462a338f5697c9be67a1a676a1d36eeebea34637bf5 -->

```csharp
public struct Inno.Native.MiniAudio.MaAudioBufferRef
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17006).

## `Channels`

<a id="api-90b78726e7d97301"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferRef.Channels c384bb7e9dfee4a84019a5a7c2931bc0a4a7612998cbf8efd141e7809c93055e -->

```csharp
public uint Inno.Native.MiniAudio.MaAudioBufferRef.Channels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17013).

## `Cursor`

<a id="api-046d3342978d613d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferRef.Cursor 13979587330223bf3212d469c67b16414ceb824efc8e90caa7d38a137e807fb8 -->

```csharp
public ulong Inno.Native.MiniAudio.MaAudioBufferRef.Cursor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17017).

## `Ds`

<a id="api-1469f179600f2e17"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferRef.Ds 0ed73fa4d7fdc223f9c68e12473e6a761c0a1ee1f4c127d44bc3f7c5290b24f5 -->

```csharp
public Inno.Native.MiniAudio.MaDataSourceBase Inno.Native.MiniAudio.MaAudioBufferRef.Ds
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17009).

## `Format`

<a id="api-7feca9adc0e4f676"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferRef.Format 193363daf7065dcdf73899211cf56190ae8fe2c0e9321c8f30ac783f738f2e10 -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaAudioBufferRef.Format
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17011).

## `PData`

<a id="api-91ecaebc68a5deb5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferRef.PData afae3499f162142efc6bcfd8a377678a63573d7eb798a86def974fdff9b96454 -->

```csharp
public void* Inno.Native.MiniAudio.MaAudioBufferRef.PData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17021).

## `SampleRate`

<a id="api-4142dfb0d88aefc0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferRef.SampleRate 2b1cf46bb2717257a64976670071c668fd99cc0582372d201b4d9551b3272369 -->

```csharp
public uint Inno.Native.MiniAudio.MaAudioBufferRef.SampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17015).

## `SizeInFrames`

<a id="api-03d4f77ba9b27955"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAudioBufferRef.SizeInFrames d8c5bc2c9809bcf608ec25f7dc2e83d29e8164ccac6a354dd8a3876dff29df7b -->

```csharp
public ulong Inno.Native.MiniAudio.MaAudioBufferRef.SizeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L17019).
