---
title: "MaEngineNode"
description: "Reference for MaEngineNode in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.1048388fec106276
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEngineNode`

This reference describes `MaEngineNode` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`BaseNode`](#api-86d540bce51a009e) | Field |
| [`Fader`](#api-8107d6d1513bc36f) | Field |
| [`FadeSettings`](#api-d20abc52f3a55b2a) | Field |
| [`IsPitchDisabled`](#api-8995ae89c4d92f66) | Field |
| [`IsSpatializationDisabled`](#api-4a47cd6bdf657bc5) | Field |
| [`MonoExpansionMode`](#api-a6bede2eb327c05f) | Field |
| [`OldDopplerPitch`](#api-8a28298fe806da44) | Field |
| [`OldPitch`](#api-2adb11f7786a80e4) | Field |
| [`OwnsHeap`](#api-907af96220ac1cbd) | Field |
| [`Panner`](#api-258b3ce79fe957d8) | Field |
| [`PEngine`](#api-60a423e1bdebd6c8) | Field |
| [`PHeap`](#api-8a883249fb7ce566) | Field |
| [`PinnedListenerIndex`](#api-d12f2d8934ef67a5) | Field |
| [`Pitch`](#api-21f364b0caf1c0d4) | Field |
| [`Resampler`](#api-dd0e4b7f9bf07258) | Field |
| [`SampleRate`](#api-14d3cf1dd690ab78) | Field |
| [`Spatializer`](#api-7986beb290d47122) | Field |
| [`Volume`](#api-ef9de94e75a3f867) | Field |
| [`VolumeGainer`](#api-edbf9a2a895a5d1d) | Field |
| [`VolumeSmoothTimeInPcmFrames`](#api-1a33f9810807c08b) | Field |

## Type declaration

<a id="api-1048388fec106276"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEngineNode b4381cec2f2f9845168cd48953c8947eaa7ac509016fddd1d9c1d9e185d3a8e5 -->

```csharp
public struct Inno.Native.MiniAudio.MaEngineNode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20435).

## `BaseNode`

<a id="api-86d540bce51a009e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.BaseNode ddd101d11f245430a410a5ef449bc441e6d7d39fdd98d15cf809ee8bd60a543f -->

```csharp
public Inno.Native.MiniAudio.MaNodeBase Inno.Native.MiniAudio.MaEngineNode.BaseNode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20438).

## `Fader`

<a id="api-8107d6d1513bc36f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.Fader fb1e8aa0cd3321b946d6d167c87e1a85ee05c409960bb9c9891e2ead12dc34e3 -->

```csharp
public Inno.Native.MiniAudio.MaFader Inno.Native.MiniAudio.MaEngineNode.Fader
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20448).

## `FadeSettings`

<a id="api-d20abc52f3a55b2a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.FadeSettings 7be525467799a3669533de8c6021bee464296226d478b30a42c50a6c634ec999 -->

```csharp
public Inno.Native.MiniAudio.MaEngineNodeAnonymousStruct1275eef82a5471ac Inno.Native.MiniAudio.MaEngineNode.FadeSettings
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20472).

## `IsPitchDisabled`

<a id="api-8995ae89c4d92f66"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.IsPitchDisabled 43fee1f56c15025427a19417806fd01fe0a1f7a1e8a801f24e065e35bdba4042 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineNode.IsPitchDisabled
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20466).

## `IsSpatializationDisabled`

<a id="api-4a47cd6bdf657bc5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.IsSpatializationDisabled b3b3f924aeab505a6aaf2834796eeac3e2104a3d5670ae9ce73d7cfb7e1e68df -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineNode.IsSpatializationDisabled
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20468).

## `MonoExpansionMode`

<a id="api-a6bede2eb327c05f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.MonoExpansionMode 36196896f9484cbdc3aab157b896970eacffbe9f250f1cb81c6aabeeb93ec71c -->

```csharp
public Inno.Native.MiniAudio.MaMonoExpansionMode Inno.Native.MiniAudio.MaEngineNode.MonoExpansionMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20446).

## `OldDopplerPitch`

<a id="api-8a28298fe806da44"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.OldDopplerPitch c34463c34a66f31ae4f6f16790e652771827b188abb767257fdf241b9713a346 -->

```csharp
public float Inno.Native.MiniAudio.MaEngineNode.OldDopplerPitch
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20464).

## `OldPitch`

<a id="api-2adb11f7786a80e4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.OldPitch e4f34665941d4c44b61b5fc6fd7599d9f6dc27258ef91b39740f28fa2b99d171 -->

```csharp
public float Inno.Native.MiniAudio.MaEngineNode.OldPitch
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20462).

## `OwnsHeap`

<a id="api-907af96220ac1cbd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.OwnsHeap 3c7e1f57b76eb5c031b16eccbc56ed6dbd9909f25c3d8d4c7d5d3c2c69bd96d4 -->

```csharp
public byte Inno.Native.MiniAudio.MaEngineNode.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20474).

## `Panner`

<a id="api-258b3ce79fe957d8"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.Panner bad7962b1565ef296e25083ebc30218d17c155da822ab4f01641d509a735110c -->

```csharp
public Inno.Native.MiniAudio.MaPanner Inno.Native.MiniAudio.MaEngineNode.Panner
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20454).

## `PEngine`

<a id="api-60a423e1bdebd6c8"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.PEngine 8f35b2f59e69032d8af0789657bc9940e74f862023adbb54b4f9118e63ecf0a3 -->

```csharp
public Inno.Native.MiniAudio.MaEngine* Inno.Native.MiniAudio.MaEngineNode.PEngine
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20440).

## `PHeap`

<a id="api-8a883249fb7ce566"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.PHeap 9b9f8e34870e761de7e5a40b4c3cad8cd23387b7e87a380d633c6c51888a5597 -->

```csharp
public void* Inno.Native.MiniAudio.MaEngineNode.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20476).

## `PinnedListenerIndex`

<a id="api-d12f2d8934ef67a5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.PinnedListenerIndex 65277e115eee32d025a198434b5339e46c00552c39749ded42ea58bdae00c24a -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineNode.PinnedListenerIndex
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20470).

## `Pitch`

<a id="api-21f364b0caf1c0d4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.Pitch 7958dc3f35d55f7e760195c72aa06db5f9348373a6e39eaf1104fc5bda137624 -->

```csharp
public float Inno.Native.MiniAudio.MaEngineNode.Pitch
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20460).

## `Resampler`

<a id="api-dd0e4b7f9bf07258"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.Resampler 3850633307a1463ff50dafe837d36fa2009ceff67677c0d957b8f9f52af8af9c -->

```csharp
public Inno.Native.MiniAudio.MaResampler Inno.Native.MiniAudio.MaEngineNode.Resampler
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20450).

## `SampleRate`

<a id="api-14d3cf1dd690ab78"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.SampleRate d18f28405ce91e196c06979608f7de04b739a6e421ceada2544a2617687b514d -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineNode.SampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20442).

## `Spatializer`

<a id="api-7986beb290d47122"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.Spatializer aca83fd254398b8fb0f378300a20cb85d10fd4ea6ea76366a3464ec3b1255f8a -->

```csharp
public Inno.Native.MiniAudio.MaSpatializer Inno.Native.MiniAudio.MaEngineNode.Spatializer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20452).

## `Volume`

<a id="api-ef9de94e75a3f867"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.Volume 70590ba4d754b970fdf8dfa8cb54cf132b01450541d663fac047c3e3bde857fa -->

```csharp
public Inno.Native.MiniAudio.MaAtomicFloat Inno.Native.MiniAudio.MaEngineNode.Volume
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20458).

## `VolumeGainer`

<a id="api-edbf9a2a895a5d1d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.VolumeGainer 24cd104f64613ccfc6da71eb0da9f8d58114f2ab39ed97a572d1988c49336004 -->

```csharp
public Inno.Native.MiniAudio.MaGainer Inno.Native.MiniAudio.MaEngineNode.VolumeGainer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20456).

## `VolumeSmoothTimeInPcmFrames`

<a id="api-1a33f9810807c08b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNode.VolumeSmoothTimeInPcmFrames 9b890bc7ee5a86cca25d91d34507cfdcdb1560e6b4d7f235a7bf2cba42f2df9d -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineNode.VolumeSmoothTimeInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20444).
