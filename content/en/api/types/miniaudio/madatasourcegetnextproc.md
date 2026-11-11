---
title: "MaDataSourceGetNextProc"
description: "Reference for MaDataSourceGetNextProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.76a6ae5292a7b9a4
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDataSourceGetNextProc`

This reference describes `MaDataSourceGetNextProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-320e7aecda002499) | Method |
| [`BeginInvoke`](#api-711df65b82a37f16) | Method |
| [`EndInvoke`](#api-f05b2a1932ec6c14) | Method |
| [`Invoke`](#api-c30143cb200a0e37) | Method |

## Type declaration

<a id="api-76a6ae5292a7b9a4"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDataSourceGetNextProc 46c660923abd337b048cf7a548c3e00c3147e20d3387c0b4c5a5acaca65e2a24 -->

```csharp
public delegate void* Inno.Native.MiniAudio.MaDataSourceGetNextProc(void* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18415).

## `#ctor`

<a id="api-320e7aecda002499"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDataSourceGetNextProc.#ctor(System.Object,System.IntPtr) 9f15362024cc2a81f63c4a7152b2a17fee27f87dfc2e5d151ece6be13b765ca2 -->

```csharp
public Inno.Native.MiniAudio.MaDataSourceGetNextProc.MaDataSourceGetNextProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18415).

## `BeginInvoke`

<a id="api-711df65b82a37f16"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDataSourceGetNextProc.BeginInvoke(System.Void*,System.AsyncCallback,System.Object) 50f2ae193483f453cd29e60fd5544717ec36d45f355f8e16ee76ddcf35305edc -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaDataSourceGetNextProc.BeginInvoke(void* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18415).

## `EndInvoke`

<a id="api-f05b2a1932ec6c14"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDataSourceGetNextProc.EndInvoke(System.IAsyncResult) 1d1183c8983fa33fa80eaf98db80ee5ef5ea81bff846f8b8d02fb2bc112e839d -->

```csharp
public virtual void* Inno.Native.MiniAudio.MaDataSourceGetNextProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18415).

## `Invoke`

<a id="api-c30143cb200a0e37"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDataSourceGetNextProc.Invoke(System.Void*) f3f0caf65d1c6bd9f52686e0c654d6766043f968fd548d203c8ce83d7dba54a4 -->

```csharp
public virtual void* Inno.Native.MiniAudio.MaDataSourceGetNextProc.Invoke(void* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18415).
