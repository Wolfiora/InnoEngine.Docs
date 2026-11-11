---
title: "MiniAudioContext.RawApi — Method: DataSourceGetDataFormat"
description: "Exact Method: DataSourceGetDataFormat contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.864c82b87a8c1000
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DataSourceGetDataFormat

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DataSourceGetDataFormat`

<a id="api-27efd0347a2c057d"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DataSourceGetDataFormat(System.Void*,Inno.Native.MiniAudio.MaFormat*,System.UInt32*,System.UInt32*,System.Byte*,System.UInt64) 7f1b0c26fa71ac4340702d5d2859c6f7122d49264e199141f8ebb62cac8d92a8 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DataSourceGetDataFormat(void* pDataSource, Inno.Native.MiniAudio.MaFormat* pFormat, uint* pChannels, uint* pSampleRate, byte* pChannelMap, ulong channelMapCap)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12895).
