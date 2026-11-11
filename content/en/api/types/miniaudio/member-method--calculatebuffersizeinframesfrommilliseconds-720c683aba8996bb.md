---
title: "MiniAudioContext.RawApi — Method: CalculateBufferSizeInFramesFromMilliseconds"
description: "Exact Method: CalculateBufferSizeInFramesFromMilliseconds contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.720c683aba8996bb
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: CalculateBufferSizeInFramesFromMilliseconds

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CalculateBufferSizeInFramesFromMilliseconds`

<a id="api-9e4ba6c0b69a5d75"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.CalculateBufferSizeInFramesFromMilliseconds(System.UInt32,System.UInt32) 778360dfac30c3ad74a591395df898c76bbd543e827ae31805ca4abf0d446f59 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.RawApi.CalculateBufferSizeInFramesFromMilliseconds(uint bufferSizeInMilliseconds, uint sampleRate)
```

Calculates a buffer size in frames from the specified number of milliseconds and sample rate.

**Parameter `bufferSizeInMilliseconds`:** Native parameter.

**Parameter `sampleRate`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L7653).
