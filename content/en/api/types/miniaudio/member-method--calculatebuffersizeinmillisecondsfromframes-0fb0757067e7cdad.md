---
title: "MiniAudioContext.RawApi — Method: CalculateBufferSizeInMillisecondsFromFrames"
description: "Exact Method: CalculateBufferSizeInMillisecondsFromFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.0fb0757067e7cdad
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: CalculateBufferSizeInMillisecondsFromFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CalculateBufferSizeInMillisecondsFromFrames`

<a id="api-683786250580004c"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.CalculateBufferSizeInMillisecondsFromFrames(System.UInt32,System.UInt32) bd814ff2dddaa34364b04a6b247e844595d800460c2234299c5aaecf395c3ed1 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.RawApi.CalculateBufferSizeInMillisecondsFromFrames(uint bufferSizeInFrames, uint sampleRate)
```

Calculates a buffer size in milliseconds (rounded up) from the specified number of frames and sample rate.

**Parameter `bufferSizeInFrames`:** Native parameter.

**Parameter `sampleRate`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12972).
