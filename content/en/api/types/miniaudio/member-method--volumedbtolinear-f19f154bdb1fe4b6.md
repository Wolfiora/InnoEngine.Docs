---
title: "MiniAudioContext — Method: VolumeDbToLinear"
description: "Exact Method: VolumeDbToLinear contracts in MiniAudioContext."
uid: api.inno.native.miniaudio.f19f154bdb1fe4b6
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.f90eae4c1a703608#type-declaration
---
# `MiniAudioContext`: Method: VolumeDbToLinear

Read these exact member contracts together with the [containing type](miniaudiocontext.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `VolumeDbToLinear`

<a id="api-88afb5c09ee425f9"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.VolumeDbToLinear(System.Single) 9f2501866422bdb95ebb781b97b2db8b37676bdd2c44a98dc665dbc545188e15 -->

```csharp
public float Inno.Native.MiniAudio.MiniAudioContext.VolumeDbToLinear(float gain)
```

Helper for converting gain in decibels to a linear factor.

**Parameter `gain`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L6807).
