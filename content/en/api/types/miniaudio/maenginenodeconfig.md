---
title: "MaEngineNodeConfig"
description: "Reference for MaEngineNodeConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.2d06c0c5855a3eed
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEngineNodeConfig`

This reference describes `MaEngineNodeConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`ChannelsIn`](#api-5eb3d7dc8a5c63f3) | Field |
| [`ChannelsOut`](#api-89874be08b10ed50) | Field |
| [`IsPitchDisabled`](#api-c5012cb54f32aad9) | Field |
| [`IsSpatializationDisabled`](#api-c7ddf93bb2a13c61) | Field |
| [`MonoExpansionMode`](#api-c1aed393f0ca4bf1) | Field |
| [`PEngine`](#api-4ace8bfc76f30942) | Field |
| [`PinnedListenerIndex`](#api-9bd610d7886e6535) | Field |
| [`Resampling`](#api-e4b1e94beda80759) | Field |
| [`SampleRate`](#api-534fbee88fee40bf) | Field |
| [`Type`](#api-986d360fab4ef524) | Field |
| [`VolumeSmoothTimeInPcmFrames`](#api-72cfd5404e0db83c) | Field |

## Type declaration

<a id="api-2d06c0c5855a3eed"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEngineNodeConfig ce051395bacc4462cd672671e46797ff95715a7568a96f311a1285f7287df03f -->

```csharp
public struct Inno.Native.MiniAudio.MaEngineNodeConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20521).

## `ChannelsIn`

<a id="api-5eb3d7dc8a5c63f3"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNodeConfig.ChannelsIn 39dcada4a59210fbfd1ddafe8215008c1b114b47d3210403e8ca1a40d3a4d58c -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineNodeConfig.ChannelsIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20528).

## `ChannelsOut`

<a id="api-89874be08b10ed50"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNodeConfig.ChannelsOut 818ec092dd1a18aad33bbe07511f6dd536b0e934bbc2ea90ba2a635f916e895b -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineNodeConfig.ChannelsOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20530).

## `IsPitchDisabled`

<a id="api-c5012cb54f32aad9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNodeConfig.IsPitchDisabled 580af5e98cefcf4a6f2686c6aa7d3df2c621135001612099ccda317b0f41b3a1 -->

```csharp
public byte Inno.Native.MiniAudio.MaEngineNodeConfig.IsPitchDisabled
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20538).

## `IsSpatializationDisabled`

<a id="api-c7ddf93bb2a13c61"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNodeConfig.IsSpatializationDisabled ea3b1701ec43fdad7b6f5db3b6a323488841c768d0f23de71507584485e4a2a8 -->

```csharp
public byte Inno.Native.MiniAudio.MaEngineNodeConfig.IsSpatializationDisabled
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20540).

## `MonoExpansionMode`

<a id="api-c1aed393f0ca4bf1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNodeConfig.MonoExpansionMode e23c8cb587974e84114135c97864af3fc9abc51a65d923d746107d877a69c2be -->

```csharp
public Inno.Native.MiniAudio.MaMonoExpansionMode Inno.Native.MiniAudio.MaEngineNodeConfig.MonoExpansionMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20536).

## `PEngine`

<a id="api-4ace8bfc76f30942"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNodeConfig.PEngine 490decda93a45b279108c969bea5dd801d8f977252a0bc3c5818fd48e1acb962 -->

```csharp
public Inno.Native.MiniAudio.MaEngine* Inno.Native.MiniAudio.MaEngineNodeConfig.PEngine
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20524).

## `PinnedListenerIndex`

<a id="api-9bd610d7886e6535"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNodeConfig.PinnedListenerIndex 414c12b0f9bff9b0b392194e9b8ac111d004247860f4e548e20e7f729b533838 -->

```csharp
public byte Inno.Native.MiniAudio.MaEngineNodeConfig.PinnedListenerIndex
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20542).

## `Resampling`

<a id="api-e4b1e94beda80759"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNodeConfig.Resampling 528d04af90e1620984a7801d324c4f99398059616cd6abf2e61589a981e4995e -->

```csharp
public Inno.Native.MiniAudio.MaResamplerConfig Inno.Native.MiniAudio.MaEngineNodeConfig.Resampling
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20544).

## `SampleRate`

<a id="api-534fbee88fee40bf"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNodeConfig.SampleRate 06d9c70cfca1c0b9c8fa6848d2b7beb3445aed639975e47c5fc7acec5de8e072 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineNodeConfig.SampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20532).

## `Type`

<a id="api-986d360fab4ef524"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNodeConfig.Type a9073a9b35b553b01534b67b75c4ddf3576e3705945ab2e2327a30709c140abf -->

```csharp
public Inno.Native.MiniAudio.MaEngineNodeType Inno.Native.MiniAudio.MaEngineNodeConfig.Type
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20526).

## `VolumeSmoothTimeInPcmFrames`

<a id="api-72cfd5404e0db83c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaEngineNodeConfig.VolumeSmoothTimeInPcmFrames d41525f1a7c8288c2e4895c0bea0edab4c87c682d55c78a08aa1a5f56fead913 -->

```csharp
public uint Inno.Native.MiniAudio.MaEngineNodeConfig.VolumeSmoothTimeInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20534).
