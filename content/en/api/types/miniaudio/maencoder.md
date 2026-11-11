---
title: "MaEncoder"
description: "Reference for MaEncoder in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.56bbe9693d05d367
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEncoder`

This reference describes `MaEncoder` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Config`](#api-e1b3fd66f7f5d0b8) | Field |
| [`Data`](#api-712303ed99fefc2d) | Field |
| [`OnInit`](#api-034320b0eafc6721) | Field |
| [`OnSeek`](#api-9246d7925e2b411a) | Field |
| [`OnUninit`](#api-3ba11ea441d8acf3) | Field |
| [`OnWrite`](#api-0cac8bfc3b7aa730) | Field |
| [`OnWritePcmFrames`](#api-42dfad1180de13b1) | Field |
| [`PInternalEncoder`](#api-c5d71d0cc7011566) | Field |
| [`PUserData`](#api-4ac82304377db16a) | Field |

## Type declaration

<a id="api-56bbe9693d05d367"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEncoder 4ac7a028d9dfd68722b3d2ffb01131e4024f9c9d54b2930a381a642ad82b23fb -->

```csharp
public struct Inno.Native.MiniAudio.MaEncoder
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20139).

## `Config`

<a id="api-e1b3fd66f7f5d0b8"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEncoder.Config 09e91c87e01cc0803e1842ebdcd94439978f83e1a5ac33540e01107fc56b349d -->

```csharp
public Inno.Native.MiniAudio.MaEncoderConfig Inno.Native.MiniAudio.MaEncoder.Config
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20142).

## `Data`

<a id="api-712303ed99fefc2d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEncoder.Data cfaf360bdf3e01f880617b015a23679917776fc898258fd2122bfd2f1f0d9bc7 -->

```csharp
public Inno.Native.MiniAudio.MaEncoderAnonymousUnion08d5de81b3615c5c Inno.Native.MiniAudio.MaEncoder.Data
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20158).

## `OnInit`

<a id="api-034320b0eafc6721"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEncoder.OnInit 0d38579b943b3f3d67017b8d13fd8da360cfa94644733be4d3551138c4e850f8 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaEncoder*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaEncoder.OnInit
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20148).

## `OnSeek`

<a id="api-9246d7925e2b411a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEncoder.OnSeek 805f5f9bf4490a1d917ae48a6862f2b8f0ee3f007aefa0e34a366347eaf0afb3 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaEncoder*, long, Inno.Native.MiniAudio.MaSeekOrigin, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaEncoder.OnSeek
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20146).

## `OnUninit`

<a id="api-3ba11ea441d8acf3"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEncoder.OnUninit 8c045de31857ee2057a98b1ec262b3089f4bffe80752894f87e33cf13b2daaa9 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaEncoder*, void> Inno.Native.MiniAudio.MaEncoder.OnUninit
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20150).

## `OnWrite`

<a id="api-0cac8bfc3b7aa730"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEncoder.OnWrite 85e25ff2be6cff28f07fe7e238f0c67a4cdda8f2e53699b913e91932e357a754 -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaEncoder*, void*, ulong, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaEncoder.OnWrite
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20144).

## `OnWritePcmFrames`

<a id="api-42dfad1180de13b1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEncoder.OnWritePcmFrames 0af3593fbb2561e040cd76c6ab1a63087785f39bc25f53b8973de5cc9063c44e -->

```csharp
public delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaEncoder*, void*, ulong, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaEncoder.OnWritePcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20152).

## `PInternalEncoder`

<a id="api-c5d71d0cc7011566"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEncoder.PInternalEncoder 2a42357db9f02654cf5822490e34f212e633b787d2ec3b3080438836644aecce -->

```csharp
public void* Inno.Native.MiniAudio.MaEncoder.PInternalEncoder
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20156).

## `PUserData`

<a id="api-4ac82304377db16a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEncoder.PUserData a7be18ad70b76ce685fa6cb45c601ccadbc0e8fea737e7a416586ebe9a0ba680 -->

```csharp
public void* Inno.Native.MiniAudio.MaEncoder.PUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20154).
