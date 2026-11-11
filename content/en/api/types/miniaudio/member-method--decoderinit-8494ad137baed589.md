---
title: "MiniAudioContext.RawApi — Method: DecoderInit"
description: "Exact Method: DecoderInit contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.8494ad137baed589
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DecoderInit

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DecoderInit`

<a id="api-d21c700dd9c7755d"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderInit(,,System.Void*,Inno.Native.MiniAudio.MaDecoderConfig*,Inno.Native.MiniAudio.MaDecoder*) 524cdd5742eb156bb0cba29ee5da382b7f551aea80573f02adf0ce836ba9b113 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DecoderInit(delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDecoder*, void*, ulong, ulong*, Inno.Native.MiniAudio.MaResult> onRead, delegate* unmanaged[Cdecl]<Inno.Native.MiniAudio.MaDecoder*, long, Inno.Native.MiniAudio.MaSeekOrigin, Inno.Native.MiniAudio.MaResult> onSeek, void* pUserData, Inno.Native.MiniAudio.MaDecoderConfig* pConfig, Inno.Native.MiniAudio.MaDecoder* pDecoder)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L16381).
