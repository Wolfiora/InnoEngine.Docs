---
title: "SDLClipboardDataCallback"
description: "Reference for SDLClipboardDataCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.e9fca0a3097bf2dc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLClipboardDataCallback`

This reference describes `SDLClipboardDataCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4e63e6203ed58842) | Method |
| [`BeginInvoke`](#api-cda33eb757b7a01f) | Method |
| [`EndInvoke`](#api-eb6119d173a697b6) | Method |
| [`Invoke`](#api-0bbfdd9892315116) | Method |

## Type declaration

<a id="api-e9fca0a3097bf2dc"></a>
<!-- api: T:Inno.Native.Sdl3.SDLClipboardDataCallback da608f2852904157156af8b76b57911d3e671c4b0b3bdc282c929ddfa7a6fd77 -->

```csharp
public delegate void* Inno.Native.Sdl3.SDLClipboardDataCallback(void* argument0, sbyte* argument1, ulong* argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53676).

## `#ctor`

<a id="api-4e63e6203ed58842"></a>
<!-- api: M:Inno.Native.Sdl3.SDLClipboardDataCallback.#ctor(System.Object,System.IntPtr) 801a616d1d26136eaaf994063584718cc295d7afee6910208740ce8ab22573ca -->

```csharp
public Inno.Native.Sdl3.SDLClipboardDataCallback.SDLClipboardDataCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53676).

## `BeginInvoke`

<a id="api-cda33eb757b7a01f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLClipboardDataCallback.BeginInvoke(System.Void*,System.SByte*,System.UInt64*,System.AsyncCallback,System.Object) f2f20a8916c3efcf949a43db9dd455ec8f2192b22c7d095a1a45c6dc5cd00408 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLClipboardDataCallback.BeginInvoke(void* argument0, sbyte* argument1, ulong* argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53676).

## `EndInvoke`

<a id="api-eb6119d173a697b6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLClipboardDataCallback.EndInvoke(System.IAsyncResult) effb7deb810ea535534ce0e9b40c988ea7f1ef7f4d98859de795cebff74c00c0 -->

```csharp
public virtual void* Inno.Native.Sdl3.SDLClipboardDataCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53676).

## `Invoke`

<a id="api-0bbfdd9892315116"></a>
<!-- api: M:Inno.Native.Sdl3.SDLClipboardDataCallback.Invoke(System.Void*,System.SByte*,System.UInt64*) b832d199d2e2480ed642c0287c307bed674da4981f6ea915a73849e53c8f2c8a -->

```csharp
public virtual void* Inno.Native.Sdl3.SDLClipboardDataCallback.Invoke(void* argument0, sbyte* argument1, ulong* argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53676).
