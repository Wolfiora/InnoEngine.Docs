---
title: "MaDeviceDataProc"
description: "Reference for MaDeviceDataProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.3c98dfa6fc68a3f0
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDeviceDataProc`

This reference describes `MaDeviceDataProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3d6699238a7d2d1e) | Method |
| [`BeginInvoke`](#api-a9c819fd18812fcd) | Method |
| [`EndInvoke`](#api-baac89e0fd2b3bd7) | Method |
| [`Invoke`](#api-a227e24e6a0cf01f) | Method |

## Type declaration

<a id="api-3c98dfa6fc68a3f0"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDeviceDataProc 933a0130cbff397046f292229fb7e85aa6b4f1e62caefcb4d4b7e0bab1105f29 -->

```csharp
public delegate void Inno.Native.MiniAudio.MaDeviceDataProc(Inno.Native.MiniAudio.MaDevice* argument0, void* argument1, void* argument2, uint argument3)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19688).

## `#ctor`

<a id="api-3d6699238a7d2d1e"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDeviceDataProc.#ctor(System.Object,System.IntPtr) 552159848e5d37c677d8717c7a5ab18a9baff0623f59be8aff4e178ecb6a4899 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceDataProc.MaDeviceDataProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19688).

## `BeginInvoke`

<a id="api-a9c819fd18812fcd"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDeviceDataProc.BeginInvoke(Inno.Native.MiniAudio.MaDevice*,System.Void*,System.Void*,System.UInt32,System.AsyncCallback,System.Object) 6b890578fad6afa93ad72956ad8cffb86dc957769bf1db57b127a8933cdb3440 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaDeviceDataProc.BeginInvoke(Inno.Native.MiniAudio.MaDevice* argument0, void* argument1, void* argument2, uint argument3, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19688).

## `EndInvoke`

<a id="api-baac89e0fd2b3bd7"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDeviceDataProc.EndInvoke(System.IAsyncResult) ce5d2a8ce189d4566f15dc287fbbe284a77134757e6d4eba4cfb92d8783dc892 -->

```csharp
public virtual void Inno.Native.MiniAudio.MaDeviceDataProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19688).

## `Invoke`

<a id="api-a227e24e6a0cf01f"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDeviceDataProc.Invoke(Inno.Native.MiniAudio.MaDevice*,System.Void*,System.Void*,System.UInt32) c2e96e80b4112fe13428b7db3fc13c4477a5fdec0a393d1634f16548d1a0b5a3 -->

```csharp
public virtual void Inno.Native.MiniAudio.MaDeviceDataProc.Invoke(Inno.Native.MiniAudio.MaDevice* argument0, void* argument1, void* argument2, uint argument3)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L19688).
