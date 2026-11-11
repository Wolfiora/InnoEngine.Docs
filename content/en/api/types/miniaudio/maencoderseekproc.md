---
title: "MaEncoderSeekProc"
description: "Reference for MaEncoderSeekProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.7ed807f74bddab06
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEncoderSeekProc`

This reference describes `MaEncoderSeekProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-548d049ab2f3c0fe) | Method |
| [`BeginInvoke`](#api-00fea0cc6e8183ba) | Method |
| [`EndInvoke`](#api-f5e3f0d6bcfd9f10) | Method |
| [`Invoke`](#api-b1fa6f7947ee73d2) | Method |

## Type declaration

<a id="api-7ed807f74bddab06"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEncoderSeekProc fc99b0c05bdffa09ef6b2e56b70aeeaebdc616fd6c7f9450e74269966f72d7cd -->

```csharp
public delegate Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderSeekProc(Inno.Native.MiniAudio.MaEncoder* argument0, long argument1, Inno.Native.MiniAudio.MaSeekOrigin argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20257).

## `#ctor`

<a id="api-548d049ab2f3c0fe"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderSeekProc.#ctor(System.Object,System.IntPtr) d819582a6acea240f6ed4cde61e9418b930794ae1f8b770f848f8c8b200b642c -->

```csharp
public Inno.Native.MiniAudio.MaEncoderSeekProc.MaEncoderSeekProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20257).

## `BeginInvoke`

<a id="api-00fea0cc6e8183ba"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderSeekProc.BeginInvoke(Inno.Native.MiniAudio.MaEncoder*,System.Int64,Inno.Native.MiniAudio.MaSeekOrigin,System.AsyncCallback,System.Object) 53f0379730b5cec304cad14b8aa6eae10bdc708394825072873535c2b85bb13b -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaEncoderSeekProc.BeginInvoke(Inno.Native.MiniAudio.MaEncoder* argument0, long argument1, Inno.Native.MiniAudio.MaSeekOrigin argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20257).

## `EndInvoke`

<a id="api-f5e3f0d6bcfd9f10"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderSeekProc.EndInvoke(System.IAsyncResult) d87f84955a8aa823c3deb12230610b1c6bc716fe8334edac01cf8f7d43cf2e5e -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderSeekProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20257).

## `Invoke`

<a id="api-b1fa6f7947ee73d2"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderSeekProc.Invoke(Inno.Native.MiniAudio.MaEncoder*,System.Int64,Inno.Native.MiniAudio.MaSeekOrigin) bdf47b6811676dfc8c9e379684302e1664df7aef291ba2ea2a453bf1f31fe62f -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaEncoderSeekProc.Invoke(Inno.Native.MiniAudio.MaEncoder* argument0, long argument1, Inno.Native.MiniAudio.MaSeekOrigin argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20257).
