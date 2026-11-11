---
title: "MaDataConverter"
description: "Reference for MaDataConverter in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.04aba6f777e7d1ef
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDataConverter`

This reference describes `MaDataConverter` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`ChannelConverter`](#api-271f4caa6d0d5275) | Field |
| [`ChannelsIn`](#api-f6a9be19187d2c21) | Field |
| [`ChannelsOut`](#api-eafcf79ac7851026) | Field |
| [`DitherMode`](#api-cd06d030d58e24ff) | Field |
| [`ExecutionPath`](#api-2d4c49546b91dc16) | Field |
| [`FormatIn`](#api-72cb540942adf6fb) | Field |
| [`FormatOut`](#api-f7b21340771bae0e) | Field |
| [`HasChannelConverter`](#api-a29c9c8bb9834257) | Field |
| [`HasPostFormatConversion`](#api-dc6fee32fed9b586) | Field |
| [`HasPreFormatConversion`](#api-7567f5a883f51b20) | Field |
| [`HasResampler`](#api-c618c5814c7d2b5c) | Field |
| [`IsPassthrough`](#api-3cfe201a5cede70d) | Field |
| [`OwnsHeap`](#api-6df8bd9a01860514) | Field |
| [`PHeap`](#api-4fff9ac43a12fd31) | Field |
| [`Resampler`](#api-999265ebefe072da) | Field |
| [`SampleRateIn`](#api-434ab0384892d6ab) | Field |
| [`SampleRateOut`](#api-b722cd0d32f33452) | Field |

## Type declaration

<a id="api-04aba6f777e7d1ef"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDataConverter af49af77b81c7b1ee1f090ab0ff6e0361447726bc59d2f99d7a9941f9ff70931 -->

```csharp
public struct Inno.Native.MiniAudio.MaDataConverter
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18242).

## `ChannelConverter`

<a id="api-271f4caa6d0d5275"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.ChannelConverter edf192a3a6bca79ec9fbe5751ad877f88dca77cb568d009fa7b7337774c38065 -->

```csharp
public Inno.Native.MiniAudio.MaChannelConverter Inno.Native.MiniAudio.MaDataConverter.ChannelConverter
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18261).

## `ChannelsIn`

<a id="api-f6a9be19187d2c21"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.ChannelsIn a454de4e018b5829bb5429b936f564ece12e42aaec65906dde65be1fef98b1e4 -->

```csharp
public uint Inno.Native.MiniAudio.MaDataConverter.ChannelsIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18249).

## `ChannelsOut`

<a id="api-eafcf79ac7851026"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.ChannelsOut 555d2dedbe409eeadf4facf9f2af76be5e9277ab594f235c8300a43dcef1fa4b -->

```csharp
public uint Inno.Native.MiniAudio.MaDataConverter.ChannelsOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18251).

## `DitherMode`

<a id="api-cd06d030d58e24ff"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.DitherMode 78928a5c5bebec1294195ca5caac0424005fbb54dd182ef3f9c43b9b0df0362f -->

```csharp
public Inno.Native.MiniAudio.MaDitherMode Inno.Native.MiniAudio.MaDataConverter.DitherMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18257).

## `ExecutionPath`

<a id="api-2d4c49546b91dc16"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.ExecutionPath 99a20c31540e0d279046391399b3c959d253a211cf5dedab5078b622829f058a -->

```csharp
public Inno.Native.MiniAudio.MaDataConverterExecutionPath Inno.Native.MiniAudio.MaDataConverter.ExecutionPath
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18259).

## `FormatIn`

<a id="api-72cb540942adf6fb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.FormatIn 50893cab2b62526be1f2c4f37e9360ed694c066b974ccd0a1dff839c448a3292 -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaDataConverter.FormatIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18245).

## `FormatOut`

<a id="api-f7b21340771bae0e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.FormatOut 07339c7218c5f41306e8f4e18f12e04b0326e8fce2c210db59b88866dcb6f340 -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaDataConverter.FormatOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18247).

## `HasChannelConverter`

<a id="api-a29c9c8bb9834257"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.HasChannelConverter c05a31e8e2500206a3166f4a42d68b61750e443582f66aa9b00418764c1fd434 -->

```csharp
public byte Inno.Native.MiniAudio.MaDataConverter.HasChannelConverter
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18269).

## `HasPostFormatConversion`

<a id="api-dc6fee32fed9b586"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.HasPostFormatConversion 4ab5d6170a5c3e2bceef73885e2793a05dd0ef8727cc6357334a0f9aede8afb2 -->

```csharp
public byte Inno.Native.MiniAudio.MaDataConverter.HasPostFormatConversion
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18267).

## `HasPreFormatConversion`

<a id="api-7567f5a883f51b20"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.HasPreFormatConversion 7c6b58a362384ba265a45a41a710b7da29d6c6ea89a537e703b66ad62af6dba5 -->

```csharp
public byte Inno.Native.MiniAudio.MaDataConverter.HasPreFormatConversion
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18265).

## `HasResampler`

<a id="api-c618c5814c7d2b5c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.HasResampler 64c67ed0b0d92121139aab9f50aee0645ef1bf6442d5903728a8af02ac1e79fd -->

```csharp
public byte Inno.Native.MiniAudio.MaDataConverter.HasResampler
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18271).

## `IsPassthrough`

<a id="api-3cfe201a5cede70d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.IsPassthrough 4c6cd73b6c9a5fcb8babec9489e75e16f07b03e54f7a51152e2e2d5b4bb2b8ea -->

```csharp
public byte Inno.Native.MiniAudio.MaDataConverter.IsPassthrough
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18273).

## `OwnsHeap`

<a id="api-6df8bd9a01860514"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.OwnsHeap 08e7f23d8d0b8170fc0abdfdbfabc25278d2977f955b1c783381b13c67a34250 -->

```csharp
public byte Inno.Native.MiniAudio.MaDataConverter.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18275).

## `PHeap`

<a id="api-4fff9ac43a12fd31"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.PHeap fbd74d1a8e45661da6403e513afd0b1a41f819963513db9e9262db4df84a14b3 -->

```csharp
public void* Inno.Native.MiniAudio.MaDataConverter.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18277).

## `Resampler`

<a id="api-999265ebefe072da"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.Resampler 037d340b22d13b405e447f524f547cba0b30df90b0365db4adbd0a6ab12af430 -->

```csharp
public Inno.Native.MiniAudio.MaResampler Inno.Native.MiniAudio.MaDataConverter.Resampler
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18263).

## `SampleRateIn`

<a id="api-434ab0384892d6ab"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.SampleRateIn 4146c906663cd79eb0754bf78ca2aa0b9490b6e5d12af37084dfc6d8a3192ea8 -->

```csharp
public uint Inno.Native.MiniAudio.MaDataConverter.SampleRateIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18253).

## `SampleRateOut`

<a id="api-b722cd0d32f33452"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataConverter.SampleRateOut e57ff02b1535148876884aca00b0ee9081b531537679b27c5b6c61ebbe967fe7 -->

```csharp
public uint Inno.Native.MiniAudio.MaDataConverter.SampleRateOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18255).
