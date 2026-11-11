---
title: "MiniAudio — Method: CalculateBufferSizeInMillisecondsFromFrames"
description: "Exact Method: CalculateBufferSizeInMillisecondsFromFrames contracts in MiniAudio."
uid: api.inno.native.miniaudio.ea25b8078126bad8
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.51696dd28a5dbd8b#type-declaration
---
# `MiniAudio`: Method: CalculateBufferSizeInMillisecondsFromFrames

Read these exact member contracts together with the [containing type](miniaudio.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CalculateBufferSizeInMillisecondsFromFrames`

<a id="api-f22d802a6d64e586"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudio.CalculateBufferSizeInMillisecondsFromFrames(System.UInt32,System.UInt32) 6e36a6c2728dafa4b145d55f219f4a0a5e02f71e7d8faf0e5a51aa45e6f0d52e -->

```csharp
public static uint Inno.Native.MiniAudio.MiniAudio.CalculateBufferSizeInMillisecondsFromFrames(uint bufferSizeInFrames, uint sampleRate)
```

Calculates a buffer size in milliseconds (rounded up) from the specified number of frames and sample rate.

**Parameter `bufferSizeInFrames`:** Native parameter.

**Parameter `sampleRate`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L194).
