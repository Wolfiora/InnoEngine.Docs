---
title: "SDLLogOutputFunction"
description: "Reference for SDLLogOutputFunction in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.12270f7ce14d4d6e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLLogOutputFunction`

This reference describes `SDLLogOutputFunction` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1e8a5340073335a1) | Method |
| [`BeginInvoke`](#api-22c95295b3c69c2a) | Method |
| [`EndInvoke`](#api-8a492a672dad3539) | Method |
| [`Invoke`](#api-51a5073c2eb746d8) | Method |

## Type declaration

<a id="api-12270f7ce14d4d6e"></a>
<!-- api: T:Inno.Native.Sdl3.SDLLogOutputFunction 876f1fdd4272671de1d7030ee17200ebb7ff4c265ba5b8d2a5f4c01d92512b19 -->

```csharp
public delegate void Inno.Native.Sdl3.SDLLogOutputFunction(void* argument0, int argument1, Inno.Native.Sdl3.SDLLogPriority argument2, sbyte* argument3)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57949).

## `#ctor`

<a id="api-1e8a5340073335a1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLLogOutputFunction.#ctor(System.Object,System.IntPtr) d7e086e7a15b14ee6d85604b614216c407b77db2329eb5c6005a5cac6004f59b -->

```csharp
public Inno.Native.Sdl3.SDLLogOutputFunction.SDLLogOutputFunction(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57949).

## `BeginInvoke`

<a id="api-22c95295b3c69c2a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLLogOutputFunction.BeginInvoke(System.Void*,System.Int32,Inno.Native.Sdl3.SDLLogPriority,System.SByte*,System.AsyncCallback,System.Object) f6c9600c4af6ed96b44e81317fc105b398b6f94be8a5b149f0d042fa92d17f38 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLLogOutputFunction.BeginInvoke(void* argument0, int argument1, Inno.Native.Sdl3.SDLLogPriority argument2, sbyte* argument3, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57949).

## `EndInvoke`

<a id="api-8a492a672dad3539"></a>
<!-- api: M:Inno.Native.Sdl3.SDLLogOutputFunction.EndInvoke(System.IAsyncResult) 8df236c4314a39a1ca62f4b987b4d52a7543724e2d5c5577401cde91c41b3258 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLLogOutputFunction.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57949).

## `Invoke`

<a id="api-51a5073c2eb746d8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLLogOutputFunction.Invoke(System.Void*,System.Int32,Inno.Native.Sdl3.SDLLogPriority,System.SByte*) d533066524090bd6558d6a7e03e012382b20da4600b7896f6e86fd78f8c1d232 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLLogOutputFunction.Invoke(void* argument0, int argument1, Inno.Native.Sdl3.SDLLogPriority argument2, sbyte* argument3)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57949).
