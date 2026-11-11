---
title: "MiniAudioContext.RawApi — Method: ResamplerProcessPcmFrames"
description: "Exact Method: ResamplerProcessPcmFrames contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.f32c87cd0125eda6
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ResamplerProcessPcmFrames

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResamplerProcessPcmFrames`

<a id="api-63459e88eafe6d90"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerProcessPcmFrames(Inno.Native.MiniAudio.MaResampler*,System.Void*,System.UInt64*,System.Void*,System.UInt64*) d35c287e59e10ed81dad387542e4ead5d081d60c84c82e5e230ba651cd96580e -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ResamplerProcessPcmFrames(Inno.Native.MiniAudio.MaResampler* pResampler, void* pFramesIn, ulong* pFrameCountIn, void* pFramesOut, ulong* pFrameCountOut)
```

Converts the given input data.
Both the input and output frames must be in the format specified in the config when the resampler was initialized.
On input, [pFrameCountOut] contains the number of output frames to process. On output it contains the number of output frames that
were actually processed, which may be less than the requested amount which will happen if there's not enough input data. You can use
ma_resampler_get_expected_output_frame_count() to know how many output frames will be processed for a given number of input frames.
On input, [pFrameCountIn] contains the number of input frames contained in [pFramesIn]. On output it contains the number of whole
input frames that were actually processed. You can use ma_resampler_get_required_input_frame_count() to know how many input frames
you should provide for a given number of output frames. [pFramesIn] can be NULL, in which case zeroes will be used instead.
If [pFramesOut] is NULL, a seek is performed. In this case, if [pFrameCountOut] is not NULL it will seek by the specified number of
output frames. Otherwise, if [pFramesCountOut] is NULL and [pFrameCountIn] is not NULL, it will seek by the specified number of input
frames. When seeking, [pFramesIn] is allowed to NULL, in which case the internal timing state will be updated, but no input will be
processed. In this case, any internal filter state will be updated as if zeroes were passed in.
It is an error for [pFramesOut] to be non-NULL and [pFrameCountOut] to be NULL.
It is an error for both [pFrameCountOut] and [pFrameCountIn] to be NULL.

**Parameter `pResampler`:** Native parameter.

**Parameter `pFramesIn`:** Native parameter.

**Parameter `pFrameCountIn`:** Native parameter.

**Parameter `pFramesOut`:** Native parameter.

**Parameter `pFrameCountOut`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L8017).
