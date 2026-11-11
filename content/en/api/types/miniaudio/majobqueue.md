---
title: "MaJobQueue"
description: "Reference for MaJobQueue in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.610d57cb597254b0
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaJobQueue`

This reference describes `MaJobQueue` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Allocator`](#api-d059d1d58232572c) | Field |
| [`Capacity`](#api-caa77e2c7b7d3506) | Field |
| [`Flags`](#api-7fc2d4f61ff7b775) | Field |
| [`Head`](#api-8e0b3eec67f5e92c) | Field |
| [`Lock`](#api-e5b3da4130e33128) | Field |
| [`OwnsHeap`](#api-20ca7982ce70a678) | Field |
| [`PHeap`](#api-651916576752a7a9) | Field |
| [`PJobs`](#api-1c8f5ad03aed80e5) | Field |
| [`Sem`](#api-c0833e7254a8f556) | Field |
| [`Tail`](#api-4b3becc6e62c650d) | Field |

## Type declaration

<a id="api-610d57cb597254b0"></a>
<!-- api: T:Inno.Native.MiniAudio.MaJobQueue 2274079910d7ed5c226de5d7a6e7410c2bfd582abd6bb8819bb1727fe24def6a -->

```csharp
public struct Inno.Native.MiniAudio.MaJobQueue
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21621).

## `Allocator`

<a id="api-d059d1d58232572c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobQueue.Allocator 1b20f396347ae1924e52daa87d4724625fa55bcddec44c1e666371c2dcd9963d -->

```csharp
public Inno.Native.MiniAudio.MaSlotAllocator Inno.Native.MiniAudio.MaJobQueue.Allocator
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21634).

## `Capacity`

<a id="api-caa77e2c7b7d3506"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobQueue.Capacity 3959f2effbdedbe6628dcf5c3cd3bfd5c662618b3acda98db6725969b634f1dc -->

```csharp
public uint Inno.Native.MiniAudio.MaJobQueue.Capacity
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21626).

## `Flags`

<a id="api-7fc2d4f61ff7b775"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobQueue.Flags 9612eb4acc6abfeb64464160f1d934e4fc0072bd4ad768f6ed3365c300fd53f6 -->

```csharp
public uint Inno.Native.MiniAudio.MaJobQueue.Flags
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21624).

## `Head`

<a id="api-8e0b3eec67f5e92c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobQueue.Head 4eca980496bf8dfbdc4da3faaf2e209ac8e4ed7c02d0940b4bfa6aa0ec7c0036 -->

```csharp
public ulong Inno.Native.MiniAudio.MaJobQueue.Head
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21628).

## `Lock`

<a id="api-e5b3da4130e33128"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobQueue.Lock e024344e4a07260b1d5675d55e91fb43f581a991d3d3cc962f200b3ca49ac3c7 -->

```csharp
public uint Inno.Native.MiniAudio.MaJobQueue.Lock
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21638).

## `OwnsHeap`

<a id="api-20ca7982ce70a678"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobQueue.OwnsHeap fbbf0371fe9f51ff4583a5aea67bc6891dbfc571ffda37e9b9eba8e25fe6f409 -->

```csharp
public uint Inno.Native.MiniAudio.MaJobQueue.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21642).

## `PHeap`

<a id="api-651916576752a7a9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobQueue.PHeap 240ceaf161d0fa86bfc6bc6f54fc369a7251fc5507bf643ce407ae08db5ad6a0 -->

```csharp
public void* Inno.Native.MiniAudio.MaJobQueue.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21640).

## `PJobs`

<a id="api-1c8f5ad03aed80e5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobQueue.PJobs 93d4d4a3b0029a6d95312df61ebb7419f37c34de1d0aedc2b855b91a09e28c00 -->

```csharp
public Inno.Native.MiniAudio.MaJob* Inno.Native.MiniAudio.MaJobQueue.PJobs
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21636).

## `Sem`

<a id="api-c0833e7254a8f556"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobQueue.Sem 04ea41901a8e987052dba9fa1a6b405e8e77cc0493e097d8b108e49db4f6b8cc -->

```csharp
public void* Inno.Native.MiniAudio.MaJobQueue.Sem
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21632).

## `Tail`

<a id="api-4b3becc6e62c650d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaJobQueue.Tail ecb44ee71013742c0c42d5e892c844a71d80b56b4e7fe8f4242e57bef5d0f9ad -->

```csharp
public ulong Inno.Native.MiniAudio.MaJobQueue.Tail
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21630).
