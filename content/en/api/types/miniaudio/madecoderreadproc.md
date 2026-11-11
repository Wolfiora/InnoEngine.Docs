---
title: "MaDecoderReadProc"
description: "Reference for MaDecoderReadProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.3278242ff47c719d
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDecoderReadProc`

This reference describes `MaDecoderReadProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-15acc3516954f5a1) | Method |
| [`BeginInvoke`](#api-23501dd307c50f9d) | Method |
| [`EndInvoke`](#api-7b45beadad298e11) | Method |
| [`Invoke`](#api-bff795b69c315551) | Method |

## Type declaration

<a id="api-3278242ff47c719d"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDecoderReadProc 0cae26e16a1ff7e3ef6ae3b62dd949cef7e36bc37053c8724b75af317da34c6a -->

```csharp
public delegate Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaDecoderReadProc(Inno.Native.MiniAudio.MaDecoder* argument0, void* argument1, ulong argument2, ulong* argument3)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18676).

## `#ctor`

<a id="api-15acc3516954f5a1"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderReadProc.#ctor(System.Object,System.IntPtr) 73891942d13d1a36e5521052dd38c8cbc78c4ef56fa32c3f9ff860c800211aa1 -->

```csharp
public Inno.Native.MiniAudio.MaDecoderReadProc.MaDecoderReadProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18676).

## `BeginInvoke`

<a id="api-23501dd307c50f9d"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderReadProc.BeginInvoke(Inno.Native.MiniAudio.MaDecoder*,System.Void*,System.UInt64,System.UInt64*,System.AsyncCallback,System.Object) 9db354464e787b7ea11842d71551dc0bcf471c99cab11221ead076ecc38e2c29 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaDecoderReadProc.BeginInvoke(Inno.Native.MiniAudio.MaDecoder* argument0, void* argument1, ulong argument2, ulong* argument3, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18676).

## `EndInvoke`

<a id="api-7b45beadad298e11"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderReadProc.EndInvoke(System.IAsyncResult) 5b6d57f701bf6590935b561f498a9afb295d90be1a53e11c9dbd081864eef11e -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaDecoderReadProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18676).

## `Invoke`

<a id="api-bff795b69c315551"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderReadProc.Invoke(Inno.Native.MiniAudio.MaDecoder*,System.Void*,System.UInt64,System.UInt64*) d048654b8cc5d4ad9eac6aa68147462625763844c52ad654fc6a3c1171b0397f -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaDecoderReadProc.Invoke(Inno.Native.MiniAudio.MaDecoder* argument0, void* argument1, ulong argument2, ulong* argument3)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18676).
