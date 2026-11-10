---
title: "SDLAudioStreamCallback"
description: "Reference for SDLAudioStreamCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.a49403d54f23e6bf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLAudioStreamCallback`

This reference describes `SDLAudioStreamCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-11ff2889660f3c69) | Method |
| [`BeginInvoke`](#api-4b0627245a8aafaf) | Method |
| [`EndInvoke`](#api-e23d6d7b64c72530) | Method |
| [`Invoke`](#api-9f1e7740a851e473) | Method |

## Type declaration

<a id="api-a49403d54f23e6bf"></a>
<!-- api: T:Inno.Native.Sdl3.SDLAudioStreamCallback f04950ee85f7651f0777a7796aff1f6ab0ad7ec1125021017cd5e7b6da061517 -->

```csharp
public delegate void Inno.Native.Sdl3.SDLAudioStreamCallback(void* argument0, Inno.Native.Sdl3.SDLAudioStream* argument1, int argument2, int argument3)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53460).

## `#ctor`

<a id="api-11ff2889660f3c69"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioStreamCallback.#ctor(System.Object,System.IntPtr) 50ecedbef5ef6c77daddf4e70fda023ad8f4d29ca6c2e56f6fbcaa22a20fdf5e -->

```csharp
public Inno.Native.Sdl3.SDLAudioStreamCallback.SDLAudioStreamCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53460).

## `BeginInvoke`

<a id="api-4b0627245a8aafaf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioStreamCallback.BeginInvoke(System.Void*,Inno.Native.Sdl3.SDLAudioStream*,System.Int32,System.Int32,System.AsyncCallback,System.Object) f0efd79ea471fc5221a5250d759631c6d2bbfa6ea3920ba3d82d81845de2bdc9 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLAudioStreamCallback.BeginInvoke(void* argument0, Inno.Native.Sdl3.SDLAudioStream* argument1, int argument2, int argument3, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53460).

## `EndInvoke`

<a id="api-e23d6d7b64c72530"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioStreamCallback.EndInvoke(System.IAsyncResult) 76318f3f144ee99cb1d9125b9ebf62cdd63803a1a80203d212bd7f17fdc9d2aa -->

```csharp
public virtual void Inno.Native.Sdl3.SDLAudioStreamCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53460).

## `Invoke`

<a id="api-9f1e7740a851e473"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioStreamCallback.Invoke(System.Void*,Inno.Native.Sdl3.SDLAudioStream*,System.Int32,System.Int32) cbd0be686bb5a5db5c3897eb52541b16ab14297df59acdc107bab05cad47ae59 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLAudioStreamCallback.Invoke(void* argument0, Inno.Native.Sdl3.SDLAudioStream* argument1, int argument2, int argument3)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53460).
