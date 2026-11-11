---
title: "MaVfsCallbacks"
description: "Reference for MaVfsCallbacks in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.305998c7433c4665
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaVfsCallbacks`

This reference describes `MaVfsCallbacks` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`OnClose`](#api-da7b46a2779b8770) | Field |
| [`OnInfo`](#api-b24eebf63a37812c) | Field |
| [`OnOpen`](#api-3de829686cc3f2a4) | Field |
| [`OnOpenW`](#api-06a250e80780ce31) | Field |
| [`OnRead`](#api-6d5e930ceda2a4f6) | Field |
| [`OnSeek`](#api-268e32bb57df987a) | Field |
| [`OnTell`](#api-912c0c93878d5733) | Field |
| [`OnWrite`](#api-f50437a2f16f1a20) | Field |

## Type declaration

<a id="api-305998c7433c4665"></a>
<!-- api: T:Inno.Native.MiniAudio.MaVfsCallbacks 3a523966aa4840d4d8446101143a2d99c44600acdb12b50b5099b68811df7bf1 -->

```csharp
public struct Inno.Native.MiniAudio.MaVfsCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24680).

## `OnClose`

<a id="api-da7b46a2779b8770"></a>
<!-- api: F:Inno.Native.MiniAudio.MaVfsCallbacks.OnClose e9c0e037e825c051569c3a4bfd29922dd49f310046aa4417feb73025c7f6e29b -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaVfsCallbacks.OnClose
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24687).

## `OnInfo`

<a id="api-b24eebf63a37812c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaVfsCallbacks.OnInfo 86923a5292dfb10cdd4cacbe532d09fd5dab8e526a34a8b3c528be2b5b85c0f3 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, Inno.Native.MiniAudio.MaFileInfo*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaVfsCallbacks.OnInfo
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24697).

## `OnOpen`

<a id="api-3de829686cc3f2a4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaVfsCallbacks.OnOpen 34e24394a2817e1bb657ad61f1fdf55cb03c943dafa4a958b1809e21b9c2e475 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, sbyte*, uint, void**, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaVfsCallbacks.OnOpen
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24683).

## `OnOpenW`

<a id="api-06a250e80780ce31"></a>
<!-- api: F:Inno.Native.MiniAudio.MaVfsCallbacks.OnOpenW 59880167b55b4115ee2624d742eec688be663a1f41900fbc081a53026eb875d9 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, ushort*, uint, void**, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaVfsCallbacks.OnOpenW
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24685).

## `OnRead`

<a id="api-6d5e930ceda2a4f6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaVfsCallbacks.OnRead 538447ec4d478d9e221081bbd50175f7b1eb4ce425084712c1767f63297ef6a6 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, void*, ulong, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaVfsCallbacks.OnRead
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24689).

## `OnSeek`

<a id="api-268e32bb57df987a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaVfsCallbacks.OnSeek 48dec55b44afa4536afa02d28295bbda060ae06474b105bbc8fb15b07f6f9073 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, long, Inno.Native.MiniAudio.MaSeekOrigin, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaVfsCallbacks.OnSeek
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24693).

## `OnTell`

<a id="api-912c0c93878d5733"></a>
<!-- api: F:Inno.Native.MiniAudio.MaVfsCallbacks.OnTell b69fd0fdf1da6f76d64cf73d70768aefe8c9f69b08ce64301298f6830c50bd7e -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, long*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaVfsCallbacks.OnTell
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24695).

## `OnWrite`

<a id="api-f50437a2f16f1a20"></a>
<!-- api: F:Inno.Native.MiniAudio.MaVfsCallbacks.OnWrite c9d8e85f37f0386e353ec4d7ce26f842e195fc53db6a267e4fd9b818344c4dfa -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, void*, ulong, ulong*, Inno.Native.MiniAudio.MaResult> Inno.Native.MiniAudio.MaVfsCallbacks.OnWrite
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24691).
