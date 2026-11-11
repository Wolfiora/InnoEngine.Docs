---
title: "MaEncoderInitProc"
description: "Reference for MaEncoderInitProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.c63eb2efe5be5f6e
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEncoderInitProc`

This reference describes `MaEncoderInitProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-41bffc377630a174) | Method |
| [`BeginInvoke`](#api-9bf4b9b03a84bf9a) | Method |
| [`EndInvoke`](#api-1c7f0cee8e6c12c7) | Method |
| [`Invoke`](#api-5764038887535235) | Method |

## Type declaration

<a id="api-c63eb2efe5be5f6e"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEncoderInitProc 553694a6a0ff1dcf152d85e707cfae0e1d08a957729cfe461aaac310d79a18cc -->

```csharp
public delegate Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderInitProc(Inno.Native.MiniAudio.MaEncoder* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20248).

## `#ctor`

<a id="api-41bffc377630a174"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderInitProc.#ctor(System.Object,System.IntPtr) f93f58d6f26491ffb8c1a11b4aea590032e55d210abef44a07cbff0a9ae0abcd -->

```csharp
public Inno.Native.MiniAudio.MaEncoderInitProc.MaEncoderInitProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20248).

## `BeginInvoke`

<a id="api-9bf4b9b03a84bf9a"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderInitProc.BeginInvoke(Inno.Native.MiniAudio.MaEncoder*,System.AsyncCallback,System.Object) 05b9eed2765fadbb5504e29af77abc24bf6f52b648b6bd48ecc590c5bfceb701 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaEncoderInitProc.BeginInvoke(Inno.Native.MiniAudio.MaEncoder* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20248).

## `EndInvoke`

<a id="api-1c7f0cee8e6c12c7"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderInitProc.EndInvoke(System.IAsyncResult) 601d6376db7c4261ab4bf3a407eca90f7b38b023cbaa965c6a97e361a5e65970 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderInitProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20248).

## `Invoke`

<a id="api-5764038887535235"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderInitProc.Invoke(Inno.Native.MiniAudio.MaEncoder*) da6c2ee44ef2bf64fe13cff7da8e316df123d41cd4107e4d4aa73c2f4cbb02eb -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderInitProc.Invoke(Inno.Native.MiniAudio.MaEncoder* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20248).
