---
title: "MiniAudio — Method: CalculateBufferSizeInFramesFromMilliseconds"
description: "Exact Method: CalculateBufferSizeInFramesFromMilliseconds contracts in MiniAudio."
uid: api.inno.native.miniaudio.102066160dc8a956
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.51696dd28a5dbd8b#type-declaration
---
# `MiniAudio`: Method: CalculateBufferSizeInFramesFromMilliseconds

Read these exact member contracts together with the [containing type](miniaudio.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CalculateBufferSizeInFramesFromMilliseconds`

<a id="api-68dfcace7bc700a5"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudio.CalculateBufferSizeInFramesFromMilliseconds(System.UInt32,System.UInt32) 044b46e3c1fc1f6babfabf4fb4811778fc03d1d76d2803101173b4491670d716 -->

```csharp
public static uint Inno.Native.MiniAudio.MiniAudio.CalculateBufferSizeInFramesFromMilliseconds(uint bufferSizeInMilliseconds, uint sampleRate)
```

Calculates a buffer size in frames from the specified number of milliseconds and sample rate.

**Parameter `bufferSizeInMilliseconds`:** Native parameter.

**Parameter `sampleRate`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L58).
