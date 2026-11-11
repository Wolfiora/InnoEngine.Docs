---
title: "MiniAudioContext.RawApi — Method: DecoderGetCursorInPcmFrames"
description: "Exact Method: DecoderGetCursorInPcmFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.931cfa52f14f2236
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DecoderGetCursorInPcmFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DecoderGetCursorInPcmFrames`

<a id="api-e5f0e93f24a7d093"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderGetCursorInPcmFrames(Inno.Native.MiniAudio.MaDecoder*,System.UInt64*) 578d996da23b2c2bb8515020896c66fd225f9fc8144612336805973d2b20a31d -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderGetCursorInPcmFrames(Inno.Native.MiniAudio.MaDecoder* pDecoder, ulong* pCursor)
```

Retrieves the current position of the read cursor in PCM frames.

**Parameter `pDecoder`:** Native parameter.

**Parameter `pCursor`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L10830).
