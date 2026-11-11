---
title: "MaEngineProcessProc"
description: "Reference for MaEngineProcessProc in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.9c35d0a9cc85bb14
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaEngineProcessProc`

This reference describes `MaEngineProcessProc` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7db956b435ff3070) | Method |
| [`BeginInvoke`](#api-e22ba185d7d0c1c6) | Method |
| [`EndInvoke`](#api-549cb343dbdabff4) | Method |
| [`Invoke`](#api-b1bb8d27ccf4d80d) | Method |

## Type declaration

<a id="api-9c35d0a9cc85bb14"></a>
<!-- api: T:Inno.Native.MiniAudio.MaEngineProcessProc 892a9f51dd40097ad33285914d9167ac4e173e71ba2ed445e520f4092f784f4e -->

```csharp
public delegate void Inno.Native.MiniAudio.MaEngineProcessProc(void* argument0, float* argument1, ulong argument2)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20573).

## `#ctor`

<a id="api-7db956b435ff3070"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEngineProcessProc.#ctor(System.Object,System.IntPtr) 3d703d11f24b8b728e7dece8adecf6bd173ba5383d8f6b0dad64c8dde3001cd3 -->

```csharp
public Inno.Native.MiniAudio.MaEngineProcessProc.MaEngineProcessProc(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20573).

## `BeginInvoke`

<a id="api-e22ba185d7d0c1c6"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEngineProcessProc.BeginInvoke(System.Void*,System.Single*,System.UInt64,System.AsyncCallback,System.Object) b868a31bae5597fc6be22db24db5c7aeb6f0464eb0d9367769458171c48d10a0 -->

```csharp
public virtual System.IAsyncResult Inno.Native.MiniAudio.MaEngineProcessProc.BeginInvoke(void* argument0, float* argument1, ulong argument2, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20573).

## `EndInvoke`

<a id="api-549cb343dbdabff4"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEngineProcessProc.EndInvoke(System.IAsyncResult) b43416cf76ab564cc3b0980d2bf54efef9993c7a6cbc8415927f82cb529ced43 -->

```csharp
public virtual void Inno.Native.MiniAudio.MaEngineProcessProc.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20573).

## `Invoke`

<a id="api-b1bb8d27ccf4d80d"></a>
<!-- api: M:Inno.Native.MiniAudio.MaEngineProcessProc.Invoke(System.Void*,System.Single*,System.UInt64) c79da5f32e2e732e2a874ada640d762cd52574957ffcaf28be9a70cd02abf648 -->

```csharp
public virtual void Inno.Native.MiniAudio.MaEngineProcessProc.Invoke(void* argument0, float* argument1, ulong argument2)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20573).
