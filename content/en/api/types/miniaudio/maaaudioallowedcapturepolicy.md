---
title: "MaAaudioAllowedCapturePolicy"
description: "Reference for MaAaudioAllowedCapturePolicy in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.99e03934ceed2291
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaAaudioAllowedCapturePolicy`

This reference describes `MaAaudioAllowedCapturePolicy` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ma_aaudio_allow_capture_by_all`](#api-1ba0c268619e828a) | Field |
| [`ma_aaudio_allow_capture_by_none`](#api-e4ed5bb096f7bcc1) | Field |
| [`ma_aaudio_allow_capture_by_system`](#api-d558c5d570320f52) | Field |
| [`ma_aaudio_allow_capture_default`](#api-bf6668ee14a1afbb) | Field |

## Type declaration

<a id="api-99e03934ceed2291"></a>
<!-- api: T:Inno.Native.MiniAudio.MaAaudioAllowedCapturePolicy d3e0dcbc856f29e6d16bee565a404f61deb87a1d7035bdbc513232a7bee4ab3a -->

```csharp
public enum Inno.Native.MiniAudio.MaAaudioAllowedCapturePolicy : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16616).

## `ma_aaudio_allow_capture_by_all`

<a id="api-1ba0c268619e828a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAaudioAllowedCapturePolicy.ma_aaudio_allow_capture_by_all 67945a3bcbd9684309020bed96fb2da39fc9e4d0f81c57ff40e6d494a91e73b5 -->

```csharp
Inno.Native.MiniAudio.MaAaudioAllowedCapturePolicy.ma_aaudio_allow_capture_by_all = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16619).

## `ma_aaudio_allow_capture_by_none`

<a id="api-e4ed5bb096f7bcc1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAaudioAllowedCapturePolicy.ma_aaudio_allow_capture_by_none 1c69b93df20bc60319c4992e7b5e9a7b4dfca5372c697f2f86d178eecee66e42 -->

```csharp
Inno.Native.MiniAudio.MaAaudioAllowedCapturePolicy.ma_aaudio_allow_capture_by_none = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16621).

## `ma_aaudio_allow_capture_by_system`

<a id="api-d558c5d570320f52"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAaudioAllowedCapturePolicy.ma_aaudio_allow_capture_by_system a0ec7ab945636a81493803d710a4b0286fbb74e1e279ec8aa5033ac7f6404ac5 -->

```csharp
Inno.Native.MiniAudio.MaAaudioAllowedCapturePolicy.ma_aaudio_allow_capture_by_system = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16620).

## `ma_aaudio_allow_capture_default`

<a id="api-bf6668ee14a1afbb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAaudioAllowedCapturePolicy.ma_aaudio_allow_capture_default d012e2cfd09a86a2b1252bd38790d8c40d2b8dfa80db36e814587a4ce4896189 -->

```csharp
Inno.Native.MiniAudio.MaAaudioAllowedCapturePolicy.ma_aaudio_allow_capture_default = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16618).
