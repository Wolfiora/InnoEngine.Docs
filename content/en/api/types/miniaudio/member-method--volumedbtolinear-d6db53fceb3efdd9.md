---
title: "MiniAudioContext.RawApi — Method: VolumeDbToLinear"
description: "Exact Method: VolumeDbToLinear contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.d6db53fceb3efdd9
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: VolumeDbToLinear

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `VolumeDbToLinear`

<a id="api-d56503755cba64a5"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.VolumeDbToLinear(System.Single) 48753d33cd02c71a6b019cbc09cdcb2cb2fddb79c6d4ab32158914fe398ad35c -->

```csharp
public float Inno.Native.MiniAudio.MiniAudioContext.RawApi.VolumeDbToLinear(float gain)
```

Helper for converting gain in decibels to a linear factor.

**Parameter `gain`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L15146).
