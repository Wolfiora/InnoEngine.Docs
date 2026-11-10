---
title: "SDLX11EventHook"
description: "Reference for SDLX11EventHook in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.e1078fa82003ad5d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLX11EventHook`

This reference describes `SDLX11EventHook` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ed1d10e45ccb8774) | Method |
| [`BeginInvoke`](#api-115e107538e2c48d) | Method |
| [`EndInvoke`](#api-1afa03b511fc4afd) | Method |
| [`Invoke`](#api-17240dfae0655fd4) | Method |

## Type declaration

<a id="api-e1078fa82003ad5d"></a>
<!-- api: T:Inno.Native.Sdl3.SDLX11EventHook 589a19a6c1e0969ea2291262c3000275ca82a9a2446cf7b247b90333aa182bd4 -->

```csharp
public delegate byte Inno.Native.Sdl3.SDLX11EventHook(void* argument0, Inno.Native.Sdl3.XEvent* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60245).

## `#ctor`

<a id="api-ed1d10e45ccb8774"></a>
<!-- api: M:Inno.Native.Sdl3.SDLX11EventHook.#ctor(System.Object,System.IntPtr) e96003bccafc2215e55f2d129b230cba4dc6cb2103ec6956373e30922b1176e7 -->

```csharp
public Inno.Native.Sdl3.SDLX11EventHook.SDLX11EventHook(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60245).

## `BeginInvoke`

<a id="api-115e107538e2c48d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLX11EventHook.BeginInvoke(System.Void*,Inno.Native.Sdl3.XEvent*,System.AsyncCallback,System.Object) 1db47ad78141c112b2055aee8c9b014939173602106632c14759014d909b5311 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLX11EventHook.BeginInvoke(void* argument0, Inno.Native.Sdl3.XEvent* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60245).

## `EndInvoke`

<a id="api-1afa03b511fc4afd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLX11EventHook.EndInvoke(System.IAsyncResult) 11771e804b9b45b84827485f0dd9633a05d5498a4e4f51beaf449942a35216cf -->

```csharp
public virtual byte Inno.Native.Sdl3.SDLX11EventHook.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60245).

## `Invoke`

<a id="api-17240dfae0655fd4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLX11EventHook.Invoke(System.Void*,Inno.Native.Sdl3.XEvent*) 90c7a0b7ff26191af5660c6a229965d8b4c9921e93a29a87daceca789d86860f -->

```csharp
public virtual byte Inno.Native.Sdl3.SDLX11EventHook.Invoke(void* argument0, Inno.Native.Sdl3.XEvent* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60245).
