---
title: "SDLTrayCallback"
description: "Reference for SDLTrayCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.cb02f1519eea5c40
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLTrayCallback`

This reference describes `SDLTrayCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-63b548e1251b16a7) | Method |
| [`BeginInvoke`](#api-ba136508478165ba) | Method |
| [`EndInvoke`](#api-078c639a1e8f3d15) | Method |
| [`Invoke`](#api-66e0c4c382aeac35) | Method |

## Type declaration

<a id="api-cb02f1519eea5c40"></a>
<!-- api: T:Inno.Native.Sdl3.SDLTrayCallback 6b8885b8592f74ae91d70eb152b5ae0347b714dece5a9942e8a9ca37f1b6518b -->

```csharp
public delegate void Inno.Native.Sdl3.SDLTrayCallback(void* argument0, Inno.Native.Sdl3.SDLTrayEntry* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59943).

## `#ctor`

<a id="api-63b548e1251b16a7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTrayCallback.#ctor(System.Object,System.IntPtr) dadc30e954784255096441ad8363b1c1c59e9582c0d9646fa79538d7bba758f2 -->

```csharp
public Inno.Native.Sdl3.SDLTrayCallback.SDLTrayCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59943).

## `BeginInvoke`

<a id="api-ba136508478165ba"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTrayCallback.BeginInvoke(System.Void*,Inno.Native.Sdl3.SDLTrayEntry*,System.AsyncCallback,System.Object) a8993f70a2c190437885da406735564e1f2f66c658154e73ccf86edb060a1f7c -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLTrayCallback.BeginInvoke(void* argument0, Inno.Native.Sdl3.SDLTrayEntry* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59943).

## `EndInvoke`

<a id="api-078c639a1e8f3d15"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTrayCallback.EndInvoke(System.IAsyncResult) ce67aed3724d1518ca6ae003715060ed6a001771f5cab086c0c73f41adc5b562 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLTrayCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59943).

## `Invoke`

<a id="api-66e0c4c382aeac35"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTrayCallback.Invoke(System.Void*,Inno.Native.Sdl3.SDLTrayEntry*) 119671680133d473fa5e1ab43a87a6e93b1c3c26fd2ee46d63ae38132263a8c8 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLTrayCallback.Invoke(void* argument0, Inno.Native.Sdl3.SDLTrayEntry* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59943).
