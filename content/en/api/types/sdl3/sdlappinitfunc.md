---
title: "SDLAppInitFunc"
description: "Reference for SDLAppInitFunc in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.e81f9d2d655cd41a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLAppInitFunc`

This reference describes `SDLAppInitFunc` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eac60bf995989ccc) | Method |
| [`BeginInvoke`](#api-ab58521ab0235f48) | Method |
| [`EndInvoke`](#api-a9304ff7f4698e44) | Method |
| [`Invoke`](#api-bc44d053c525e4f6) | Method |

## Type declaration

<a id="api-e81f9d2d655cd41a"></a>
<!-- api: T:Inno.Native.Sdl3.SDLAppInitFunc 7eac0d9168d64c77a4de6fa74da65c51b8b00fb712d3c304716d440e80c0f419 -->

```csharp
public delegate Inno.Native.Sdl3.SDLAppResult Inno.Native.Sdl3.SDLAppInitFunc(void** argument0, int argument1, sbyte** argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53119).

## `#ctor`

<a id="api-eac60bf995989ccc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppInitFunc.#ctor(System.Object,System.IntPtr) 63b6686bab0d185efd2f01496137b5321a0fcd0b6832688c1b3cc4aca999826a -->

```csharp
public Inno.Native.Sdl3.SDLAppInitFunc.SDLAppInitFunc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53119).

## `BeginInvoke`

<a id="api-ab58521ab0235f48"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppInitFunc.BeginInvoke(System.Void**,System.Int32,System.SByte**,System.AsyncCallback,System.Object) 5f64c49e4ae236b77dbc84e4f04e94dd4f68bd5b65db398ff18687c610422f63 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLAppInitFunc.BeginInvoke(void** argument0, int argument1, sbyte** argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53119).

## `EndInvoke`

<a id="api-a9304ff7f4698e44"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppInitFunc.EndInvoke(System.IAsyncResult) b710479dfd1c0f2dd2064fd33dc1a45385b30b124534e85ac3612be5552a139d -->

```csharp
public virtual Inno.Native.Sdl3.SDLAppResult Inno.Native.Sdl3.SDLAppInitFunc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53119).

## `Invoke`

<a id="api-bc44d053c525e4f6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppInitFunc.Invoke(System.Void**,System.Int32,System.SByte**) 8c3811a03e1b0700a887e9e07b1f7a39776a94ec16a90d6c80edf50f4fa2b268 -->

```csharp
public virtual Inno.Native.Sdl3.SDLAppResult Inno.Native.Sdl3.SDLAppInitFunc.Invoke(void** argument0, int argument1, sbyte** argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53119).
