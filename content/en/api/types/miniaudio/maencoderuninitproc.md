---
title: "MaEncoderUninitProc"
description: "Reference for MaEncoderUninitProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.47830404e5ca4b3c
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEncoderUninitProc`

This reference describes `MaEncoderUninitProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a24cd4f0e158fbdc) | Method |
| [`BeginInvoke`](#api-c1ffeeb36b5b117f) | Method |
| [`EndInvoke`](#api-9a71f6002e9f2d26) | Method |
| [`Invoke`](#api-2043d075f5c2fe79) | Method |

## Type declaration

<a id="api-47830404e5ca4b3c"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEncoderUninitProc ae16f72db324ea84070a7f9f049fe19e654f8d69263bd1f5a16f1ca54036593b -->

```csharp
public delegate void Inno.Native.MiniAudio.MaEncoderUninitProc(Inno.Native.MiniAudio.MaEncoder* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20266).

## `#ctor`

<a id="api-a24cd4f0e158fbdc"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderUninitProc.#ctor(System.Object,System.IntPtr) 750f3a512f548d5385d956364d1c5e127d8c4278ae2fd7a8991d1e2f7566822a -->

```csharp
public Inno.Native.MiniAudio.MaEncoderUninitProc.MaEncoderUninitProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20266).

## `BeginInvoke`

<a id="api-c1ffeeb36b5b117f"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderUninitProc.BeginInvoke(Inno.Native.MiniAudio.MaEncoder*,System.AsyncCallback,System.Object) aa98d0a9c67e78b4a945979626b2997b428ab8d010c61a8d0a620b4ab5fa0b27 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaEncoderUninitProc.BeginInvoke(Inno.Native.MiniAudio.MaEncoder* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20266).

## `EndInvoke`

<a id="api-9a71f6002e9f2d26"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderUninitProc.EndInvoke(System.IAsyncResult) 4112841ef09440dadf70b7333d01b7c865811f08abe86c0c7e04b3b136f6c0d2 -->

```csharp
public virtual void Inno.Native.MiniAudio.MaEncoderUninitProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20266).

## `Invoke`

<a id="api-2043d075f5c2fe79"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEncoderUninitProc.Invoke(Inno.Native.MiniAudio.MaEncoder*) 2adeafb5a83147e34483df1fab7f70a42ce335fa777b5263498d2ba59b74015b -->

```csharp
public virtual void Inno.Native.MiniAudio.MaEncoderUninitProc.Invoke(Inno.Native.MiniAudio.MaEncoder* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20266).
