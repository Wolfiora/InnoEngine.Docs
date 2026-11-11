---
title: "MaDecoderConfig"
description: "Reference for MaDecoderConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.9bf50a3b026c38c5
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDecoderConfig`

This reference describes `MaDecoderConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AllocationCallbacks`](#api-9194d81c16657d39) | Field |
| [`ChannelMixMode`](#api-7012eaa80bc4bcc1) | Field |
| [`Channels`](#api-6425e8c266e7bada) | Field |
| [`CustomBackendCount`](#api-742a4b1a51894220) | Field |
| [`DitherMode`](#api-5677c06c3a84a092) | Field |
| [`EncodingFormat`](#api-66291e1bfa9a5b5d) | Field |
| [`Format`](#api-3c9dd516e314b692) | Field |
| [`PChannelMap`](#api-0bb41fae75399cc4) | Field |
| [`PCustomBackendUserData`](#api-aad2d62f5a6c09b1) | Field |
| [`PpCustomBackendVTables`](#api-fc5bcc6a71a64ae0) | Field |
| [`Resampling`](#api-975a392e00f63abc) | Field |
| [`SampleRate`](#api-ecda28fcbd62f866) | Field |
| [`SeekPointCount`](#api-0230e917748b905b) | Field |

## Type declaration

<a id="api-9bf50a3b026c38c5"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDecoderConfig 63623aa2fa259c49aaf5278b3095f0b54c6e7f1768df747201a0bd8256c48955 -->

```csharp
public struct Inno.Native.MiniAudio.MaDecoderConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18632).

## `AllocationCallbacks`

<a id="api-9194d81c16657d39"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.AllocationCallbacks ba21df641309104418d7956bcb8d8e2831867f9b6397f6fa7bbffa19b4fce053 -->

```csharp
public Inno.Native.MiniAudio.MaAllocationCallbacks Inno.Native.MiniAudio.MaDecoderConfig.AllocationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18649).

## `ChannelMixMode`

<a id="api-7012eaa80bc4bcc1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.ChannelMixMode 1cd07f06b70de02621d80b51f384830a84e6ef71fc2f09b09579081661e5df82 -->

```csharp
public Inno.Native.MiniAudio.MaChannelMixMode Inno.Native.MiniAudio.MaDecoderConfig.ChannelMixMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18643).

## `Channels`

<a id="api-6425e8c266e7bada"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.Channels 680ba27a9d9049cd972138bde32c3f77b7c6ec949354e5d7aced3516e731914f -->

```csharp
public uint Inno.Native.MiniAudio.MaDecoderConfig.Channels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18637).

## `CustomBackendCount`

<a id="api-742a4b1a51894220"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.CustomBackendCount 420ade864a1ebc1c3aa7f7c2f04f7d320997744697350993144e9e39605e83ce -->

```csharp
public uint Inno.Native.MiniAudio.MaDecoderConfig.CustomBackendCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18657).

## `DitherMode`

<a id="api-5677c06c3a84a092"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.DitherMode 58dc6b34ac36f559f38fd673dae4e6940f63f8e11f78d1f20a9384ac0ee31299 -->

```csharp
public Inno.Native.MiniAudio.MaDitherMode Inno.Native.MiniAudio.MaDecoderConfig.DitherMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18645).

## `EncodingFormat`

<a id="api-66291e1bfa9a5b5d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.EncodingFormat 74af415f84785d6fbee71b5d3f9f572e602cbecf846170d40154b5c5073b66ba -->

```csharp
public Inno.Native.MiniAudio.MaEncodingFormat Inno.Native.MiniAudio.MaDecoderConfig.EncodingFormat
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18651).

## `Format`

<a id="api-3c9dd516e314b692"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.Format 33dd4d330e21c93e6cad954c9b30a9188594a9f9b77149577e6e37f2e97230aa -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaDecoderConfig.Format
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18635).

## `PChannelMap`

<a id="api-0bb41fae75399cc4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.PChannelMap b02e5f13eeb505ea327b7f81a9ba53ffe6094f8511e92c4ee9b04c459af7d154 -->

```csharp
public byte* Inno.Native.MiniAudio.MaDecoderConfig.PChannelMap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18641).

## `PCustomBackendUserData`

<a id="api-aad2d62f5a6c09b1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.PCustomBackendUserData 2cbc28d9dbc62c6b9890c9719749e91e8874adc88de9710b58c7cd2a94f958d7 -->

```csharp
public void* Inno.Native.MiniAudio.MaDecoderConfig.PCustomBackendUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18659).

## `PpCustomBackendVTables`

<a id="api-fc5bcc6a71a64ae0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.PpCustomBackendVTables 3e420de71784d669dffe6338371cfc59f08ee374f97c5817538442a0917081e8 -->

```csharp
public Inno.Native.MiniAudio.MaDecodingBackendVtable** Inno.Native.MiniAudio.MaDecoderConfig.PpCustomBackendVTables
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18655).

## `Resampling`

<a id="api-975a392e00f63abc"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.Resampling 697e4b5a641fc891436423246b3b4faa6742f44735c9b4ba1214e07652ddd86a -->

```csharp
public Inno.Native.MiniAudio.MaResamplerConfig Inno.Native.MiniAudio.MaDecoderConfig.Resampling
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18647).

## `SampleRate`

<a id="api-ecda28fcbd62f866"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.SampleRate c21f630c5b66934fedb272ad38bd967e0f1e1a736669685e07b98524adc8136e -->

```csharp
public uint Inno.Native.MiniAudio.MaDecoderConfig.SampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18639).

## `SeekPointCount`

<a id="api-0230e917748b905b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDecoderConfig.SeekPointCount bcfbeb252144e242a780bdc2adbd50ffc8f9de325cee30df7174d16cb9d29ccf -->

```csharp
public uint Inno.Native.MiniAudio.MaDecoderConfig.SeekPointCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18653).
