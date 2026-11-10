---
title: "SDLIOStreamInterface"
description: "Reference for SDLIOStreamInterface in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.a0da7e0f8bdeed68
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLIOStreamInterface`

This reference describes `SDLIOStreamInterface` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Close`](#api-efdcd5bb6b0bcf07) | Field |
| [`Flush`](#api-5775846b40312b79) | Field |
| [`Read`](#api-21c074416277d179) | Field |
| [`Seek`](#api-31bd49bc0631669c) | Field |
| [`Size`](#api-cfa6b6d4bdbab45f) | Field |
| [`Version`](#api-8019131067a4bde8) | Field |
| [`Write`](#api-856cde988d823e44) | Field |

## Type declaration

<a id="api-a0da7e0f8bdeed68"></a>
<!-- api: T:Inno.Native.Sdl3.SDLIOStreamInterface a7862c21455612cdf6bd95019833d177e3498b22983cb3b5a4a74875dff6fd3f -->

```csharp
public struct Inno.Native.Sdl3.SDLIOStreamInterface
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57502).

## `Close`

<a id="api-efdcd5bb6b0bcf07"></a>
<!-- api: F:Inno.Native.Sdl3.SDLIOStreamInterface.Close 9f44a51c8aeb106e60294f7bb7f2b196bebd95e57dd24d9d930a1af4479ca5f2 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, byte> Inno.Native.Sdl3.SDLIOStreamInterface.Close
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57517).

## `Flush`

<a id="api-5775846b40312b79"></a>
<!-- api: F:Inno.Native.Sdl3.SDLIOStreamInterface.Flush f148842958e9663c53420f1d070aa618dc87f70bec9f0133b30d50b1c9b2beb8 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, Inno.Native.Sdl3.SDLIOStatus*, byte> Inno.Native.Sdl3.SDLIOStreamInterface.Flush
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57515).

## `Read`

<a id="api-21c074416277d179"></a>
<!-- api: F:Inno.Native.Sdl3.SDLIOStreamInterface.Read 4a12e451a39eb949b872f541c9175a1a6985bcd0f02bbbf9fe5f037f9b3cdd22 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, ulong, Inno.Native.Sdl3.SDLIOStatus*, ulong> Inno.Native.Sdl3.SDLIOStreamInterface.Read
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57511).

## `Seek`

<a id="api-31bd49bc0631669c"></a>
<!-- api: F:Inno.Native.Sdl3.SDLIOStreamInterface.Seek 721f94d954b0adc5d46ad05c29d2f6b0ff75295f1910b22c0f701f3011f5e2e9 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, long, Inno.Native.Sdl3.SDLIOWhence, long> Inno.Native.Sdl3.SDLIOStreamInterface.Seek
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57509).

## `Size`

<a id="api-cfa6b6d4bdbab45f"></a>
<!-- api: F:Inno.Native.Sdl3.SDLIOStreamInterface.Size d577bdff439d4b9fbd53d9f06fd40d83f8e3937fad6662d42daff8ccedef0786 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, long> Inno.Native.Sdl3.SDLIOStreamInterface.Size
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57507).

## `Version`

<a id="api-8019131067a4bde8"></a>
<!-- api: F:Inno.Native.Sdl3.SDLIOStreamInterface.Version ad11a899381bbd477a6aeb7aaa3c438c5e6243c7629754704c1371eb90866af3 -->

```csharp
public uint Inno.Native.Sdl3.SDLIOStreamInterface.Version
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57505).

## `Write`

<a id="api-856cde988d823e44"></a>
<!-- api: F:Inno.Native.Sdl3.SDLIOStreamInterface.Write 79d5614aae0cbea096daeba561669445aee07848c1f6ef1ac4d955e9cfce0530 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, ulong, Inno.Native.Sdl3.SDLIOStatus*, ulong> Inno.Native.Sdl3.SDLIOStreamInterface.Write
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57513).
