---
title: "MaJobProc"
description: "Reference for MaJobProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.a3251dcb2325294c
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaJobProc`

This reference describes `MaJobProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e04c9bee34344680) | Method |
| [`BeginInvoke`](#api-4358e46d8ebc436f) | Method |
| [`EndInvoke`](#api-e9a1b08d3d1a6875) | Method |
| [`Invoke`](#api-6a7034ee88838308) | Method |

## Type declaration

<a id="api-a3251dcb2325294c"></a>
<!-- api: T:Inno.Native.MiniAudio.MaJobProc c836d26b7c992f74c5275aee0c691a9692b00d5ed423f9dbcdfd7c32b54ec315 -->

```csharp
public delegate Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaJobProc(Inno.Native.MiniAudio.MaJob* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21611).

## `#ctor`

<a id="api-e04c9bee34344680"></a>
<!-- api: M:Inno.Native.MiniAudio.MaJobProc.#ctor(System.Object,System.IntPtr) 04cc07b970004f3a1cf2e455070c6d9eff59182683f595c5dc46a703af0f7ee7 -->

```csharp
public Inno.Native.MiniAudio.MaJobProc.MaJobProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21611).

## `BeginInvoke`

<a id="api-4358e46d8ebc436f"></a>
<!-- api: M:Inno.Native.MiniAudio.MaJobProc.BeginInvoke(Inno.Native.MiniAudio.MaJob*,System.AsyncCallback,System.Object) 630bbcf335434e2a486a07c83c1b9cee4572ea68948e2cff0eee1d62392496b8 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaJobProc.BeginInvoke(Inno.Native.MiniAudio.MaJob* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21611).

## `EndInvoke`

<a id="api-e9a1b08d3d1a6875"></a>
<!-- api: M:Inno.Native.MiniAudio.MaJobProc.EndInvoke(System.IAsyncResult) 516cca5603292f4a8f4a9a4563adfe69ad178981aafcd1b1f4ba18cdad914092 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaJobProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21611).

## `Invoke`

<a id="api-6a7034ee88838308"></a>
<!-- api: M:Inno.Native.MiniAudio.MaJobProc.Invoke(Inno.Native.MiniAudio.MaJob*) d51bb568dbd622cf406240d931dbdef2c674fbba127fa6b77c22f9d04dc910c2 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaJobProc.Invoke(Inno.Native.MiniAudio.MaJob* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L21611).
