---
title: "SDLTLSDestructorCallback"
description: "Reference for SDLTLSDestructorCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.7c87b9ab7fe301c7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLTLSDestructorCallback`

This reference describes `SDLTLSDestructorCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6876832fa583159b) | Method |
| [`BeginInvoke`](#api-5f9f5297ab579f65) | Method |
| [`EndInvoke`](#api-b06a8d7bf19d5c58) | Method |
| [`Invoke`](#api-4e9a41079ec3fb30) | Method |

## Type declaration

<a id="api-7c87b9ab7fe301c7"></a>
<!-- api: T:Inno.Native.Sdl3.SDLTLSDestructorCallback d537c6e48704f4e7973471d80d6a2d033f95d1011caad1dc543ae5629f60afd2 -->

```csharp
public delegate void Inno.Native.Sdl3.SDLTLSDestructorCallback(void* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59839).

## `#ctor`

<a id="api-6876832fa583159b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTLSDestructorCallback.#ctor(System.Object,System.IntPtr) b768093c5ccaa17c1d1fdb2bc948328612e7002d5425cb9229986fc272871af1 -->

```csharp
public Inno.Native.Sdl3.SDLTLSDestructorCallback.SDLTLSDestructorCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59839).

## `BeginInvoke`

<a id="api-5f9f5297ab579f65"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTLSDestructorCallback.BeginInvoke(System.Void*,System.AsyncCallback,System.Object) 91a619d117201148db8e16efcf0bea4d5fa9c589c448f6cd303ae4647dbbff83 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLTLSDestructorCallback.BeginInvoke(void* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59839).

## `EndInvoke`

<a id="api-b06a8d7bf19d5c58"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTLSDestructorCallback.EndInvoke(System.IAsyncResult) 9b4ad20c3c7c0ea620811a8a58071c8369a2f6d303a5631ddfb0535760c3c733 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLTLSDestructorCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59839).

## `Invoke`

<a id="api-4e9a41079ec3fb30"></a>
<!-- api: M:Inno.Native.Sdl3.SDLTLSDestructorCallback.Invoke(System.Void*) 2dfd271e0863def767fedfe15b5fd78b5737c5b52e6b2cd780adf20737815865 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLTLSDestructorCallback.Invoke(void* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59839).
