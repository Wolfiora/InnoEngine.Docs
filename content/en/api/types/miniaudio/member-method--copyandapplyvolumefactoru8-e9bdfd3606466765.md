---
title: "MiniAudioContext.RawApi — Method: CopyAndApplyVolumeFactorU8"
description: "Exact Method: CopyAndApplyVolumeFactorU8 contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.e9bdfd3606466765
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: CopyAndApplyVolumeFactorU8

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CopyAndApplyVolumeFactorU8`

<a id="api-147786cc820f2e8a"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.CopyAndApplyVolumeFactorU8(System.Byte*,System.Byte*,System.UInt64,System.Single) 4bdad15ab35b1fd8ddf5629891eebe6e78d2b3b8c196dd16a36f83e969ae01f1 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.CopyAndApplyVolumeFactorU8(byte* pSamplesOut, byte* pSamplesIn, ulong sampleCount, float factor)
```

Helper for applying a volume factor to samples.
Note that the source and destination buffers can be the same, in which case it'll perform the operation in-place.

**Parameter `pSamplesOut`:** Native parameter.

**Parameter `pSamplesIn`:** Native parameter.

**Parameter `sampleCount`:** Native parameter.

**Parameter `factor`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L13120).
