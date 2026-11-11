---
title: "MaSpatializer"
description: "Reference for MaSpatializer in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.2dcc070e580b2b00
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaSpatializer`

This reference describes `MaSpatializer` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AttenuationModel`](#api-0d74718f7b8d4a19) | Field |
| [`ChannelsIn`](#api-c9e0b4d8e036b70d) | Field |
| [`ChannelsOut`](#api-eb46a4dbf3689d4b) | Field |
| [`ConeInnerAngleInRadians`](#api-1c618d42947a4077) | Field |
| [`ConeOuterAngleInRadians`](#api-02b02a210b4321f6) | Field |
| [`ConeOuterGain`](#api-08a34eaaba8ead5b) | Field |
| [`Direction`](#api-76a21b6b3ac22ed1) | Field |
| [`DirectionalAttenuationFactor`](#api-38ff734e67c5dd13) | Field |
| [`DopplerFactor`](#api-653fb6193cabf131) | Field |
| [`DopplerPitch`](#api-cc6d280aaee13191) | Field |
| [`Gainer`](#api-53d82e6452e16183) | Field |
| [`GainSmoothTimeInFrames`](#api-9d4e52cb91c692cb) | Field |
| [`Handedness`](#api-e524ccceb71ad05e) | Field |
| [`MaxDistance`](#api-8ad4f34909216ebb) | Field |
| [`MaxGain`](#api-5fc86c720ffc25b7) | Field |
| [`MinDistance`](#api-0b2586e12e812e07) | Field |
| [`MinGain`](#api-1d053ac2a8106f3c) | Field |
| [`MinSpatializationChannelGain`](#api-4f995192538e13e6) | Field |
| [`OwnsHeap`](#api-7534e57f293d68f1) | Field |
| [`PChannelMapIn`](#api-b9c3df018ed68785) | Field |
| [`PHeap`](#api-5e94ee03b45dc940) | Field |
| [`PNewChannelGainsOut`](#api-da47297377f2924b) | Field |
| [`Position`](#api-bec7fb9db3dfeedd) | Field |
| [`Positioning`](#api-ba95edeeea8de436) | Field |
| [`Rolloff`](#api-a9e07e253a615479) | Field |
| [`Velocity`](#api-13555afe3d758ea0) | Field |

## Type declaration

<a id="api-2dcc070e580b2b00"></a>
<!-- api: T:Inno.Native.MiniAudio.MaSpatializer 30ea53be26f0a8b269853e28d3810647c32d9c4c636aa6d5e38674d4814d3caa -->

```csharp
public struct Inno.Native.MiniAudio.MaSpatializer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24262).

## `AttenuationModel`

<a id="api-0d74718f7b8d4a19"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.AttenuationModel 41bfa9fbdbc76aa7565b7931d7bb9a6258c169593170e5435bba297245ce40f5 -->

```csharp
public Inno.Native.MiniAudio.MaAttenuationModel Inno.Native.MiniAudio.MaSpatializer.AttenuationModel
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24271).

## `ChannelsIn`

<a id="api-c9e0b4d8e036b70d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.ChannelsIn bb4fdb2f8c102706cfbbe36eb8b83c999b8085b392fd57168c422ec3558f12ae -->

```csharp
public uint Inno.Native.MiniAudio.MaSpatializer.ChannelsIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24265).

## `ChannelsOut`

<a id="api-eb46a4dbf3689d4b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.ChannelsOut 6e7badde1bec7e72134036ab523e7b479d1dd56e5174fd3582b2591ef5db520f -->

```csharp
public uint Inno.Native.MiniAudio.MaSpatializer.ChannelsOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24267).

## `ConeInnerAngleInRadians`

<a id="api-1c618d42947a4077"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.ConeInnerAngleInRadians 7f8ec8b83288924d2a8e87705d7168a6f5e9c7ab80684b8694fbcaffce95d476 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.ConeInnerAngleInRadians
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24287).

## `ConeOuterAngleInRadians`

<a id="api-02b02a210b4321f6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.ConeOuterAngleInRadians ee9c26fbaa5e40024b6367fc45015142d24897901e7deaed67967dfa97a41295 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.ConeOuterAngleInRadians
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24289).

## `ConeOuterGain`

<a id="api-08a34eaaba8ead5b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.ConeOuterGain f6ca22a6cc192fa1df9dfb20afdbb7f037c5880dd1504bf0a64b229fa59bdb90 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.ConeOuterGain
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24291).

## `Direction`

<a id="api-76a21b6b3ac22ed1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.Direction c42b58e6c7f5ac72cb909efacd5e382a6db72ff59335501090e8dc02a6878685 -->

```csharp
public Inno.Native.MiniAudio.MaAtomicVec3f Inno.Native.MiniAudio.MaSpatializer.Direction
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24301).

## `DirectionalAttenuationFactor`

<a id="api-38ff734e67c5dd13"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.DirectionalAttenuationFactor c59a674c085770e57811e24cdeaeb702681920692b6c58e0c810e09c4777d81c -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.DirectionalAttenuationFactor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24295).

## `DopplerFactor`

<a id="api-653fb6193cabf131"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.DopplerFactor 523283393d8e040837e35de4ff7206652a146c2a947d29b832482282a965b395 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.DopplerFactor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24293).

## `DopplerPitch`

<a id="api-cc6d280aaee13191"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.DopplerPitch 260246735f5f4240b8f2175c92978a53779356c57ef24932309f07214584af5a -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.DopplerPitch
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24305).

## `Gainer`

<a id="api-53d82e6452e16183"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.Gainer e15d509af13b1f02a94eb6208153dd44d848cf7621b7cee95726eb7a25514e24 -->

```csharp
public Inno.Native.MiniAudio.MaGainer Inno.Native.MiniAudio.MaSpatializer.Gainer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24309).

## `GainSmoothTimeInFrames`

<a id="api-9d4e52cb91c692cb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.GainSmoothTimeInFrames 940b3759e22060a843a12b7dbb8e1dee8aaef088f77d3ac753d5a1bf49ee26ea -->

```csharp
public uint Inno.Native.MiniAudio.MaSpatializer.GainSmoothTimeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24297).

## `Handedness`

<a id="api-e524ccceb71ad05e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.Handedness 19ff37e80a4e3ec0304a75c92475e21e0f75649d732cd7c6d93e2f1780e7a6be -->

```csharp
public Inno.Native.MiniAudio.MaHandedness Inno.Native.MiniAudio.MaSpatializer.Handedness
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24275).

## `MaxDistance`

<a id="api-8ad4f34909216ebb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.MaxDistance 994865c6cb47057a3f212b7e297e74f38fbb62c6ea2714af15b5cf59e418391a -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.MaxDistance
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24283).

## `MaxGain`

<a id="api-5fc86c720ffc25b7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.MaxGain ffed079054d7ad00943c0bd3fa6dffa9d89ff6546e39f02f38d3a6e72b68dccc -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.MaxGain
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24279).

## `MinDistance`

<a id="api-0b2586e12e812e07"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.MinDistance 41c5a2c4b3234461f4a833047b74fd7470f0a30ed6cb0a8c5141634bb2c9d698 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.MinDistance
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24281).

## `MinGain`

<a id="api-1d053ac2a8106f3c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.MinGain 39591723530d1245da6fd58906c30c92ebf89707cfe097479275d61a245d97da -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.MinGain
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24277).

## `MinSpatializationChannelGain`

<a id="api-4f995192538e13e6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.MinSpatializationChannelGain 0cef4bf613b55ce73d877d170f313895630073b63ffc742fc32187dbd5286c13 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.MinSpatializationChannelGain
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24307).

## `OwnsHeap`

<a id="api-7534e57f293d68f1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.OwnsHeap 56d177a6be29f044bb9acd5b862a3ad2ef9d814a57918ba5970c5086c796b29b -->

```csharp
public uint Inno.Native.MiniAudio.MaSpatializer.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24315).

## `PChannelMapIn`

<a id="api-b9c3df018ed68785"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.PChannelMapIn 82e76768d32246b5914041277c5dd205761be687cec8fcb5f42b61e6311c2c04 -->

```csharp
public byte* Inno.Native.MiniAudio.MaSpatializer.PChannelMapIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24269).

## `PHeap`

<a id="api-5e94ee03b45dc940"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.PHeap ec08146123a3acc7a9e0844c4ad115a79e8faf8bdf0f17f702bf9fefe1b9f258 -->

```csharp
public void* Inno.Native.MiniAudio.MaSpatializer.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24313).

## `PNewChannelGainsOut`

<a id="api-da47297377f2924b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.PNewChannelGainsOut b7f2fad3a36b073f6bd1eb4054463965ec0139d8728a9e1c74013fdf1880459f -->

```csharp
public float* Inno.Native.MiniAudio.MaSpatializer.PNewChannelGainsOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24311).

## `Position`

<a id="api-bec7fb9db3dfeedd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.Position 1ad841ee03c28d409f74cbf28f9597e772e7e2670695010184010c7ab8411e82 -->

```csharp
public Inno.Native.MiniAudio.MaAtomicVec3f Inno.Native.MiniAudio.MaSpatializer.Position
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24299).

## `Positioning`

<a id="api-ba95edeeea8de436"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.Positioning 313c42a04956e9880e895ced3ab7e733d8bfea280fec4fe542fcee5368759457 -->

```csharp
public Inno.Native.MiniAudio.MaPositioning Inno.Native.MiniAudio.MaSpatializer.Positioning
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24273).

## `Rolloff`

<a id="api-a9e07e253a615479"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.Rolloff b96765360ace5403d617c76ad8f26069011b1769a59c5304608ff612c8fa8ec4 -->

```csharp
public float Inno.Native.MiniAudio.MaSpatializer.Rolloff
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24285).

## `Velocity`

<a id="api-13555afe3d758ea0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSpatializer.Velocity 12d54d57c1f81f853e68ea2b967a714e940cbf0c7026430d5bc6f5231c381eaf -->

```csharp
public Inno.Native.MiniAudio.MaAtomicVec3f Inno.Native.MiniAudio.MaSpatializer.Velocity
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24303).
