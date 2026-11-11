---
title: "MaResourceManagerFlags"
description: "Reference for MaResourceManagerFlags in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.cada1ada996212c6
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaResourceManagerFlags`

This reference describes `MaResourceManagerFlags` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`MA_RESOURCE_MANAGER_FLAG_NO_THREADING`](#api-6612b8001118ecea) | Field |
| [`MA_RESOURCE_MANAGER_FLAG_NON_BLOCKING`](#api-c039e375bd0785f5) | Field |

## Type declaration

<a id="api-cada1ada996212c6"></a>
<!-- api: T:Inno.Native.MiniAudio.MaResourceManagerFlags 6afb3db39fd64cc99250d90d7440f9324640ef3f266fe089f8d5671b7fc28527 -->

```csharp
public enum Inno.Native.MiniAudio.MaResourceManagerFlags : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23859).

## `MA_RESOURCE_MANAGER_FLAG_NO_THREADING`

<a id="api-6612b8001118ecea"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerFlags.MA_RESOURCE_MANAGER_FLAG_NO_THREADING ac9fea30b97c06971be3e9b0ce03bab4887e5c08a5798fb55aef249e810be5e2 -->

```csharp
Inno.Native.MiniAudio.MaResourceManagerFlags.MA_RESOURCE_MANAGER_FLAG_NO_THREADING = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23862).

## `MA_RESOURCE_MANAGER_FLAG_NON_BLOCKING`

<a id="api-c039e375bd0785f5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerFlags.MA_RESOURCE_MANAGER_FLAG_NON_BLOCKING 3c2736ccae198d3bfbe13168af12897495575f671fbe60e896cc193aeb2e0cef -->

```csharp
Inno.Native.MiniAudio.MaResourceManagerFlags.MA_RESOURCE_MANAGER_FLAG_NON_BLOCKING = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23861).
