---
title: "MaDeviceNotificationProc"
description: "Reference for MaDeviceNotificationProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.aafbafa51c7d6df4
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDeviceNotificationProc`

This reference describes `MaDeviceNotificationProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5327585efd9154cb) | Method |
| [`BeginInvoke`](#api-d07c69357d5805eb) | Method |
| [`EndInvoke`](#api-96184b1dae5f078d) | Method |
| [`Invoke`](#api-e2bcb0a15e41fb8b) | Method |

## Type declaration

<a id="api-aafbafa51c7d6df4"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDeviceNotificationProc adf288e46b3f7386f7a24dab45ac3afd1932a583a1224782db8eee3f06e83239 -->

```csharp
public delegate void Inno.Native.MiniAudio.MaDeviceNotificationProc(Inno.Native.MiniAudio.MaDeviceNotification* argument0)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20050).

## `#ctor`

<a id="api-5327585efd9154cb"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDeviceNotificationProc.#ctor(System.Object,System.IntPtr) 9097b571f1d61f7f102dad4a88e332229ee7da613e4c6204218b55f52a0cbcfc -->

```csharp
public Inno.Native.MiniAudio.MaDeviceNotificationProc.MaDeviceNotificationProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20050).

## `BeginInvoke`

<a id="api-d07c69357d5805eb"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDeviceNotificationProc.BeginInvoke(Inno.Native.MiniAudio.MaDeviceNotification*,System.AsyncCallback,System.Object) b30d5b9c1bacbf4f116c00c1d5009d8aaa81aba449e05f46af3d4d02d4564196 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaDeviceNotificationProc.BeginInvoke(Inno.Native.MiniAudio.MaDeviceNotification* argument0, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20050).

## `EndInvoke`

<a id="api-96184b1dae5f078d"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDeviceNotificationProc.EndInvoke(System.IAsyncResult) b16cf0c275b1c1bfb955c042a7fc7c87c46bb4cf14cf2ff7d1da377efed84fbb -->

```csharp
public virtual void Inno.Native.MiniAudio.MaDeviceNotificationProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20050).

## `Invoke`

<a id="api-e2bcb0a15e41fb8b"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDeviceNotificationProc.Invoke(Inno.Native.MiniAudio.MaDeviceNotification*) 3d8b9cffbb3f5d86cc886267942fccfe000558c31689795328934e4d5e698ace -->

```csharp
public virtual void Inno.Native.MiniAudio.MaDeviceNotificationProc.Invoke(Inno.Native.MiniAudio.MaDeviceNotification* argument0)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20050).
