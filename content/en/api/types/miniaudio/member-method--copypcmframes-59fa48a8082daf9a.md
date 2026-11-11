---
title: "MiniAudioContext.RawApi — Method: CopyPcmFrames"
description: "Exact Method: CopyPcmFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.59fa48a8082daf9a
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: CopyPcmFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CopyPcmFrames`

<a id="api-55c47f23edcefedc"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.CopyPcmFrames(System.Void*,System.Void*,System.UInt64,Inno.Native.MiniAudio.MaFormat,System.UInt32) e359058a29f9797e133d6d0d598ea4ab4127e37091be670c5bc8ce4bdcb38084 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.CopyPcmFrames(void* dst, void* src, ulong frameCount, Inno.Native.MiniAudio.MaFormat format, uint channels)
```

Copies PCM frames from one buffer to another.

**Parameter `dst`:** Native parameter.

**Parameter `src`:** Native parameter.

**Parameter `frameCount`:** Native parameter.

**Parameter `format`:** Native parameter.

**Parameter `channels`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L9821).
