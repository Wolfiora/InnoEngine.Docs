---
title: "MaResourceManagerConfig"
description: "Reference for MaResourceManagerConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.6847bc6fc09527fc
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaResourceManagerConfig`

This reference describes `MaResourceManagerConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AllocationCallbacks`](#api-82f79cf00e023a74) | Field |
| [`CustomDecodingBackendCount`](#api-299a50532cfaaee2) | Field |
| [`DecodedChannels`](#api-2c03011b950c2956) | Field |
| [`DecodedFormat`](#api-eaec8ae4bdc43e55) | Field |
| [`DecodedSampleRate`](#api-3040f7adf947943e) | Field |
| [`Flags`](#api-dcf49d670e62966f) | Field |
| [`JobQueueCapacity`](#api-78c5c5711b8ee789) | Field |
| [`JobThreadCount`](#api-9475df04ca9d3aac) | Field |
| [`JobThreadStackSize`](#api-bea8fc0b29d39b76) | Field |
| [`PCustomDecodingBackendUserData`](#api-d90dcccd117fe375) | Field |
| [`PLog`](#api-e40b4bbe1ca953d0) | Field |
| [`PpCustomDecodingBackendVTables`](#api-1e610af36b8a76db) | Field |
| [`PVfs`](#api-e26071fc151e2783) | Field |
| [`Resampling`](#api-d7d33a3f799d5a8b) | Field |

## Type declaration

<a id="api-6847bc6fc09527fc"></a>
<!-- api: T:Inno.Native.MiniAudio.MaResourceManagerConfig f318d49bd3315cdccb3ef1d17ed991fb252fee7b595db606057ccdc2f531750d -->

```csharp
public struct Inno.Native.MiniAudio.MaResourceManagerConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23406).

## `AllocationCallbacks`

<a id="api-82f79cf00e023a74"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.AllocationCallbacks c4d4160bdd3f3bcdd1c1bc81fa2ab5e3052dcbb12a14c91a85f39e2d470c001f -->

```csharp
public Inno.Native.MiniAudio.MaAllocationCallbacks Inno.Native.MiniAudio.MaResourceManagerConfig.AllocationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23409).

## `CustomDecodingBackendCount`

<a id="api-299a50532cfaaee2"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.CustomDecodingBackendCount 29346aff10acdb4b65d1e182eb26e666f26c45a8981941e3d798566196b4c56f -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerConfig.CustomDecodingBackendCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23431).

## `DecodedChannels`

<a id="api-2c03011b950c2956"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.DecodedChannels a4e79868fc76ace0192861ad9293993b0a9fc494c47cf52f439bfa739e31d9b4 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerConfig.DecodedChannels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23415).

## `DecodedFormat`

<a id="api-eaec8ae4bdc43e55"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.DecodedFormat 29adfec252fa10bfb2dbc149bd6973df5e317853cec2186e23bf6e7d954285b3 -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaResourceManagerConfig.DecodedFormat
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23413).

## `DecodedSampleRate`

<a id="api-3040f7adf947943e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.DecodedSampleRate 1425d6f4c48c991c75a87455daa6ddc5a1239e090cec3b8d2c08c754e3fb7c54 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerConfig.DecodedSampleRate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23417).

## `Flags`

<a id="api-dcf49d670e62966f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.Flags bb32e75ffa604269102881450a8842988063ca469999d87a19e0a5eb94b6fa55 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerConfig.Flags
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23425).

## `JobQueueCapacity`

<a id="api-78c5c5711b8ee789"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.JobQueueCapacity ec3ebf49b554f1cc8158de76834e3b6ea27910515e7a35fe0440fe01a26f5f58 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerConfig.JobQueueCapacity
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23423).

## `JobThreadCount`

<a id="api-9475df04ca9d3aac"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.JobThreadCount babc973d7cf0301eecc870c7484c216ea20686dc55f3e082d4716eab9a167b33 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerConfig.JobThreadCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23419).

## `JobThreadStackSize`

<a id="api-bea8fc0b29d39b76"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.JobThreadStackSize 665a0411f81ccb3dcb84d83d69ad609e837703e17838a9935dab3f255c9005a1 -->

```csharp
public ulong Inno.Native.MiniAudio.MaResourceManagerConfig.JobThreadStackSize
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23421).

## `PCustomDecodingBackendUserData`

<a id="api-d90dcccd117fe375"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.PCustomDecodingBackendUserData 12fe91fa7626dda58f9dfe63d9bc259ea1a66cc2d7e014592fc37a8b30d5afb8 -->

```csharp
public void* Inno.Native.MiniAudio.MaResourceManagerConfig.PCustomDecodingBackendUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23433).

## `PLog`

<a id="api-e40b4bbe1ca953d0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.PLog 2500ce9fe83161679fd498e654fce89c32847420a8a736ea13b882bb2b6aed2c -->

```csharp
public Inno.Native.MiniAudio.MaLog* Inno.Native.MiniAudio.MaResourceManagerConfig.PLog
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23411).

## `PpCustomDecodingBackendVTables`

<a id="api-1e610af36b8a76db"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.PpCustomDecodingBackendVTables a9fb08bf3ecc6580d0abbbf66c3561b8547eec1915d6d01ea56f6d72274e4d2d -->

```csharp
public Inno.Native.MiniAudio.MaDecodingBackendVtable** Inno.Native.MiniAudio.MaResourceManagerConfig.PpCustomDecodingBackendVTables
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23429).

## `PVfs`

<a id="api-e26071fc151e2783"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.PVfs 9eb61bfa566095ad7c5ad7e1355b18d99008e1442bfe5a74513fd7a6020d8009 -->

```csharp
public void* Inno.Native.MiniAudio.MaResourceManagerConfig.PVfs
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23427).

## `Resampling`

<a id="api-d7d33a3f799d5a8b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerConfig.Resampling 2b3a5c942133d24063b0f75287318b19e44dd454df2e795149ec373b3bd25c5c -->

```csharp
public Inno.Native.MiniAudio.MaResamplerConfig Inno.Native.MiniAudio.MaResourceManagerConfig.Resampling
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23435).
