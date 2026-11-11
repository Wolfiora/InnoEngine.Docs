---
title: "MiniAudioContext.RawApi — Method: ChannelMapInitBlank"
description: "Exact Method: ChannelMapInitBlank contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.cecf68a08d6408f6
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ChannelMapInitBlank

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ChannelMapInitBlank`

<a id="api-81bd0f63106a8781"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapInitBlank(System.Byte*,System.UInt32) 3b154aa169b48de4d1ce59efb751964c8d428b6239d6e437944f2d1e94769534 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.ChannelMapInitBlank(byte* pChannelMap, uint channels)
```

Initializes a blank channel map.
When a blank channel map is specified anywhere it indicates that the native channel map should be used.

**Parameter `pChannelMap`:** Native parameter.

**Parameter `channels`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L14630).
