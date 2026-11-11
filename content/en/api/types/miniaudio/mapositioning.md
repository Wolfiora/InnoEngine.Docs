---
title: "MaPositioning"
description: "Reference for MaPositioning in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.fdbe67d72f3af2ec
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaPositioning`

This reference describes `MaPositioning` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_positioning_absolute`](#api-8b65f32686be344c) | Field |
| [`ma_positioning_relative`](#api-b72cec77d96b1086) | Field |

## Type declaration

<a id="api-fdbe67d72f3af2ec"></a>
<!-- api: T:Inno.Native.MiniAudio.MaPositioning 7c0b71c5c32b31c97482f541a0894385ee654cfe5b96aa019d42a39b74939ff2 -->

```csharp
public enum Inno.Native.MiniAudio.MaPositioning : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23092).

## `ma_positioning_absolute`

<a id="api-8b65f32686be344c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaPositioning.ma_positioning_absolute b25bb4d7129dfe5254e96acdaea1cb914929f3ec953ada9f2100445e78361ae4 -->

```csharp
Inno.Native.MiniAudio.MaPositioning.ma_positioning_absolute = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23094).

## `ma_positioning_relative`

<a id="api-b72cec77d96b1086"></a>
<!-- api: F:Inno.Native.MiniAudio.MaPositioning.ma_positioning_relative ae45466cb62e7f8105f5054f40bd0327120e85266ce5258aade253dc625b894d -->

```csharp
Inno.Native.MiniAudio.MaPositioning.ma_positioning_relative = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23095).
