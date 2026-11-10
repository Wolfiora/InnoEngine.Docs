---
title: "SDLEnumerateDirectoryCallback"
description: "Reference for SDLEnumerateDirectoryCallback in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.e048e132118986b5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLEnumerateDirectoryCallback`

This reference describes `SDLEnumerateDirectoryCallback` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-82113e6ccd590df4) | Method |
| [`BeginInvoke`](#api-351d88d92fedcd15) | Method |
| [`EndInvoke`](#api-afb9a200508aee6b) | Method |
| [`Invoke`](#api-0d534e47bf3a02d5) | Method |

## Type declaration

<a id="api-e048e132118986b5"></a>
<!-- api: T:Inno.Native.Sdl3.SDLEnumerateDirectoryCallback 3dc0d9d22d0612179ba9a9cb77f7bf3b6dcd419f05bdc579263d445891ec60c4 -->

```csharp
public delegate Inno.Native.Sdl3.SDLEnumerationResult Inno.Native.Sdl3.SDLEnumerateDirectoryCallback(void* argument0, sbyte* argument1, sbyte* argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54144).

## `#ctor`

<a id="api-82113e6ccd590df4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEnumerateDirectoryCallback.#ctor(System.Object,System.IntPtr) 470e181df559db2eee0873375a582a83590428db55f982a7e22d111a9e5b9e91 -->

```csharp
public Inno.Native.Sdl3.SDLEnumerateDirectoryCallback.SDLEnumerateDirectoryCallback(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54144).

## `BeginInvoke`

<a id="api-351d88d92fedcd15"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEnumerateDirectoryCallback.BeginInvoke(System.Void*,System.SByte*,System.SByte*,System.AsyncCallback,System.Object) 77b02302fe5e7e5d534837783cbe7a121532d43e1b9244a70bccc82134b14861 -->

```csharp
public virtual System.IAsyncResult Inno.Native.Sdl3.SDLEnumerateDirectoryCallback.BeginInvoke(void* argument0, sbyte* argument1, sbyte* argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54144).

## `EndInvoke`

<a id="api-afb9a200508aee6b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEnumerateDirectoryCallback.EndInvoke(System.IAsyncResult) 4e0c3129121a5564ce150bd9a4992dc811496557bf51bcc8439a8cb011c1ca20 -->

```csharp
public virtual Inno.Native.Sdl3.SDLEnumerationResult Inno.Native.Sdl3.SDLEnumerateDirectoryCallback.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54144).

## `Invoke`

<a id="api-0d534e47bf3a02d5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLEnumerateDirectoryCallback.Invoke(System.Void*,System.SByte*,System.SByte*) 6e4506a12cdbd20a002f3c19218ac37a58debf6c64e851db905ded0cbfea9c28 -->

```csharp
public virtual Inno.Native.Sdl3.SDLEnumerationResult Inno.Native.Sdl3.SDLEnumerateDirectoryCallback.Invoke(void* argument0, sbyte* argument1, sbyte* argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54144).
