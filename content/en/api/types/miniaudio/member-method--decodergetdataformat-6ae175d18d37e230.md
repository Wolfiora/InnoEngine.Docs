---
title: "MiniAudioContext.RawApi — Method: DecoderGetDataFormat"
description: "Exact Method: DecoderGetDataFormat contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.6ae175d18d37e230
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DecoderGetDataFormat

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DecoderGetDataFormat`

<a id="api-17be9f184fdd573c"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderGetDataFormat(Inno.Native.MiniAudio.MaDecoder*,Inno.Native.MiniAudio.MaFormat*,System.UInt32*,System.UInt32*,System.Byte*,System.UInt64) 844e0cfbcee79d91c339b8d8a9d7a01782ee386e93d42e02ee610c926e4a507a -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderGetDataFormat(Inno.Native.MiniAudio.MaDecoder* pDecoder, Inno.Native.MiniAudio.MaFormat* pFormat, uint* pChannels, uint* pSampleRate, byte* pChannelMap, ulong channelMapCap)
```

Retrieves the decoder's output data format.

**Parameter `pDecoder`:** Native parameter.

**Parameter `pFormat`:** Native parameter.

**Parameter `pChannels`:** Native parameter.

**Parameter `pSampleRate`:** Native parameter.

**Parameter `pChannelMap`:** Native parameter.

**Parameter `channelMapCap`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L15947).
