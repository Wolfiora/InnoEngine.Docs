---
title: "MiniAudioContext.RawApi — Method: CalculateBufferSizeInFramesFromDescriptor"
description: "Exact Method: CalculateBufferSizeInFramesFromDescriptor contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.fc0ec00beb9d7dc4
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: CalculateBufferSizeInFramesFromDescriptor

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CalculateBufferSizeInFramesFromDescriptor`

<a id="api-c79e5a9603256d77"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.CalculateBufferSizeInFramesFromDescriptor(Inno.Native.MiniAudio.MaDeviceDescriptor*,System.UInt32,Inno.Native.MiniAudio.MaPerformanceProfile) cf77561fc9a2d4e82b3cb7bbcaedce5144b2a4dcef0be73c1dbce8f2ef07a240 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.RawApi.CalculateBufferSizeInFramesFromDescriptor(Inno.Native.MiniAudio.MaDeviceDescriptor* pDescriptor, uint nativeSampleRate, Inno.Native.MiniAudio.MaPerformanceProfile performanceProfile)
```

Calculates an appropriate buffer size from a descriptor, native sample rate and performance profile.
This function is used by backends for helping determine an appropriately sized buffer to use with
the device depending on the values of `periodSizeInFrames` and `periodSizeInMilliseconds` in the
`pDescriptor` object. Since buffer size calculations based on time depends on the sample rate, a
best guess at the device's native sample rate is also required which is where `nativeSampleRate`
comes in. In addition, the performance profile is also needed for cases where both the period size
in frames and milliseconds are both zero.

### Parameters

pDescriptor (in)
A pointer to device descriptor whose `periodSizeInFrames` and `periodSizeInMilliseconds` members
will be used for the calculation of the buffer size.
nativeSampleRate (in)
The device's native sample rate. This is only ever used when the `periodSizeInFrames` member of
`pDescriptor` is zero. In this case, `periodSizeInMilliseconds` will be used instead, in which
case a sample rate is required to convert to a size in frames.
performanceProfile (in)
When both the `periodSizeInFrames` and `periodSizeInMilliseconds` members of `pDescriptor` are
zero, miniaudio will fall back to a buffer size based on the performance profile. The profile
to use for this calculation is determine by this parameter.

### Return Value

The calculated buffer size in frames.

### Thread Safety

This is safe so long as nothing modifies `pDescriptor` at the same time. However, this function
should only ever be called from within the backend's device initialization routine and therefore
shouldn't have any multithreading concerns.

### Callback Safety

This is safe to call within the data callback, but there is no reason to ever do this.

### Remarks

If `nativeSampleRate` is zero, this function will fall back to `pDescriptor->sampleRate`. If that
is also zero, `MA_DEFAULT_SAMPLE_RATE` will be used instead.

**Parameter `pDescriptor`:** Native parameter.

**Parameter `nativeSampleRate`:** Native parameter.

**Parameter `performanceProfile`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L7947).
