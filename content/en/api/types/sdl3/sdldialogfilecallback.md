---
title: "SDLDialogFileCallback"
description: "Reference for SDLDialogFileCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.551a4148f5fde0ac
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLDialogFileCallback`

This reference describes `SDLDialogFileCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3a05b3b52c723247) | Method |
| [`BeginInvoke`](#api-205ec49959a6a9d8) | Method |
| [`EndInvoke`](#api-0f15ed6a7b84f16c) | Method |
| [`Invoke`](#api-9b3ea9de13f314ee) | Method |

## Type declaration

<a id="api-551a4148f5fde0ac"></a>
<!-- api: T:Inno.Native.Sdl3.SDLDialogFileCallback 9ea7cb686e096ab6daf92de25833d3bf2ad0b8add20fba69c6a366768e8ed05d -->

```csharp
public delegate void Inno.Native.Sdl3.SDLDialogFileCallback(void* argument0, sbyte** argument1, int argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53954).

## `#ctor`

<a id="api-3a05b3b52c723247"></a>
<!-- api: M:Inno.Native.Sdl3.SDLDialogFileCallback.#ctor(System.Object,System.IntPtr) 99dbdba02defcfcf6e3dc9b4f5b469096551565069b8b858e29f8526a1844793 -->

```csharp
public Inno.Native.Sdl3.SDLDialogFileCallback.SDLDialogFileCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53954).

## `BeginInvoke`

<a id="api-205ec49959a6a9d8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLDialogFileCallback.BeginInvoke(System.Void*,System.SByte**,System.Int32,System.AsyncCallback,System.Object) c23aa95d23db03264cb81f8bcb922338bf51331f5baadfe2ed06cd69196abb3a -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLDialogFileCallback.BeginInvoke(void* argument0, sbyte** argument1, int argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53954).

## `EndInvoke`

<a id="api-0f15ed6a7b84f16c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLDialogFileCallback.EndInvoke(System.IAsyncResult) bdae596995ccbe94840ab755912b64cb4af44d03eb22db00553cdc86f1b43c42 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLDialogFileCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53954).

## `Invoke`

<a id="api-9b3ea9de13f314ee"></a>
<!-- api: M:Inno.Native.Sdl3.SDLDialogFileCallback.Invoke(System.Void*,System.SByte**,System.Int32) ea0bbaf77649c695218cc86d3484429a92736c7f7c31ad44372a1b39d10b77aa -->

```csharp
public virtual void Inno.Native.Sdl3.SDLDialogFileCallback.Invoke(void* argument0, sbyte** argument1, int argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53954).
