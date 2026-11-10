---
title: "SDLAppQuitFunc"
description: "Reference for SDLAppQuitFunc in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.521fef9af632eedf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLAppQuitFunc`

This reference describes `SDLAppQuitFunc` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bc48f06d2ecb710b) | Method |
| [`BeginInvoke`](#api-f113306ad830457f) | Method |
| [`EndInvoke`](#api-b8d18313b04bc6a6) | Method |
| [`Invoke`](#api-3e6efdef4fb68e88) | Method |

## Type declaration

<a id="api-521fef9af632eedf"></a>
<!-- api: T:Inno.Native.Sdl3.SDLAppQuitFunc 16bd5a61dd4e482f599f9e474b85e34e3a27a79cbb1de871012897dc94fe980c -->

```csharp
public delegate void Inno.Native.Sdl3.SDLAppQuitFunc(void* argument0, Inno.Native.Sdl3.SDLAppResult argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53137).

## `#ctor`

<a id="api-bc48f06d2ecb710b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppQuitFunc.#ctor(System.Object,System.IntPtr) cc4f4b08063c5e60d0925947041533f54f1e12df44e4b55c57c7487d2fc3bcd5 -->

```csharp
public Inno.Native.Sdl3.SDLAppQuitFunc.SDLAppQuitFunc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53137).

## `BeginInvoke`

<a id="api-f113306ad830457f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppQuitFunc.BeginInvoke(System.Void*,Inno.Native.Sdl3.SDLAppResult,System.AsyncCallback,System.Object) 606160bf30d3fa78047c5f5668005aa6bdac785210431cb84e4dac0dca85dc2a -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLAppQuitFunc.BeginInvoke(void* argument0, Inno.Native.Sdl3.SDLAppResult argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53137).

## `EndInvoke`

<a id="api-b8d18313b04bc6a6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppQuitFunc.EndInvoke(System.IAsyncResult) 91741eb996268a3b1da04e19844aa1441008f24f9f667a018f5a573ddbb205eb -->

```csharp
public virtual void Inno.Native.Sdl3.SDLAppQuitFunc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53137).

## `Invoke`

<a id="api-3e6efdef4fb68e88"></a>
<!-- api: M:Inno.Native.Sdl3.SDLAppQuitFunc.Invoke(System.Void*,Inno.Native.Sdl3.SDLAppResult) ed8366593a475913cc31dcedd288329c7061c301eb1647135ed2883d9ae0104e -->

```csharp
public virtual void Inno.Native.Sdl3.SDLAppQuitFunc.Invoke(void* argument0, Inno.Native.Sdl3.SDLAppResult argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53137).
