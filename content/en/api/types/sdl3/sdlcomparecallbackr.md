---
title: "SDLCompareCallbackR"
description: "Reference for SDLCompareCallbackR in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.65f7d8c796a13be0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLCompareCallbackR`

This reference describes `SDLCompareCallbackR` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-41e70773ad3c5328) | Method |
| [`BeginInvoke`](#api-a283aa507f22199e) | Method |
| [`EndInvoke`](#api-17e9dcd057652770) | Method |
| [`Invoke`](#api-d1025b57a49c7773) | Method |

## Type declaration

<a id="api-65f7d8c796a13be0"></a>
<!-- api: T:Inno.Native.Sdl3.SDLCompareCallbackR 5c728ac3dbcce5bbb41c88531d500572d7089a147319ef081fc89e998d72d1bd -->

```csharp
public delegate int Inno.Native.Sdl3.SDLCompareCallbackR(void* argument0, void* argument1, void* argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53850).

## `#ctor`

<a id="api-41e70773ad3c5328"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCompareCallbackR.#ctor(System.Object,System.IntPtr) e6201a74705b38d89683113dcb34a2e3dfda1cfc1ed3847f87860007d60afaae -->

```csharp
public Inno.Native.Sdl3.SDLCompareCallbackR.SDLCompareCallbackR(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53850).

## `BeginInvoke`

<a id="api-a283aa507f22199e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCompareCallbackR.BeginInvoke(System.Void*,System.Void*,System.Void*,System.AsyncCallback,System.Object) a9d3e423088ab265c36cd217458afac6a9b222904edafb9b35bcfa313efd05fb -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLCompareCallbackR.BeginInvoke(void* argument0, void* argument1, void* argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53850).

## `EndInvoke`

<a id="api-17e9dcd057652770"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCompareCallbackR.EndInvoke(System.IAsyncResult) 82e48c9e800ad4a73f8f2c6967d42d31a2083c1c830ced2a13f03de12532649f -->

```csharp
public virtual int Inno.Native.Sdl3.SDLCompareCallbackR.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53850).

## `Invoke`

<a id="api-d1025b57a49c7773"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCompareCallbackR.Invoke(System.Void*,System.Void*,System.Void*) 77da03ad15b10af75c7f66238949c1d739a1217a9bb44a78a81166ed196d53b9 -->

```csharp
public virtual int Inno.Native.Sdl3.SDLCompareCallbackR.Invoke(void* argument0, void* argument1, void* argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53850).
