---
title: "MaTellProc"
description: "Reference for MaTellProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.c03509976afc66ec
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaTellProc`

This reference describes `MaTellProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6f0ce1b7f0fb5faa) | Method |
| [`BeginInvoke`](#api-9674d811eb9841fc) | Method |
| [`EndInvoke`](#api-5799768423d2fb23) | Method |
| [`Invoke`](#api-bd03931780b6dbe5) | Method |

## Type declaration

<a id="api-c03509976afc66ec"></a>
<!-- api: T:Inno.Native.MiniAudio.MaTellProc 9685dd1dacf4a3a601250963165f40f29787c1ef807d438d065c19295fa1f235 -->

```csharp
public delegate Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaTellProc(void* argument0, long* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24604).

## `#ctor`

<a id="api-6f0ce1b7f0fb5faa"></a>
<!-- api: M:Inno.Native.MiniAudio.MaTellProc.#ctor(System.Object,System.IntPtr) a6f6525807158248cd0ef646362e7c4c7c36fb0903ecff4afbc9ab168394a3eb -->

```csharp
public Inno.Native.MiniAudio.MaTellProc.MaTellProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24604).

## `BeginInvoke`

<a id="api-9674d811eb9841fc"></a>
<!-- api: M:Inno.Native.MiniAudio.MaTellProc.BeginInvoke(System.Void*,System.Int64*,System.AsyncCallback,System.Object) 3b1192d4071ffffc398409fe2eb615d5d7d7a6c096102724e5b01e1fed1b9374 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaTellProc.BeginInvoke(void* argument0, long* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24604).

## `EndInvoke`

<a id="api-5799768423d2fb23"></a>
<!-- api: M:Inno.Native.MiniAudio.MaTellProc.EndInvoke(System.IAsyncResult) c20de582283d1bddefb11cf9c6883b0a20725bc5bad76fc227b22f2f1a535e73 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaTellProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24604).

## `Invoke`

<a id="api-bd03931780b6dbe5"></a>
<!-- api: M:Inno.Native.MiniAudio.MaTellProc.Invoke(System.Void*,System.Int64*) 1a36cdd3839d72b8e6c0d776759f9976f3860f96cb653ffdeb633fd055da4d19 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaTellProc.Invoke(void* argument0, long* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24604).
