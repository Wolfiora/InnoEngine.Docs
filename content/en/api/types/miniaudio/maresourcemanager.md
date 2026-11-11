---
title: "MaResourceManager"
description: "Reference for MaResourceManager in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.392400befc01b8d8
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaResourceManager`

This reference describes `MaResourceManager` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Config`](#api-9e068bcd399cb3ba) | Field |
| [`DataBufferBstLock`](#api-e718f34eecede8cd) | Field |
| [`DefaultVfs`](#api-65e872153dff9d04) | Field |
| [`JobQueue`](#api-9844ced69e081fa4) | Field |
| [`JobThreads`](#api-79256286557388aa) | Field |
| [`Log`](#api-71ca1217d0e6cf74) | Field |
| [`PRootDataBufferNode`](#api-0cb19f3f4655ee55) | Field |

## Type declaration

<a id="api-392400befc01b8d8"></a>
<!-- api: T:Inno.Native.MiniAudio.MaResourceManager 1c42c067ab37f7e1f9b8a5dc0cc2b63491c0c5cd7ee4a64df53be4a73984da5b -->

```csharp
public struct Inno.Native.MiniAudio.MaResourceManager
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23373).

## `Config`

<a id="api-9e068bcd399cb3ba"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManager.Config 76a2676264c053ea2468f394448543a388f002957426ca960a6febdd199fbbff -->

```csharp
public Inno.Native.MiniAudio.MaResourceManagerConfig Inno.Native.MiniAudio.MaResourceManager.Config
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23376).

## `DataBufferBstLock`

<a id="api-e718f34eecede8cd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManager.DataBufferBstLock ecb74ff8f1a806a5aca557f8291938a85a553e92613103d11610b2a49838ae23 -->

```csharp
public void* Inno.Native.MiniAudio.MaResourceManager.DataBufferBstLock
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23380).

## `DefaultVfs`

<a id="api-65e872153dff9d04"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManager.DefaultVfs 641e7629afb46c1d9b474394c6753d7733cf938045f2ef63f3bbed0cedb32ae6 -->

```csharp
public Inno.Native.MiniAudio.MaDefaultVfs Inno.Native.MiniAudio.MaResourceManager.DefaultVfs
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23386).

## `JobQueue`

<a id="api-9844ced69e081fa4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManager.JobQueue cc42f49fd0a716c70960961b154b7836d0ebc381b5023e734901118d134f4a88 -->

```csharp
public Inno.Native.MiniAudio.MaJobQueue Inno.Native.MiniAudio.MaResourceManager.JobQueue
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23384).

## `JobThreads`

<a id="api-79256286557388aa"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManager.JobThreads eb8305093c1ee965f1956fd183fe281a1ed3a26f8ad43ad3a87e1257512e40ae -->

```csharp
public Inno.Native.MiniAudio.NativeArray_95a1f650075f892e Inno.Native.MiniAudio.MaResourceManager.JobThreads
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23382).

## `Log`

<a id="api-71ca1217d0e6cf74"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManager.Log bf519697707d6677c52c51c930deee5b15e3e11ae63f00796508a0bf42bb29c5 -->

```csharp
public Inno.Native.MiniAudio.MaLog Inno.Native.MiniAudio.MaResourceManager.Log
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23388).

## `PRootDataBufferNode`

<a id="api-0cb19f3f4655ee55"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManager.PRootDataBufferNode c34a28ef64761e4b5a062173cf2a50f6adf07479276e063ff7dbc567a50a819c -->

```csharp
public Inno.Native.MiniAudio.MaResourceManagerDataBufferNode* Inno.Native.MiniAudio.MaResourceManager.PRootDataBufferNode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23378).
