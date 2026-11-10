---
title: "SDLTrayClickCallback"
description: "Reference for SDLTrayClickCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.cb63ef00d1a4c6e2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLTrayClickCallback`

This reference describes `SDLTrayClickCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-992a402c63f12c28) | Method |
| [`BeginInvoke`](#api-eca538f0c682b81b) | Method |
| [`EndInvoke`](#api-bf69654c7a15fef3) | Method |
| [`Invoke`](#api-72f268d5b4465068) | Method |

## Type declaration

<a id="api-cb63ef00d1a4c6e2"></a>
<!-- api: T:Inno.Native.Sdl3.SDLTrayClickCallback 38b22e9055ed9891a9b29fa1ddaec46e8c07c24b4d31e179e0dc0a9e4ad8b6cf -->

```csharp
public delegate byte Inno.Native.Sdl3.SDLTrayClickCallback(void* argument0, Inno.Native.Sdl3.SDLTray* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59952).

## `#ctor`

<a id="api-992a402c63f12c28"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTrayClickCallback.#ctor(System.Object,System.IntPtr) 98cb2ee5f422cb97e92a260845d5bacc053fac99a7f569607215cf1b985eb956 -->

```csharp
public Inno.Native.Sdl3.SDLTrayClickCallback.SDLTrayClickCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59952).

## `BeginInvoke`

<a id="api-eca538f0c682b81b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTrayClickCallback.BeginInvoke(System.Void*,Inno.Native.Sdl3.SDLTray*,System.AsyncCallback,System.Object) ecda516ba333876f548a8ba2997699a753570458f0a0fd4f91519929a45049d3 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLTrayClickCallback.BeginInvoke(void* argument0, Inno.Native.Sdl3.SDLTray* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59952).

## `EndInvoke`

<a id="api-bf69654c7a15fef3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTrayClickCallback.EndInvoke(System.IAsyncResult) 57b7d9820b13fcef35559c9d5b8120a8b66f637da4c1da7842f410cf74fcbb27 -->

```csharp
public virtual byte Inno.Native.Sdl3.SDLTrayClickCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59952).

## `Invoke`

<a id="api-72f268d5b4465068"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTrayClickCallback.Invoke(System.Void*,Inno.Native.Sdl3.SDLTray*) ac30d9025bd379749b44e1e08f38b944ed285b2fbf42b5ee059044a6530f5a9e -->

```csharp
public virtual byte Inno.Native.Sdl3.SDLTrayClickCallback.Invoke(void* argument0, Inno.Native.Sdl3.SDLTray* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59952).
