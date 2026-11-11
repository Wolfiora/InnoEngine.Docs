---
title: "MaResampler"
description: "Reference for MaResampler in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.ce90cda065a3f5bb
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaResampler`

This reference describes `MaResampler` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Channels`](#api-e0623dbc8ea9580d) | Field |
| [`Format`](#api-27f7c7c3451ff1de) | Field |
| [`OwnsHeap`](#api-8e347064ec41688e) | Field |
| [`PBackend`](#api-86479ce2e312a385) | Field |
| [`PBackendUserData`](#api-c1c230c1ae1f2cc0) | Field |
| [`PBackendVTable`](#api-5627bb3ad1d59aaa) | Field |
| [`PHeap`](#api-43b747feccfa0d35) | Field |
| [`SampleRateIn`](#api-86a8554afa1106f0) | Field |
| [`SampleRateOut`](#api-c69cc418eae049c6) | Field |
| [`State`](#api-8d29520677184286) | Field |

## Type declaration

<a id="api-ce90cda065a3f5bb"></a>
<!-- api: T:Inno.Native.MiniAudio.MaResampler 1cb7a9f5394e7ca91de615e386e0e98444e0d7e9f68d0148b19cd3db0a93d30b -->

```csharp
public struct Inno.Native.MiniAudio.MaResampler
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23218).

## `Channels`

<a id="api-e0623dbc8ea9580d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResampler.Channels 406000a88cf48d2d4ca12997a09639500a990ababc7768f5a78c6ed378fac908 -->

```csharp
public uint Inno.Native.MiniAudio.MaResampler.Channels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23229).

## `Format`

<a id="api-27f7c7c3451ff1de"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResampler.Format ca528a1bac44d3b355c329f0ff0a16b86a153a84af9c4d51f7fc8b6538570c4a -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaResampler.Format
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23227).

## `OwnsHeap`

<a id="api-8e347064ec41688e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResampler.OwnsHeap d003a01bce7d2f41192412ba3fe3806005c7c63f4a35820b484c2b3705e1d8d5 -->

```csharp
public uint Inno.Native.MiniAudio.MaResampler.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23239).

## `PBackend`

<a id="api-86479ce2e312a385"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResampler.PBackend e0c96339cd5ac31e7fb1b276c202a05ab00e97548311d9ebca750265578628d3 -->

```csharp
public void* Inno.Native.MiniAudio.MaResampler.PBackend
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23221).

## `PBackendUserData`

<a id="api-c1c230c1ae1f2cc0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResampler.PBackendUserData 001c87411d1abd0d08ac2bdb8727cb8063aa25bd1b89385d90ec285328548daa -->

```csharp
public void* Inno.Native.MiniAudio.MaResampler.PBackendUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23225).

## `PBackendVTable`

<a id="api-5627bb3ad1d59aaa"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResampler.PBackendVTable 025e339d75daf58b5328dd93a92e62dbe897d2bb8e15933b816061e577235228 -->

```csharp
public Inno.Native.MiniAudio.MaResamplingBackendVtable* Inno.Native.MiniAudio.MaResampler.PBackendVTable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23223).

## `PHeap`

<a id="api-43b747feccfa0d35"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResampler.PHeap 81db9b0ea8501d697d66820f074ce8f1667fa9cecacb6fd00f4dc250cd7919c3 -->

```csharp
public void* Inno.Native.MiniAudio.MaResampler.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23237).

## `SampleRateIn`

<a id="api-86a8554afa1106f0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResampler.SampleRateIn 253bf87dcbd9c8bf0eec36d6b6759879c0bf1db98d445baa5b917c36eec0a6a4 -->

```csharp
public uint Inno.Native.MiniAudio.MaResampler.SampleRateIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23231).

## `SampleRateOut`

<a id="api-c69cc418eae049c6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResampler.SampleRateOut e44e398dcc5bea34b1dde2a028ec4dbdb2ddb8b2610319b75b7d09026c942cfe -->

```csharp
public uint Inno.Native.MiniAudio.MaResampler.SampleRateOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23233).

## `State`

<a id="api-8d29520677184286"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResampler.State e3f679e902800c644e9bb5db4f7491219cb94d02455cdfc79e5f97bef21c2413 -->

```csharp
public Inno.Native.MiniAudio.MaResamplerAnonymousUnion67c9af061924ab62 Inno.Native.MiniAudio.MaResampler.State
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23235).
