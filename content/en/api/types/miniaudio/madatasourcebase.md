---
title: "MaDataSourceBase"
description: "Reference for MaDataSourceBase in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.e639c7464d4312da
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDataSourceBase`

This reference describes `MaDataSourceBase` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`IsLooping`](#api-476a756bb01f0c1d) | Field |
| [`LoopBegInFrames`](#api-1655287339509889) | Field |
| [`LoopEndInFrames`](#api-f02727ca0fbf0b0d) | Field |
| [`OnGetNext`](#api-aa76dbe8df5a51af) | Field |
| [`PCurrent`](#api-b02c4c95a6d48bcf) | Field |
| [`PNext`](#api-ad9d1662e2136e42) | Field |
| [`RangeBegInFrames`](#api-0d28a2270936da6d) | Field |
| [`RangeEndInFrames`](#api-ea2f7a77a646b9b1) | Field |
| [`Vtable`](#api-54011cd4917b0e63) | Field |

## Type declaration

<a id="api-e639c7464d4312da"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDataSourceBase 7310e43fa8cc2c5b1dc4ff243dc37a9b43d33cb06acd1355f6971c3c4507ee2b -->

```csharp
public struct Inno.Native.MiniAudio.MaDataSourceBase
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18358).

## `IsLooping`

<a id="api-476a756bb01f0c1d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceBase.IsLooping ee54aef062cf5c326b12b9bf907def1ce53a942be974b4ab4b9bfc5be65ce86a -->

```csharp
public uint Inno.Native.MiniAudio.MaDataSourceBase.IsLooping
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18377).

## `LoopBegInFrames`

<a id="api-1655287339509889"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceBase.LoopBegInFrames 724075bff119ee18e844121f079d4a734f86e48e22f972e6a5d2dc87217211e3 -->

```csharp
public ulong Inno.Native.MiniAudio.MaDataSourceBase.LoopBegInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18367).

## `LoopEndInFrames`

<a id="api-f02727ca0fbf0b0d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceBase.LoopEndInFrames 7dcbecd7df375e9ecf8eb8c9de10665bfb5b710c0ab4ba66501e789709beaac8 -->

```csharp
public ulong Inno.Native.MiniAudio.MaDataSourceBase.LoopEndInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18369).

## `OnGetNext`

<a id="api-aa76dbe8df5a51af"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceBase.OnGetNext 7f6e78fca589321e0759ab3683bedb8f08cfdf4a6bd6ed787eb54dcc76bca21b -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*> Inno.Native.MiniAudio.MaDataSourceBase.OnGetNext
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18375).

## `PCurrent`

<a id="api-b02c4c95a6d48bcf"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceBase.PCurrent 566770d29c6cb31bd611c457598e51c905cb40a52f27c0280d04a777c1f8121f -->

```csharp
public void* Inno.Native.MiniAudio.MaDataSourceBase.PCurrent
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18371).

## `PNext`

<a id="api-ad9d1662e2136e42"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceBase.PNext 9bad8b6c8fd14e795a528bafa899204a1fa5841a406007e43aeb7d3c8dc14f64 -->

```csharp
public void* Inno.Native.MiniAudio.MaDataSourceBase.PNext
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18373).

## `RangeBegInFrames`

<a id="api-0d28a2270936da6d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceBase.RangeBegInFrames 5c1a405847d9fc3fe7d6de54a65b0e7547b745129e6f0d94c564d8f0c1932726 -->

```csharp
public ulong Inno.Native.MiniAudio.MaDataSourceBase.RangeBegInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18363).

## `RangeEndInFrames`

<a id="api-ea2f7a77a646b9b1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceBase.RangeEndInFrames fb3f9255c25383a89bf7f7c5cc8201602c5073c55f884da0af1028029ec0ad23 -->

```csharp
public ulong Inno.Native.MiniAudio.MaDataSourceBase.RangeEndInFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18365).

## `Vtable`

<a id="api-54011cd4917b0e63"></a>
<!-- api: F:Inno.Native.MiniAudio.MaDataSourceBase.Vtable a61753d4784fb18c1b23f6a10058ce9e0ff55b3a47c0a42b86b276a536b67f6d -->

```csharp
public Inno.Native.MiniAudio.MaDataSourceVtable* Inno.Native.MiniAudio.MaDataSourceBase.Vtable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18361).
