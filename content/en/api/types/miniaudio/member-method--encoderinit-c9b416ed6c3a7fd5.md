---
title: "MiniAudioContext.RawApi — Method: EncoderInit"
description: "Exact Method: EncoderInit contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.c9b416ed6c3a7fd5
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: EncoderInit

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EncoderInit`

<a id="api-46c1bd09d5bf9916"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.EncoderInit(,,System.Void*,Inno.Native.MiniAudio.MaEncoderConfig*,Inno.Native.MiniAudio.MaEncoder*) adb672de3c343b9abffe1b36b102d4c563a458c182931a53e7c991f3b1761c4c -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.EncoderInit(delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaEncoder*, void*, ulong, ulong*, Inno.Native.MiniAudio.MaResult> onWrite, delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaEncoder*, long, Inno.Native.MiniAudio.MaSeekOrigin, Inno.Native.MiniAudio.MaResult> onSeek, void* pUserData, Inno.Native.MiniAudio.MaEncoderConfig* pConfig, Inno.Native.MiniAudio.MaEncoder* pEncoder)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L11973).
