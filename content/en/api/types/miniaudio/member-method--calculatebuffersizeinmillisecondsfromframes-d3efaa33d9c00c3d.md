---
title: "MiniAudioContext — Method: CalculateBufferSizeInMillisecondsFromFrames"
description: "Exact Method: CalculateBufferSizeInMillisecondsFromFrames contracts in MiniAudioContext."
uid: api.inno.native.miniaudio.d3efaa33d9c00c3d
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.f90eae4c1a703608#type-declaration
---
# `MiniAudioContext`: Method: CalculateBufferSizeInMillisecondsFromFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CalculateBufferSizeInMillisecondsFromFrames`

<a id="api-82a4edd9b0613942"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.CalculateBufferSizeInMillisecondsFromFrames(System.UInt32,System.UInt32) da138d9a76526c8b56bd75c60882c7593147453d4f0b68fae8afe533bd1addf8 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.CalculateBufferSizeInMillisecondsFromFrames(uint bufferSizeInFrames, uint sampleRate)
```

Calculates a buffer size in milliseconds (rounded up) from the specified number of frames and sample rate.

**Parameter `bufferSizeInFrames`:** Native parameter.

**Parameter `sampleRate`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L6614).
