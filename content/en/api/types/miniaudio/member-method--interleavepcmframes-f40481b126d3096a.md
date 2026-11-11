---
title: "MiniAudioContext.RawApi — Method: InterleavePcmFrames"
description: "Exact Method: InterleavePcmFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.f40481b126d3096a
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: InterleavePcmFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InterleavePcmFrames`

<a id="api-12f39b52de91c0f7"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.InterleavePcmFrames(Inno.Native.MiniAudio.MaFormat,System.UInt32,System.UInt64,System.Void**,System.Void*) 856a122d901b828c0431a7d7df102c73b22bfaf80afbbb80b2fd84a13618e6a7 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.InterleavePcmFrames(Inno.Native.MiniAudio.MaFormat format, uint channels, ulong frameCount, void** ppDeinterleavedPCMFrames, void* pInterleavedPCMFrames)
```

Interleaves a group of deinterleaved buffers.

**Parameter `format`:** Native parameter.

**Parameter `channels`:** Native parameter.

**Parameter `frameCount`:** Native parameter.

**Parameter `ppDeinterleavedPCMFrames`:** Native parameter.

**Parameter `pInterleavedPCMFrames`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L13720).
