---
title: "SDLEGLIntArrayCallback"
description: "Reference for SDLEGLIntArrayCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.ca7f53696f10b581
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLEGLIntArrayCallback`

This reference describes `SDLEGLIntArrayCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-816becd3560fa42a) | Method |
| [`BeginInvoke`](#api-4b4be5a976335fbe) | Method |
| [`EndInvoke`](#api-51a3c8db8ae9741b) | Method |
| [`Invoke`](#api-64ecfa24cb9a3167) | Method |

## Type declaration

<a id="api-ca7f53696f10b581"></a>
<!-- api: T:Inno.Native.Sdl3.SDLEGLIntArrayCallback a2cd2abeb2602a17cf4f5d4d77326135225c7cfe536dfbb80ad160e528d03b23 -->

```csharp
public delegate int* Inno.Native.Sdl3.SDLEGLIntArrayCallback(void* argument0, void* argument1, void* argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54135).

## `#ctor`

<a id="api-816becd3560fa42a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEGLIntArrayCallback.#ctor(System.Object,System.IntPtr) ad909a22f7f051478c4f7ad60f7ad5d04873210e14492553ac4d02412b060b48 -->

```csharp
public Inno.Native.Sdl3.SDLEGLIntArrayCallback.SDLEGLIntArrayCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54135).

## `BeginInvoke`

<a id="api-4b4be5a976335fbe"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEGLIntArrayCallback.BeginInvoke(System.Void*,System.Void*,System.Void*,System.AsyncCallback,System.Object) 32a477b282cc978dccabdbb914dc91d2e9947b58fb33496409ee22a2058a91b0 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLEGLIntArrayCallback.BeginInvoke(void* argument0, void* argument1, void* argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54135).

## `EndInvoke`

<a id="api-51a3c8db8ae9741b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEGLIntArrayCallback.EndInvoke(System.IAsyncResult) 4abb58cb624855b94d093f70bcf1f2e7dd4d3338e4ca63baa9bd05a3938a5fdc -->

```csharp
public virtual int* Inno.Native.Sdl3.SDLEGLIntArrayCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54135).

## `Invoke`

<a id="api-64ecfa24cb9a3167"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEGLIntArrayCallback.Invoke(System.Void*,System.Void*,System.Void*) d685cbd297cd4bc5731711e4aaff39d357db937637323654265695a700358f3d -->

```csharp
public virtual int* Inno.Native.Sdl3.SDLEGLIntArrayCallback.Invoke(void* argument0, void* argument1, void* argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54135).
