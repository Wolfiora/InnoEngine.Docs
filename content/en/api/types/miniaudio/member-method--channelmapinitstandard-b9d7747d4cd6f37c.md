---
title: "MiniAudioContext.RawApi — Method: ChannelMapInitStandard"
description: "Exact Method: ChannelMapInitStandard contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.b9d7747d4cd6f37c
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ChannelMapInitStandard

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ChannelMapInitStandard`

<a id="api-0b33e25b2784d5cf"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapInitStandard(Inno.Native.MiniAudio.MaStandardChannelMap,System.Byte*,System.UInt64,System.UInt32) 59dce4efed56db5653788734a5d0b2679b0252f1e6fa97fba98e21e4bfa8bdd5 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapInitStandard(Inno.Native.MiniAudio.MaStandardChannelMap standardChannelMap, byte* pChannelMap, ulong channelMapCap, uint channels)
```

Helper for retrieving a standard channel map.
The output channel map buffer must have a capacity of at least `channelMapCap`.

**Parameter `standardChannelMap`:** Native parameter.

**Parameter `pChannelMap`:** Native parameter.

**Parameter `channelMapCap`:** Native parameter.

**Parameter `channels`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L14801).
