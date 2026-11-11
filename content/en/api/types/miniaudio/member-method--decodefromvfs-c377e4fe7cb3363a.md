---
title: "MiniAudioContext.RawApi — Method: DecodeFromVfs"
description: "Exact Method: DecodeFromVfs contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.c377e4fe7cb3363a
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DecodeFromVfs

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DecodeFromVfs`

<a id="api-c7a29f441d23cebb"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecodeFromVfs(System.Void*,System.SByte*,Inno.Native.MiniAudio.MaDecoderConfig*,System.UInt64*,System.Void**) 23f8f7fd590546cfaccf1a8deeb37c520e3759520ae95be1374290760ee137c9 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecodeFromVfs(void* pVFS, sbyte* pFilePath, Inno.Native.MiniAudio.MaDecoderConfig* pConfig, ulong* pFrameCountOut, void** ppPCMFramesOut)
```

Helper for opening and decoding a file into a heap allocated block of memory. Free the returned pointer with ma_free(). On input,
pConfig should be set to what you want. On output it will be set to what you got.

**Parameter `pVFS`:** Native parameter.

**Parameter `pFilePath`:** Native parameter.

**Parameter `pConfig`:** Native parameter.

**Parameter `pFrameCountOut`:** Native parameter.

**Parameter `ppPCMFramesOut`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L9471).
