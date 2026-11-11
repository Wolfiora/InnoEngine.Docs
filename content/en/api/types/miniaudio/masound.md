---
title: "MaSound"
description: "Reference for MaSound in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.ffde3f0787e42290
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaSound`

This reference describes `MaSound` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AtEnd`](#api-118332f5e0575021) | Field |
| [`EndCallback`](#api-05ae06c6c9af7229) | Field |
| [`EngineNode`](#api-535b5b2b0dddbfa8) | Field |
| [`OwnsDataSource`](#api-0751cb39207623fa) | Field |
| [`PDataSource`](#api-f62ae2c23253fe8b) | Field |
| [`PEndCallbackUserData`](#api-a30d07942bda1d46) | Field |
| [`PProcessingCache`](#api-056a721044f20c0e) | Field |
| [`PResourceManagerDataSource`](#api-5a961e6f04c3b4ec) | Field |
| [`ProcessingCacheCap`](#api-c1bce2347f7ec385) | Field |
| [`ProcessingCacheFramesRemaining`](#api-627aa8bad44b07bb) | Field |
| [`SeekTarget`](#api-22ea76993677e163) | Field |

## Type declaration

<a id="api-ffde3f0787e42290"></a>
<!-- api: T:Inno.Native.MiniAudio.MaSound 1b902aca94b5fa85b887e68a1531a307d11d621aef8013dc4145adfe9c112a94 -->

```csharp
public struct Inno.Native.MiniAudio.MaSound
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24107).

## `AtEnd`

<a id="api-118332f5e0575021"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSound.AtEnd 6bb4480261c05cb596a931a5a17a3d7ad9f4d9c4c58c7d8206eb1998cccbce7c -->

```csharp
public uint Inno.Native.MiniAudio.MaSound.AtEnd
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24116).

## `EndCallback`

<a id="api-05ae06c6c9af7229"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSound.EndCallback beb0edeb2dbe4b3a2322b70f1add6a71b600c58410d43bdc5ecdbed35c1737de -->

```csharp
public delegate* unmanaged[Cdecl]<void*, Inno.Native.MiniAudio.MaSound*, void> Inno.Native.MiniAudio.MaSound.EndCallback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24118).

## `EngineNode`

<a id="api-535b5b2b0dddbfa8"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSound.EngineNode 2b3d95297876acbb077455ec4f38e0865eef949c44e6c84499a4c45ebceba0df -->

```csharp
public Inno.Native.MiniAudio.MaEngineNode Inno.Native.MiniAudio.MaSound.EngineNode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24110).

## `OwnsDataSource`

<a id="api-0751cb39207623fa"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSound.OwnsDataSource ca39ac4bec562b3dd45791271f126677efe253e4f6a90684e452574549b4b3e6 -->

```csharp
public byte Inno.Native.MiniAudio.MaSound.OwnsDataSource
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24128).

## `PDataSource`

<a id="api-f62ae2c23253fe8b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSound.PDataSource 5a472f3173a665f97b3a865691ffaf0dbacd23f93b7686be06fff482453f3263 -->

```csharp
public void* Inno.Native.MiniAudio.MaSound.PDataSource
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24112).

## `PEndCallbackUserData`

<a id="api-a30d07942bda1d46"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSound.PEndCallbackUserData dfbeeada94f260f89ec9e3c398730080bd921374cd0945966a5ca286890437a7 -->

```csharp
public void* Inno.Native.MiniAudio.MaSound.PEndCallbackUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24120).

## `PProcessingCache`

<a id="api-056a721044f20c0e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSound.PProcessingCache 392388d21fb49622d30ed29d9fd0c9de93cbdff5873901f18e41af3a38339193 -->

```csharp
public float* Inno.Native.MiniAudio.MaSound.PProcessingCache
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24122).

## `PResourceManagerDataSource`

<a id="api-5a961e6f04c3b4ec"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSound.PResourceManagerDataSource 4441aba8109c461c137e1056cd4f9b439ec53bd3d065485b4a5dc47263a43461 -->

```csharp
public Inno.Native.MiniAudio.MaResourceManagerDataSource* Inno.Native.MiniAudio.MaSound.PResourceManagerDataSource
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24130).

## `ProcessingCacheCap`

<a id="api-c1bce2347f7ec385"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSound.ProcessingCacheCap fc201c22b91178f520b8f27e21198145dc1e80f45c4e1c397cf076b0429f00d8 -->

```csharp
public uint Inno.Native.MiniAudio.MaSound.ProcessingCacheCap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24126).

## `ProcessingCacheFramesRemaining`

<a id="api-627aa8bad44b07bb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSound.ProcessingCacheFramesRemaining 8b8f3bf8431318065d3c1df22700d7da1ff590d0760812a2030fc978363bce3c -->

```csharp
public uint Inno.Native.MiniAudio.MaSound.ProcessingCacheFramesRemaining
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24124).

## `SeekTarget`

<a id="api-22ea76993677e163"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSound.SeekTarget d3bfaf40fdd8df7a2d7258beef117d0171fa1ec8aaa329564a8d4735a912bc5c -->

```csharp
public ulong Inno.Native.MiniAudio.MaSound.SeekTarget
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24114).
