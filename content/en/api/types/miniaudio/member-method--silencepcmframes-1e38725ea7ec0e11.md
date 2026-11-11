---
title: "MiniAudioContext.RawApi — Method: SilencePcmFrames"
description: "Exact Method: SilencePcmFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.1e38725ea7ec0e11
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: SilencePcmFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SilencePcmFrames`

<a id="api-bcf660445b68bda6"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.SilencePcmFrames(System.Void*,System.UInt64,Inno.Native.MiniAudio.MaFormat,System.UInt32) 6512c8ecdbac12a353d05655568c5722d1dc2a1c248fa17d8a25109adae4b17f -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.SilencePcmFrames(void* p, ulong frameCount, Inno.Native.MiniAudio.MaFormat format, uint channels)
```

Copies silent frames into the given buffer.

### Remarks

For all formats except `ma_format_u8`, the output buffer will be filled with 0. For `ma_format_u8` it will be filled with 128. The reason for this is that it
makes more sense for the purpose of mixing to initialize it to the center point.

**Parameter `p`:** Native parameter.

**Parameter `frameCount`:** Native parameter.

**Parameter `format`:** Native parameter.

**Parameter `channels`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12221).
