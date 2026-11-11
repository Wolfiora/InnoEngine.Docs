---
title: "MaDataSourceVtable"
description: "Reference for MaDataSourceVtable in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.aa1e8d04d812710e
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDataSourceVtable`

This reference describes `MaDataSourceVtable` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Flags`](#api-33bc5c77a1d40f5e) | Field |
| [`OnGetCursor`](#api-6d465ae1ace92e49) | Field |
| [`OnGetDataFormat`](#api-213b74ebc47e96a7) | Field |
| [`OnGetLength`](#api-99006581549c1967) | Field |
| [`OnRead`](#api-bdc57af6fd22ab14) | Field |
| [`OnSeek`](#api-7d83234d019a1c65) | Field |
| [`OnSetLooping`](#api-ba7b40d381bdeaea) | Field |

## Type declaration

<a id="api-aa1e8d04d812710e"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDataSourceVtable 9da866dc883022e7329fa9981e9f1f64a13d351aef037b14d20b994ed642676f -->

```csharp
public struct Inno.Native.MiniAudio.MaDataSourceVtable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18471).

## `Flags`

<a id="api-33bc5c77a1d40f5e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceVtable.Flags fca57e0c25cd8ca191635b888bf8ea05a0772e1e31941c96337a636ee429f459 -->

```csharp
public uint Inno.Native.MiniAudio.MaDataSourceVtable.Flags
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18486).

## `OnGetCursor`

<a id="api-6d465ae1ace92e49"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceVtable.OnGetCursor 77463be7fae7e063980e6bca6351a0dc41181284ff50843b30f1f97899e80126 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDataSourceVtable.OnGetCursor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18480).

## `OnGetDataFormat`

<a id="api-213b74ebc47e96a7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceVtable.OnGetDataFormat 0576f9044d8cb09e9e82b759448b0279830ba9a9c866521bdfc31fe95ae3b2ac -->

```csharp
public delegate* unmanaged[Cdecl]<void*, Inno.Native.MiniAudio.MaFormat*, uint*, uint*, byte*, ulong, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDataSourceVtable.OnGetDataFormat
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18478).

## `OnGetLength`

<a id="api-99006581549c1967"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceVtable.OnGetLength 05267d48a38360f4966c060d541064e12ee941a05a401566d8865198cd420aa2 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDataSourceVtable.OnGetLength
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18482).

## `OnRead`

<a id="api-bdc57af6fd22ab14"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceVtable.OnRead 1c777f7b998607ddb4b10deef65cb66d74623688a245b34d717f5ce68c1f3061 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, ulong, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDataSourceVtable.OnRead
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18474).

## `OnSeek`

<a id="api-7d83234d019a1c65"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceVtable.OnSeek 0425678e2dd8ba9c69165ee88810e13c886d6dee895b753980bcfbd527135f36 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, ulong, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDataSourceVtable.OnSeek
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18476).

## `OnSetLooping`

<a id="api-ba7b40d381bdeaea"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceVtable.OnSetLooping 0df04b61dd91de56f0d189edac31b394c0658f97bd25b949c5087cd503a9b757 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, uint, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDataSourceVtable.OnSetLooping
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18484).
