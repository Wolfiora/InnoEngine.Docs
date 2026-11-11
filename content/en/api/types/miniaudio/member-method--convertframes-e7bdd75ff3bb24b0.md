---
title: "MiniAudioContext.RawApi — Method: ConvertFrames"
description: "Exact Method: ConvertFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.e7bdd75ff3bb24b0
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ConvertFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ConvertFrames`

<a id="api-c03225f2ede28ded"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ConvertFrames(System.Void*,System.UInt64,Inno.Native.MiniAudio.MaFormat,System.UInt32,System.UInt32,System.Void*,System.UInt64,Inno.Native.MiniAudio.MaFormat,System.UInt32,System.UInt32) be7a9a44dacba38e1bcda0434ddb70922ec90528f50c3a889b92f19e4ea91807 -->

```csharp
public ulong Inno.Native.MiniAudio.MiniAudioContext.RawApi.ConvertFrames(void* pOut, ulong frameCountOut, Inno.Native.MiniAudio.MaFormat formatOut, uint channelsOut, uint sampleRateOut, void* pIn, ulong frameCountIn, Inno.Native.MiniAudio.MaFormat formatIn, uint channelsIn, uint sampleRateIn)
```

High-level helper for doing a full format conversion in one go. Returns the number of output frames. Call this with pOut set to NULL to
determine the required size of the output buffer. frameCountOut should be set to the capacity of pOut. If pOut is NULL, frameCountOut is
ignored.
A return value of 0 indicates an error.
This function is useful for one-off bulk conversions, but if you're streaming data you should use the ma_data_converter APIs instead.

**Parameter `pOut`:** Native parameter.

**Parameter `frameCountOut`:** Native parameter.

**Parameter `formatOut`:** Native parameter.

**Parameter `channelsOut`:** Native parameter.

**Parameter `sampleRateOut`:** Native parameter.

**Parameter `pIn`:** Native parameter.

**Parameter `frameCountIn`:** Native parameter.

**Parameter `formatIn`:** Native parameter.

**Parameter `channelsIn`:** Native parameter.

**Parameter `sampleRateIn`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L8078).
