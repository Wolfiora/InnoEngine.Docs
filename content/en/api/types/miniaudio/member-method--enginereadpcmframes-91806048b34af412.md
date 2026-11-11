---
title: "MiniAudioContext.RawApi — Method: EngineReadPcmFrames"
description: "Exact Method: EngineReadPcmFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.91806048b34af412
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: EngineReadPcmFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EngineReadPcmFrames`

<a id="api-311716d1e5e9a107"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.EngineReadPcmFrames(Inno.Native.MiniAudio.MaEngine*,System.Void*,System.UInt64,System.UInt64*) df1d46c9b4a5f2a2eb4df48a31c92a03dec1fba0dd339122a8c2bc6ad92af4ef -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.EngineReadPcmFrames(Inno.Native.MiniAudio.MaEngine* pEngine, void* pFramesOut, ulong frameCount, ulong* pFramesRead)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L8541).
