---
title: "MaReadProc"
description: "Reference for MaReadProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.9e7878e898a757c6
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaReadProc`

This reference describes `MaReadProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-536dfb518eed463f) | Method |
| [`BeginInvoke`](#api-ffa02c730ca2f75c) | Method |
| [`EndInvoke`](#api-bf017508810cb7ec) | Method |
| [`Invoke`](#api-be880787cccf3dbe) | Method |

## Type declaration

<a id="api-9e7878e898a757c6"></a>
<!-- api: T:Inno.Native.MiniAudio.MaReadProc 818ddc2717e2ac9615a7779253d3c579817272496bba528b5f23b35050522bf9 -->

```csharp
public delegate Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaReadProc(void* argument0, void* argument1, ulong argument2, ulong* argument3)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23196).

## `#ctor`

<a id="api-536dfb518eed463f"></a>
<!-- api: M:Inno.Native.MiniAudio.MaReadProc.#ctor(System.Object,System.IntPtr) 0f3cf0ddfb43fa7866ba292180d571af0b7f24c1bdf9dede51dc4119cda5b364 -->

```csharp
public Inno.Native.MiniAudio.MaReadProc.MaReadProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23196).

## `BeginInvoke`

<a id="api-ffa02c730ca2f75c"></a>
<!-- api: M:Inno.Native.MiniAudio.MaReadProc.BeginInvoke(System.Void*,System.Void*,System.UInt64,System.UInt64*,System.AsyncCallback,System.Object) 31962d6d2266a9ca01a87827aa2a4202f264313d877fc902067ba2c1b98520b4 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaReadProc.BeginInvoke(void* argument0, void* argument1, ulong argument2, ulong* argument3, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23196).

## `EndInvoke`

<a id="api-bf017508810cb7ec"></a>
<!-- api: M:Inno.Native.MiniAudio.MaReadProc.EndInvoke(System.IAsyncResult) c6961e8c4b88ab83e0a61db9671e9b95cd750eb00000a0d0caf77540e0f834d0 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaReadProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23196).

## `Invoke`

<a id="api-be880787cccf3dbe"></a>
<!-- api: M:Inno.Native.MiniAudio.MaReadProc.Invoke(System.Void*,System.Void*,System.UInt64,System.UInt64*) 37ac256db2fcdb504126818c3d20c2791a03534b809f80e658ba371232803314 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaReadProc.Invoke(void* argument0, void* argument1, ulong argument2, ulong* argument3)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L23196).
