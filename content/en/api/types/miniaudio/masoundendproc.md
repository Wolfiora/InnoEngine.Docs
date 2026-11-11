---
title: "MaSoundEndProc"
description: "Reference for MaSoundEndProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.3fee673fd3a1769a
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaSoundEndProc`

This reference describes `MaSoundEndProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dede0911a7c4c571) | Method |
| [`BeginInvoke`](#api-92946da04d221570) | Method |
| [`EndInvoke`](#api-03af4a3dbdd9dce7) | Method |
| [`Invoke`](#api-c11d049057bd9401) | Method |

## Type declaration

<a id="api-3fee673fd3a1769a"></a>
<!-- api: T:Inno.Native.MiniAudio.MaSoundEndProc f1450dff51ff08f0ff79e76f60926cbb34f1882d88620941eae16ca31e868323 -->

```csharp
public delegate void Inno.Native.MiniAudio.MaSoundEndProc(void* argument0, Inno.Native.MiniAudio.MaSound* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24208).

## `#ctor`

<a id="api-dede0911a7c4c571"></a>
<!-- api: M:Inno.Native.MiniAudio.MaSoundEndProc.#ctor(System.Object,System.IntPtr) 3d24272f2a538bb0022bfe7d2fcfd337fe2e9b1738153753b3dd4d9f60cf9632 -->

```csharp
public Inno.Native.MiniAudio.MaSoundEndProc.MaSoundEndProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24208).

## `BeginInvoke`

<a id="api-92946da04d221570"></a>
<!-- api: M:Inno.Native.MiniAudio.MaSoundEndProc.BeginInvoke(System.Void*,Inno.Native.MiniAudio.MaSound*,System.AsyncCallback,System.Object) 73b0cb89ea5dbc46a60ef5cf3f61bcf7083934d556930d4161132c2425573119 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaSoundEndProc.BeginInvoke(void* argument0, Inno.Native.MiniAudio.MaSound* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24208).

## `EndInvoke`

<a id="api-03af4a3dbdd9dce7"></a>
<!-- api: M:Inno.Native.MiniAudio.MaSoundEndProc.EndInvoke(System.IAsyncResult) 3c734877fc1f742c5142db2b454a371198b3da1d432beab224e6f61bf0283a8f -->

```csharp
public virtual void Inno.Native.MiniAudio.MaSoundEndProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24208).

## `Invoke`

<a id="api-c11d049057bd9401"></a>
<!-- api: M:Inno.Native.MiniAudio.MaSoundEndProc.Invoke(System.Void*,Inno.Native.MiniAudio.MaSound*) 99f63134770a2abeeced1c9d22104aa5db9edd58703fb352a2d2bef25a9b6318 -->

```csharp
public virtual void Inno.Native.MiniAudio.MaSoundEndProc.Invoke(void* argument0, Inno.Native.MiniAudio.MaSound* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24208).
