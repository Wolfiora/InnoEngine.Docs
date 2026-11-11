---
title: "MaResourceManagerDataStream"
description: "Reference for MaResourceManagerDataStream in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.af2236e33b3db092
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaResourceManagerDataStream`

This reference describes `MaResourceManagerDataStream` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AbsoluteCursor`](#api-3245ee9f033367a3) | Field |
| [`CurrentPageIndex`](#api-0796d0532c747aba) | Field |
| [`Decoder`](#api-d671651e2c949852) | Field |
| [`Ds`](#api-d65cd51c61e91f06) | Field |
| [`ExecutionCounter`](#api-484063a3ef254caa) | Field |
| [`ExecutionPointer`](#api-853fb2d2ce7cc932) | Field |
| [`Flags`](#api-8c82b1cdd47ffe74) | Field |
| [`IsDecoderAtEnd`](#api-8b685a42eb98f5c7) | Field |
| [`IsDecoderInitialized`](#api-3a9a7d55666a05f4) | Field |
| [`IsLooping`](#api-f1694a19223559ac) | Field |
| [`IsPageValid`](#api-2e84453da7c6a4b7) | Field |
| [`PageFrameCount`](#api-0bb64b7f5f659d3c) | Field |
| [`PPageData`](#api-fe0774a51b289b8a) | Field |
| [`PResourceManager`](#api-b425a86a3a0d7ab1) | Field |
| [`RelativeCursor`](#api-0b72f6375817a62a) | Field |
| [`Result`](#api-221f40d9eb9a29ac) | Field |
| [`SeekCounter`](#api-5e98ae2b5780f360) | Field |
| [`TotalLengthInPcmFrames`](#api-d642301d9f711dfa) | Field |

## Type declaration

<a id="api-af2236e33b3db092"></a>
<!-- api: T:Inno.Native.MiniAudio.MaResourceManagerDataStream 48369b97cb83704aa69fc96358ff0fee2a3e2f6d4132b91c0fd7e5466f14ee93 -->

```csharp
public struct Inno.Native.MiniAudio.MaResourceManagerDataStream
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23665).

## `AbsoluteCursor`

<a id="api-3245ee9f033367a3"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.AbsoluteCursor 5d2fd0d4a1e5eac998dd22779aaf3d5e4cd2cba553c9afddee62495d410a9955 -->

```csharp
public ulong Inno.Native.MiniAudio.MaResourceManagerDataStream.AbsoluteCursor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23682).

## `CurrentPageIndex`

<a id="api-0796d0532c747aba"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.CurrentPageIndex a49f423ede7add7aaf63740077d037973c61ff00d08fc4cb067d4b7ec5e9d1d4 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataStream.CurrentPageIndex
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23684).

## `Decoder`

<a id="api-d671651e2c949852"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.Decoder b0aa023c64a7be5066fef12c0edf0b8f2005a060008ae163b1ec6810e06062d1 -->

```csharp
public Inno.Native.MiniAudio.MaDecoder Inno.Native.MiniAudio.MaResourceManagerDataStream.Decoder
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23674).

## `Ds`

<a id="api-d65cd51c61e91f06"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.Ds 77a10e01dc9b0fa5c1e5b21eb50eaae88ef135163667222022ade1122471d5e4 -->

```csharp
public Inno.Native.MiniAudio.MaDataSourceBase Inno.Native.MiniAudio.MaResourceManagerDataStream.Ds
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23668).

## `ExecutionCounter`

<a id="api-484063a3ef254caa"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.ExecutionCounter 71b222b3a0288074abe542a2f7d61de696fc843153b9e75d99461bdafa77452e -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataStream.ExecutionCounter
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23686).

## `ExecutionPointer`

<a id="api-853fb2d2ce7cc932"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.ExecutionPointer 43ab655d189288a0b655174e8ade06a57b7e9f0b0f9f267066104e850313c5fa -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataStream.ExecutionPointer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23688).

## `Flags`

<a id="api-8c82b1cdd47ffe74"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.Flags 72644bc4a04c4c31d8fac1e43a74b28afa2bbc40a56d43b69f2e348b87dbc0ce -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataStream.Flags
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23672).

## `IsDecoderAtEnd`

<a id="api-8b685a42eb98f5c7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.IsDecoderAtEnd 7dc3c1443a5208ea5908f1f0a8a34576385986b49b594a2c8f4565212b638df1 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataStream.IsDecoderAtEnd
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23698).

## `IsDecoderInitialized`

<a id="api-3a9a7d55666a05f4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.IsDecoderInitialized a2bf71aed21dc981a52974f03d6d269fe29d6c50169e43bd4536946547db52a2 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataStream.IsDecoderInitialized
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23676).

## `IsLooping`

<a id="api-f1694a19223559ac"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.IsLooping bea6f35d6ab0d8b0588b7e51d0d6ae08b77419c4e747a24a708805cf41112c96 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataStream.IsLooping
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23690).

## `IsPageValid`

<a id="api-2e84453da7c6a4b7"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.IsPageValid 2b0357f8c77bc47f8cbe0e5d99eaaa24f291956206abb762f5b6fbc848aa9c7a -->

```csharp
public Inno.Native.MiniAudio.NativeArray_5f1329750a7569d7 Inno.Native.MiniAudio.MaResourceManagerDataStream.IsPageValid
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23700).

## `PageFrameCount`

<a id="api-0bb64b7f5f659d3c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.PageFrameCount 90d2e8c4f2e3480dfb8fd29b4b778e175ba4ca490ef4d845e770d3c0f2578731 -->

```csharp
public Inno.Native.MiniAudio.NativeArray_dba04c537bb532b7 Inno.Native.MiniAudio.MaResourceManagerDataStream.PageFrameCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23694).

## `PPageData`

<a id="api-fe0774a51b289b8a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.PPageData 80d53f3f43f4005e77aed3832ec434eef4df96125e45843aca22f035e0ba7ac9 -->

```csharp
public void* Inno.Native.MiniAudio.MaResourceManagerDataStream.PPageData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23692).

## `PResourceManager`

<a id="api-b425a86a3a0d7ab1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.PResourceManager 43a775a0eb1b9e1a606a11c32e1d9119d52e9778efc1eda14477c9996f373dbf -->

```csharp
public Inno.Native.MiniAudio.MaResourceManager* Inno.Native.MiniAudio.MaResourceManagerDataStream.PResourceManager
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23670).

## `RelativeCursor`

<a id="api-0b72f6375817a62a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.RelativeCursor f0ef86da657907d7634479f320ad6a5a812b0da005fa7cab23c4d52385bc3222 -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataStream.RelativeCursor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23680).

## `Result`

<a id="api-221f40d9eb9a29ac"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.Result b6f67159701de17754b0ebf25b375f36a33e149c578fc56238918b0c17cdce92 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaResourceManagerDataStream.Result
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23696).

## `SeekCounter`

<a id="api-5e98ae2b5780f360"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.SeekCounter 18e3fbde39aef5c612ebe74d649ce134156500de7b3ea01953082842f48d9eca -->

```csharp
public uint Inno.Native.MiniAudio.MaResourceManagerDataStream.SeekCounter
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23702).

## `TotalLengthInPcmFrames`

<a id="api-d642301d9f711dfa"></a>
<!-- api: F:Inno.Native.MiniAudio.MaResourceManagerDataStream.TotalLengthInPcmFrames 3407db5c50d68c7d07da0e9cc7eac406b97e4baf3c06b008b0f1a8307bd6af91 -->

```csharp
public ulong Inno.Native.MiniAudio.MaResourceManagerDataStream.TotalLengthInPcmFrames
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23678).
