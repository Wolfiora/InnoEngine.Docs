---
title: "MiniAudioContext.RawApi — Method: ResamplerGetRequiredInputFrameCount"
description: "Exact Method: ResamplerGetRequiredInputFrameCount contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.91a56b7f17484875
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ResamplerGetRequiredInputFrameCount

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResamplerGetRequiredInputFrameCount`

<a id="api-68970f8f544382b4"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerGetRequiredInputFrameCount(Inno.Native.MiniAudio.MaResampler*,System.UInt64,System.UInt64*) a894be7fba5c7c3771c19135c61c27c6ce3d551dd8857ef44f30d643dc4c685f -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerGetRequiredInputFrameCount(Inno.Native.MiniAudio.MaResampler* pResampler, ulong outputFrameCount, ulong* pInputFrameCount)
```

Calculates the number of whole input frames that would need to be read from the client in order to output the specified
number of output frames.
The returned value does not include cached input frames. It only returns the number of extra frames that would need to be
read from the input buffer in order to output the specified number of output frames.

**Parameter `pResampler`:** Native parameter.

**Parameter `outputFrameCount`:** Native parameter.

**Parameter `pInputFrameCount`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L7287).
