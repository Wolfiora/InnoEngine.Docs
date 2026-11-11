---
title: "MiniAudioContext.RawApi — Method: ChannelMapGetChannel"
description: "Exact Method: ChannelMapGetChannel contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.8974bb9c10928423
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ChannelMapGetChannel

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ChannelMapGetChannel`

<a id="api-91ed765c2f382565"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapGetChannel(System.Byte*,System.UInt32,System.UInt32) e3bf810c4d15990f04d8b0725e1a82c9f5f45ebfc2ca9413d026ced97ae31bcc -->

```csharp
public byte Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapGetChannel(byte* pChannelMap, uint channelCount, uint channelIndex)
```

Retrieves the channel position of the specified channel in the given channel map.
The pChannelMap parameter can be null, in which case miniaudio's default channel map will be assumed.

**Parameter `pChannelMap`:** Native parameter.

**Parameter `channelCount`:** Native parameter.

**Parameter `channelIndex`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L14130).
