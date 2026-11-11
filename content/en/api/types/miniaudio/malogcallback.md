---
title: "MaLogCallback"
description: "Reference for MaLogCallback in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.9ca8d1dd9c302320
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaLogCallback`

This reference describes `MaLogCallback` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`OnLog`](#api-6f16e523d3772db0) | Field |
| [`PUserData`](#api-f379de7fcdbbab7c) | Field |

## Type declaration

<a id="api-9ca8d1dd9c302320"></a>
<!-- api: T:Inno.Native.MiniAudio.MaLogCallback fbd352d4898ff82f4932dd1c53847641d97e03d2053c3044439be7b9f5bf0463 -->

```csharp
public struct Inno.Native.MiniAudio.MaLogCallback
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21881).

## `OnLog`

<a id="api-6f16e523d3772db0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLogCallback.OnLog a60376592fca2a77698ad06ff4980e49fc0e9050b4102be9020d3a87b0cbdfc3 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, uint, sbyte*, void> Inno.Native.MiniAudio.MaLogCallback.OnLog
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21884).

## `PUserData`

<a id="api-f379de7fcdbbab7c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaLogCallback.PUserData f9f6c16cc237960d49cdbe7a61a05bc7235963f4ad4d18226eb39fcb09fd6139 -->

```csharp
public void* Inno.Native.MiniAudio.MaLogCallback.PUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21886).
