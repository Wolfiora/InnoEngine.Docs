---
title: "MaNodeVtable"
description: "Reference for MaNodeVtable in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.ff68ba0ba26cf3a0
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaNodeVtable`

This reference describes `MaNodeVtable` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Flags`](#api-a0b594fc64e6e45d) | Field |
| [`InputBusCount`](#api-f8b3f4f8a1c3299f) | Field |
| [`OnGetRequiredInputFrameCount`](#api-52c9c7c728e623cf) | Field |
| [`OnProcess`](#api-632d0a79a7881412) | Field |
| [`OutputBusCount`](#api-f7bad9af76491e23) | Field |

## Type declaration

<a id="api-ff68ba0ba26cf3a0"></a>
<!-- api: T:Inno.Native.MiniAudio.MaNodeVtable cdb8b84d8c652019df3b9fe72616b37496b404fd19a8466740b68c8ea0ef20a9 -->

```csharp
public struct Inno.Native.MiniAudio.MaNodeVtable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22473).

## `Flags`

<a id="api-a0b594fc64e6e45d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeVtable.Flags 9e0948e8445c8730f106b0b99d883be0ad64f8776154ebe75b6592559e645889 -->

```csharp
public uint Inno.Native.MiniAudio.MaNodeVtable.Flags
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22484).

## `InputBusCount`

<a id="api-f8b3f4f8a1c3299f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeVtable.InputBusCount 090d05880f4329f109a1eb77357a56a6f62b0b115d2a1df97e7811ae0bd55add -->

```csharp
public byte Inno.Native.MiniAudio.MaNodeVtable.InputBusCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22480).

## `OnGetRequiredInputFrameCount`

<a id="api-52c9c7c728e623cf"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeVtable.OnGetRequiredInputFrameCount 720402d766534d5e8c2ac3245dc7f79b64599d01d8ff4d6a57dda3e9af38edad -->

```csharp
public delegate* unmanaged[Cdecl]<void*, uint, uint*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaNodeVtable.OnGetRequiredInputFrameCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22478).

## `OnProcess`

<a id="api-632d0a79a7881412"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeVtable.OnProcess 7bef4adbc2de47861a5dc1dd2b40d137eb2020d6221856503c28b998720c69d0 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, float**, uint*, float**, uint*, void> Inno.Native.MiniAudio.MaNodeVtable.OnProcess
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22476).

## `OutputBusCount`

<a id="api-f7bad9af76491e23"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeVtable.OutputBusCount 162364748078ddd2665200f85dd8b28e65ec672f82730c9a531b8d488f684e0d -->

```csharp
public byte Inno.Native.MiniAudio.MaNodeVtable.OutputBusCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22482).
