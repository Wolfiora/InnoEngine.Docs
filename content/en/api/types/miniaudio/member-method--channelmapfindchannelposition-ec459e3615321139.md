---
title: "MiniAudioContext.RawApi — Method: ChannelMapFindChannelPosition"
description: "Exact Method: ChannelMapFindChannelPosition contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.ec459e3615321139
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ChannelMapFindChannelPosition

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ChannelMapFindChannelPosition`

<a id="api-2e6f3f7a43a0a386"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapFindChannelPosition(System.UInt32,System.Byte*,System.Byte,System.UInt32*) 9b7c0165923cde5f7ebc6f140a1dab5a430352e67d80f03615d3903b30906570 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapFindChannelPosition(uint channels, byte* pChannelMap, byte channelPosition, uint* pChannelIndex)
```

Find a channel position in the given channel map. Returns MA_TRUE if the channel is found; MA_FALSE otherwise. The
index of the channel is output to `pChannelIndex`.
The channel map buffer must have a capacity of at least `channels`.

**Parameter `channels`:** Native parameter.

**Parameter `pChannelMap`:** Native parameter.

**Parameter `channelPosition`:** Native parameter.

**Parameter `pChannelIndex`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L13786).
