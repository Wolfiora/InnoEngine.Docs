---
title: "MiniAudioContext.RawApi — Method: OffsetPcmFramesPtr"
description: "Exact Method: OffsetPcmFramesPtr contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.5ce391d433999ba2
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: OffsetPcmFramesPtr

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OffsetPcmFramesPtr`

<a id="api-2c95bc993ff7facf"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.OffsetPcmFramesPtr(System.Void*,System.UInt64,Inno.Native.MiniAudio.MaFormat,System.UInt32) 1143d87bdacb60f6d9e17d86bdeb58a91f32f70fa5d970366155bdcca69c0159 -->

```csharp
public void* Inno.Native.MiniAudio.MiniAudioContext.RawApi.OffsetPcmFramesPtr(void* p, ulong offsetInFrames, Inno.Native.MiniAudio.MaFormat format, uint channels)
```

Offsets a pointer by the specified number of PCM frames.

**Parameter `p`:** Native parameter.

**Parameter `offsetInFrames`:** Native parameter.

**Parameter `format`:** Native parameter.

**Parameter `channels`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L15894).
