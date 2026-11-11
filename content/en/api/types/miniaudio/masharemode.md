---
title: "MaShareMode"
description: "Reference for MaShareMode in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.1a6fefee69bc1634
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaShareMode`

This reference describes `MaShareMode` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_share_mode_exclusive`](#api-3e15ae0674d05e5a) | Field |
| [`ma_share_mode_shared`](#api-b9a3b9f1bae993d2) | Field |

## Type declaration

<a id="api-1a6fefee69bc1634"></a>
<!-- api: T:Inno.Native.MiniAudio.MaShareMode c1fb0e17d082ca6c97ed866d54c5e5142f28f1d257b42f44faf15739d91b161d -->

```csharp
public enum Inno.Native.MiniAudio.MaShareMode : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24020).

## `ma_share_mode_exclusive`

<a id="api-3e15ae0674d05e5a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaShareMode.ma_share_mode_exclusive 841842ef0e1b6f3332450b8f1303b36def4cf7bd3ed5e61c36f0303fe33ed857 -->

```csharp
Inno.Native.MiniAudio.MaShareMode.ma_share_mode_exclusive = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24023).

## `ma_share_mode_shared`

<a id="api-b9a3b9f1bae993d2"></a>
<!-- api: F:Inno.Native.MiniAudio.MaShareMode.ma_share_mode_shared 82500c0b22c477365263a510713efd58a3f681cf36e4fa588bf4d525b381d373 -->

```csharp
Inno.Native.MiniAudio.MaShareMode.ma_share_mode_shared = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24022).
