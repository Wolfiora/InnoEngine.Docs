---
title: "MiniAudioContext.RawApi — Method: DecoderGetAvailableFrames"
description: "Exact Method: DecoderGetAvailableFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.055bcdfe90d9a99e
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DecoderGetAvailableFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DecoderGetAvailableFrames`

<a id="api-3791f0f7f61b13a9"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderGetAvailableFrames(Inno.Native.MiniAudio.MaDecoder*,System.UInt64*) 3431389d10434c000ea7ca4a5d02616dc6e28f2f99e87ae99ea8ba43b606686e -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderGetAvailableFrames(Inno.Native.MiniAudio.MaDecoder* pDecoder, ulong* pAvailableFrames)
```

Retrieves the number of frames that can be read before reaching the end.
This calls `ma_decoder_get_length_in_pcm_frames()` so you need to be aware of the rules for that function, in
particular ensuring you do not call it on streams of an undefined length, such as internet radio.
If the total length of the decoder cannot be retrieved, such as with Vorbis decoders, `MA_NOT_IMPLEMENTED` will be
returned.

**Parameter `pDecoder`:** Native parameter.

**Parameter `pAvailableFrames`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L15183).
