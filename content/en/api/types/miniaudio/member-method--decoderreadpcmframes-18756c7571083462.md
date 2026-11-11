---
title: "MiniAudioContext.RawApi — Method: DecoderReadPcmFrames"
description: "Exact Method: DecoderReadPcmFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.18756c7571083462
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DecoderReadPcmFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DecoderReadPcmFrames`

<a id="api-418cae702b27edb5"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderReadPcmFrames(Inno.Native.MiniAudio.MaDecoder*,System.Void*,System.UInt64,System.UInt64*) 57aea2b2e59ffb4894fb59e8f60417ad749252169aa302276b8441deba5ccdb9 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderReadPcmFrames(Inno.Native.MiniAudio.MaDecoder* pDecoder, void* pFramesOut, ulong frameCount, ulong* pFramesRead)
```

Reads PCM frames from the given decoder.
This is not thread safe without your own synchronization.

**Parameter `pDecoder`:** Native parameter.

**Parameter `pFramesOut`:** Native parameter.

**Parameter `frameCount`:** Native parameter.

**Parameter `pFramesRead`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L9519).
