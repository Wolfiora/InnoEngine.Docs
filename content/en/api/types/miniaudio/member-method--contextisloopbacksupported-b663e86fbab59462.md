---
title: "MiniAudioContext.RawApi — Method: ContextIsLoopbackSupported"
description: "Exact Method: ContextIsLoopbackSupported contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.b663e86fbab59462
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ContextIsLoopbackSupported

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextIsLoopbackSupported`

<a id="api-d41eed69b0dbcf23"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextIsLoopbackSupported(Inno.Native.MiniAudio.MaContext*) cb9b8f85de98cedc81284d25de8887e78d59475d0a51842fe38697f189fc8ca0 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextIsLoopbackSupported(Inno.Native.MiniAudio.MaContext* pContext)
```

Determines if the given context supports loopback mode.

### Parameters

pContext (in)
A pointer to the context getting queried.

### Return Value

MA_TRUE if the context supports loopback mode; MA_FALSE otherwise.

**Parameter `pContext`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L10135).
