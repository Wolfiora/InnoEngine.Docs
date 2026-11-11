---
title: "MiniAudioContext.RawApi — Method: BlendF32"
description: "Exact Method: BlendF32 contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.35475631c6b32193
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: BlendF32

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BlendF32`

<a id="api-8ac3b9e95b57b5ec"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.BlendF32(System.Single*,System.Single*,System.Single*,System.Single,System.UInt32) 83e08ddd33299d2f800cea98018803ba1ee8f653efc0b710efdb196038f942cc -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.BlendF32(float* pOut, float* pInA, float* pInB, float factor, uint channels)
```

Blends two frames in floating point format.

**Parameter `pOut`:** Native parameter.

**Parameter `pInA`:** Native parameter.

**Parameter `pInB`:** Native parameter.

**Parameter `factor`:** Native parameter.

**Parameter `channels`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L7059).
