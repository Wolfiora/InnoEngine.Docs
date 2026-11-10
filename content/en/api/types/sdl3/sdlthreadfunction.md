---
title: "SDLThreadFunction"
description: "Reference for SDLThreadFunction in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.f01a552e1b109130
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLThreadFunction`

This reference describes `SDLThreadFunction` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e7c269e1796ba997) | Method |
| [`BeginInvoke`](#api-9bbe5b16f2c3ffd8) | Method |
| [`EndInvoke`](#api-e34fe24a8bf6f13d) | Method |
| [`Invoke`](#api-e8e87019cc572ab9) | Method |

## Type declaration

<a id="api-f01a552e1b109130"></a>
<!-- api: T:Inno.Native.Sdl3.SDLThreadFunction 0d285fbebb4004bc895b24f321192b65dacccecfd48b2310b91347108e03a895 -->

```csharp
public delegate int Inno.Native.Sdl3.SDLThreadFunction(void* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59781).

## `#ctor`

<a id="api-e7c269e1796ba997"></a>
<!-- api: M:Inno.Native.Sdl3.SDLThreadFunction.#ctor(System.Object,System.IntPtr) 2b0538104505a1883ee31f744c66235cf862acfe47629910afd4215559a2b80a -->

```csharp
public Inno.Native.Sdl3.SDLThreadFunction.SDLThreadFunction(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59781).

## `BeginInvoke`

<a id="api-9bbe5b16f2c3ffd8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLThreadFunction.BeginInvoke(System.Void*,System.AsyncCallback,System.Object) dba5190014a1d6b199667e49602f3ccc633cee77f4f329b9ec5d4ee12eec7c2c -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLThreadFunction.BeginInvoke(void* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59781).

## `EndInvoke`

<a id="api-e34fe24a8bf6f13d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLThreadFunction.EndInvoke(System.IAsyncResult) 0600f562323fce69dfd2a3e11738e477ba389783e6908451d1464d752f397689 -->

```csharp
public virtual int Inno.Native.Sdl3.SDLThreadFunction.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59781).

## `Invoke`

<a id="api-e8e87019cc572ab9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLThreadFunction.Invoke(System.Void*) 7882c12c5958803768429798aea51bb844d546acf3f4fb9eb0cf7959c64f48af -->

```csharp
public virtual int Inno.Native.Sdl3.SDLThreadFunction.Invoke(void* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59781).
