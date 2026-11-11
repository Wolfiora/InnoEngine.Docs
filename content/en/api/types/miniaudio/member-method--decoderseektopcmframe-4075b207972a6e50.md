---
title: "MiniAudioContext.RawApi — Method: DecoderSeekToPcmFrame"
description: "Exact Method: DecoderSeekToPcmFrame contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.4075b207972a6e50
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DecoderSeekToPcmFrame

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DecoderSeekToPcmFrame`

<a id="api-0749cb95c2fa8db2"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderSeekToPcmFrame(Inno.Native.MiniAudio.MaDecoder*,System.UInt64) 0b66f20bf2b3796def64306e28639f7aba0db122e30044f6b93559281d6d2940 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderSeekToPcmFrame(Inno.Native.MiniAudio.MaDecoder* pDecoder, ulong frameIndex)
```

Seeks to a PCM frame based on its absolute index.
This is not thread safe without your own synchronization.

**Parameter `pDecoder`:** Native parameter.

**Parameter `frameIndex`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L7421).
