---
title: "MaAsyncNotificationCallbacks"
description: "Reference for MaAsyncNotificationCallbacks in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.509905e05727f162
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaAsyncNotificationCallbacks`

This reference describes `MaAsyncNotificationCallbacks` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`OnSignal`](#api-da270ab00185c146) | Field |

## Type declaration

<a id="api-509905e05727f162"></a>
<!-- api: T:Inno.Native.MiniAudio.MaAsyncNotificationCallbacks 21530b02ddb500cc9b9dff4029903fd25c8a185e76f14f530764a64d8688ab89 -->

```csharp
public struct Inno.Native.MiniAudio.MaAsyncNotificationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16718).

## `OnSignal`

<a id="api-da270ab00185c146"></a>
<!-- api: F:Inno.Native.MiniAudio.MaAsyncNotificationCallbacks.OnSignal a991e6288cc03154dc4f193e17b44a2c1fb83ea6bcd74c7181b290efb7398b75 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void> Inno.Native.MiniAudio.MaAsyncNotificationCallbacks.OnSignal
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16721).
