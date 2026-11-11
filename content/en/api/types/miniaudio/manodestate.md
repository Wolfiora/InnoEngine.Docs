---
title: "MaNodeState"
description: "Reference for MaNodeState in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.9bc944ae71909a5e
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaNodeState`

This reference describes `MaNodeState` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_node_state_started`](#api-824e3ef6190403bd) | Field |
| [`ma_node_state_stopped`](#api-19ca0973bbf41a50) | Field |

## Type declaration

<a id="api-9bc944ae71909a5e"></a>
<!-- api: T:Inno.Native.MiniAudio.MaNodeState 6f7d4d733dedeba3ed24291d3a4bef991b5438355c4d98d77171e92d77b8cfc1 -->

```csharp
public enum Inno.Native.MiniAudio.MaNodeState : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22459).

## `ma_node_state_started`

<a id="api-824e3ef6190403bd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeState.ma_node_state_started b68d9153c12c2e947ddda2dca8ea8a90a9e6b3a185eb820af80855430d914385 -->

```csharp
Inno.Native.MiniAudio.MaNodeState.ma_node_state_started = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22461).

## `ma_node_state_stopped`

<a id="api-19ca0973bbf41a50"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeState.ma_node_state_stopped 35738d0e58e6622bca6e331d287a642f56e2bea9e7584d7c2ad25a1f7cca6455 -->

```csharp
Inno.Native.MiniAudio.MaNodeState.ma_node_state_stopped = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22462).
