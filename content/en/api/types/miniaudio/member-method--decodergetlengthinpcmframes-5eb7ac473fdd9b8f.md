---
title: "MiniAudioContext.RawApi — Method: DecoderGetLengthInPcmFrames"
description: "Exact Method: DecoderGetLengthInPcmFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.5eb7ac473fdd9b8f
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DecoderGetLengthInPcmFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DecoderGetLengthInPcmFrames`

<a id="api-395dc988458f482d"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderGetLengthInPcmFrames(Inno.Native.MiniAudio.MaDecoder*,System.UInt64*) e7f3b61939593333846418881fed88cfc6c84f0e2243f381b870fe6816feb404 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderGetLengthInPcmFrames(Inno.Native.MiniAudio.MaDecoder* pDecoder, ulong* pLength)
```

Retrieves the length of the decoder in PCM frames.
Do not call this on streams of an undefined length, such as internet radio.
If the length is unknown or an error occurs, 0 will be returned.
This will always return 0 for Vorbis decoders. This is due to a limitation with stb_vorbis in push mode which is what miniaudio
uses internally.
For MP3's, this will decode the entire file. Do not call this in time critical scenarios.
This function is not thread safe without your own synchronization.

**Parameter `pDecoder`:** Native parameter.

**Parameter `pLength`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12369).
