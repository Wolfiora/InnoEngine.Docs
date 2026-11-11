---
title: "MaDecoderTellProc"
description: "Reference for MaDecoderTellProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.3558132eb3ebfa4c
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDecoderTellProc`

This reference describes `MaDecoderTellProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7bef8288cde658e3) | Method |
| [`BeginInvoke`](#api-c8243758a9bb49c5) | Method |
| [`EndInvoke`](#api-50c3a6737acbf803) | Method |
| [`Invoke`](#api-27435887a687d34e) | Method |

## Type declaration

<a id="api-3558132eb3ebfa4c"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDecoderTellProc 6ae37bb8784a0a7c70dcd2d1301b80c024bf42f07a61cde73f79bc35dcddc363 -->

```csharp
public delegate Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaDecoderTellProc(Inno.Native.MiniAudio.MaDecoder* argument0, long* argument1)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18694).

## `#ctor`

<a id="api-7bef8288cde658e3"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderTellProc.#ctor(System.Object,System.IntPtr) 24117e04e8479fa0d8292c8466bb3bc68fd4d8c96e7680ca193a923e80713d6d -->

```csharp
public Inno.Native.MiniAudio.MaDecoderTellProc.MaDecoderTellProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18694).

## `BeginInvoke`

<a id="api-c8243758a9bb49c5"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderTellProc.BeginInvoke(Inno.Native.MiniAudio.MaDecoder*,System.Int64*,System.AsyncCallback,System.Object) 0c1bfffc85893905902d5c244fc0b7fd31abaf1c6cc29bd4b4cef7cfdfd49a30 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaDecoderTellProc.BeginInvoke(Inno.Native.MiniAudio.MaDecoder* argument0, long* argument1, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18694).

## `EndInvoke`

<a id="api-50c3a6737acbf803"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderTellProc.EndInvoke(System.IAsyncResult) 75a04f411833d38222957a0aabb32c3bada2ede6dc10a753939a096f7cfe3035 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaDecoderTellProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18694).

## `Invoke`

<a id="api-27435887a687d34e"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderTellProc.Invoke(Inno.Native.MiniAudio.MaDecoder*,System.Int64*) fea669fedd845fea6104e4404d534eba81d904080c2372ad598286e9b0a7dff8 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaDecoderTellProc.Invoke(Inno.Native.MiniAudio.MaDecoder* argument0, long* argument1)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18694).
