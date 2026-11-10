---
title: "SDLNSTimerCallback"
description: "Reference for SDLNSTimerCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.8e1e161f1e60662d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLNSTimerCallback`

This reference describes `SDLNSTimerCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c9a7c103323602d5) | Method |
| [`BeginInvoke`](#api-49e110d6ab1217f5) | Method |
| [`EndInvoke`](#api-bfc4da21f25dc5ab) | Method |
| [`Invoke`](#api-0a171f6d76dabbd4) | Method |

## Type declaration

<a id="api-8e1e161f1e60662d"></a>
<!-- api: T:Inno.Native.Sdl3.SDLNSTimerCallback c1a416dc8b4b3addd142c7d51ab8da2faf8ea89cc4deed7246dd1d265206875c -->

```csharp
public delegate ulong Inno.Native.Sdl3.SDLNSTimerCallback(void* argument0, uint argument1, ulong argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58353).

## `#ctor`

<a id="api-c9a7c103323602d5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLNSTimerCallback.#ctor(System.Object,System.IntPtr) 9a09b75bf6899831bae7c2c9882ccad6785b2925994be7ce318384abf967cdf3 -->

```csharp
public Inno.Native.Sdl3.SDLNSTimerCallback.SDLNSTimerCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58353).

## `BeginInvoke`

<a id="api-49e110d6ab1217f5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLNSTimerCallback.BeginInvoke(System.Void*,System.UInt32,System.UInt64,System.AsyncCallback,System.Object) 3b70e506406105f66e42fc4e44945402e8a896e0351db618ab867c4b38aa3ad8 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLNSTimerCallback.BeginInvoke(void* argument0, uint argument1, ulong argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58353).

## `EndInvoke`

<a id="api-bfc4da21f25dc5ab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLNSTimerCallback.EndInvoke(System.IAsyncResult) 32e5724800b8e2286b7f8fda26cf575dc46b7b2afdfa91f658564824856822b6 -->

```csharp
public virtual ulong Inno.Native.Sdl3.SDLNSTimerCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58353).

## `Invoke`

<a id="api-0a171f6d76dabbd4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLNSTimerCallback.Invoke(System.Void*,System.UInt32,System.UInt64) 05b622070dbacba39a05f6d9c87494d74ff2328dfbbcfbea40fa9a6c626cd0f5 -->

```csharp
public virtual ulong Inno.Native.Sdl3.SDLNSTimerCallback.Invoke(void* argument0, uint argument1, ulong argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58353).
