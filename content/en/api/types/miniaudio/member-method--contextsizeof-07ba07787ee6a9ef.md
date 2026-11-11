---
title: "MiniAudioContext.RawApi — Method: ContextSizeof"
description: "Exact Method: ContextSizeof contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.07ba07787ee6a9ef
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ContextSizeof

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextSizeof`

<a id="api-749acf33e4641c97"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextSizeof 0ec50bae081d2c7c830a3a851f640315467d11e6148886f0a3d0396f96e22b6c -->

```csharp
public ulong Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextSizeof()
```

Retrieves the size of the ma_context object.
This is mainly for the purpose of bindings to know how much memory to allocate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12915).
