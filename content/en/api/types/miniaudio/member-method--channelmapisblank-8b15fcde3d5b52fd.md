---
title: "MiniAudioContext.RawApi — Method: ChannelMapIsBlank"
description: "Exact Method: ChannelMapIsBlank contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.8b15fcde3d5b52fd
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ChannelMapIsBlank

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ChannelMapIsBlank`

<a id="api-b4a4e1412c4f46be"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapIsBlank(System.Byte*,System.UInt32) 58b7b11d32a76b0de5bba30c95f7b8599ddb0a6a096406c25e76aae5bae5a308 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapIsBlank(byte* pChannelMap, uint channels)
```

Helper for determining if a channel map is blank (all channels set to MA_CHANNEL_NONE).
The channel map buffer must have a capacity of at least `channels`.

**Parameter `pChannelMap`:** Native parameter.

**Parameter `channels`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L11869).
