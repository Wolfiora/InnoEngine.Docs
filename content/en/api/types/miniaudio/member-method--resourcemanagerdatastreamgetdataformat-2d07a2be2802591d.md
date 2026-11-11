---
title: "MiniAudioContext.RawApi — Method: ResourceManagerDataStreamGetDataFormat"
description: "Exact Method: ResourceManagerDataStreamGetDataFormat contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.2d07a2be2802591d
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ResourceManagerDataStreamGetDataFormat

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResourceManagerDataStreamGetDataFormat`

<a id="api-09b432750502bcd7"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResourceManagerDataStreamGetDataFormat(Inno.Native.MiniAudio.MaResourceManagerDataStream*,Inno.Native.MiniAudio.MaFormat*,System.UInt32*,System.UInt32*,System.Byte*,System.UInt64) d3303c7cf30d627fbdfa14716f9e42e48bd307dfcfd23238cffcc51351727033 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResourceManagerDataStreamGetDataFormat(Inno.Native.MiniAudio.MaResourceManagerDataStream* pDataStream, Inno.Native.MiniAudio.MaFormat* pFormat, uint* pChannels, uint* pSampleRate, byte* pChannelMap, ulong channelMapCap)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L9583).
