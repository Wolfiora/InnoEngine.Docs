---
title: "MiniAudioContext.RawApi — Method: ConvertPcmFramesFormat"
description: "Exact Method: ConvertPcmFramesFormat contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.4a8613be9a0f80ca
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ConvertPcmFramesFormat

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ConvertPcmFramesFormat`

<a id="api-fdde69cb4ad79722"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ConvertPcmFramesFormat(System.Void*,Inno.Native.MiniAudio.MaFormat,System.Void*,Inno.Native.MiniAudio.MaFormat,System.UInt64,System.UInt32,Inno.Native.MiniAudio.MaDitherMode) ae6c6e21a084faa7efa348858e891b2b3c6da55fd361bd9249dd7619c1e254e4 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.ConvertPcmFramesFormat(void* pOut, Inno.Native.MiniAudio.MaFormat formatOut, void* pIn, Inno.Native.MiniAudio.MaFormat formatIn, ulong frameCount, uint channels, Inno.Native.MiniAudio.MaDitherMode ditherMode)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L13136).
