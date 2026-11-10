---
title: "SDLAssertionHandler"
description: "Reference for SDLAssertionHandler in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.e7664fdbc56e869f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLAssertionHandler`

This reference describes `SDLAssertionHandler` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1c9560694749e6c4) | Method |
| [`BeginInvoke`](#api-dbc2b45e6f8baadc) | Method |
| [`EndInvoke`](#api-6373bce717442a22) | Method |
| [`Invoke`](#api-a91988fa05e72f2b) | Method |

## Type declaration

<a id="api-e7664fdbc56e869f"></a>
<!-- api: T:Inno.Native.Sdl3.SDLAssertionHandler c93f1b522c74201011ffbe475c38b2715f56a43cc2d540b404d686785eb364b4 -->

```csharp
public delegate Inno.Native.Sdl3.SDLAssertState Inno.Native.Sdl3.SDLAssertionHandler(Inno.Native.Sdl3.SDLAssertData* argument0, void* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53209).

## `#ctor`

<a id="api-1c9560694749e6c4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAssertionHandler.#ctor(System.Object,System.IntPtr) 79d6f8993d347b6dddf17ae0ca840d20cdf549a7a7025b7ab70a5d03b58bfd27 -->

```csharp
public Inno.Native.Sdl3.SDLAssertionHandler.SDLAssertionHandler(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53209).

## `BeginInvoke`

<a id="api-dbc2b45e6f8baadc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAssertionHandler.BeginInvoke(Inno.Native.Sdl3.SDLAssertData*,System.Void*,System.AsyncCallback,System.Object) 23ceb67d0ee775c51efcceab292c697f43dd61da801aa738f0b9bc57662f7a44 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLAssertionHandler.BeginInvoke(Inno.Native.Sdl3.SDLAssertData* argument0, void* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53209).

## `EndInvoke`

<a id="api-6373bce717442a22"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAssertionHandler.EndInvoke(System.IAsyncResult) 62bb9b7322eae9a77998ef7582975f4f70bd99774792b7d62ab47040ac306171 -->

```csharp
public virtual Inno.Native.Sdl3.SDLAssertState Inno.Native.Sdl3.SDLAssertionHandler.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53209).

## `Invoke`

<a id="api-a91988fa05e72f2b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAssertionHandler.Invoke(Inno.Native.Sdl3.SDLAssertData*,System.Void*) c8243aabd3386c87259ca58b3cda9618d316ff8387d805f20ade8c59f854ad2c -->

```csharp
public virtual Inno.Native.Sdl3.SDLAssertState Inno.Native.Sdl3.SDLAssertionHandler.Invoke(Inno.Native.Sdl3.SDLAssertData* argument0, void* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53209).
