---
title: "SDLEventFilter"
description: "Reference for SDLEventFilter in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.39267be22a4730be
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLEventFilter`

This reference describes `SDLEventFilter` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ea38ef4e2608300b) | Method |
| [`BeginInvoke`](#api-cfeb0075d8990f07) | Method |
| [`EndInvoke`](#api-9a76608b626c3e8c) | Method |
| [`Invoke`](#api-69d4c136dfe36a73) | Method |

## Type declaration

<a id="api-39267be22a4730be"></a>
<!-- api: T:Inno.Native.Sdl3.SDLEventFilter 49ada5d13a5aaab45d168ade90a3ec179d8be49ab45b53950712a960a5f1b26b -->

```csharp
public delegate byte Inno.Native.Sdl3.SDLEventFilter(void* argument0, Inno.Native.Sdl3.SDLEvent* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54298).

## `#ctor`

<a id="api-ea38ef4e2608300b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEventFilter.#ctor(System.Object,System.IntPtr) f59fb8284cc50ea79da9372d628b4fd668492d1c198bd78dc2d0ad69408124db -->

```csharp
public Inno.Native.Sdl3.SDLEventFilter.SDLEventFilter(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54298).

## `BeginInvoke`

<a id="api-cfeb0075d8990f07"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEventFilter.BeginInvoke(System.Void*,Inno.Native.Sdl3.SDLEvent*,System.AsyncCallback,System.Object) 735622c280c25dfc8425c531ea4c0fd28b935f84b039542194e2d83e874ece08 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLEventFilter.BeginInvoke(void* argument0, Inno.Native.Sdl3.SDLEvent* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54298).

## `EndInvoke`

<a id="api-9a76608b626c3e8c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEventFilter.EndInvoke(System.IAsyncResult) 3589533bdddde78c77ead33f1dcc3e93649303f3ec9e0ee2c17d0a1ac4906f1d -->

```csharp
public virtual byte Inno.Native.Sdl3.SDLEventFilter.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54298).

## `Invoke`

<a id="api-69d4c136dfe36a73"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEventFilter.Invoke(System.Void*,Inno.Native.Sdl3.SDLEvent*) c660a830498948e0ee17596f191e4967112579fafd4f07a68d2290e3a47b0a81 -->

```csharp
public virtual byte Inno.Native.Sdl3.SDLEventFilter.Invoke(void* argument0, Inno.Native.Sdl3.SDLEvent* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54298).
