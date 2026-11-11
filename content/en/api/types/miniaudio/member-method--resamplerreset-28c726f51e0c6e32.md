---
title: "MiniAudioContext.RawApi — Method: ResamplerReset"
description: "Exact Method: ResamplerReset contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.28c726f51e0c6e32
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ResamplerReset

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResamplerReset`

<a id="api-3dc5394f1ed582cd"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerReset(Inno.Native.MiniAudio.MaResampler*) 115953836a328eab214d8bfd63cde84178590a77fdb3546df711e4cb868291e3 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerReset(Inno.Native.MiniAudio.MaResampler* pResampler)
```

Resets the resampler's timer and clears its internal cache.

**Parameter `pResampler`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L14995).
