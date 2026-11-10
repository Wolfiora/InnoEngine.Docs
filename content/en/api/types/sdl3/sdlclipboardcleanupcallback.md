---
title: "SDLClipboardCleanupCallback"
description: "Reference for SDLClipboardCleanupCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.8300903567591b16
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLClipboardCleanupCallback`

This reference describes `SDLClipboardCleanupCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-27ab99bbbfb15a69) | Method |
| [`BeginInvoke`](#api-89c40d07aeb1042e) | Method |
| [`EndInvoke`](#api-b910f790badc2bed) | Method |
| [`Invoke`](#api-23591da10bd36aec) | Method |

## Type declaration

<a id="api-8300903567591b16"></a>
<!-- api: T:Inno.Native.Sdl3.SDLClipboardCleanupCallback f0d61e14110695b0e998b227f1a9b45899949c81d85578cbc53cddfea730fd73 -->

```csharp
public delegate void Inno.Native.Sdl3.SDLClipboardCleanupCallback(void* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53667).

## `#ctor`

<a id="api-27ab99bbbfb15a69"></a>
<!-- api: M:Inno.Native.Sdl3.SDLClipboardCleanupCallback.#ctor(System.Object,System.IntPtr) 3aacd459bc5622ce2ad24b71aea5981a1cdf7949e5e2e32f25896023a6ade555 -->

```csharp
public Inno.Native.Sdl3.SDLClipboardCleanupCallback.SDLClipboardCleanupCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53667).

## `BeginInvoke`

<a id="api-89c40d07aeb1042e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLClipboardCleanupCallback.BeginInvoke(System.Void*,System.AsyncCallback,System.Object) 3f52c95cbd78087203488b91d4398e043ac3111e9910b31efb7e852e7bb92937 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLClipboardCleanupCallback.BeginInvoke(void* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53667).

## `EndInvoke`

<a id="api-b910f790badc2bed"></a>
<!-- api: M:Inno.Native.Sdl3.SDLClipboardCleanupCallback.EndInvoke(System.IAsyncResult) 319e32324bb0df1e58084c3cf79f6a1b164d06b8707630cd16933e1b64686577 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLClipboardCleanupCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53667).

## `Invoke`

<a id="api-23591da10bd36aec"></a>
<!-- api: M:Inno.Native.Sdl3.SDLClipboardCleanupCallback.Invoke(System.Void*) 619f79e75ccd26e55dae9c51a162a45fcdce3029983396ce0fb8b0924963e302 -->

```csharp
public virtual void Inno.Native.Sdl3.SDLClipboardCleanupCallback.Invoke(void* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53667).
