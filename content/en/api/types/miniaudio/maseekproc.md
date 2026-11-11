---
title: "MaSeekProc"
description: "Reference for MaSeekProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.f1cd8abbb7f327d2
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaSeekProc`

This reference describes `MaSeekProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8d9ffddfe00c2c06) | Method |
| [`BeginInvoke`](#api-875a0091c39444f0) | Method |
| [`EndInvoke`](#api-ee0da95882174a5b) | Method |
| [`Invoke`](#api-bd771c7379db2ffa) | Method |

## Type declaration

<a id="api-f1cd8abbb7f327d2"></a>
<!-- api: T:Inno.Native.MiniAudio.MaSeekProc 357aafe7661ce2d2efdae8a4d28a92ee8e96422d49d25544e9f8658641ef942b -->

```csharp
public delegate Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaSeekProc(void* argument0, long argument1, Inno.Native.MiniAudio.MaSeekOrigin argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24012).

## `#ctor`

<a id="api-8d9ffddfe00c2c06"></a>
<!-- api: M:Inno.Native.MiniAudio.MaSeekProc.#ctor(System.Object,System.IntPtr) fe2ec1c022cd3612e3621724109fd0afd9b91be6a07b56050bc2269104b8eb92 -->

```csharp
public Inno.Native.MiniAudio.MaSeekProc.MaSeekProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24012).

## `BeginInvoke`

<a id="api-875a0091c39444f0"></a>
<!-- api: M:Inno.Native.MiniAudio.MaSeekProc.BeginInvoke(System.Void*,System.Int64,Inno.Native.MiniAudio.MaSeekOrigin,System.AsyncCallback,System.Object) 563e680d775fea6a1a9274ed0312b80322af7d668f3d9a87d74e362159cffdb3 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaSeekProc.BeginInvoke(void* argument0, long argument1, Inno.Native.MiniAudio.MaSeekOrigin argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24012).

## `EndInvoke`

<a id="api-ee0da95882174a5b"></a>
<!-- api: M:Inno.Native.MiniAudio.MaSeekProc.EndInvoke(System.IAsyncResult) aa758edf0540ca8ead97a6fb8fe8c99e86dd2ad071496e4786e578aefcd611f8 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaSeekProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24012).

## `Invoke`

<a id="api-bd771c7379db2ffa"></a>
<!-- api: M:Inno.Native.MiniAudio.MaSeekProc.Invoke(System.Void*,System.Int64,Inno.Native.MiniAudio.MaSeekOrigin) ea91264768ee9b70fc51cb533687eef2875c7dcf8aa1b3a7fcf5a5a170707e3f -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaSeekProc.Invoke(void* argument0, long argument1, Inno.Native.MiniAudio.MaSeekOrigin argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24012).
