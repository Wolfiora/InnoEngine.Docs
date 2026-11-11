---
title: "MiniAudioContext.RawApi — Method: DeviceSetMasterVolumeDb"
description: "Exact Method: DeviceSetMasterVolumeDb contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.7d73440dda8f19cb
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceSetMasterVolumeDb

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceSetMasterVolumeDb`

<a id="api-b294e87c60e04d55"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceSetMasterVolumeDb(Inno.Native.MiniAudio.MaDevice*,System.Single) 85c09ef6c3684e5889dbddd383bdb3a420dafafba11c02f037f9ed3ad4ff9eed -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceSetMasterVolumeDb(Inno.Native.MiniAudio.MaDevice* pDevice, float gainDB)
```

Sets the master volume for the device as gain in decibels.
A gain of 0 is full volume, whereas a gain of
<
0 will decrease the volume.

### Parameters

pDevice (in)
A pointer to the device whose gain is being set.
gainDB (in)
The new volume as gain in decibels. Must be less than or equal to 0, where 0 is full volume and anything less than 0 decreases the volume.

### Return Value

MA_SUCCESS if the volume was set successfully.
MA_INVALID_ARGS if pDevice is NULL.
MA_INVALID_ARGS if the gain is > 0.

### Thread Safety

Safe. This just sets a local member of the device object.

### Callback Safety

Safe. If you set the volume in the data callback, that data written to the output buffer will have the new volume applied.

### Remarks

This applies the gain across all channels.
This does not change the operating system's volume. It only affects the volume for the given `ma_device` object's audio stream.

### See Also

ma_device_get_master_volume_gain_db()
ma_device_set_master_volume()
ma_device_get_master_volume()

**Parameter `pDevice`:** Native parameter.

**Parameter `gainDB`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12521).
