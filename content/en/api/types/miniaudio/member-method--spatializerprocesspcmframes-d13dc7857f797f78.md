---
title: "MiniAudioContext.RawApi — Method: SpatializerProcessPcmFrames"
description: "Exact Method: SpatializerProcessPcmFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.d13dc7857f797f78
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: SpatializerProcessPcmFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SpatializerProcessPcmFrames`

<a id="api-059e2d8475cc3995"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.SpatializerProcessPcmFrames(Inno.Native.MiniAudio.MaSpatializer*,Inno.Native.MiniAudio.MaSpatializerListener*,System.Void*,System.Void*,System.UInt64) 1f62bd892b58a00d410a4bd94c0c8c318fd65e88206eff6f2cdc5a3d1aaa935a -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.SpatializerProcessPcmFrames(Inno.Native.MiniAudio.MaSpatializer* pSpatializer, Inno.Native.MiniAudio.MaSpatializerListener* pListener, void* pFramesOut, void* pFramesIn, ulong frameCount)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12609).
