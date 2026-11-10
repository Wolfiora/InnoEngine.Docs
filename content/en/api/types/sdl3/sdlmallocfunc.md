---
title: "SDLMallocFunc"
description: "Reference for SDLMallocFunc in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.fbbf6c9a4f67b32d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLMallocFunc`

This reference describes `SDLMallocFunc` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b80e0871ba8a39ae) | Method |
| [`BeginInvoke`](#api-615ba2e63d02b823) | Method |
| [`EndInvoke`](#api-dcc2f70c7fdb627a) | Method |
| [`Invoke`](#api-0b8d9ddae313e92b) | Method |

## Type declaration

<a id="api-fbbf6c9a4f67b32d"></a>
<!-- api: T:Inno.Native.Sdl3.SDLMallocFunc 45c6fe8d536321db257a249f814db3dcbfc9438af94dacef27000643fd3b7e11 -->

```csharp
public delegate void* Inno.Native.Sdl3.SDLMallocFunc(ulong argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57986).

## `#ctor`

<a id="api-b80e0871ba8a39ae"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMallocFunc.#ctor(System.Object,System.IntPtr) a8feccfb882f710e8ef7e1444b4fe5ef92d8aba4ce02197c43241172e2caac4e -->

```csharp
public Inno.Native.Sdl3.SDLMallocFunc.SDLMallocFunc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57986).

## `BeginInvoke`

<a id="api-615ba2e63d02b823"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMallocFunc.BeginInvoke(System.UInt64,System.AsyncCallback,System.Object) 2459926d49fe2fee4359fc6e2c4f8eeed0220976528b1064f26c10061f882895 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLMallocFunc.BeginInvoke(ulong argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57986).

## `EndInvoke`

<a id="api-dcc2f70c7fdb627a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMallocFunc.EndInvoke(System.IAsyncResult) 8ccb337c175aa074f0a72dde94997612f6a49b02a92e4e3fce28290ba4eade35 -->

```csharp
public virtual void* Inno.Native.Sdl3.SDLMallocFunc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57986).

## `Invoke`

<a id="api-0b8d9ddae313e92b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMallocFunc.Invoke(System.UInt64) 7e7f6117a3d7b40feee84f80053d8c811c0819744788bdf1ec967159809ef63b -->

```csharp
public virtual void* Inno.Native.Sdl3.SDLMallocFunc.Invoke(ulong argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57986).
