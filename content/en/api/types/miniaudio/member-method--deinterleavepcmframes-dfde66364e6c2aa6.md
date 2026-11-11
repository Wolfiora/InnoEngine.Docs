---
title: "MiniAudioContext.RawApi — Method: DeinterleavePcmFrames"
description: "Exact Method: DeinterleavePcmFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.dfde66364e6c2aa6
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeinterleavePcmFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeinterleavePcmFrames`

<a id="api-8e7400192d8f178c"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeinterleavePcmFrames(Inno.Native.MiniAudio.MaFormat,System.UInt32,System.UInt64,System.Void*,System.Void**) 7906552511cb1ec5841dee2984cba5c095ad33d54004eb5eaba80aaba5e1d732 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeinterleavePcmFrames(Inno.Native.MiniAudio.MaFormat format, uint channels, ulong frameCount, void* pInterleavedPCMFrames, void** ppDeinterleavedPCMFrames)
```

Deinterleaves an interleaved buffer.

**Parameter `format`:** Native parameter.

**Parameter `channels`:** Native parameter.

**Parameter `frameCount`:** Native parameter.

**Parameter `pInterleavedPCMFrames`:** Native parameter.

**Parameter `ppDeinterleavedPCMFrames`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L7157).
