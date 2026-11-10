---
title: "SDLMainThreadCallback"
description: "Reference for SDLMainThreadCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.90b179b9f1a55827
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLMainThreadCallback`

This reference describes `SDLMainThreadCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d0c4fd7541ee1e20) | Method |
| [`BeginInvoke`](#api-c002642aee637cee) | Method |
| [`EndInvoke`](#api-8914027d3d81758b) | Method |
| [`Invoke`](#api-7f28cacdbf791ab2) | Method |

## Type declaration

<a id="api-90b179b9f1a55827"></a>
<!-- api: T:Inno.Native.Sdl3.SDLMainThreadCallback 83cdfb450393cb33dcb4f76b232a896d0d8c722d05fe0ef4a9ab3e11b1aee0ee -->

```csharp
public delegate void Inno.Native.Sdl3.SDLMainThreadCallback(void* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57977).

## `#ctor`

<a id="api-d0c4fd7541ee1e20"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMainThreadCallback.#ctor(System.Object,System.IntPtr) ceacae8165ad7c0f074bee8debe9c6d76f5c826a016e555c2f8e8ecfba2164a6 -->

```csharp
public Inno.Native.Sdl3.SDLMainThreadCallback.SDLMainThreadCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57977).

## `BeginInvoke`

<a id="api-c002642aee637cee"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMainThreadCallback.BeginInvoke(System.Void*,System.AsyncCallback,System.Object) 0a954a2bbfc64ea660b2147866b2ce75b1bde1f66e3d0f8c4b188c14dfbc9e7f -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLMainThreadCallback.BeginInvoke(void* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57977).

## `EndInvoke`

<a id="api-8914027d3d81758b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMainThreadCallback.EndInvoke(System.IAsyncResult) 33ec12332b9627b75e2df237e8b80cec26b1451a60b803ef83bb3f6168c7c673 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLMainThreadCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57977).

## `Invoke`

<a id="api-7f28cacdbf791ab2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLMainThreadCallback.Invoke(System.Void*) a661b475680fed1cb75e3a919aee7944a71795e5859256ae0dd4a9583a36336d -->

```csharp
public virtual void Inno.Native.Sdl3.SDLMainThreadCallback.Invoke(void* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57977).
