---
title: "MaResourceManagerDataBuffer"
description: "Reference for MaResourceManagerDataBuffer in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.7d150ce72af470c0
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaResourceManagerDataBuffer`

This reference describes `MaResourceManagerDataBuffer` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Connector`](#api-737a58a8045c59dc) | Field |
| [`Ds`](#api-c8e5cc6cde61d866) | Field |
| [`ExecutionCounter`](#api-e59c6e8a24a6de57) | Field |
| [`ExecutionPointer`](#api-d32f027a1aa1128b) | Field |
| [`Flags`](#api-f0105677309f8d59) | Field |
| [`IsConnectorInitialized`](#api-3b98d59096f4fc58) | Field |
| [`IsLooping`](#api-7285e1678ab5ebb9) | Field |
| [`PNode`](#api-10fdeedf0ac7e518) | Field |
| [`PResourceManager`](#api-449076d15d873728) | Field |
| [`Result`](#api-daa4c50c3b8d5f7e) | Field |
| [`SeekTargetInPcmFrames`](#api-494d006a7bd13137) | Field |
| [`SeekToCursorOnNextRead`](#api-fcce63cb0789878a) | Field |

## Type declaration

<a id="api-7d150ce72af470c0"></a>
<!-- api: T:Inno.Native.MiniAudio.MaResourceManagerDataBuffer ce14fb5f05b95cb00b168f2669087319dfe136642c7e4576f20cf8e04f440d8a -->

```csharp
public struct Inno.Native.MiniAudio.MaResourceManagerDataBuffer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23453).

## `Connector`

<a id="api-737a58a8045c59dc"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.Connector 21d819d6f0dfbca16952039459f1be60ab69db601f27bbff90cde1981e27eec3 -->

```csharp
public Inno.Native.MiniAudio.MaResourceManagerDataBufferAnonymousUnion9072cdd7c6d42b32 Inno.Native.MiniAudio.MaResourceManagerDataBuffer.Connector
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23478).

## `Ds`

<a id="api-c8e5cc6cde61d866"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.Ds 105c4687708f4d981cd7c132f9bc1ea214ab19473bb481504d28c8e62859fb77 -->

```csharp
public Inno.Native.MiniAudio.MaDataSourceBase Inno.Native.MiniAudio.MaResourceManagerDataBuffer.Ds
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23456).

## `ExecutionCounter`

<a id="api-e59c6e8a24a6de57"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.ExecutionCounter 91802a3096568f457db2ba18436dbe487e2b40defe31e4c5529decf119fe1641 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataBuffer.ExecutionCounter
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23464).

## `ExecutionPointer`

<a id="api-d32f027a1aa1128b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.ExecutionPointer b62da2eac2edcef08e4517445f7c8b04fe417492226d1097aba66474a67094fe -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataBuffer.ExecutionPointer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23466).

## `Flags`

<a id="api-f0105677309f8d59"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.Flags 7705fd43253926445dd1090cccbcb6724f1703ae559b9f063ef7ccd28ce4da7b -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataBuffer.Flags
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23462).

## `IsConnectorInitialized`

<a id="api-3b98d59096f4fc58"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.IsConnectorInitialized 72f6b38e165d12ff311ff556806e2ed16963899bbbf230f0c0eef20ee833bb2e -->

```csharp
public Inno.Native.MiniAudio.MaAtomicBool32 Inno.Native.MiniAudio.MaResourceManagerDataBuffer.IsConnectorInitialized
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23476).

## `IsLooping`

<a id="api-7285e1678ab5ebb9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.IsLooping 14d2be196042fe3700c1c9e7895fe82de0142dc52482af1e7b18a7f47337f46b -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataBuffer.IsLooping
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23474).

## `PNode`

<a id="api-10fdeedf0ac7e518"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.PNode 39f22eff73593387b42af84acbccff20b1450db11efb29c3cdc2124d7584dd71 -->

```csharp
public Inno.Native.MiniAudio.MaResourceManagerDataBufferNode* Inno.Native.MiniAudio.MaResourceManagerDataBuffer.PNode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23460).

## `PResourceManager`

<a id="api-449076d15d873728"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.PResourceManager 8e9cf39eb68080c221633bfb47e418ac988717e5d69548578662bf53c6ca9f20 -->

```csharp
public Inno.Native.MiniAudio.MaResourceManager* Inno.Native.MiniAudio.MaResourceManagerDataBuffer.PResourceManager
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23458).

## `Result`

<a id="api-daa4c50c3b8d5f7e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.Result 6a104ab55563119048a594addbf9dc66d319fe475be4e4d7d6ee39b2c0efee2f -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaResourceManagerDataBuffer.Result
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23472).

## `SeekTargetInPcmFrames`

<a id="api-494d006a7bd13137"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.SeekTargetInPcmFrames d63b54df2b1ab95ac3c8b9ea691f3b591b79fe342ef7c454c86445a260de3f74 -->

```csharp
public ulong Inno.Native.MiniAudio.MaResourceManagerDataBuffer.SeekTargetInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23468).

## `SeekToCursorOnNextRead`

<a id="api-fcce63cb0789878a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataBuffer.SeekToCursorOnNextRead 64a812db3679f39cc1ffcbfe8e408fc55ee6baac0f24ced1ba548d11d31f90c4 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataBuffer.SeekToCursorOnNextRead
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23470).
