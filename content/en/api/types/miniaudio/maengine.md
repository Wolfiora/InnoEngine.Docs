---
title: "MaEngine"
description: "Reference for MaEngine in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.701442711bd1c9c3
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEngine`

This reference describes `MaEngine` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AllocationCallbacks`](#api-8eaec81c3aa0dc23) | Field |
| [`DefaultVolumeSmoothTimeInPcmFrames`](#api-6b10c1bb80f81208) | Field |
| [`GainSmoothTimeInFrames`](#api-2f761f1fc3976acb) | Field |
| [`InlinedSoundCount`](#api-cddb335e7b703440) | Field |
| [`InlinedSoundLock`](#api-f859298af5808694) | Field |
| [`ListenerCount`](#api-e443383c16dd9137) | Field |
| [`Listeners`](#api-2449199b5b4d5390) | Field |
| [`MonoExpansionMode`](#api-9428b0d315bd729a) | Field |
| [`NodeGraph`](#api-0317f7f220d5644b) | Field |
| [`OnProcess`](#api-f4cf5adc699c9cdc) | Field |
| [`OwnsDevice`](#api-7ce9c5c37808adbc) | Field |
| [`OwnsResourceManager`](#api-afed1f597637d46f) | Field |
| [`PDevice`](#api-f666f599a01d3cce) | Field |
| [`PInlinedSoundHead`](#api-f6b29a43a31b2c28) | Field |
| [`PitchResamplingConfig`](#api-af1e88c6c68e9858) | Field |
| [`PLog`](#api-bd6fff27ca9842b2) | Field |
| [`PProcessUserData`](#api-ebd91dafba31fe65) | Field |
| [`PResourceManager`](#api-ce140cfffb946971) | Field |
| [`SampleRate`](#api-5e6d08207f1c82eb) | Field |

## Type declaration

<a id="api-701442711bd1c9c3"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEngine 7605c22f56878491aa605627097f260fd900062a504d8cbc9ca202f398a7e8e3 -->

```csharp
public struct Inno.Native.MiniAudio.MaEngine
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20309).

## `AllocationCallbacks`

<a id="api-8eaec81c3aa0dc23"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.AllocationCallbacks 2cfa7f37dde89e9d941e213d05b002895c502ce8af694f5f02d043dc915fbb4e -->

```csharp
public Inno.Native.MiniAudio.MaAllocationCallbacks Inno.Native.MiniAudio.MaEngine.AllocationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20326).

## `DefaultVolumeSmoothTimeInPcmFrames`

<a id="api-6b10c1bb80f81208"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.DefaultVolumeSmoothTimeInPcmFrames 766a39ab1653798a21540d992c22aecbc1e536fba7de24cbb8c6c4844421e711 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngine.DefaultVolumeSmoothTimeInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20340).

## `GainSmoothTimeInFrames`

<a id="api-2f761f1fc3976acb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.GainSmoothTimeInFrames 06d9426a9454494de98656e0f9ab5d9f54149a7a9f5e5d75975db09cd504feff -->

```csharp
public uint Inno.Native.MiniAudio.MaEngine.GainSmoothTimeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20338).

## `InlinedSoundCount`

<a id="api-cddb335e7b703440"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.InlinedSoundCount 6bf08574f11fc2bf2c8ef60d001e836033e6f245c66b330f63ead512056a2229 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngine.InlinedSoundCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20336).

## `InlinedSoundLock`

<a id="api-f859298af5808694"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.InlinedSoundLock 50e0f9ccab0ceffb8e92e1adf980eeb0a519361d9f964b75200f0025f42c8bd8 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngine.InlinedSoundLock
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20332).

## `ListenerCount`

<a id="api-e443383c16dd9137"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.ListenerCount 05e8cf88de03a386547bc1c58d7407248b7825030a1db36f96471ff310a4c6a4 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngine.ListenerCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20322).

## `Listeners`

<a id="api-2449199b5b4d5390"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.Listeners 51ae2cb9cfeb4650c62e597e8ce0ee8ac1ef3020bc0496548d11fd06b3fa983c -->

```csharp
public Inno.Native.MiniAudio.NativeArray_50ae7efedbdc618e Inno.Native.MiniAudio.MaEngine.Listeners
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20324).

## `MonoExpansionMode`

<a id="api-9428b0d315bd729a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.MonoExpansionMode 5e2ed24270cab427d0ad0e2912a74c11e75f8b64c7c2c23e12d02637de56d913 -->

```csharp
public Inno.Native.MiniAudio.MaMonoExpansionMode Inno.Native.MiniAudio.MaEngine.MonoExpansionMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20342).

## `NodeGraph`

<a id="api-0317f7f220d5644b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.NodeGraph a233863f2f6286b0d22a69cf65f95a892512aee7b1a422c703a72b5df709e07c -->

```csharp
public Inno.Native.MiniAudio.MaNodeGraph Inno.Native.MiniAudio.MaEngine.NodeGraph
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20312).

## `OnProcess`

<a id="api-f4cf5adc699c9cdc"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.OnProcess 0325ab995f4829f889047d68e1442de2ac7cd1fd64601cbdbc18248a873101ef -->

```csharp
public delegate* unmanaged[Cdecl]<void*, float*, ulong, void> Inno.Native.MiniAudio.MaEngine.OnProcess
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20344).

## `OwnsDevice`

<a id="api-7ce9c5c37808adbc"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.OwnsDevice 35291822e8c8f978e5c09585ae33deccac03cced030b2cb1281aee7526413381 -->

```csharp
public byte Inno.Native.MiniAudio.MaEngine.OwnsDevice
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20330).

## `OwnsResourceManager`

<a id="api-afed1f597637d46f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.OwnsResourceManager a2e2aa976dba0d1d8b85f12878809d8524beb74a2517a00eae8366a0dc367b54 -->

```csharp
public byte Inno.Native.MiniAudio.MaEngine.OwnsResourceManager
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20328).

## `PDevice`

<a id="api-f666f599a01d3cce"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.PDevice 96a1cbc967230377196ddc3106394c908a7b94b43d7f809a946fa4c4adf76ed9 -->

```csharp
public Inno.Native.MiniAudio.MaDevice* Inno.Native.MiniAudio.MaEngine.PDevice
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20316).

## `PInlinedSoundHead`

<a id="api-f6b29a43a31b2c28"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.PInlinedSoundHead a4f4f15c552d1b8848f944859d4407c77ebd96e2d7e95a9353fcaf881bd155fd -->

```csharp
public Inno.Native.MiniAudio.MaSoundInlined* Inno.Native.MiniAudio.MaEngine.PInlinedSoundHead
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20334).

## `PitchResamplingConfig`

<a id="api-af1e88c6c68e9858"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.PitchResamplingConfig 9c98b0aa88c5c24f94b9fa7a2979d1c6e099c1a6faabcc8dc7167fa7f4159168 -->

```csharp
public Inno.Native.MiniAudio.MaResamplerConfig Inno.Native.MiniAudio.MaEngine.PitchResamplingConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20348).

## `PLog`

<a id="api-bd6fff27ca9842b2"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.PLog 5117a327801c52dbce9aeaff2ee1b60ac9ce679e2aeccb59d84a16eb688fa59e -->

```csharp
public Inno.Native.MiniAudio.MaLog* Inno.Native.MiniAudio.MaEngine.PLog
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20318).

## `PProcessUserData`

<a id="api-ebd91dafba31fe65"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.PProcessUserData 468232976ce75c5539ad9b5478d0fb34c7e558f382fa3ecefabd269a3637fcdd -->

```csharp
public void* Inno.Native.MiniAudio.MaEngine.PProcessUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20346).

## `PResourceManager`

<a id="api-ce140cfffb946971"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.PResourceManager 37e5cab744240dd7ae59474cbac8bf14f8716cfe121a568e4f607896e432a33a -->

```csharp
public Inno.Native.MiniAudio.MaResourceManager* Inno.Native.MiniAudio.MaEngine.PResourceManager
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20314).

## `SampleRate`

<a id="api-5e6d08207f1c82eb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngine.SampleRate 314db153121dca27857d3f8a394a2f44c3019f1fe66a5364d1e3217ed589478f -->

```csharp
public uint Inno.Native.MiniAudio.MaEngine.SampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20320).
