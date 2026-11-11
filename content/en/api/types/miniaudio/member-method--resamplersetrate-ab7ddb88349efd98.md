---
title: "MiniAudioContext.RawApi — Method: ResamplerSetRate"
description: "Exact Method: ResamplerSetRate contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.ab7ddb88349efd98
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ResamplerSetRate

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResamplerSetRate`

<a id="api-895f78188ef577ff"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerSetRate(Inno.Native.MiniAudio.MaResampler*,System.UInt32,System.UInt32) 8811cb2cbde02504b19ea8bea5a048623be27651175dff08687abd7e73029017 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerSetRate(Inno.Native.MiniAudio.MaResampler* pResampler, uint sampleRateIn, uint sampleRateOut)
```

Sets the input and output sample rate.

**Parameter `pResampler`:** Native parameter.

**Parameter `sampleRateIn`:** Native parameter.

**Parameter `sampleRateOut`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L14690).
