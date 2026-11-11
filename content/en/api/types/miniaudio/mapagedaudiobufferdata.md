---
title: "MaPagedAudioBufferData"
description: "Reference for MaPagedAudioBufferData in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.9ee4a3d0a95accb8
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaPagedAudioBufferData`

This reference describes `MaPagedAudioBufferData` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Channels`](#api-0d783428db23005e) | Field |
| [`Format`](#api-c20bdcfd2049e3fa) | Field |
| [`Head`](#api-e71674c1fcdffc9f) | Field |
| [`PTail`](#api-02530d858ee01bfd) | Field |

## Type declaration

<a id="api-9ee4a3d0a95accb8"></a>
<!-- api: T:Inno.Native.MiniAudio.MaPagedAudioBufferData 1b5d94eab060008f61dd9b8b00e81fb038f63a04b797dcc04ae0fd67c995e2f7 -->

```csharp
public struct Inno.Native.MiniAudio.MaPagedAudioBufferData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22837).

## `Channels`

<a id="api-0d783428db23005e"></a>
<!-- api: F:Inno.Native.MiniAudio.MaPagedAudioBufferData.Channels 5f7600d45900838612b67d603315ebc01dbb4c85f6851e902159d979c739e3a5 -->

```csharp
public uint Inno.Native.MiniAudio.MaPagedAudioBufferData.Channels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22842).

## `Format`

<a id="api-c20bdcfd2049e3fa"></a>
<!-- api: F:Inno.Native.MiniAudio.MaPagedAudioBufferData.Format e8fb4fefa2492518e2b6e0a31c5b8e35fb3fd9a159404ac0d8c7b2ad0cff72ef -->

```csharp
public Inno.Native.MiniAudio.MaFormat Inno.Native.MiniAudio.MaPagedAudioBufferData.Format
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22840).

## `Head`

<a id="api-e71674c1fcdffc9f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaPagedAudioBufferData.Head ffa21f058c6ccfc0f76ead3254f55defa0ded09cf83973c0f6897f760c16ede0 -->

```csharp
public Inno.Native.MiniAudio.MaPagedAudioBufferPage Inno.Native.MiniAudio.MaPagedAudioBufferData.Head
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22844).

## `PTail`

<a id="api-02530d858ee01bfd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaPagedAudioBufferData.PTail 666e7e26e3483f0fbdaf927882d3a4af1831f5dc5fed2489da4403e3d62b9e13 -->

```csharp
public Inno.Native.MiniAudio.MaPagedAudioBufferPage* Inno.Native.MiniAudio.MaPagedAudioBufferData.PTail
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22846).
