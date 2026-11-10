---
title: "SDLTimerCallback"
description: "Reference for SDLTimerCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.ddb5a8a31744563f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLTimerCallback`

This reference describes `SDLTimerCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ab769b91ef6eb4d6) | Method |
| [`BeginInvoke`](#api-c321cda922b780ae) | Method |
| [`EndInvoke`](#api-ebb7314494ccdcdf) | Method |
| [`Invoke`](#api-2a85ac1a47a1a3c7) | Method |

## Type declaration

<a id="api-ddb5a8a31744563f"></a>
<!-- api: T:Inno.Native.Sdl3.SDLTimerCallback 2e7865b0a0b53d83b585ff169368b9c1b9b7de7a842a6abb6fb527b44a594867 -->

```csharp
public delegate uint Inno.Native.Sdl3.SDLTimerCallback(void* argument0, uint argument1, uint argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59830).

## `#ctor`

<a id="api-ab769b91ef6eb4d6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTimerCallback.#ctor(System.Object,System.IntPtr) 02a39b5f67f5c5e9a0ef404f6cc0dd59b073a3b6ce3780dad1ffeb7c7982ea3c -->

```csharp
public Inno.Native.Sdl3.SDLTimerCallback.SDLTimerCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59830).

## `BeginInvoke`

<a id="api-c321cda922b780ae"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTimerCallback.BeginInvoke(System.Void*,System.UInt32,System.UInt32,System.AsyncCallback,System.Object) e3ccdfabdbb12f43d49c4e887a1157aaee94d4eb6b7ac1a9264f649bd78504ee -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLTimerCallback.BeginInvoke(void* argument0, uint argument1, uint argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59830).

## `EndInvoke`

<a id="api-ebb7314494ccdcdf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTimerCallback.EndInvoke(System.IAsyncResult) c79b9b3d1ba79b863932025ad91f148656bf475b6a7964abad78d110dce6e9a0 -->

```csharp
public virtual uint Inno.Native.Sdl3.SDLTimerCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59830).

## `Invoke`

<a id="api-2a85ac1a47a1a3c7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTimerCallback.Invoke(System.Void*,System.UInt32,System.UInt32) 99026a78c0c5bd1fc3501555ea5a9ae17e44d2cc1a06a5f6d62270ff481f09b4 -->

```csharp
public virtual uint Inno.Native.Sdl3.SDLTimerCallback.Invoke(void* argument0, uint argument1, uint argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59830).
