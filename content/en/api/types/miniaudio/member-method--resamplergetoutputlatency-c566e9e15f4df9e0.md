---
title: "MiniAudioContext.RawApi — Method: ResamplerGetOutputLatency"
description: "Exact Method: ResamplerGetOutputLatency contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.c566e9e15f4df9e0
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ResamplerGetOutputLatency

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResamplerGetOutputLatency`

<a id="api-2b8704fa4b1fb1d1"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerGetOutputLatency(Inno.Native.MiniAudio.MaResampler*) 77ded550b8b0f16bbf30c10caccd291ac8d834ab473b32cad89641735a793331 -->

```csharp
public ulong Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerGetOutputLatency(Inno.Native.MiniAudio.MaResampler* pResampler)
```

Retrieves the latency introduced by the resampler in output frames.

**Parameter `pResampler`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L14941).
