---
title: "MiniAudioContext.RawApi — Method: ResourceManagerDataSourceGetDataFormat"
description: "Exact Method: ResourceManagerDataSourceGetDataFormat contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.a35cc617d848b6e5
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ResourceManagerDataSourceGetDataFormat

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResourceManagerDataSourceGetDataFormat`

<a id="api-2e62bb032217a908"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResourceManagerDataSourceGetDataFormat(Inno.Native.MiniAudio.MaResourceManagerDataSource*,Inno.Native.MiniAudio.MaFormat*,System.UInt32*,System.UInt32*,System.Byte*,System.UInt64) 667976ee711b32fbb09d9d94693e6edc7f2b85d1b6d1391497377351e6d13618 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResourceManagerDataSourceGetDataFormat(Inno.Native.MiniAudio.MaResourceManagerDataSource* pDataSource, Inno.Native.MiniAudio.MaFormat* pFormat, uint* pChannels, uint* pSampleRate, byte* pChannelMap, ulong channelMapCap)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L11933).
