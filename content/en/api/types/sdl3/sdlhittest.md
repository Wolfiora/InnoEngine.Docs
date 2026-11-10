---
title: "SDLHitTest"
description: "Reference for SDLHitTest in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.d7f6ffaada68b8b1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLHitTest`

This reference describes `SDLHitTest` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0a1fd2e510071d2f) | Method |
| [`BeginInvoke`](#api-62e5ad92882943c4) | Method |
| [`EndInvoke`](#api-9d30f490415a7e7f) | Method |
| [`Invoke`](#api-45bffa11136594e3) | Method |

## Type declaration

<a id="api-d7f6ffaada68b8b1"></a>
<!-- api: T:Inno.Native.Sdl3.SDLHitTest 540e354d680463f7c0b31f6b78c1d5d06b3347249015f123cf7ae12bf002cf0c -->

```csharp
public delegate Inno.Native.Sdl3.SDLHitTestResult Inno.Native.Sdl3.SDLHitTest(Inno.Native.Sdl3.SDLWindow* argument0, Inno.Native.Sdl3.SDLPoint* argument1, void* argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57375).

## `#ctor`

<a id="api-0a1fd2e510071d2f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLHitTest.#ctor(System.Object,System.IntPtr) 439558476a5b3a879b443e250d177a63502f84a11a0594154490a566b35943a2 -->

```csharp
public Inno.Native.Sdl3.SDLHitTest.SDLHitTest(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57375).

## `BeginInvoke`

<a id="api-62e5ad92882943c4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLHitTest.BeginInvoke(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLPoint*,System.Void*,System.AsyncCallback,System.Object) 00f1cb54958ad657b86ff60b049c7da6be7e9c3165641d4016bffb1f6ac992b0 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLHitTest.BeginInvoke(Inno.Native.Sdl3.SDLWindow* argument0, Inno.Native.Sdl3.SDLPoint* argument1, void* argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57375).

## `EndInvoke`

<a id="api-9d30f490415a7e7f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLHitTest.EndInvoke(System.IAsyncResult) 5f4d469eb97807bf4f2dd051dd6dbdace20f99a5743e300a4ddaf46c812577ca -->

```csharp
public virtual Inno.Native.Sdl3.SDLHitTestResult Inno.Native.Sdl3.SDLHitTest.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57375).

## `Invoke`

<a id="api-45bffa11136594e3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLHitTest.Invoke(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLPoint*,System.Void*) 57d16349aad125255cddcc2cb86be898e77d1a19e1ff21877aac84026301d9d7 -->

```csharp
public virtual Inno.Native.Sdl3.SDLHitTestResult Inno.Native.Sdl3.SDLHitTest.Invoke(Inno.Native.Sdl3.SDLWindow* argument0, Inno.Native.Sdl3.SDLPoint* argument1, void* argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57375).
