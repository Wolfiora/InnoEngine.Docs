---
title: "MaDecodingBackendVtable"
description: "Reference for MaDecodingBackendVtable in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.d7d5349a1da3aa5f
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDecodingBackendVtable`

This reference describes `MaDecodingBackendVtable` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`OnInit`](#api-a5e3ea178879b982) | Field |
| [`OnInitFile`](#api-e4fcbeb5e11807de) | Field |
| [`OnInitFileW`](#api-4387b5a9fc43fade) | Field |
| [`OnInitMemory`](#api-b0301214a6781866) | Field |
| [`OnUninit`](#api-c130c762fae4641a) | Field |

## Type declaration

<a id="api-d7d5349a1da3aa5f"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDecodingBackendVtable ad658a391c7969b3cf75a91a899fd17da86be943ed2c5ba42d3003a2e0553366 -->

```csharp
public struct Inno.Native.MiniAudio.MaDecodingBackendVtable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18727).

## `OnInit`

<a id="api-a5e3ea178879b982"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecodingBackendVtable.OnInit 5bdfa6c403806a61581b5090417fcce478a2de366121b6b189a0f6dd93aca4c3 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, delegate* unmanaged[Cdecl]<void*, void*, ulong, ulong*, Inno.Native.MiniAudio.MaResult>, delegate* unmanaged[Cdecl]<void*, long, Inno.Native.MiniAudio.MaSeekOrigin, Inno.Native.MiniAudio.MaResult>, delegate* unmanaged[Cdecl]<void*, long*, Inno.Native.MiniAudio.MaResult>, void*, Inno.Native.MiniAudio.MaDecodingBackendConfig*, Inno.Native.MiniAudio.MaAllocationCallbacks*, void**, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDecodingBackendVtable.OnInit
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18730).

## `OnInitFile`

<a id="api-e4fcbeb5e11807de"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecodingBackendVtable.OnInitFile b61437b196878183968522f732604b4c0f9b80f6dea0a19b7f12483b265016a5 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, sbyte*, Inno.Native.MiniAudio.MaDecodingBackendConfig*, Inno.Native.MiniAudio.MaAllocationCallbacks*, void**, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDecodingBackendVtable.OnInitFile
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18732).

## `OnInitFileW`

<a id="api-4387b5a9fc43fade"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecodingBackendVtable.OnInitFileW 56394082c3169deb621342c2b74f94eeed4b8960494d608fb496d595aa397204 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, ushort*, Inno.Native.MiniAudio.MaDecodingBackendConfig*, Inno.Native.MiniAudio.MaAllocationCallbacks*, void**, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDecodingBackendVtable.OnInitFileW
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18734).

## `OnInitMemory`

<a id="api-b0301214a6781866"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecodingBackendVtable.OnInitMemory 14a353042a872b4bf6a05b27cb9add4cb32b8572315ae849b88073eff86939a8 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, ulong, Inno.Native.MiniAudio.MaDecodingBackendConfig*, Inno.Native.MiniAudio.MaAllocationCallbacks*, void**, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaDecodingBackendVtable.OnInitMemory
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18736).

## `OnUninit`

<a id="api-c130c762fae4641a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecodingBackendVtable.OnUninit 1b21f3a87eaa59ad2e4227e96c282853c55fa1ac08ac37fd9ca0170ad9e77a57 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, Inno.Native.MiniAudio.MaAllocationCallbacks*, void> Inno.Native.MiniAudio.MaDecodingBackendVtable.OnUninit
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18738).
