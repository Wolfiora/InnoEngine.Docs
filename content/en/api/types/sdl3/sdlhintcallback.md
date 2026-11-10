---
title: "SDLHintCallback"
description: "Reference for SDLHintCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.6bb23e34753b72db
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLHintCallback`

This reference describes `SDLHintCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3babe7f66ea9683a) | Method |
| [`BeginInvoke`](#api-47a2f2dae952f7bf) | Method |
| [`EndInvoke`](#api-041e021aefe4ddf1) | Method |
| [`Invoke`](#api-d16b6c72a594ecde) | Method |

## Type declaration

<a id="api-6bb23e34753b72db"></a>
<!-- api: T:Inno.Native.Sdl3.SDLHintCallback 21f1cf3267953c44bebddff94abd23c923d1eb1a4fa7c90921c05fdc2ac20e0e -->

```csharp
public delegate void Inno.Native.Sdl3.SDLHintCallback(void* argument0, sbyte* argument1, sbyte* argument2, sbyte* argument3)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57353).

## `#ctor`

<a id="api-3babe7f66ea9683a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLHintCallback.#ctor(System.Object,System.IntPtr) 73bdb8351e8489c15e12895218cf827cb8cd3c5337336ff3b8af516a1407da28 -->

```csharp
public Inno.Native.Sdl3.SDLHintCallback.SDLHintCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57353).

## `BeginInvoke`

<a id="api-47a2f2dae952f7bf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLHintCallback.BeginInvoke(System.Void*,System.SByte*,System.SByte*,System.SByte*,System.AsyncCallback,System.Object) 6ad464acf1e49f15e9a905802fca786ffd520bc20d0212bd6b6d5b02c2615235 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLHintCallback.BeginInvoke(void* argument0, sbyte* argument1, sbyte* argument2, sbyte* argument3, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57353).

## `EndInvoke`

<a id="api-041e021aefe4ddf1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLHintCallback.EndInvoke(System.IAsyncResult) cf547eb04cb043c001be9268e7983799fe84cd415dc72d37526c97a1e6b8c159 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLHintCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57353).

## `Invoke`

<a id="api-d16b6c72a594ecde"></a>
<!-- api: M:Inno.Native.Sdl3.SDLHintCallback.Invoke(System.Void*,System.SByte*,System.SByte*,System.SByte*) 29efbb0d7f05b1bdd19cfce392f0457649d67f6b28104d82f073d1c905890bea -->

```csharp
public virtual void Inno.Native.Sdl3.SDLHintCallback.Invoke(void* argument0, sbyte* argument1, sbyte* argument2, sbyte* argument3)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57353).
