---
title: "MaSpatializerListener"
description: "Reference for MaSpatializerListener in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.98042f57a705f4a4
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaSpatializerListener`

This reference describes `MaSpatializerListener` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Config`](#api-6dcb3bd57d9edc2f) | Field |
| [`Direction`](#api-783a161c467354ae) | Field |
| [`IsEnabled`](#api-443e23fb1ae21611) | Field |
| [`OwnsHeap`](#api-b9bf6f69d399c426) | Field |
| [`PHeap`](#api-9b9b98dc8255e0fb) | Field |
| [`Position`](#api-94c03972c143be1d) | Field |
| [`Velocity`](#api-97c755ef67bdc92c) | Field |

## Type declaration

<a id="api-98042f57a705f4a4"></a>
<!-- api: T:Inno.Native.MiniAudio.MaSpatializerListener 7c8e78c77cc919855f3a4c756faefe199026526d70218a0bf1cbf8da28dfd6d3 -->

```csharp
public struct Inno.Native.MiniAudio.MaSpatializerListener
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24388).

## `Config`

<a id="api-6dcb3bd57d9edc2f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerListener.Config 06d9fe80517b1ddc0d60fa4c4dc582cc3ec85e063d47b816c4a4598c4f14e4eb -->

```csharp
public Inno.Native.MiniAudio.MaSpatializerListenerConfig Inno.Native.MiniAudio.MaSpatializerListener.Config
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24391).

## `Direction`

<a id="api-783a161c467354ae"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerListener.Direction 793c50da05c88fd4349a3b989ad5b10a2bc2013c622cc6eb3a128f2b9acc2596 -->

```csharp
public Inno.Native.MiniAudio.MaAtomicVec3f Inno.Native.MiniAudio.MaSpatializerListener.Direction
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24395).

## `IsEnabled`

<a id="api-443e23fb1ae21611"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerListener.IsEnabled 50fb682c0183d142c874836110e92d1e0b64af07f46ae0ac3c3cb9e71ffb618d -->

```csharp
public uint Inno.Native.MiniAudio.MaSpatializerListener.IsEnabled
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24399).

## `OwnsHeap`

<a id="api-b9bf6f69d399c426"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerListener.OwnsHeap 83c5e9981c58330dd18f80ee4e5d68d9e043c35b08c254294e24770eddc9c72f -->

```csharp
public uint Inno.Native.MiniAudio.MaSpatializerListener.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24401).

## `PHeap`

<a id="api-9b9b98dc8255e0fb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerListener.PHeap 59d8fd229612f64ab0bdf5f8107f794414d4b59c3633b716533322ae0a22f545 -->

```csharp
public void* Inno.Native.MiniAudio.MaSpatializerListener.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24403).

## `Position`

<a id="api-94c03972c143be1d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerListener.Position 8f958a663f654253d50c7ecc12602ea10a368fe83e4e060055cf4294733b8f38 -->

```csharp
public Inno.Native.MiniAudio.MaAtomicVec3f Inno.Native.MiniAudio.MaSpatializerListener.Position
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24393).

## `Velocity`

<a id="api-97c755ef67bdc92c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerListener.Velocity 20e724ed1a67a30d58376ca2566942131cedecc6339488a2ac2a275252647cfa -->

```csharp
public Inno.Native.MiniAudio.MaAtomicVec3f Inno.Native.MiniAudio.MaSpatializerListener.Velocity
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24397).
