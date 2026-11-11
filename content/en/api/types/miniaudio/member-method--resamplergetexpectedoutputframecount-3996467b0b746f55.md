---
title: "MiniAudioContext.RawApi — Method: ResamplerGetExpectedOutputFrameCount"
description: "Exact Method: ResamplerGetExpectedOutputFrameCount contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.3996467b0b746f55
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ResamplerGetExpectedOutputFrameCount

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResamplerGetExpectedOutputFrameCount`

<a id="api-b3be333c7d228d91"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerGetExpectedOutputFrameCount(Inno.Native.MiniAudio.MaResampler*,System.UInt64,System.UInt64*) 3f2e2ffa6eb0e08a13a2a7451d8ef7ee818bdc398bdffdacab9b570a66ebd501 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerGetExpectedOutputFrameCount(Inno.Native.MiniAudio.MaResampler* pResampler, ulong inputFrameCount, ulong* pOutputFrameCount)
```

Calculates the number of whole output frames that would be output after fully reading and consuming the specified number of
input frames.

**Parameter `pResampler`:** Native parameter.

**Parameter `inputFrameCount`:** Native parameter.

**Parameter `pOutputFrameCount`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L7216).
