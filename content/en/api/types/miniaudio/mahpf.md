---
title: "MaHpf"
description: "Reference for MaHpf in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.0bc5465588b6bc81
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaHpf`

This reference describes `MaHpf` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Channels`](#api-f2da4d144fc70188) | Field |
| [`Format`](#api-1461b79376bd44d7) | Field |
| [`Hpf1Count`](#api-77b399f7b14ed44a) | Field |
| [`Hpf2Count`](#api-2634f8e76eff1cca) | Field |
| [`OwnsHeap`](#api-764d50d336b517d7) | Field |
| [`PHeap`](#api-309fa9920c0ea962) | Field |
| [`PHpf1`](#api-7df45e2cb2d42c3c) | Field |
| [`PHpf2`](#api-bb676b7334041884) | Field |
| [`SampleRate`](#api-84f69d74e4033b35) | Field |

## Type declaration

<a id="api-0bc5465588b6bc81"></a>
<!-- api: T:Inno.Native.MiniAudio.MaHpf 94142c67f55cccc1b4ed9b8d9ec5ff0f3787c0bc5563ba1ea25673b94def5dcf -->

```csharp
public struct Inno.Native.MiniAudio.MaHpf
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20873).

## `Channels`

<a id="api-f2da4d144fc70188"></a>
<!-- api: F:Inno.Native.MiniAudio.MaHpf.Channels f3251e2d4981409a08808873af7692a8956519bace65e745ee64515cf7aa01eb -->

```csharp
public uint Inno.Native.MiniAudio.MaHpf.Channels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20878).

## `Format`

<a id="api-1461b79376bd44d7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaHpf.Format 7758d7f3c35667515b5e8d8007ca80d361671e5729c3b22b95fba59cadba4de2 -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaHpf.Format
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20876).

## `Hpf1Count`

<a id="api-77b399f7b14ed44a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaHpf.Hpf1Count 210ffbaffa72a7a01261878ddad042e4171838be32f77a01cfa45b6e20d57c84 -->

```csharp
public uint Inno.Native.MiniAudio.MaHpf.Hpf1Count
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20882).

## `Hpf2Count`

<a id="api-2634f8e76eff1cca"></a>
<!-- api: F:Inno.Native.MiniAudio.MaHpf.Hpf2Count 2c8e9026996aaa8f780e4b3557180c28647521d036c908aa39e7d6a3c0378718 -->

```csharp
public uint Inno.Native.MiniAudio.MaHpf.Hpf2Count
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20884).

## `OwnsHeap`

<a id="api-764d50d336b517d7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaHpf.OwnsHeap c15cd8a57164a4aa2808d15cf0352d5be1cf1c9794755bd7030bdbb4707c7815 -->

```csharp
public uint Inno.Native.MiniAudio.MaHpf.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20892).

## `PHeap`

<a id="api-309fa9920c0ea962"></a>
<!-- api: F:Inno.Native.MiniAudio.MaHpf.PHeap a78e34d4d4b9e829c523200e5a32e15e0a83bc25574920a345a709013c6bb42b -->

```csharp
public void* Inno.Native.MiniAudio.MaHpf.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20890).

## `PHpf1`

<a id="api-7df45e2cb2d42c3c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaHpf.PHpf1 dd3de5d1a182f70b1d4cc71b896c1b186ff425693baa968fdd634ff6e2e71732 -->

```csharp
public Inno.Native.MiniAudio.MaHpf1* Inno.Native.MiniAudio.MaHpf.PHpf1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20886).

## `PHpf2`

<a id="api-bb676b7334041884"></a>
<!-- api: F:Inno.Native.MiniAudio.MaHpf.PHpf2 7bc376142fd2080fbe3d7acb7ac28f5980f2b60fed720f8b38bbddd1bdf8aae4 -->

```csharp
public Inno.Native.MiniAudio.MaHpf2* Inno.Native.MiniAudio.MaHpf.PHpf2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20888).

## `SampleRate`

<a id="api-84f69d74e4033b35"></a>
<!-- api: F:Inno.Native.MiniAudio.MaHpf.SampleRate bf1dfe0b0836f5b4f88595f20f36be55a4b60ee91960bee4163dc63fa27a0348 -->

```csharp
public uint Inno.Native.MiniAudio.MaHpf.SampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20880).
