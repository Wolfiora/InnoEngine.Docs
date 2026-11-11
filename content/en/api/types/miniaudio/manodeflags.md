---
title: "MaNodeFlags"
description: "Reference for MaNodeFlags in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.e4d89321a5aeea51
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaNodeFlags`

This reference describes `MaNodeFlags` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`MA_NODE_FLAG_ALLOW_NULL_INPUT`](#api-4a9cb2e5ac528b3c) | Field |
| [`MA_NODE_FLAG_CONTINUOUS_PROCESSING`](#api-7d3de024a3901424) | Field |
| [`MA_NODE_FLAG_DIFFERENT_PROCESSING_RATES`](#api-52596098a899dd04) | Field |
| [`MA_NODE_FLAG_PASSTHROUGH`](#api-ea53552736bea859) | Field |
| [`MA_NODE_FLAG_SILENT_OUTPUT`](#api-d46e03076133133d) | Field |

## Type declaration

<a id="api-e4d89321a5aeea51"></a>
<!-- api: T:Inno.Native.MiniAudio.MaNodeFlags 1113dfd4ee9ffa90a0bfb38448e8d4a7d8d1f2d9a263ed6c61fb29b1509da059 -->

```csharp
public enum Inno.Native.MiniAudio.MaNodeFlags : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22316).

## `MA_NODE_FLAG_ALLOW_NULL_INPUT`

<a id="api-4a9cb2e5ac528b3c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeFlags.MA_NODE_FLAG_ALLOW_NULL_INPUT 7ab0a256b5bcd2abc6f2c5e62ea644eb663d824265d8ebe5314d10ff1ed8c0e2 -->

```csharp
Inno.Native.MiniAudio.MaNodeFlags.MA_NODE_FLAG_ALLOW_NULL_INPUT = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22320).

## `MA_NODE_FLAG_CONTINUOUS_PROCESSING`

<a id="api-7d3de024a3901424"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeFlags.MA_NODE_FLAG_CONTINUOUS_PROCESSING 7b2425302d292372c8da5d8deef6146b07f0ce2a2ddc99aa083a3f2216ac3156 -->

```csharp
Inno.Native.MiniAudio.MaNodeFlags.MA_NODE_FLAG_CONTINUOUS_PROCESSING = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22319).

## `MA_NODE_FLAG_DIFFERENT_PROCESSING_RATES`

<a id="api-52596098a899dd04"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeFlags.MA_NODE_FLAG_DIFFERENT_PROCESSING_RATES 920087b525d24ab17970e179d2bb95d3573bb9c6fa118a8b759bce6e8338759b -->

```csharp
Inno.Native.MiniAudio.MaNodeFlags.MA_NODE_FLAG_DIFFERENT_PROCESSING_RATES = 8
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22321).

## `MA_NODE_FLAG_PASSTHROUGH`

<a id="api-ea53552736bea859"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeFlags.MA_NODE_FLAG_PASSTHROUGH b8d9ce41a395841653aafb91224279c3db1c9819530f72f93e94e41585758533 -->

```csharp
Inno.Native.MiniAudio.MaNodeFlags.MA_NODE_FLAG_PASSTHROUGH = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22318).

## `MA_NODE_FLAG_SILENT_OUTPUT`

<a id="api-d46e03076133133d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeFlags.MA_NODE_FLAG_SILENT_OUTPUT f70977b37de99d08cd2ad3d06978d45dd78299de28cf758e1f341dfa69e729c2 -->

```csharp
Inno.Native.MiniAudio.MaNodeFlags.MA_NODE_FLAG_SILENT_OUTPUT = 16
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22322).
