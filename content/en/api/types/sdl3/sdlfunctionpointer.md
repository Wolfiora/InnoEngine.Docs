---
title: "SDLFunctionPointer"
description: "Reference for SDLFunctionPointer in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.8dd8a54777a38a45
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLFunctionPointer`

This reference describes `SDLFunctionPointer` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-862f537f09e16d27) | Method |
| [`BeginInvoke`](#api-39cb8661f5ab0b49) | Method |
| [`EndInvoke`](#api-769c3f40aa2c1702) | Method |
| [`Invoke`](#api-4509aac0dde9a705) | Method |

## Type declaration

<a id="api-8dd8a54777a38a45"></a>
<!-- api: T:Inno.Native.Sdl3.SDLFunctionPointer 9ee4b4321208e623ed60616c28035a7cf55271a5c54976de909d6abbac14ec86 -->

```csharp
public delegate void Inno.Native.Sdl3.SDLFunctionPointer()
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54616).

## `#ctor`

<a id="api-862f537f09e16d27"></a>
<!-- api: M:Inno.Native.Sdl3.SDLFunctionPointer.#ctor(System.Object,System.IntPtr) d67e2c1782d687f84bac704c1c6f8994455392ebd15a87c75718cb4aa69839ee -->

```csharp
public Inno.Native.Sdl3.SDLFunctionPointer.SDLFunctionPointer(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54616).

## `BeginInvoke`

<a id="api-39cb8661f5ab0b49"></a>
<!-- api: M:Inno.Native.Sdl3.SDLFunctionPointer.BeginInvoke(System.AsyncCallback,System.Object) 6273d18d2814fc7856e148a67a5be87a546e09b51c57c2c699dd74027494e8e3 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLFunctionPointer.BeginInvoke(System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54616).

## `EndInvoke`

<a id="api-769c3f40aa2c1702"></a>
<!-- api: M:Inno.Native.Sdl3.SDLFunctionPointer.EndInvoke(System.IAsyncResult) 17f43dd03ade8f590a02d3873683ab76f5d13d99663de03255ff44315251f2fa -->

```csharp
public virtual void Inno.Native.Sdl3.SDLFunctionPointer.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54616).

## `Invoke`

<a id="api-4509aac0dde9a705"></a>
<!-- api: M:Inno.Native.Sdl3.SDLFunctionPointer.Invoke 6e6ab72b0f068d34881639399b4d0032ad2f3e7158281df39e671d6dc5179c33 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLFunctionPointer.Invoke()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54616).
