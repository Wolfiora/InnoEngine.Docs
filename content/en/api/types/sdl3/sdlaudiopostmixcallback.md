---
title: "SDLAudioPostmixCallback"
description: "Reference for SDLAudioPostmixCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.dc642905dd94637d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLAudioPostmixCallback`

This reference describes `SDLAudioPostmixCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f6af3f4637ca8ad9) | Method |
| [`BeginInvoke`](#api-7ac8eae77275bd45) | Method |
| [`EndInvoke`](#api-fa5066226e93296e) | Method |
| [`Invoke`](#api-02d9a1aa69580842) | Method |

## Type declaration

<a id="api-dc642905dd94637d"></a>
<!-- api: T:Inno.Native.Sdl3.SDLAudioPostmixCallback 75041f6b74320aba4c89759af1a88dc48a28339a6e2a1d10057ff665d95a65ec -->

```csharp
public delegate void Inno.Native.Sdl3.SDLAudioPostmixCallback(void* argument0, Inno.Native.Sdl3.SDLAudioSpec* argument1, float* argument2, int argument3)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53415).

## `#ctor`

<a id="api-f6af3f4637ca8ad9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioPostmixCallback.#ctor(System.Object,System.IntPtr) 18df6b185cc2db6b2f2465a6e683146c6dac8a1dc951bceca115b9b3cd67cd7d -->

```csharp
public Inno.Native.Sdl3.SDLAudioPostmixCallback.SDLAudioPostmixCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53415).

## `BeginInvoke`

<a id="api-7ac8eae77275bd45"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioPostmixCallback.BeginInvoke(System.Void*,Inno.Native.Sdl3.SDLAudioSpec*,System.Single*,System.Int32,System.AsyncCallback,System.Object) 08cf13e25ba53c2479fbdeae6714dbfb62617e5dc47f8fd5f2d2cb2336f2c87d -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLAudioPostmixCallback.BeginInvoke(void* argument0, Inno.Native.Sdl3.SDLAudioSpec* argument1, float* argument2, int argument3, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53415).

## `EndInvoke`

<a id="api-fa5066226e93296e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioPostmixCallback.EndInvoke(System.IAsyncResult) 2c8903a1055e2230e2ea92bd629974077ef2900068a377a9b5deae95ab1ec782 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLAudioPostmixCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53415).

## `Invoke`

<a id="api-02d9a1aa69580842"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioPostmixCallback.Invoke(System.Void*,Inno.Native.Sdl3.SDLAudioSpec*,System.Single*,System.Int32) ca8433e6b873f9159b6488641ae1e52dc5ab4d6b7c1fb92642894f9ff87aacd1 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLAudioPostmixCallback.Invoke(void* argument0, Inno.Native.Sdl3.SDLAudioSpec* argument1, float* argument2, int argument3)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53415).
