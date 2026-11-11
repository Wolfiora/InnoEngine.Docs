---
title: "MiniAudioContext.RawApi — Method: NoiseReadPcmFrames"
description: "Exact Method: NoiseReadPcmFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.ebb58d668b84eb30
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: NoiseReadPcmFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `NoiseReadPcmFrames`

<a id="api-28ebd038602866b1"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.NoiseReadPcmFrames(Inno.Native.MiniAudio.MaNoise*,System.Void*,System.UInt64,System.UInt64*) 2a3958b9e4a9836797620d1344350fa3735dc0900dce24622af9a851c1a7252c -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.NoiseReadPcmFrames(Inno.Native.MiniAudio.MaNoise* pNoise, void* pFramesOut, ulong frameCount, ulong* pFramesRead)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L15518).
