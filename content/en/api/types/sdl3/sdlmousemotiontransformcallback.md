---
title: "SDLMouseMotionTransformCallback"
description: "Reference for SDLMouseMotionTransformCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.7fa1448123cba625
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLMouseMotionTransformCallback`

This reference describes `SDLMouseMotionTransformCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d50e1d521cbae868) | Method |
| [`BeginInvoke`](#api-d591d10663a4a431) | Method |
| [`EndInvoke`](#api-6bbbd5d03cfa7a05) | Method |
| [`Invoke`](#api-21c39e87d5799a6c) | Method |

## Type declaration

<a id="api-7fa1448123cba625"></a>
<!-- api: T:Inno.Native.Sdl3.SDLMouseMotionTransformCallback 12aac72a650dfec51b45669c7cd90980b32833dd9e5abe364f94e3b9db38084f -->

```csharp
public delegate void Inno.Native.Sdl3.SDLMouseMotionTransformCallback(void* argument0, ulong argument1, Inno.Native.Sdl3.SDLWindow* argument2, uint argument3, float* argument4, float* argument5)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58278).

## `#ctor`

<a id="api-d50e1d521cbae868"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMouseMotionTransformCallback.#ctor(System.Object,System.IntPtr) 3fd553fc77f03f2b570503472cbffd42fadaa0f7d4b0c4faa196d7ff2cd9785f -->

```csharp
public Inno.Native.Sdl3.SDLMouseMotionTransformCallback.SDLMouseMotionTransformCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58278).

## `BeginInvoke`

<a id="api-d591d10663a4a431"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMouseMotionTransformCallback.BeginInvoke(System.Void*,System.UInt64,Inno.Native.Sdl3.SDLWindow*,System.UInt32,System.Single*,System.Single*,System.AsyncCallback,System.Object) 287e8cf397aa2675091c6ea39141aaf3b6ee753d6362655f710b892cf0005802 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLMouseMotionTransformCallback.BeginInvoke(void* argument0, ulong argument1, Inno.Native.Sdl3.SDLWindow* argument2, uint argument3, float* argument4, float* argument5, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58278).

## `EndInvoke`

<a id="api-6bbbd5d03cfa7a05"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMouseMotionTransformCallback.EndInvoke(System.IAsyncResult) 54a219e4f5ac6a47864bbf6b749777bd28cf10ba03b6f300e112b873e8549ec5 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLMouseMotionTransformCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58278).

## `Invoke`

<a id="api-21c39e87d5799a6c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMouseMotionTransformCallback.Invoke(System.Void*,System.UInt64,Inno.Native.Sdl3.SDLWindow*,System.UInt32,System.Single*,System.Single*) 5c8fbf19d9c6d371d6cd9a6be591979edc8ac516bcf2552252a38d4d605ddfbf -->

```csharp
public virtual void Inno.Native.Sdl3.SDLMouseMotionTransformCallback.Invoke(void* argument0, ulong argument1, Inno.Native.Sdl3.SDLWindow* argument2, uint argument3, float* argument4, float* argument5)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58278).
