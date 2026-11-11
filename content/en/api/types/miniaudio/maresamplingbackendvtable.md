---
title: "MaResamplingBackendVtable"
description: "Reference for MaResamplingBackendVtable in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.963a610d1911d85c
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaResamplingBackendVtable`

This reference describes `MaResamplingBackendVtable` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`OnGetExpectedOutputFrameCount`](#api-1d1acae301a12715) | Field |
| [`OnGetHeapSize`](#api-bc0fa6ada2a0d585) | Field |
| [`OnGetInputLatency`](#api-5975c4b417cf3c00) | Field |
| [`OnGetOutputLatency`](#api-c0000cc43bcd0541) | Field |
| [`OnGetRequiredInputFrameCount`](#api-62ba0d4ae41c9dc5) | Field |
| [`OnInit`](#api-5d331a947dc8a066) | Field |
| [`OnProcess`](#api-55cb522d8fb17997) | Field |
| [`OnReset`](#api-248c1b3ff4c566c4) | Field |
| [`OnSetRate`](#api-4ef8a1c75379bf05) | Field |
| [`OnUninit`](#api-31a7a52155bc0f89) | Field |

## Type declaration

<a id="api-963a610d1911d85c"></a>
<!-- api: T:Inno.Native.MiniAudio.MaResamplingBackendVtable 503842a9c71141de8e8145ea932e06d28ef207e3184a87996fbf26cefba28a4d -->

```csharp
public struct Inno.Native.MiniAudio.MaResamplingBackendVtable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23334).

## `OnGetExpectedOutputFrameCount`

<a id="api-1d1acae301a12715"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplingBackendVtable.OnGetExpectedOutputFrameCount aef0fae6450fc82fcfe25e649b7168e24e8ae214a3b4d37c9c8d5d4ba8fbb788 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, ulong, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaResamplingBackendVtable.OnGetExpectedOutputFrameCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23353).

## `OnGetHeapSize`

<a id="api-bc0fa6ada2a0d585"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplingBackendVtable.OnGetHeapSize c83a8f33b2addd2d3241a046704622312e0e425c2e25531d38c8ef934050d6a2 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, Inno.Native.MiniAudio.MaResamplerConfig*, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaResamplingBackendVtable.OnGetHeapSize
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23337).

## `OnGetInputLatency`

<a id="api-5975c4b417cf3c00"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplingBackendVtable.OnGetInputLatency b96154b35b6708724c70d5cbf334f69400ba0297fc525f371215cac689d7192f -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, ulong> Inno.Native.MiniAudio.MaResamplingBackendVtable.OnGetInputLatency
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23347).

## `OnGetOutputLatency`

<a id="api-c0000cc43bcd0541"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplingBackendVtable.OnGetOutputLatency f377414a28a8142fef48d6b57eadcfade154d0f38a8ea1ea03ba312684fd3d13 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, ulong> Inno.Native.MiniAudio.MaResamplingBackendVtable.OnGetOutputLatency
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23349).

## `OnGetRequiredInputFrameCount`

<a id="api-62ba0d4ae41c9dc5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplingBackendVtable.OnGetRequiredInputFrameCount 010bbb487787aaed817da1bcd67782e90a6861e238e3c29b30120d97fa629338 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, ulong, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaResamplingBackendVtable.OnGetRequiredInputFrameCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23351).

## `OnInit`

<a id="api-5d331a947dc8a066"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplingBackendVtable.OnInit 747f9459d0483b7ca561001828807355dcb78c40dff904e0d26489d404850d35 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, Inno.Native.MiniAudio.MaResamplerConfig*, void*, void**, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaResamplingBackendVtable.OnInit
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23339).

## `OnProcess`

<a id="api-55cb522d8fb17997"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplingBackendVtable.OnProcess 6edd54a4a68c3f8b3499913983b8a980aa6aca4863a4d9fc7f116448b7fa5a15 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, void*, ulong*, void*, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaResamplingBackendVtable.OnProcess
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23343).

## `OnReset`

<a id="api-248c1b3ff4c566c4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplingBackendVtable.OnReset 7ea97e5e36f85b6b5762f61f65ecac21a4f2ec944004edaa9bb42402ce1a19aa -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaResamplingBackendVtable.OnReset
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23355).

## `OnSetRate`

<a id="api-4ef8a1c75379bf05"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplingBackendVtable.OnSetRate de09d399e23c1f101c9cdc6c8e45d77341cc60b26ba0f6cd9a484e62b24029d9 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, uint, uint, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaResamplingBackendVtable.OnSetRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23345).

## `OnUninit`

<a id="api-31a7a52155bc0f89"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResamplingBackendVtable.OnUninit a82f3bbd0b85de46ddf146e0c807b9f874d68c669f739405e9db2849f0bd988e -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, Inno.Native.MiniAudio.MaAllocationCallbacks*, void> Inno.Native.MiniAudio.MaResamplingBackendVtable.OnUninit
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23341).
