---
title: "SDLEnumeratePropertiesCallback"
description: "Reference for SDLEnumeratePropertiesCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.f579d141e5ce7063
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLEnumeratePropertiesCallback`

This reference describes `SDLEnumeratePropertiesCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9ed3c820e694b1a2) | Method |
| [`BeginInvoke`](#api-a07d7bb00308f5ce) | Method |
| [`EndInvoke`](#api-89f629dbbed66f9f) | Method |
| [`Invoke`](#api-1311482ae30027c9) | Method |

## Type declaration

<a id="api-f579d141e5ce7063"></a>
<!-- api: T:Inno.Native.Sdl3.SDLEnumeratePropertiesCallback 7b55d309dbe76f1cc0df4c2191d7a61f21d350415d769696c9b034813e1460ed -->

```csharp
public delegate void Inno.Native.Sdl3.SDLEnumeratePropertiesCallback(void* argument0, uint argument1, sbyte* argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54153).

## `#ctor`

<a id="api-9ed3c820e694b1a2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEnumeratePropertiesCallback.#ctor(System.Object,System.IntPtr) d0d12b0bb7c680fd7a0e37cfcb09a5aad72e936a94660f782a2e61f528e89309 -->

```csharp
public Inno.Native.Sdl3.SDLEnumeratePropertiesCallback.SDLEnumeratePropertiesCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54153).

## `BeginInvoke`

<a id="api-a07d7bb00308f5ce"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEnumeratePropertiesCallback.BeginInvoke(System.Void*,System.UInt32,System.SByte*,System.AsyncCallback,System.Object) cb896294f683a28fff0efd66ea884245abfc828d2d214d3f6178ab095e60dd48 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLEnumeratePropertiesCallback.BeginInvoke(void* argument0, uint argument1, sbyte* argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54153).

## `EndInvoke`

<a id="api-89f629dbbed66f9f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEnumeratePropertiesCallback.EndInvoke(System.IAsyncResult) da9926e31ce43832d94dad3e9f9084556afd71a03771e1715c1c8209e2361e65 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLEnumeratePropertiesCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54153).

## `Invoke`

<a id="api-1311482ae30027c9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEnumeratePropertiesCallback.Invoke(System.Void*,System.UInt32,System.SByte*) 49546c67d6ba61933a47883a20e2b9aeab73f5d58175d853de2b579db1836d56 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLEnumeratePropertiesCallback.Invoke(void* argument0, uint argument1, sbyte* argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54153).
