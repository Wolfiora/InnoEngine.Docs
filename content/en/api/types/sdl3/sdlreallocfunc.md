---
title: "SDLReallocFunc"
description: "Reference for SDLReallocFunc in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.dce72e72f00753cc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLReallocFunc`

This reference describes `SDLReallocFunc` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9f53d1840bd34414) | Method |
| [`BeginInvoke`](#api-2d737610e8013f96) | Method |
| [`EndInvoke`](#api-122ba19c9bbc3105) | Method |
| [`Invoke`](#api-0824458ece8ecf67) | Method |

## Type declaration

<a id="api-dce72e72f00753cc"></a>
<!-- api: T:Inno.Native.Sdl3.SDLReallocFunc 54914c8b8cb250a010fa05aeaf402ec08799df4a0428179467c18d26ec1c93d1 -->

```csharp
public delegate void* Inno.Native.Sdl3.SDLReallocFunc(void* argument0, ulong argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58990).

## `#ctor`

<a id="api-9f53d1840bd34414"></a>
<!-- api: M:Inno.Native.Sdl3.SDLReallocFunc.#ctor(System.Object,System.IntPtr) dd4d94c007fcc124b8a4880ced5db9286722a8def5795dc68e838a63e1e43fa3 -->

```csharp
public Inno.Native.Sdl3.SDLReallocFunc.SDLReallocFunc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58990).

## `BeginInvoke`

<a id="api-2d737610e8013f96"></a>
<!-- api: M:Inno.Native.Sdl3.SDLReallocFunc.BeginInvoke(System.Void*,System.UInt64,System.AsyncCallback,System.Object) eeac1e0209cb379f01b115d3acbce47e205d24fd3631e8c29e5d322e16dd38ac -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLReallocFunc.BeginInvoke(void* argument0, ulong argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58990).

## `EndInvoke`

<a id="api-122ba19c9bbc3105"></a>
<!-- api: M:Inno.Native.Sdl3.SDLReallocFunc.EndInvoke(System.IAsyncResult) 8be34eea36cef8faa00c086c20c5fe8e886662caeb2dd946381ecbd11f16139c -->

```csharp
public virtual void* Inno.Native.Sdl3.SDLReallocFunc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58990).

## `Invoke`

<a id="api-0824458ece8ecf67"></a>
<!-- api: M:Inno.Native.Sdl3.SDLReallocFunc.Invoke(System.Void*,System.UInt64) 5247395563c0a8a867fc6077d034a4948b1e64ae4537d05bd5202677636f4c04 -->

```csharp
public virtual void* Inno.Native.Sdl3.SDLReallocFunc.Invoke(void* argument0, ulong argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58990).
