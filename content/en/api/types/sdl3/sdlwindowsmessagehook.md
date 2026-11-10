---
title: "SDLWindowsMessageHook"
description: "Reference for SDLWindowsMessageHook in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.fe3fd266c500c118
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLWindowsMessageHook`

This reference describes `SDLWindowsMessageHook` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-44b00757cab21409) | Method |
| [`BeginInvoke`](#api-a9ef205b2e2bce2b) | Method |
| [`EndInvoke`](#api-a062da9eaeb8ae8d) | Method |
| [`Invoke`](#api-8b83612838db301b) | Method |

## Type declaration

<a id="api-fe3fd266c500c118"></a>
<!-- api: T:Inno.Native.Sdl3.SDLWindowsMessageHook cc3586d4d4a5fd907ec33d908c5a5f6002198a6a7195450742e4d1d0629d4c04 -->

```csharp
public delegate byte Inno.Native.Sdl3.SDLWindowsMessageHook(void* argument0, Inno.Native.Sdl3.TagMSG* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60236).

## `#ctor`

<a id="api-44b00757cab21409"></a>
<!-- api: M:Inno.Native.Sdl3.SDLWindowsMessageHook.#ctor(System.Object,System.IntPtr) f2cfda951a45998515e8a9014b71a155f67c58ac4e5c646f6493761241308f0f -->

```csharp
public Inno.Native.Sdl3.SDLWindowsMessageHook.SDLWindowsMessageHook(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60236).

## `BeginInvoke`

<a id="api-a9ef205b2e2bce2b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLWindowsMessageHook.BeginInvoke(System.Void*,Inno.Native.Sdl3.TagMSG*,System.AsyncCallback,System.Object) acf410ae4a3e754ba46963bc63f19b6ef02cbb39062bd7bc4da9893a1953b842 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLWindowsMessageHook.BeginInvoke(void* argument0, Inno.Native.Sdl3.TagMSG* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60236).

## `EndInvoke`

<a id="api-a062da9eaeb8ae8d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLWindowsMessageHook.EndInvoke(System.IAsyncResult) ec86417c7d3dd065ce4857d32ab54a873f69459b483ad9864d040c04628a258d -->

```csharp
public virtual byte Inno.Native.Sdl3.SDLWindowsMessageHook.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60236).

## `Invoke`

<a id="api-8b83612838db301b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLWindowsMessageHook.Invoke(System.Void*,Inno.Native.Sdl3.TagMSG*) 36698b2e29d226b0e563f63e3845f729e05532bcf2980fdb1831d328128ee348 -->

```csharp
public virtual byte Inno.Native.Sdl3.SDLWindowsMessageHook.Invoke(void* argument0, Inno.Native.Sdl3.TagMSG* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60236).
