---
title: "MiniAudioContext — Method: CalculateBufferSizeInFramesFromMilliseconds"
description: "Exact Method: CalculateBufferSizeInFramesFromMilliseconds contracts in MiniAudioContext."
uid: api.inno.native.miniaudio.097e0c931156b662
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.f90eae4c1a703608#type-declaration
---
# `MiniAudioContext`: Method: CalculateBufferSizeInFramesFromMilliseconds

Read these exact member contracts together with the [containing type](miniaudiocontext.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CalculateBufferSizeInFramesFromMilliseconds`

<a id="api-c749aecae1a52b89"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.CalculateBufferSizeInFramesFromMilliseconds(System.UInt32,System.UInt32) 80d11dc06de93922fc974aa96ad4e9d237b9255c81876ed0ed788e54374e15b2 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.CalculateBufferSizeInFramesFromMilliseconds(uint bufferSizeInMilliseconds, uint sampleRate)
```

Calculates a buffer size in frames from the specified number of milliseconds and sample rate.

**Parameter `bufferSizeInMilliseconds`:** Native parameter.

**Parameter `sampleRate`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L6029).
