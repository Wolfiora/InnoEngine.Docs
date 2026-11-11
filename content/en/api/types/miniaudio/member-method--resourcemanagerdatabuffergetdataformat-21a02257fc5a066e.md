---
title: "MiniAudioContext.RawApi — Method: ResourceManagerDataBufferGetDataFormat"
description: "Exact Method: ResourceManagerDataBufferGetDataFormat contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.21a02257fc5a066e
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ResourceManagerDataBufferGetDataFormat

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResourceManagerDataBufferGetDataFormat`

<a id="api-6e575f404d0df1e7"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResourceManagerDataBufferGetDataFormat(Inno.Native.MiniAudio.MaResourceManagerDataBuffer*,Inno.Native.MiniAudio.MaFormat*,System.UInt32*,System.UInt32*,System.Byte*,System.UInt64) 22da277b804742fcd395f58186f4dcbdf36b02c2f4f9ef49d8c3ef4a528a9c7f -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResourceManagerDataBufferGetDataFormat(Inno.Native.MiniAudio.MaResourceManagerDataBuffer* pDataBuffer, Inno.Native.MiniAudio.MaFormat* pFormat, uint* pChannels, uint* pSampleRate, byte* pChannelMap, ulong channelMapCap)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L11965).
