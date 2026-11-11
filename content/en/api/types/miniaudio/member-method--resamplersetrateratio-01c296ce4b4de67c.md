---
title: "MiniAudioContext.RawApi — Method: ResamplerSetRateRatio"
description: "Exact Method: ResamplerSetRateRatio contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.01c296ce4b4de67c
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ResamplerSetRateRatio

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResamplerSetRateRatio`

<a id="api-5cd664168a0a4cff"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerSetRateRatio(Inno.Native.MiniAudio.MaResampler*,System.Single) 036336675def66b8500e696353884a5df1b54e8f6a2baaa7ebec72a6231298e3 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerSetRateRatio(Inno.Native.MiniAudio.MaResampler* pResampler, float ratio)
```

Sets the input and output sample rate as a ratio.
The ration is in/out.

**Parameter `pResampler`:** Native parameter.

**Parameter `ratio`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L13622).
