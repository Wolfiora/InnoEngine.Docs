---
title: "MaRb"
description: "Reference for MaRb in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.bd956b4bda5fbc09
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaRb`

This reference describes `MaRb` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AllocationCallbacks`](#api-c00e2446ea7570d5) | Field |
| [`ClearOnWriteAcquire`](#api-66259114ac98674a) | Field |
| [`EncodedReadOffset`](#api-707c5c2fcc1ecaea) | Field |
| [`EncodedWriteOffset`](#api-f20ee8b805ac2c95) | Field |
| [`OwnsBuffer`](#api-a3839e9a3fed5d13) | Field |
| [`PBuffer`](#api-3bf8de3a975d46af) | Field |
| [`SubbufferCount`](#api-bb4cd8c32a20849b) | Field |
| [`SubbufferSizeInBytes`](#api-a61904803c11b2d6) | Field |
| [`SubbufferStrideInBytes`](#api-ab8a940c3bceac24) | Field |

## Type declaration

<a id="api-bd956b4bda5fbc09"></a>
<!-- api: T:Inno.Native.MiniAudio.MaRb e75f38e9974397707a2a472b57328ceb247b75ff0010061f7b8dd939482ad5e4 -->

```csharp
public struct Inno.Native.MiniAudio.MaRb
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23160).

## `AllocationCallbacks`

<a id="api-c00e2446ea7570d5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaRb.AllocationCallbacks 805ed7623c7f5165986900e14dea72dc2598f24890036c62b799ef30d04310d9 -->

```csharp
public Inno.Native.MiniAudio.MaAllocationCallbacks Inno.Native.MiniAudio.MaRb.AllocationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23179).

## `ClearOnWriteAcquire`

<a id="api-66259114ac98674a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaRb.ClearOnWriteAcquire 4b92c687e5a46fc33a30f2b309158981655871aced9b6f1324cd2dc9cff8f80b -->

```csharp
public byte Inno.Native.MiniAudio.MaRb.ClearOnWriteAcquire
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23177).

## `EncodedReadOffset`

<a id="api-707c5c2fcc1ecaea"></a>
<!-- api: F:Inno.Native.MiniAudio.MaRb.EncodedReadOffset df02be9496c115fbdadc8538d1d5221e5ee568d9e3f6af9952ee656c262af92b -->

```csharp
public uint Inno.Native.MiniAudio.MaRb.EncodedReadOffset
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23171).

## `EncodedWriteOffset`

<a id="api-f20ee8b805ac2c95"></a>
<!-- api: F:Inno.Native.MiniAudio.MaRb.EncodedWriteOffset d8343f8def903749668da73fb2c3b4172cb9c4332f74c77d1046ca25b7c65898 -->

```csharp
public uint Inno.Native.MiniAudio.MaRb.EncodedWriteOffset
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23173).

## `OwnsBuffer`

<a id="api-a3839e9a3fed5d13"></a>
<!-- api: F:Inno.Native.MiniAudio.MaRb.OwnsBuffer d1b9218d65c6bbe036a6fcb175c5926fc03bb0a8cbb9c4cabd7f36eedfe66828 -->

```csharp
public byte Inno.Native.MiniAudio.MaRb.OwnsBuffer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23175).

## `PBuffer`

<a id="api-3bf8de3a975d46af"></a>
<!-- api: F:Inno.Native.MiniAudio.MaRb.PBuffer 3397d3321a7da3e60d39bf009e09be00e0cec02d97013e1ae4d02d72c5e75cd5 -->

```csharp
public void* Inno.Native.MiniAudio.MaRb.PBuffer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23163).

## `SubbufferCount`

<a id="api-bb4cd8c32a20849b"></a>
<!-- api: F:Inno.Native.MiniAudio.MaRb.SubbufferCount cfe2d1a18131c3cb64346afa83127292321948930621f47b37f761d68a63bfe1 -->

```csharp
public uint Inno.Native.MiniAudio.MaRb.SubbufferCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23167).

## `SubbufferSizeInBytes`

<a id="api-a61904803c11b2d6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaRb.SubbufferSizeInBytes 12c57691bbad951c43699cd43285704295aeb2e6b9f186b84c4340476f392f1f -->

```csharp
public uint Inno.Native.MiniAudio.MaRb.SubbufferSizeInBytes
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23165).

## `SubbufferStrideInBytes`

<a id="api-ab8a940c3bceac24"></a>
<!-- api: F:Inno.Native.MiniAudio.MaRb.SubbufferStrideInBytes 03d5675f2070068a134f496df1a5e9c19cc87c5387da33956a7c69fd328d0ec7 -->

```csharp
public uint Inno.Native.MiniAudio.MaRb.SubbufferStrideInBytes
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23169).
