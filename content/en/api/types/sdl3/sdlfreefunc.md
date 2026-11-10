---
title: "SDLFreeFunc"
description: "Reference for SDLFreeFunc in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.005733603ebbeb04
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLFreeFunc`

This reference describes `SDLFreeFunc` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-082d7fc867196fac) | Method |
| [`BeginInvoke`](#api-4cfe78db70442f36) | Method |
| [`EndInvoke`](#api-2bbc156349b48d12) | Method |
| [`Invoke`](#api-c4d9b269b2363eaa) | Method |

## Type declaration

<a id="api-005733603ebbeb04"></a>
<!-- api: T:Inno.Native.Sdl3.SDLFreeFunc c17e21afa3c3e94d10a069401022a436d419febb88b80c264b4689c9c11fd94d -->

```csharp
public delegate void Inno.Native.Sdl3.SDLFreeFunc(void* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54607).

## `#ctor`

<a id="api-082d7fc867196fac"></a>
<!-- api: M:Inno.Native.Sdl3.SDLFreeFunc.#ctor(System.Object,System.IntPtr) 5efee16756b807d8fb7cbaac9716ef7d754b3d4c61155ac230a3bada81a261f2 -->

```csharp
public Inno.Native.Sdl3.SDLFreeFunc.SDLFreeFunc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54607).

## `BeginInvoke`

<a id="api-4cfe78db70442f36"></a>
<!-- api: M:Inno.Native.Sdl3.SDLFreeFunc.BeginInvoke(System.Void*,System.AsyncCallback,System.Object) 51fdfa4eda52ff9a7237e834027e809d9e4ed0c743322139da5111c55f9d8913 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLFreeFunc.BeginInvoke(void* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54607).

## `EndInvoke`

<a id="api-2bbc156349b48d12"></a>
<!-- api: M:Inno.Native.Sdl3.SDLFreeFunc.EndInvoke(System.IAsyncResult) 16a0dcec08e5789c3c0bc60b7ad8ed8c8edc29187c30d109d521e25675ee99cc -->

```csharp
public virtual void Inno.Native.Sdl3.SDLFreeFunc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54607).

## `Invoke`

<a id="api-c4d9b269b2363eaa"></a>
<!-- api: M:Inno.Native.Sdl3.SDLFreeFunc.Invoke(System.Void*) bdc745bac31796f46026f3af09f8cc11f2bc060173d328f828700507132948f2 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLFreeFunc.Invoke(void* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54607).
