---
title: "SDLAppEventFunc"
description: "Reference for SDLAppEventFunc in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.488135540ed44cc1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLAppEventFunc`

This reference describes `SDLAppEventFunc` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b3bc8167cef95862) | Method |
| [`BeginInvoke`](#api-ff26a0b8b10c5f12) | Method |
| [`EndInvoke`](#api-aec6cfc338300df5) | Method |
| [`Invoke`](#api-ea1cc6e527ca6c4a) | Method |

## Type declaration

<a id="api-488135540ed44cc1"></a>
<!-- api: T:Inno.Native.Sdl3.SDLAppEventFunc 2f7ae56439999dd1eecd9685f6b4c570dc21690c2da853086ba88189c07c8eb4 -->

```csharp
public delegate Inno.Native.Sdl3.SDLAppResult Inno.Native.Sdl3.SDLAppEventFunc(void* argument0, Inno.Native.Sdl3.SDLEvent* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53110).

## `#ctor`

<a id="api-b3bc8167cef95862"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppEventFunc.#ctor(System.Object,System.IntPtr) 53e6c4b2a18f628cff6e71bf72683a12a2f7fd0ea0a3b446dc866e5e18aabd2d -->

```csharp
public Inno.Native.Sdl3.SDLAppEventFunc.SDLAppEventFunc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53110).

## `BeginInvoke`

<a id="api-ff26a0b8b10c5f12"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppEventFunc.BeginInvoke(System.Void*,Inno.Native.Sdl3.SDLEvent*,System.AsyncCallback,System.Object) 993d1c42bacc628c821357a8f322ba909b16e7642f7c0f1355d5d8f0e224f06c -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLAppEventFunc.BeginInvoke(void* argument0, Inno.Native.Sdl3.SDLEvent* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53110).

## `EndInvoke`

<a id="api-aec6cfc338300df5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppEventFunc.EndInvoke(System.IAsyncResult) dc3f9ad47255b648d134f12fa375018a8ce6dddb374c4dc9594c03b1ac7ce294 -->

```csharp
public virtual Inno.Native.Sdl3.SDLAppResult Inno.Native.Sdl3.SDLAppEventFunc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53110).

## `Invoke`

<a id="api-ea1cc6e527ca6c4a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppEventFunc.Invoke(System.Void*,Inno.Native.Sdl3.SDLEvent*) 2bd1d6f1de8b8ac0e399c85f2d86699cbfa09e608534e2b8453271ded5555e8b -->

```csharp
public virtual Inno.Native.Sdl3.SDLAppResult Inno.Native.Sdl3.SDLAppEventFunc.Invoke(void* argument0, Inno.Native.Sdl3.SDLEvent* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53110).
