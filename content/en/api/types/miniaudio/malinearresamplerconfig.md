---
title: "MaLinearResamplerConfig"
description: "Reference for MaLinearResamplerConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.c97abc986c2ecd1b
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaLinearResamplerConfig`

This reference describes `MaLinearResamplerConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Channels`](#api-873fb9cc9e87a549) | Field |
| [`Format`](#api-9105d799c28d6669) | Field |
| [`LpfNyquistFactor`](#api-5385be4a3639b88d) | Field |
| [`LpfOrder`](#api-8c8edfff86bb1b95) | Field |
| [`SampleRateIn`](#api-3d66581f167423f8) | Field |
| [`SampleRateOut`](#api-7ac591edce3eb6d8) | Field |

## Type declaration

<a id="api-c97abc986c2ecd1b"></a>
<!-- api: T:Inno.Native.MiniAudio.MaLinearResamplerConfig 8a20d46476c517ff90eab0ccdcd05cec4bee0d0c3cea3ab09099c5601e5f9625 -->

```csharp
public struct Inno.Native.MiniAudio.MaLinearResamplerConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21823).

## `Channels`

<a id="api-873fb9cc9e87a549"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResamplerConfig.Channels 51899919c50bff11ba3f165951cc2bcd9dd15106d43f5f49522bac672234d954 -->

```csharp
public uint Inno.Native.MiniAudio.MaLinearResamplerConfig.Channels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21828).

## `Format`

<a id="api-9105d799c28d6669"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResamplerConfig.Format e257b70368f21e935dc27cc702b823605580773f0b324cf5a356a64f86512e35 -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaLinearResamplerConfig.Format
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21826).

## `LpfNyquistFactor`

<a id="api-5385be4a3639b88d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResamplerConfig.LpfNyquistFactor f012903d82a7f5d4cbb14480bbaf4ddce84d9bf89555f82ffa0685f78ec6437f -->

```csharp
public double Inno.Native.MiniAudio.MaLinearResamplerConfig.LpfNyquistFactor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21836).

## `LpfOrder`

<a id="api-8c8edfff86bb1b95"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResamplerConfig.LpfOrder dd1f45c4237c9374d7f60ba9e7d7e95de0c89d9d5d7f7b24d7feadbbd3fbdabd -->

```csharp
public uint Inno.Native.MiniAudio.MaLinearResamplerConfig.LpfOrder
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21834).

## `SampleRateIn`

<a id="api-3d66581f167423f8"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResamplerConfig.SampleRateIn 483cf420b9edb1b30cb251cf2744313a892a9712975b0c36243d47b35f409760 -->

```csharp
public uint Inno.Native.MiniAudio.MaLinearResamplerConfig.SampleRateIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21830).

## `SampleRateOut`

<a id="api-7ac591edce3eb6d8"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLinearResamplerConfig.SampleRateOut f370f671e8dbde5a50ddab41f9520d22577099cc03ccd3020c4b6bbc1e840d99 -->

```csharp
public uint Inno.Native.MiniAudio.MaLinearResamplerConfig.SampleRateOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21832).
