---
title: "MiniAudioContext.RawApi — Method: ChannelMapCopy"
description: "Exact Method: ChannelMapCopy contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.831c21a44f245ee9
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ChannelMapCopy

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ChannelMapCopy`

<a id="api-742504930e2b5226"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapCopy(System.Byte*,System.Byte*,System.UInt32) b2fc37528aaa05d917002ad5327fc92d50e73e42ada34882c244aec808dc6c8a -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapCopy(byte* pOut, byte* pIn, uint channels)
```

Copies a channel map.
Both input and output channel map buffers must have a capacity of at least `channels`.

**Parameter `pOut`:** Native parameter.

**Parameter `pIn`:** Native parameter.

**Parameter `channels`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L9779).
