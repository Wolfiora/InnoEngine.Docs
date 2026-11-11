---
title: "MiniAudioContext.RawApi — Method: ResamplerGetInputLatency"
description: "Exact Method: ResamplerGetInputLatency contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.4e0f3870bc67bb03
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ResamplerGetInputLatency

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResamplerGetInputLatency`

<a id="api-75eadc51d77e6f23"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerGetInputLatency(Inno.Native.MiniAudio.MaResampler*) f7beeab1079ea2a757951eaf56cf485e6d02fbcbca3e60f8b96939047562c025 -->

```csharp
public ulong Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerGetInputLatency(Inno.Native.MiniAudio.MaResampler* pResampler)
```

Retrieves the latency introduced by the resampler in input frames.

**Parameter `pResampler`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12467).
