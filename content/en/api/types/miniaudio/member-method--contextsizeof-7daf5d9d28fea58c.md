---
title: "MiniAudio — Method: ContextSizeof"
description: "Exact Method: ContextSizeof contracts in MiniAudio."
uid: api.inno.native.miniaudio.7daf5d9d28fea58c
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.51696dd28a5dbd8b#type-declaration
---
# `MiniAudio`: Method: ContextSizeof

Read these exact member contracts together with the [containing type](miniaudio.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextSizeof`

<a id="api-ef7dbea12cfb94be"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudio.ContextSizeof eb1264c7965cf33221c61d7d05c7cb1fe661c8e7ef333e34917d35758be3052d -->

```csharp
public static ulong Inno.Native.MiniAudio.MiniAudio.ContextSizeof()
```

Retrieves the size of the ma_context object.
This is mainly for the purpose of bindings to know how much memory to allocate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L184).
