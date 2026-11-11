---
title: "MiniAudioContext.RawApi — Method: DeviceSetMasterVolume"
description: "Exact Method: DeviceSetMasterVolume contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.77332ec5d38e302c
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceSetMasterVolume

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceSetMasterVolume`

<a id="api-603c8609c6932253"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceSetMasterVolume(Inno.Native.MiniAudio.MaDevice*,System.Single) cfbb85121666dc9e66a02c9f80c476cfd8a1a4476f07aa33d1e5d1a1270a0e3b -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceSetMasterVolume(Inno.Native.MiniAudio.MaDevice* pDevice, float volume)
```

Sets the master volume factor for the device.
The volume factor must be between 0 (silence) and 1 (full volume). Use `ma_device_set_master_volume_db()` to use decibel notation, where 0 is full volume and
values less than 0 decreases the volume.

### Parameters

pDevice (in)
A pointer to the device whose volume is being set.
volume (in)
The new volume factor. Must be >= 0.

### Return Value

MA_SUCCESS if the volume was set successfully.
MA_INVALID_ARGS if pDevice is NULL.
MA_INVALID_ARGS if volume is negative.

### Thread Safety

Safe. This just sets a local member of the device object.

### Callback Safety

Safe. If you set the volume in the data callback, that data written to the output buffer will have the new volume applied.

### Remarks

This applies the volume factor across all channels.
This does not change the operating system's volume. It only affects the volume for the given `ma_device` object's audio stream.

### See Also

ma_device_get_master_volume()
ma_device_set_master_volume_db()
ma_device_get_master_volume_db()

**Parameter `pDevice`:** Native parameter.

**Parameter `volume`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L10180).
