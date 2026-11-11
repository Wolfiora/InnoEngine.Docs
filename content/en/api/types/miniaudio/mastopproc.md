---
title: "MaStopProc"
description: "Reference for MaStopProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.b6d20467d437781f
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaStopProc`

This reference describes `MaStopProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-137e2ad483d1ed20) | Method |
| [`BeginInvoke`](#api-6aa2ec1be8f18856) | Method |
| [`EndInvoke`](#api-09560f23241165cd) | Method |
| [`Invoke`](#api-8d47553ce585703a) | Method |

## Type declaration

<a id="api-b6d20467d437781f"></a>
<!-- api: T:Inno.Native.MiniAudio.MaStopProc 1f94c714802fc68eeff41dd31b25442fe01f221484c5f2079f4cf22d3bccda40 -->

```csharp
public delegate void Inno.Native.MiniAudio.MaStopProc(Inno.Native.MiniAudio.MaDevice* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24572).

## `#ctor`

<a id="api-137e2ad483d1ed20"></a>
<!-- api: M:Inno.Native.MiniAudio.MaStopProc.#ctor(System.Object,System.IntPtr) 067534c862a6efb865ed63505b070ff21581018b06a1a0f0a97a0efa81306cba -->

```csharp
public Inno.Native.MiniAudio.MaStopProc.MaStopProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24572).

## `BeginInvoke`

<a id="api-6aa2ec1be8f18856"></a>
<!-- api: M:Inno.Native.MiniAudio.MaStopProc.BeginInvoke(Inno.Native.MiniAudio.MaDevice*,System.AsyncCallback,System.Object) 525a38dead7548c6655b378050ffb6d5a205e6fca4484c2e9dff85b64130eea5 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaStopProc.BeginInvoke(Inno.Native.MiniAudio.MaDevice* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24572).

## `EndInvoke`

<a id="api-09560f23241165cd"></a>
<!-- api: M:Inno.Native.MiniAudio.MaStopProc.EndInvoke(System.IAsyncResult) c36319076e3babab28bbcc2d5314072504f01350dae49d7ed6c6990a7f4d9089 -->

```csharp
public virtual void Inno.Native.MiniAudio.MaStopProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24572).

## `Invoke`

<a id="api-8d47553ce585703a"></a>
<!-- api: M:Inno.Native.MiniAudio.MaStopProc.Invoke(Inno.Native.MiniAudio.MaDevice*) 073ac85c7b8bbcbb1077a537727f0e543c4744a6518675ce5d0aab4c067de5b7 -->

```csharp
public virtual void Inno.Native.MiniAudio.MaStopProc.Invoke(Inno.Native.MiniAudio.MaDevice* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24572).
