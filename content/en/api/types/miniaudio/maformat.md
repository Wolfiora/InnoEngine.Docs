---
title: "MaFormat"
description: "Reference for MaFormat in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.dbd9d40cadbbffdf
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaFormat`

This reference describes `MaFormat` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_format_count`](#api-9586dd0c345a664c) | Field |
| [`ma_format_f32`](#api-38f704b89a73bcc2) | Field |
| [`ma_format_s16`](#api-8b08031de4b89397) | Field |
| [`ma_format_s24`](#api-490e59d6b6a5ef9f) | Field |
| [`ma_format_s32`](#api-43d9624ce37b2c86) | Field |
| [`ma_format_u8`](#api-f28f2d825a5d0433) | Field |
| [`ma_format_unknown`](#api-e0528d03a36a71cc) | Field |

## Type declaration

<a id="api-dbd9d40cadbbffdf"></a>
<!-- api: T:Inno.Native.MiniAudio.MaFormat 3033902305faf18dc810f56e8936d51805d7e445b48d2bc0d65cd4260bdfe621 -->

```csharp
public enum Inno.Native.MiniAudio.MaFormat : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20688).

## `ma_format_count`

<a id="api-9586dd0c345a664c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaFormat.ma_format_count 510884e80ac5621c62d8e2565c9e8ae79a538db83c39ff47f58750b231d944fb -->

```csharp
Inno.Native.MiniAudio.MaFormat.ma_format_count = 6
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20696).

## `ma_format_f32`

<a id="api-38f704b89a73bcc2"></a>
<!-- api: F:Inno.Native.MiniAudio.MaFormat.ma_format_f32 6a99d0a00a3db3000251687c664afee810cb2b12a11fc402f4828ed6d8cae180 -->

```csharp
Inno.Native.MiniAudio.MaFormat.ma_format_f32 = 5
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20695).

## `ma_format_s16`

<a id="api-8b08031de4b89397"></a>
<!-- api: F:Inno.Native.MiniAudio.MaFormat.ma_format_s16 7dfd8539a967f2d86114c71edd1df207abac9c06c3c712beba412bf16f980f91 -->

```csharp
Inno.Native.MiniAudio.MaFormat.ma_format_s16 = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20692).

## `ma_format_s24`

<a id="api-490e59d6b6a5ef9f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaFormat.ma_format_s24 54bf45b25fd04a5290f9c19c40c55544c1ebb36f1354d191d2b3f14c365243c8 -->

```csharp
Inno.Native.MiniAudio.MaFormat.ma_format_s24 = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20693).

## `ma_format_s32`

<a id="api-43d9624ce37b2c86"></a>
<!-- api: F:Inno.Native.MiniAudio.MaFormat.ma_format_s32 b82e7c5a696f8a7bdce5ce9d1b288076abad6405bb3a026f113046f518629388 -->

```csharp
Inno.Native.MiniAudio.MaFormat.ma_format_s32 = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20694).

## `ma_format_u8`

<a id="api-f28f2d825a5d0433"></a>
<!-- api: F:Inno.Native.MiniAudio.MaFormat.ma_format_u8 b8b8d030a145362ff6857bc6d6d409c268ed51b8c0427952b79f484f28089b8d -->

```csharp
Inno.Native.MiniAudio.MaFormat.ma_format_u8 = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20691).

## `ma_format_unknown`

<a id="api-e0528d03a36a71cc"></a>
<!-- api: F:Inno.Native.MiniAudio.MaFormat.ma_format_unknown a5744d048eefb322ef34142651192fe8ee3e7da4f6fbe9d0b7175a5ee7888d17 -->

```csharp
Inno.Native.MiniAudio.MaFormat.ma_format_unknown = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20690).
