---
title: "MaLinearResampler"
description: "Reference for MaLinearResampler in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.a8fbc363d7cf4291
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaLinearResampler`

This reference describes `MaLinearResampler` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Config`](#api-891bd657a8a44dfc) | Field |
| [`InAdvanceFrac`](#api-3d3e0ca52f210523) | Field |
| [`InAdvanceInt`](#api-920be2499f1d738a) | Field |
| [`InTimeFrac`](#api-55390fde043f3ffa) | Field |
| [`InTimeInt`](#api-635aa5370f3f9610) | Field |
| [`Lpf`](#api-7385884ff2698341) | Field |
| [`OwnsHeap`](#api-f071f6360e99eaa0) | Field |
| [`PHeap`](#api-117167d8263a263d) | Field |
| [`X0`](#api-a8dac40cedca41ad) | Field |
| [`X1`](#api-741794ffd49daf53) | Field |

## Type declaration

<a id="api-a8fbc363d7cf4291"></a>
<!-- api: T:Inno.Native.MiniAudio.MaLinearResampler dcf211fe3d8e5fb9d6cc532dc02b8abbcb4774e8000f253272d7f0669bdc8d52 -->

```csharp
public struct Inno.Native.MiniAudio.MaLinearResampler
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21738).

## `Config`

<a id="api-891bd657a8a44dfc"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResampler.Config 3c544c0a26367d287da5cec4a4f5e374dff5e4b64e97e0fd7635b7755dc236a8 -->

```csharp
public Inno.Native.MiniAudio.MaLinearResamplerConfig Inno.Native.MiniAudio.MaLinearResampler.Config
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21741).

## `InAdvanceFrac`

<a id="api-3d3e0ca52f210523"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResampler.InAdvanceFrac f09dcabee53c695ffbfa6738df086a5e080532a3c9d03a525e1da1837c4f676e -->

```csharp
public uint Inno.Native.MiniAudio.MaLinearResampler.InAdvanceFrac
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21745).

## `InAdvanceInt`

<a id="api-920be2499f1d738a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResampler.InAdvanceInt a4b12977240b381e62666eb4131bc5a5ef5903f81d7c5dd2f4783ffd10161e06 -->

```csharp
public uint Inno.Native.MiniAudio.MaLinearResampler.InAdvanceInt
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21743).

## `InTimeFrac`

<a id="api-55390fde043f3ffa"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResampler.InTimeFrac bb65a4552b2432d8900ddd74b6919b0c13ba7bac1e437cef27793de8e7e53965 -->

```csharp
public uint Inno.Native.MiniAudio.MaLinearResampler.InTimeFrac
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21749).

## `InTimeInt`

<a id="api-635aa5370f3f9610"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResampler.InTimeInt c0a0ed96c111cf1df886bfa8d498fd9dc3e03d595270def9bec799af89fd44f1 -->

```csharp
public uint Inno.Native.MiniAudio.MaLinearResampler.InTimeInt
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21747).

## `Lpf`

<a id="api-7385884ff2698341"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResampler.Lpf ae3a0567a20822b2f14539e71002e0a8e4f7751010c3c27a6ca20108c54bd6a4 -->

```csharp
public Inno.Native.MiniAudio.MaLpf Inno.Native.MiniAudio.MaLinearResampler.Lpf
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21755).

## `OwnsHeap`

<a id="api-f071f6360e99eaa0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResampler.OwnsHeap ef4b30ae8d5b14eecbe5175e9215fa13dd50d3d9e3aeb8b43ac6c427242d092b -->

```csharp
public uint Inno.Native.MiniAudio.MaLinearResampler.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21759).

## `PHeap`

<a id="api-117167d8263a263d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResampler.PHeap 1d193d5f2a644faa33180f43626931de8a461fb785266311483e161ac83022df -->

```csharp
public void* Inno.Native.MiniAudio.MaLinearResampler.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21757).

## `X0`

<a id="api-a8dac40cedca41ad"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResampler.X0 dc7853e9e2fc01133b2136d76ff241882b39a94c0efea0f8834379f5005ec82c -->

```csharp
public Inno.Native.MiniAudio.MaLinearResamplerAnonymousUnion6e85c913901ac588 Inno.Native.MiniAudio.MaLinearResampler.X0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21751).

## `X1`

<a id="api-741794ffd49daf53"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResampler.X1 61a6f59a3982be049992ddf75fb778846213bfe99b27f5b62e2b0c7d3ef7e14c -->

```csharp
public Inno.Native.MiniAudio.MaLinearResamplerAnonymousUnion04e50dfd327cc4be Inno.Native.MiniAudio.MaLinearResampler.X1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21753).
