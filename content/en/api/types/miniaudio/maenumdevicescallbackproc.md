---
title: "MaEnumDevicesCallbackProc"
description: "Reference for MaEnumDevicesCallbackProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.1279a829c5d71105
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEnumDevicesCallbackProc`

This reference describes `MaEnumDevicesCallbackProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1e6faab07a90f43b) | Method |
| [`BeginInvoke`](#api-4349e5fd31b7f9b7) | Method |
| [`EndInvoke`](#api-0686495344419786) | Method |
| [`Invoke`](#api-3c227c890cfd2b04) | Method |

## Type declaration

<a id="api-1279a829c5d71105"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEnumDevicesCallbackProc 9124b229fd0d9113c2b9abf33c079b5d16cfade8633fb7e703300d6443392b48 -->

```csharp
public delegate uint Inno.Native.MiniAudio.MaEnumDevicesCallbackProc(Inno.Native.MiniAudio.MaContext* argument0, Inno.Native.MiniAudio.MaDeviceType argument1, Inno.Native.MiniAudio.MaDeviceInfo* argument2, void* argument3)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20582).

## `#ctor`

<a id="api-1e6faab07a90f43b"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEnumDevicesCallbackProc.#ctor(System.Object,System.IntPtr) 0e1e3675d4fdb52d9a0e06e30875b24d35a0f0d2b6749d83f4c0aeeac003c758 -->

```csharp
public Inno.Native.MiniAudio.MaEnumDevicesCallbackProc.MaEnumDevicesCallbackProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20582).

## `BeginInvoke`

<a id="api-4349e5fd31b7f9b7"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEnumDevicesCallbackProc.BeginInvoke(Inno.Native.MiniAudio.MaContext*,Inno.Native.MiniAudio.MaDeviceType,Inno.Native.MiniAudio.MaDeviceInfo*,System.Void*,System.AsyncCallback,System.Object) fa284bd3c25304564ba2c0cb25fef5a9904ed90ebfea956a79169199ad7ed855 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaEnumDevicesCallbackProc.BeginInvoke(Inno.Native.MiniAudio.MaContext* argument0, Inno.Native.MiniAudio.MaDeviceType argument1, Inno.Native.MiniAudio.MaDeviceInfo* argument2, void* argument3, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20582).

## `EndInvoke`

<a id="api-0686495344419786"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEnumDevicesCallbackProc.EndInvoke(System.IAsyncResult) 1040414d430c92e44ae10b3b14f0325cc4452321369ede4ead0cdaf5c92e22dd -->

```csharp
public virtual uint Inno.Native.MiniAudio.MaEnumDevicesCallbackProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20582).

## `Invoke`

<a id="api-3c227c890cfd2b04"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEnumDevicesCallbackProc.Invoke(Inno.Native.MiniAudio.MaContext*,Inno.Native.MiniAudio.MaDeviceType,Inno.Native.MiniAudio.MaDeviceInfo*,System.Void*) 35ac519d7526cb95885722c81a44061cf8d510e1e50acffb307b448c0b9f9833 -->

```csharp
public virtual uint Inno.Native.MiniAudio.MaEnumDevicesCallbackProc.Invoke(Inno.Native.MiniAudio.MaContext* argument0, Inno.Native.MiniAudio.MaDeviceType argument1, Inno.Native.MiniAudio.MaDeviceInfo* argument2, void* argument3)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20582).
