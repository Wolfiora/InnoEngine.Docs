---
title: "MaLogCallbackProc"
description: "Reference for MaLogCallbackProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.ad4d4b111e4a0e31
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaLogCallbackProc`

This reference describes `MaLogCallbackProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a0004ed271b0c2e8) | Method |
| [`BeginInvoke`](#api-1b53639d3498c4c3) | Method |
| [`EndInvoke`](#api-21101d0b2d4e010c) | Method |
| [`Invoke`](#api-8bcabc303ad3704d) | Method |

## Type declaration

<a id="api-ad4d4b111e4a0e31"></a>
<!-- api: T:Inno.Native.MiniAudio.MaLogCallbackProc 18420f0ac8dab38627a78de734b1c164aa528b4cf77b7f029f11f61ba19a320f -->

```csharp
public delegate void Inno.Native.MiniAudio.MaLogCallbackProc(void* argument0, uint argument1, sbyte* argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21903).

## `#ctor`

<a id="api-a0004ed271b0c2e8"></a>
<!-- api: M:Inno.Native.MiniAudio.MaLogCallbackProc.#ctor(System.Object,System.IntPtr) 5ede58715ab59044fe2e34f3d7a6ecb538956ae4c8e367a6b68d091bb3ea6a18 -->

```csharp
public Inno.Native.MiniAudio.MaLogCallbackProc.MaLogCallbackProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21903).

## `BeginInvoke`

<a id="api-1b53639d3498c4c3"></a>
<!-- api: M:Inno.Native.MiniAudio.MaLogCallbackProc.BeginInvoke(System.Void*,System.UInt32,System.SByte*,System.AsyncCallback,System.Object) 6faa833ea8993fc78b6f7d26ac237e6a8dc838758c7a9d5b5bf55284acf69843 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaLogCallbackProc.BeginInvoke(void* argument0, uint argument1, sbyte* argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21903).

## `EndInvoke`

<a id="api-21101d0b2d4e010c"></a>
<!-- api: M:Inno.Native.MiniAudio.MaLogCallbackProc.EndInvoke(System.IAsyncResult) 1d5227f8d15f81b5d3ecad57245d9e628120b3900924224d1c9d45372650c71b -->

```csharp
public virtual void Inno.Native.MiniAudio.MaLogCallbackProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21903).

## `Invoke`

<a id="api-8bcabc303ad3704d"></a>
<!-- api: M:Inno.Native.MiniAudio.MaLogCallbackProc.Invoke(System.Void*,System.UInt32,System.SByte*) 9f064e1547da44ea97247a15afab75302b19bfa713710169bbf5e5f041b89910 -->

```csharp
public virtual void Inno.Native.MiniAudio.MaLogCallbackProc.Invoke(void* argument0, uint argument1, sbyte* argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21903).
