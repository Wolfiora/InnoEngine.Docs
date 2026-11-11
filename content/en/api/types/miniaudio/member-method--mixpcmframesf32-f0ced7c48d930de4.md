---
title: "MiniAudioContext.RawApi — Method: MixPcmFramesF32"
description: "Exact Method: MixPcmFramesF32 contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.f0ced7c48d930de4
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: MixPcmFramesF32

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MixPcmFramesF32`

<a id="api-ca5c6ff16b012936"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.MixPcmFramesF32(System.Single*,System.Single*,System.UInt64,System.UInt32,System.Single) f19ef4d0526da9bce3436b9c4b6421a23b1dd30f6a8f254dfbbf310f69989314 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.MixPcmFramesF32(float* pDst, float* pSrc, ulong frameCount, uint channels, float volume)
```

Mixes the specified number of frames in floating point format with a volume factor.
This will run on an optimized path when the volume is equal to 1.

**Parameter `pDst`:** Native parameter.

**Parameter `pSrc`:** Native parameter.

**Parameter `frameCount`:** Native parameter.

**Parameter `channels`:** Native parameter.

**Parameter `volume`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16540).
