---
title: "MaEncoderWriteProc"
description: "Reference for MaEncoderWriteProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.1a5d25b2e75af5e2
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEncoderWriteProc`

This reference describes `MaEncoderWriteProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bfa3119483113d79) | Method |
| [`BeginInvoke`](#api-9f48d4e942c90afd) | Method |
| [`EndInvoke`](#api-73b2dcadb46ff8ea) | Method |
| [`Invoke`](#api-3ce0dfa2327defca) | Method |

## Type declaration

<a id="api-1a5d25b2e75af5e2"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEncoderWriteProc cd116ac64349ab16db67398be95ea199ee518ff73b2ccda0a518d4a467b053c8 -->

```csharp
public delegate Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderWriteProc(Inno.Native.MiniAudio.MaEncoder* argument0, void* argument1, ulong argument2, ulong* argument3)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20284).

## `#ctor`

<a id="api-bfa3119483113d79"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderWriteProc.#ctor(System.Object,System.IntPtr) bce2250b5e0a1662a6716d9bb39b87eb4a71e3d379b092eff8247d9965306694 -->

```csharp
public Inno.Native.MiniAudio.MaEncoderWriteProc.MaEncoderWriteProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20284).

## `BeginInvoke`

<a id="api-9f48d4e942c90afd"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderWriteProc.BeginInvoke(Inno.Native.MiniAudio.MaEncoder*,System.Void*,System.UInt64,System.UInt64*,System.AsyncCallback,System.Object) 6242c41dcd4691e469715c4334e6a18601702677a9481f0b1ff9753f3f6deea2 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaEncoderWriteProc.BeginInvoke(Inno.Native.MiniAudio.MaEncoder* argument0, void* argument1, ulong argument2, ulong* argument3, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20284).

## `EndInvoke`

<a id="api-73b2dcadb46ff8ea"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderWriteProc.EndInvoke(System.IAsyncResult) bba3b7756f704c6f43df4148cb92124f21d012fe8a6f8af4dae7d92ab3a1b48c -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderWriteProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20284).

## `Invoke`

<a id="api-3ce0dfa2327defca"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderWriteProc.Invoke(Inno.Native.MiniAudio.MaEncoder*,System.Void*,System.UInt64,System.UInt64*) b2c3aeeabf4511d3df9790c722f6a5af5620c6db0cc80afb010b101a75630909 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderWriteProc.Invoke(Inno.Native.MiniAudio.MaEncoder* argument0, void* argument1, ulong argument2, ulong* argument3)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20284).
