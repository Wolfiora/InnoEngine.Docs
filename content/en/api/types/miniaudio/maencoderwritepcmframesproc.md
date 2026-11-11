---
title: "MaEncoderWritePcmFramesProc"
description: "Reference for MaEncoderWritePcmFramesProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.c7d2ed3ba0482dc1
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEncoderWritePcmFramesProc`

This reference describes `MaEncoderWritePcmFramesProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b2a7c882d39fac58) | Method |
| [`BeginInvoke`](#api-ac110bafcfe6bf28) | Method |
| [`EndInvoke`](#api-b915301e3208b612) | Method |
| [`Invoke`](#api-7375c4228fde12dc) | Method |

## Type declaration

<a id="api-c7d2ed3ba0482dc1"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEncoderWritePcmFramesProc e274a85c5b3b825a2aad2e9a1604df53466508e520ea35072c4552c333546279 -->

```csharp
public delegate Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderWritePcmFramesProc(Inno.Native.MiniAudio.MaEncoder* argument0, void* argument1, ulong argument2, ulong* argument3)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20275).

## `#ctor`

<a id="api-b2a7c882d39fac58"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderWritePcmFramesProc.#ctor(System.Object,System.IntPtr) 0fa1f31bc9f42a25d2ffd037a4888c0baee855126a39e55423027f6de0d731f0 -->

```csharp
public Inno.Native.MiniAudio.MaEncoderWritePcmFramesProc.MaEncoderWritePcmFramesProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20275).

## `BeginInvoke`

<a id="api-ac110bafcfe6bf28"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderWritePcmFramesProc.BeginInvoke(Inno.Native.MiniAudio.MaEncoder*,System.Void*,System.UInt64,System.UInt64*,System.AsyncCallback,System.Object) 2d41803b812cbdaf03279f09780a8a2e080776471fcbc067c8f0c014e5e6abe4 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaEncoderWritePcmFramesProc.BeginInvoke(Inno.Native.MiniAudio.MaEncoder* argument0, void* argument1, ulong argument2, ulong* argument3, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20275).

## `EndInvoke`

<a id="api-b915301e3208b612"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderWritePcmFramesProc.EndInvoke(System.IAsyncResult) a0772783df6d9f88d21cf26aad6da1f71901881a4ef2abc155caf3ce5a4b97de -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderWritePcmFramesProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20275).

## `Invoke`

<a id="api-7375c4228fde12dc"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderWritePcmFramesProc.Invoke(Inno.Native.MiniAudio.MaEncoder*,System.Void*,System.UInt64,System.UInt64*) 8655eaaed8e11e530cb013f33d36fa75c9f105ef86734c44edd2bcde05af8440 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderWritePcmFramesProc.Invoke(Inno.Native.MiniAudio.MaEncoder* argument0, void* argument1, ulong argument2, ulong* argument3)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20275).
