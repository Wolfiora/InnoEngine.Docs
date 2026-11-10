---
title: "SDLAppIterateFunc"
description: "Reference for SDLAppIterateFunc in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.cae7e24799fbb744
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLAppIterateFunc`

This reference describes `SDLAppIterateFunc` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c8afed3be80aa88f) | Method |
| [`BeginInvoke`](#api-4712edc0549535a3) | Method |
| [`EndInvoke`](#api-83673c38dc1355c7) | Method |
| [`Invoke`](#api-6357c6d527f45e0d) | Method |

## Type declaration

<a id="api-cae7e24799fbb744"></a>
<!-- api: T:Inno.Native.Sdl3.SDLAppIterateFunc d122b1b86a35e08c24d297cc4197f077a50ec92ef6617e863035d43333eccd9b -->

```csharp
public delegate Inno.Native.Sdl3.SDLAppResult Inno.Native.Sdl3.SDLAppIterateFunc(void* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53128).

## `#ctor`

<a id="api-c8afed3be80aa88f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppIterateFunc.#ctor(System.Object,System.IntPtr) 0540eeb5bc0f6c30bdbbee7723a7ac0e3a65e8b3c5038558c746dbd3c1dfcd4b -->

```csharp
public Inno.Native.Sdl3.SDLAppIterateFunc.SDLAppIterateFunc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53128).

## `BeginInvoke`

<a id="api-4712edc0549535a3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppIterateFunc.BeginInvoke(System.Void*,System.AsyncCallback,System.Object) e57f51794bab7ee1a5740fc0fb097e47ef3d66003ca03aab0cc1723895c3cfc7 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLAppIterateFunc.BeginInvoke(void* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53128).

## `EndInvoke`

<a id="api-83673c38dc1355c7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppIterateFunc.EndInvoke(System.IAsyncResult) 17f3aa39a5bbcc8cf05af81120feeac8e301c6c5770a7a13045655701e7b736f -->

```csharp
public virtual Inno.Native.Sdl3.SDLAppResult Inno.Native.Sdl3.SDLAppIterateFunc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53128).

## `Invoke`

<a id="api-6357c6d527f45e0d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppIterateFunc.Invoke(System.Void*) 7073fc9efdbb6a3fe61925dbc1da02fc3f39af599f4beb8a1a8158549f58d9b4 -->

```csharp
public virtual Inno.Native.Sdl3.SDLAppResult Inno.Native.Sdl3.SDLAppIterateFunc.Invoke(void* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53128).
