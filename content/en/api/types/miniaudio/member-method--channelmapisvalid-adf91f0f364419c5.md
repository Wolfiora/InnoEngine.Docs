---
title: "MiniAudioContext.RawApi — Method: ChannelMapIsValid"
description: "Exact Method: ChannelMapIsValid contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.adf91f0f364419c5
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ChannelMapIsValid

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ChannelMapIsValid`

<a id="api-ed7232bfae3c523c"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapIsValid(System.Byte*,System.UInt32) 0a04b76c712b359005c1acfa0a1db0214d59267e7be5ec932de1020fedbfc696 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapIsValid(byte* pChannelMap, uint channels)
```

Determines whether or not a channel map is valid.
A blank channel map is valid (all channels set to MA_CHANNEL_NONE). The way a blank channel map is handled is context specific, but
is usually treated as a passthrough.
Invalid channel maps:
- A channel map with no channels
- A channel map with more than one channel and a mono channel
The channel map buffer must have a capacity of at least `channels`.

**Parameter `pChannelMap`:** Native parameter.

**Parameter `channels`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L9646).
