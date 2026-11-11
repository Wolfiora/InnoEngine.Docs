---
title: "MaAllocationCallbacks"
description: "Reference for MaAllocationCallbacks in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.7970250c2558ba17
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaAllocationCallbacks`

This reference describes `MaAllocationCallbacks` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`OnFree`](#api-56ce109a3a8d3b2e) | Field |
| [`OnMalloc`](#api-c8e2163351bace51) | Field |
| [`OnRealloc`](#api-637aa255449c682f) | Field |
| [`PUserData`](#api-e50a66b6d59c8bb3) | Field |

## Type declaration

<a id="api-7970250c2558ba17"></a>
<!-- api: T:Inno.Native.MiniAudio.MaAllocationCallbacks d21036e22b7e4cf1e81ecb76faef478542a709afce0c5392be3611278c03a97a -->

```csharp
public struct Inno.Native.MiniAudio.MaAllocationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16691).

## `OnFree`

<a id="api-56ce109a3a8d3b2e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAllocationCallbacks.OnFree 8e57f7a9911d9ce04feb94428262e4661f7171c49f254727c92a8a3edd2a4330 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, void> Inno.Native.MiniAudio.MaAllocationCallbacks.OnFree
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16700).

## `OnMalloc`

<a id="api-c8e2163351bace51"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAllocationCallbacks.OnMalloc 73b809eea6feb16769c97519dfc23f41f19bc1a4e8be216f958e37615b5c366a -->

```csharp
public delegate* unmanaged[Cdecl]<ulong, void*, void*> Inno.Native.MiniAudio.MaAllocationCallbacks.OnMalloc
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16696).

## `OnRealloc`

<a id="api-637aa255449c682f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAllocationCallbacks.OnRealloc 6f7b43e90c56607b0665ad59f0bcecbd95a676ef791a17e18ba70fcb27c212c1 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, ulong, void*, void*> Inno.Native.MiniAudio.MaAllocationCallbacks.OnRealloc
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16698).

## `PUserData`

<a id="api-e50a66b6d59c8bb3"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAllocationCallbacks.PUserData 40ccba2af34ce74aa8c2d713943abd7ad03798689453d153c0d66aded67d878c -->

```csharp
public void* Inno.Native.MiniAudio.MaAllocationCallbacks.PUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16694).
