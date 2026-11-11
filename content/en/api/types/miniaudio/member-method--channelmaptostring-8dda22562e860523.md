---
title: "MiniAudioContext.RawApi — Method: ChannelMapToString"
description: "Exact Method: ChannelMapToString contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.8dda22562e860523
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ChannelMapToString

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ChannelMapToString`

<a id="api-140a2f97c7b549e2"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapToString(System.Byte*,System.UInt32,System.SByte*,System.UInt64) e9a46e190da07fbc8f2875b57013b2631e9a8289ff90d409e7414acd1d5e16ea -->

```csharp
public ulong Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapToString(byte* pChannelMap, uint channels, sbyte* pBufferOut, ulong bufferCap)
```

Generates a string representing the given channel map.
This is for printing and debugging purposes, not serialization/deserialization.
Returns the length of the string, not including the null terminator.

**Parameter `pChannelMap`:** Native parameter.

**Parameter `channels`:** Native parameter.

**Parameter `pBufferOut`:** Native parameter.

**Parameter `bufferCap`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L13745).
