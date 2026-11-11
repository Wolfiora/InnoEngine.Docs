---
title: "MiniAudioContext.RawApi — Method: DevicePostInit"
description: "Exact Method: DevicePostInit contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.28e6e34e1ee9048f
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DevicePostInit

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DevicePostInit`

<a id="api-b72bb24815429850"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DevicePostInit(Inno.Native.MiniAudio.MaDevice*,Inno.Native.MiniAudio.MaDeviceType,Inno.Native.MiniAudio.MaDeviceDescriptor*,Inno.Native.MiniAudio.MaDeviceDescriptor*) 797325dfc2d1f88a47771465395f6dabedb24b0caf86ad7ca48bb13e6e6e2fd8 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DevicePostInit(Inno.Native.MiniAudio.MaDevice* pDevice, Inno.Native.MiniAudio.MaDeviceType deviceType, Inno.Native.MiniAudio.MaDeviceDescriptor* pPlaybackDescriptor, Inno.Native.MiniAudio.MaDeviceDescriptor* pCaptureDescriptor)
```

Performs post backend initialization routines for setting up internal data conversion.
This should be called whenever the backend is initialized. The only time this should be called from
outside of miniaudio is if you're implementing a custom backend, and you would only do it if you
are reinitializing the backend due to rerouting or reinitializing for some reason.

### Parameters

pDevice [in]
A pointer to the device.
deviceType [in]
The type of the device that was just reinitialized.
pPlaybackDescriptor [in]
The descriptor of the playback device containing the internal data format and buffer sizes.
pPlaybackDescriptor [in]
The descriptor of the capture device containing the internal data format and buffer sizes.

### Return Value

MA_SUCCESS if successful; any other error otherwise.

### Thread Safety

Unsafe. This will be reinitializing internal data converters which may be in use by another thread.

### Callback Safety

Unsafe. This will be reinitializing internal data converters which may be in use by the callback.

### Remarks

For a duplex device, you can call this for only one side of the system. This is why the deviceType
is specified as a parameter rather than deriving it from the device.
You do not need to call this manually unless you are doing a custom backend, in which case you need
only do it if you're manually performing rerouting or reinitialization.

**Parameter `pDevice`:** Native parameter.

**Parameter `deviceType`:** Native parameter.

**Parameter `pPlaybackDescriptor`:** Native parameter.

**Parameter `pCaptureDescriptor`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L15577).
