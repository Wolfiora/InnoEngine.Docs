---
title: "SDLCompareCallback"
description: "Reference for SDLCompareCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.8d755c31a9085aee
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLCompareCallback`

This reference describes `SDLCompareCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6d819673ce7cbfbf) | Method |
| [`BeginInvoke`](#api-479f57caf27501a1) | Method |
| [`EndInvoke`](#api-60d47fdf91e521ce) | Method |
| [`Invoke`](#api-8146fc3cc26d4e64) | Method |

## Type declaration

<a id="api-8d755c31a9085aee"></a>
<!-- api: T:Inno.Native.Sdl3.SDLCompareCallback f1ee68bd77b9d4fab807558d515b5dd6a0c2bba15dcea62e84d4f07480d1c42a -->

```csharp
public delegate int Inno.Native.Sdl3.SDLCompareCallback(void* argument0, void* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53841).

## `#ctor`

<a id="api-6d819673ce7cbfbf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCompareCallback.#ctor(System.Object,System.IntPtr) 2af553124601ea6d0647c0b77703854fa862b6f9b99f05388991fc0afb0dbac9 -->

```csharp
public Inno.Native.Sdl3.SDLCompareCallback.SDLCompareCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53841).

## `BeginInvoke`

<a id="api-479f57caf27501a1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCompareCallback.BeginInvoke(System.Void*,System.Void*,System.AsyncCallback,System.Object) 380afbf0f966640d16bdc10ff721f67a8a5d933fb84fa03689c08803da97c4ca -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLCompareCallback.BeginInvoke(void* argument0, void* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53841).

## `EndInvoke`

<a id="api-60d47fdf91e521ce"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCompareCallback.EndInvoke(System.IAsyncResult) d5726eea256806d751dae303015916a2560e2c9f9a1415d744b39557e092110c -->

```csharp
public virtual int Inno.Native.Sdl3.SDLCompareCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53841).

## `Invoke`

<a id="api-8146fc3cc26d4e64"></a>
<!-- api: M:Inno.Native.Sdl3.SDLCompareCallback.Invoke(System.Void*,System.Void*) c4ad9bc37d2c878a4ab02353630c3ec1654363e0ea6d39225ecf085cc42f64c7 -->

```csharp
public virtual int Inno.Native.Sdl3.SDLCompareCallback.Invoke(void* argument0, void* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53841).
