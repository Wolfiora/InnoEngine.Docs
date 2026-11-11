---
title: "MiniAudioContext.RawApi — Method: SoundGetDataFormat"
description: "Exact Method: SoundGetDataFormat contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.7e25c576fdaf1989
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: SoundGetDataFormat

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SoundGetDataFormat`

<a id="api-6b0b793c1421b682"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.SoundGetDataFormat(Inno.Native.MiniAudio.MaSound*,Inno.Native.MiniAudio.MaFormat*,System.UInt32*,System.UInt32*,System.Byte*,System.UInt64) cb5eee8ba34cb4c7cd08fbb909089ffb781f9a3b79965a855b839702e0deda16 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.SoundGetDataFormat(Inno.Native.MiniAudio.MaSound* pSound, Inno.Native.MiniAudio.MaFormat* pFormat, uint* pChannels, uint* pSampleRate, byte* pChannelMap, ulong channelMapCap)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12577).
