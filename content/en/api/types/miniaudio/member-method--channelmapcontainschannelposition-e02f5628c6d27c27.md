---
title: "MiniAudioContext.RawApi — Method: ChannelMapContainsChannelPosition"
description: "Exact Method: ChannelMapContainsChannelPosition contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.e02f5628c6d27c27
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ChannelMapContainsChannelPosition

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ChannelMapContainsChannelPosition`

<a id="api-bfe35afefe1805d0"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapContainsChannelPosition(System.UInt32,System.Byte*,System.Byte) f3dc7a397b8e2f3b2ef585eb3599eea8fa496ecca578525ee43cd4cb2a52e3c0 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapContainsChannelPosition(uint channels, byte* pChannelMap, byte channelPosition)
```

Helper for determining whether or not a channel is present in the given channel map.
The channel map buffer must have a capacity of at least `channels`.

**Parameter `channels`:** Native parameter.

**Parameter `pChannelMap`:** Native parameter.

**Parameter `channelPosition`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L14375).
