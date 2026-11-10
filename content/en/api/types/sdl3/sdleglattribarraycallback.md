---
title: "SDLEGLAttribArrayCallback"
description: "Reference for SDLEGLAttribArrayCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.310af20e8c6dcb5d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLEGLAttribArrayCallback`

This reference describes `SDLEGLAttribArrayCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7b6b403a3cd680c0) | Method |
| [`BeginInvoke`](#api-348e33f6e46166ec) | Method |
| [`EndInvoke`](#api-e9d23b1040d63267) | Method |
| [`Invoke`](#api-1aeca6ad2a28ea76) | Method |

## Type declaration

<a id="api-310af20e8c6dcb5d"></a>
<!-- api: T:Inno.Native.Sdl3.SDLEGLAttribArrayCallback f4afdd975749dc25c69687b24b926b48757d94a16ef1f4f895090276dccef8ba -->

```csharp
public delegate long* Inno.Native.Sdl3.SDLEGLAttribArrayCallback(void* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54126).

## `#ctor`

<a id="api-7b6b403a3cd680c0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEGLAttribArrayCallback.#ctor(System.Object,System.IntPtr) fbbdcee495dd4829c7913bce069f2c07c09b2dc88da825c110024097885244dd -->

```csharp
public Inno.Native.Sdl3.SDLEGLAttribArrayCallback.SDLEGLAttribArrayCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54126).

## `BeginInvoke`

<a id="api-348e33f6e46166ec"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEGLAttribArrayCallback.BeginInvoke(System.Void*,System.AsyncCallback,System.Object) 409641f969230d74d3911be3e47b4c1af4160531329afa29b5706aadb7ac0c73 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLEGLAttribArrayCallback.BeginInvoke(void* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54126).

## `EndInvoke`

<a id="api-e9d23b1040d63267"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEGLAttribArrayCallback.EndInvoke(System.IAsyncResult) 2f5f1cbee3daeaf571e9f64f8dbfcb8d6a79646108033e9cfb9e683d736ad77e -->

```csharp
public virtual long* Inno.Native.Sdl3.SDLEGLAttribArrayCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54126).

## `Invoke`

<a id="api-1aeca6ad2a28ea76"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEGLAttribArrayCallback.Invoke(System.Void*) 9eebf0d8a39b2aab485e5544e32c9135fd239747685ef8ab130d222680e80aa0 -->

```csharp
public virtual long* Inno.Native.Sdl3.SDLEGLAttribArrayCallback.Invoke(void* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54126).
