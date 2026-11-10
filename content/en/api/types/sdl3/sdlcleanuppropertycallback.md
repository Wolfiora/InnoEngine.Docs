---
title: "SDLCleanupPropertyCallback"
description: "Reference for SDLCleanupPropertyCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.bf039bbcd3b68ef1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLCleanupPropertyCallback`

This reference describes `SDLCleanupPropertyCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4d575794a6baf01f) | Method |
| [`BeginInvoke`](#api-1d0bf331ef99924c) | Method |
| [`EndInvoke`](#api-724d8cab6fedb389) | Method |
| [`Invoke`](#api-97b433c42a43aab7) | Method |

## Type declaration

<a id="api-bf039bbcd3b68ef1"></a>
<!-- api: T:Inno.Native.Sdl3.SDLCleanupPropertyCallback a4f0ee0b389a8405e30dae6fd3c1ea16fdcdd06e772876ba8c7c57fbcd70be78 -->

```csharp
public delegate void Inno.Native.Sdl3.SDLCleanupPropertyCallback(void* argument0, void* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53658).

## `#ctor`

<a id="api-4d575794a6baf01f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCleanupPropertyCallback.#ctor(System.Object,System.IntPtr) b316d2a6811660cf73586b82587d3d0bbb698f94dd72965b685bb89ca4f5f9aa -->

```csharp
public Inno.Native.Sdl3.SDLCleanupPropertyCallback.SDLCleanupPropertyCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53658).

## `BeginInvoke`

<a id="api-1d0bf331ef99924c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCleanupPropertyCallback.BeginInvoke(System.Void*,System.Void*,System.AsyncCallback,System.Object) 8c3432f6e804f6f7e3d147a4c63abc5ab75d906b9322a73cb9bf6287efba6992 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLCleanupPropertyCallback.BeginInvoke(void* argument0, void* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53658).

## `EndInvoke`

<a id="api-724d8cab6fedb389"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCleanupPropertyCallback.EndInvoke(System.IAsyncResult) cb7190b0053bb8df7139d41fed9a9fd58bdde613d4afdc401830705c8b97f4ff -->

```csharp
public virtual void Inno.Native.Sdl3.SDLCleanupPropertyCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53658).

## `Invoke`

<a id="api-97b433c42a43aab7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCleanupPropertyCallback.Invoke(System.Void*,System.Void*) d76e78488ca4896572369f8aaed23e7706a8e9e25d72f6ebb504b8ab93929734 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLCleanupPropertyCallback.Invoke(void* argument0, void* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53658).
