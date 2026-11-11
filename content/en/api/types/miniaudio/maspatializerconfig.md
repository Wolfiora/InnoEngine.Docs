---
title: "MaSpatializerConfig"
description: "Reference for MaSpatializerConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.cf5b7d073799650a
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaSpatializerConfig`

This reference describes `MaSpatializerConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AttenuationModel`](#api-c737a162ca4119d6) | Field |
| [`ChannelsIn`](#api-ae05b1b2ad9f026a) | Field |
| [`ChannelsOut`](#api-559ac3ed16fb4494) | Field |
| [`ConeInnerAngleInRadians`](#api-082a8b9e2ecbc70b) | Field |
| [`ConeOuterAngleInRadians`](#api-07fd88c28431d01c) | Field |
| [`ConeOuterGain`](#api-bed9d2c02da7426b) | Field |
| [`DirectionalAttenuationFactor`](#api-82fa6d998250622f) | Field |
| [`DopplerFactor`](#api-6bb27c99e1679bae) | Field |
| [`GainSmoothTimeInFrames`](#api-ecc626f535ccbf58) | Field |
| [`Handedness`](#api-1df46fe2a4c2abf9) | Field |
| [`MaxDistance`](#api-b83625040edd3efd) | Field |
| [`MaxGain`](#api-850f3d0b587a2e55) | Field |
| [`MinDistance`](#api-bea6f2884b1a20ac) | Field |
| [`MinGain`](#api-402713492925a7d1) | Field |
| [`MinSpatializationChannelGain`](#api-232b31974267e29a) | Field |
| [`PChannelMapIn`](#api-c243919e0f71dd7f) | Field |
| [`Positioning`](#api-78ae6f10da6f2bac) | Field |
| [`Rolloff`](#api-aa929108b2a53dc4) | Field |

## Type declaration

<a id="api-cf5b7d073799650a"></a>
<!-- api: T:Inno.Native.MiniAudio.MaSpatializerConfig 223af95a01db556658034b1ce5bd785640eb944339700f5a348ce6bc5fe4acdb -->

```csharp
public struct Inno.Native.MiniAudio.MaSpatializerConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24333).

## `AttenuationModel`

<a id="api-c737a162ca4119d6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.AttenuationModel 7b8dae6595b407c2807a6142989f4478bf0b7e07a5e35142ca5f5be52650820a -->

```csharp
public Inno.Native.MiniAudio.MaAttenuationModel Inno.Native.MiniAudio.MaSpatializerConfig.AttenuationModel
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24342).

## `ChannelsIn`

<a id="api-ae05b1b2ad9f026a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.ChannelsIn 3d368a2b89a8a6cdf5d2f72a1a4c6f5d6f9d47ecf044ea0ccccbd00076f359f5 -->

```csharp
public uint Inno.Native.MiniAudio.MaSpatializerConfig.ChannelsIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24336).

## `ChannelsOut`

<a id="api-559ac3ed16fb4494"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.ChannelsOut 4db469abeb909ea5733dc2781e25c44bb2c58328bc7df9b25843c406e107b1c4 -->

```csharp
public uint Inno.Native.MiniAudio.MaSpatializerConfig.ChannelsOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24338).

## `ConeInnerAngleInRadians`

<a id="api-082a8b9e2ecbc70b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.ConeInnerAngleInRadians e125b999f348a029d14b1005ab2de879c2699bdb89e76e804cd8891cddc48bc8 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializerConfig.ConeInnerAngleInRadians
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24358).

## `ConeOuterAngleInRadians`

<a id="api-07fd88c28431d01c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.ConeOuterAngleInRadians 8fa46327101240b0be8c5ef38c91190e3989f57cf11afe319612a442bec2bc08 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializerConfig.ConeOuterAngleInRadians
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24360).

## `ConeOuterGain`

<a id="api-bed9d2c02da7426b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.ConeOuterGain c4eab956933dcaf8338daf32153a93037ca9f49f149330f1f7a5ede2bbc6bb8e -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializerConfig.ConeOuterGain
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24362).

## `DirectionalAttenuationFactor`

<a id="api-82fa6d998250622f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.DirectionalAttenuationFactor 6736770a2ad698799677feaccba912d1af3b0fb76eceba823374887ca90b2b14 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializerConfig.DirectionalAttenuationFactor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24366).

## `DopplerFactor`

<a id="api-6bb27c99e1679bae"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.DopplerFactor d768a5201656492fa2680a8afec61b34b3ea0bdead876b2b32fa9f89df5df99e -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializerConfig.DopplerFactor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24364).

## `GainSmoothTimeInFrames`

<a id="api-ecc626f535ccbf58"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.GainSmoothTimeInFrames ee102b9bfa4ce607bc76c788fe1de86a6ac3d521f0d6472a4d6ebf333dd49c83 -->

```csharp
public uint Inno.Native.MiniAudio.MaSpatializerConfig.GainSmoothTimeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24370).

## `Handedness`

<a id="api-1df46fe2a4c2abf9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.Handedness 7672a49555482acd4a1d5acce14bfe4bbbe97d400443b8652f11ab95d3c96487 -->

```csharp
public Inno.Native.MiniAudio.MaHandedness Inno.Native.MiniAudio.MaSpatializerConfig.Handedness
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24346).

## `MaxDistance`

<a id="api-b83625040edd3efd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.MaxDistance 8561ee6127c832d65e6a3c428bfc8ab8fd0dc0b7ce4a8ab04f09686ee69ee68b -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializerConfig.MaxDistance
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24354).

## `MaxGain`

<a id="api-850f3d0b587a2e55"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.MaxGain 69ff069ba819501d7d5cb174ad0a68c393d61ddd5cdd8f68998aa61f2c3d9e93 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializerConfig.MaxGain
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24350).

## `MinDistance`

<a id="api-bea6f2884b1a20ac"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.MinDistance ac99ed1814c09004b4fe20a3839a5e133229bcf76142641fb18e6eba9cf673fa -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializerConfig.MinDistance
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24352).

## `MinGain`

<a id="api-402713492925a7d1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.MinGain 1dc6c773ab07bb2b4038557d4398e5c9d2c0637cfa5b74261b815fe7918a5835 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializerConfig.MinGain
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24348).

## `MinSpatializationChannelGain`

<a id="api-232b31974267e29a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.MinSpatializationChannelGain d37ae1231a04131e48553f3b8f1c7b196c972025183ef7f7de2bbc5a2a260d0e -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializerConfig.MinSpatializationChannelGain
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24368).

## `PChannelMapIn`

<a id="api-c243919e0f71dd7f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.PChannelMapIn 540d5d4d3a8b34c133eac1355e2cf27b414e0b2e9aabcd6a470bba9c3caacb9f -->

```csharp
public byte* Inno.Native.MiniAudio.MaSpatializerConfig.PChannelMapIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24340).

## `Positioning`

<a id="api-78ae6f10da6f2bac"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.Positioning 4e5a366e9da547f801c02337d04467ed9260941533b372319285c173b124e9a4 -->

```csharp
public Inno.Native.MiniAudio.MaPositioning Inno.Native.MiniAudio.MaSpatializerConfig.Positioning
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24344).

## `Rolloff`

<a id="api-aa929108b2a53dc4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializerConfig.Rolloff f91759d6c59aa8202d80f3a883e16d8a70c8031f660a925a8b6f9baa1dc0e3ba -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializerConfig.Rolloff
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24356).
