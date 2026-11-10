---
title: "SDLCallocFunc"
description: "Reference for SDLCallocFunc in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.8e97382abbc64d3a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLCallocFunc`

This reference describes `SDLCallocFunc` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5a15f6c3f1a393ba) | Method |
| [`BeginInvoke`](#api-20d8d92655049cc1) | Method |
| [`EndInvoke`](#api-1e93e41620ef21e8) | Method |
| [`Invoke`](#api-06be1b3e7834a9d7) | Method |

## Type declaration

<a id="api-8e97382abbc64d3a"></a>
<!-- api: T:Inno.Native.Sdl3.SDLCallocFunc 284a647327737d6502ee0a56d78306c25fdaaed53ad9327f10d9ac0b0f8816f5 -->

```csharp
public delegate void* Inno.Native.Sdl3.SDLCallocFunc(ulong argument0, ulong argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53526).

## `#ctor`

<a id="api-5a15f6c3f1a393ba"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCallocFunc.#ctor(System.Object,System.IntPtr) d6b9d392fca003f5945f70e6e3048d4b71ff31323e4aeef467ce905a0b9781eb -->

```csharp
public Inno.Native.Sdl3.SDLCallocFunc.SDLCallocFunc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53526).

## `BeginInvoke`

<a id="api-20d8d92655049cc1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCallocFunc.BeginInvoke(System.UInt64,System.UInt64,System.AsyncCallback,System.Object) 5a6846e0929997b1a3163723768d242acf4a58d69e3a260a4dd7e508affffa42 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLCallocFunc.BeginInvoke(ulong argument0, ulong argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53526).

## `EndInvoke`

<a id="api-1e93e41620ef21e8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCallocFunc.EndInvoke(System.IAsyncResult) 5abe8789558440026cd439b23c4e14f258b53400e224f6a403999dada74f415b -->

```csharp
public virtual void* Inno.Native.Sdl3.SDLCallocFunc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53526).

## `Invoke`

<a id="api-06be1b3e7834a9d7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCallocFunc.Invoke(System.UInt64,System.UInt64) aa400960f30ce82a3ead34e25be7c28fe20db0eddf1497f3f5d9e9d05d52a698 -->

```csharp
public virtual void* Inno.Native.Sdl3.SDLCallocFunc.Invoke(ulong argument0, ulong argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53526).
