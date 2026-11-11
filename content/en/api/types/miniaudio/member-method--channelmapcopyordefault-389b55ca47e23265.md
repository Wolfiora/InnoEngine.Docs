---
title: "MiniAudioContext.RawApi — Method: ChannelMapCopyOrDefault"
description: "Exact Method: ChannelMapCopyOrDefault contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.389b55ca47e23265
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ChannelMapCopyOrDefault

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ChannelMapCopyOrDefault`

<a id="api-1039f3b8b22aa0ce"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapCopyOrDefault(System.Byte*,System.UInt64,System.Byte*,System.UInt32) c47653c3b177a24c7f3ad65b138d336a5a43e43fa22efa8baf98909794817453 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapCopyOrDefault(byte* pOut, ulong channelMapCapOut, byte* pIn, uint channels)
```

Copies a channel map if one is specified, otherwise copies the default channel map.
The output buffer must have a capacity of at least `channels`. If not NULL, the input channel map must also have a capacity of at least `channels`.

**Parameter `pOut`:** Native parameter.

**Parameter `channelMapCapOut`:** Native parameter.

**Parameter `pIn`:** Native parameter.

**Parameter `channels`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L14322).
