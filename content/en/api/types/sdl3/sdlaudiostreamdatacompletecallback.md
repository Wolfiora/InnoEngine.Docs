---
title: "SDLAudioStreamDataCompleteCallback"
description: "Reference for SDLAudioStreamDataCompleteCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.c9294042134180a4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLAudioStreamDataCompleteCallback`

This reference describes `SDLAudioStreamDataCompleteCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-14d9b46bee6bd518) | Method |
| [`BeginInvoke`](#api-21a184644f5b5c25) | Method |
| [`EndInvoke`](#api-64d9c2b8dabba6a0) | Method |
| [`Invoke`](#api-88d0815b9c8923be) | Method |

## Type declaration

<a id="api-c9294042134180a4"></a>
<!-- api: T:Inno.Native.Sdl3.SDLAudioStreamDataCompleteCallback 3a143e2a635a660c915674a1a8972cb352f53d1aee6da9008eb6a72da175eb67 -->

```csharp
public delegate void Inno.Native.Sdl3.SDLAudioStreamDataCompleteCallback(void* argument0, void* argument1, int argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53469).

## `#ctor`

<a id="api-14d9b46bee6bd518"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioStreamDataCompleteCallback.#ctor(System.Object,System.IntPtr) 64d28c8b52ed7839dcf5e635f5e5fd681628c28f1f1c26c703b640eec28fcbc2 -->

```csharp
public Inno.Native.Sdl3.SDLAudioStreamDataCompleteCallback.SDLAudioStreamDataCompleteCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53469).

## `BeginInvoke`

<a id="api-21a184644f5b5c25"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioStreamDataCompleteCallback.BeginInvoke(System.Void*,System.Void*,System.Int32,System.AsyncCallback,System.Object) bcc3f5fa6def503d6265b74cfcc1e4c770cffb029ce5c2bfea4d22639ba7b25b -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLAudioStreamDataCompleteCallback.BeginInvoke(void* argument0, void* argument1, int argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53469).

## `EndInvoke`

<a id="api-64d9c2b8dabba6a0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioStreamDataCompleteCallback.EndInvoke(System.IAsyncResult) 4a2b5e1b98915d4a1bf804c9f508432e8843ac683979c077452e3e8a25f2c602 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLAudioStreamDataCompleteCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53469).

## `Invoke`

<a id="api-88d0815b9c8923be"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAudioStreamDataCompleteCallback.Invoke(System.Void*,System.Void*,System.Int32) b38f2b5b76b099772954275020e8af40e371149f11ce6a59e9662c47ca434022 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLAudioStreamDataCompleteCallback.Invoke(void* argument0, void* argument1, int argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53469).
