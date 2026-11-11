---
title: "MaNodeGraph"
description: "Reference for MaNodeGraph in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.b4bca9dcb1e5524e
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaNodeGraph`

This reference describes `MaNodeGraph` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Base`](#api-e66f70316b472c3c) | Field |
| [`Endpoint`](#api-00ca680724a7d9a4) | Field |
| [`IsReading`](#api-ee91ff79834525c7) | Field |
| [`PPreMixStack`](#api-7702da1cc4c44ac9) | Field |
| [`PProcessingCache`](#api-9948e8028a0f8d05) | Field |
| [`ProcessingCacheFramesRemaining`](#api-8607abdf0872ec00) | Field |
| [`ProcessingSizeInFrames`](#api-4b8b3caeb4acc0f5) | Field |

## Type declaration

<a id="api-b4bca9dcb1e5524e"></a>
<!-- api: T:Inno.Native.MiniAudio.MaNodeGraph 6eec49ae326946d5391167ab77665af933b862767e1a94b5e65f22ef137c46a8 -->

```csharp
public struct Inno.Native.MiniAudio.MaNodeGraph
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22333).

## `Base`

<a id="api-e66f70316b472c3c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeGraph.Base 7ebd343484a4b98af8b6a394a3a2427d888d85ea5c5d9e339ea9fa9f87cef8b4 -->

```csharp
public Inno.Native.MiniAudio.MaNodeBase Inno.Native.MiniAudio.MaNodeGraph.Base
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22336).

## `Endpoint`

<a id="api-00ca680724a7d9a4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeGraph.Endpoint 4f0a0c40fcce552ecfc4193b3e91c6358b67f5da8128f33bf7e7f7a8aee01d0b -->

```csharp
public Inno.Native.MiniAudio.MaNodeBase Inno.Native.MiniAudio.MaNodeGraph.Endpoint
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22338).

## `IsReading`

<a id="api-ee91ff79834525c7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeGraph.IsReading d7c4929eee29c1c7b8f9f79afbc9c8159a9e5cf032de55e69b0ebbbfed4f9d45 -->

```csharp
public uint Inno.Native.MiniAudio.MaNodeGraph.IsReading
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22346).

## `PPreMixStack`

<a id="api-7702da1cc4c44ac9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeGraph.PPreMixStack e6bd49757782557a0a771a08fabcae90fbe6c822c194add05fe12438152ff16f -->

```csharp
public Inno.Native.MiniAudio.MaStack* Inno.Native.MiniAudio.MaNodeGraph.PPreMixStack
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22348).

## `PProcessingCache`

<a id="api-9948e8028a0f8d05"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeGraph.PProcessingCache 41ed2f55e2219b3f354dac4f7a6d699f12568e326be46683600137d43a9e1db4 -->

```csharp
public float* Inno.Native.MiniAudio.MaNodeGraph.PProcessingCache
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22340).

## `ProcessingCacheFramesRemaining`

<a id="api-8607abdf0872ec00"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeGraph.ProcessingCacheFramesRemaining 88d2f3ca83d8c29c213ee5123054f28638170b98c2b69005b5b0acfe712fc0e7 -->

```csharp
public uint Inno.Native.MiniAudio.MaNodeGraph.ProcessingCacheFramesRemaining
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22342).

## `ProcessingSizeInFrames`

<a id="api-4b8b3caeb4acc0f5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeGraph.ProcessingSizeInFrames df0d63bcc307be734afbef23571fe39d223a96c30cb408138baa097cb1e8c77e -->

```csharp
public uint Inno.Native.MiniAudio.MaNodeGraph.ProcessingSizeInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22344).
