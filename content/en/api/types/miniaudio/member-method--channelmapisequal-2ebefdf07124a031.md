---
title: "MiniAudioContext.RawApi — Method: ChannelMapIsEqual"
description: "Exact Method: ChannelMapIsEqual contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.2ebefdf07124a031
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ChannelMapIsEqual

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ChannelMapIsEqual`

<a id="api-b42a94524b5802b9"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapIsEqual(System.Byte*,System.Byte*,System.UInt32) 6be9bac68525d546e2aadaf2ac0f03f24bc3719008af45bc6ac50e8b1b902941 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapIsEqual(byte* pChannelMapA, byte* pChannelMapB, uint channels)
```

Helper for comparing two channel maps for equality.
This assumes the channel count is the same between the two.
Both channels map buffers must have a capacity of at least `channels`.

**Parameter `pChannelMapA`:** Native parameter.

**Parameter `pChannelMapB`:** Native parameter.

**Parameter `channels`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L7195).
