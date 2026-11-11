---
title: "MaDecoderSeekProc"
description: "Reference for MaDecoderSeekProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.d761c72d8c42ff2b
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaDecoderSeekProc`

This reference describes `MaDecoderSeekProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a1fced1be7caefe7) | Method |
| [`BeginInvoke`](#api-128f00c527ae5266) | Method |
| [`EndInvoke`](#api-1ffeb47e5e308556) | Method |
| [`Invoke`](#api-0baa1fd3702cbb23) | Method |

## Type declaration

<a id="api-d761c72d8c42ff2b"></a>
<!-- api: T:Inno.Native.MiniAudio.MaDecoderSeekProc b17d9747a9866f1471f1c3951083e89430c4e758ecc61dcb0477cf2bbf9bbbb0 -->

```csharp
public delegate Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaDecoderSeekProc(Inno.Native.MiniAudio.MaDecoder* argument0, long argument1, Inno.Native.MiniAudio.MaSeekOrigin argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18685).

## `#ctor`

<a id="api-a1fced1be7caefe7"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderSeekProc.#ctor(System.Object,System.IntPtr) 8bacdb045cbda8d2981e9e1b91e3f732386d0887b35ae89e7acfdd76634fc25d -->

```csharp
public Inno.Native.MiniAudio.MaDecoderSeekProc.MaDecoderSeekProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18685).

## `BeginInvoke`

<a id="api-128f00c527ae5266"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderSeekProc.BeginInvoke(Inno.Native.MiniAudio.MaDecoder*,System.Int64,Inno.Native.MiniAudio.MaSeekOrigin,System.AsyncCallback,System.Object) 897103da53c606a2f0e585af4ca6bc4b4bbe305fdaf2476831d441be24055f86 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaDecoderSeekProc.BeginInvoke(Inno.Native.MiniAudio.MaDecoder* argument0, long argument1, Inno.Native.MiniAudio.MaSeekOrigin argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18685).

## `EndInvoke`

<a id="api-1ffeb47e5e308556"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderSeekProc.EndInvoke(System.IAsyncResult) b986382e7208c3a918357873c9da28521e8e85a891a1508eabe913e6e38b1cae -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaDecoderSeekProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18685).

## `Invoke`

<a id="api-0baa1fd3702cbb23"></a>
<!-- api: M:Inno.Native.MiniAudio.MaDecoderSeekProc.Invoke(Inno.Native.MiniAudio.MaDecoder*,System.Int64,Inno.Native.MiniAudio.MaSeekOrigin) 63f937ac90fe2d85f1461a5fe6cfd6518701804576f2588a6384412f52ebd225 -->

```csharp
public virtual Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MaDecoderSeekProc.Invoke(Inno.Native.MiniAudio.MaDecoder* argument0, long argument1, Inno.Native.MiniAudio.MaSeekOrigin argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18685).
