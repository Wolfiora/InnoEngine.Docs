---
title: "MiniAudioContext.RawApi — Method: DeviceGetMasterVolume"
description: "Exact Method: DeviceGetMasterVolume contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.9508b91cba269005
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceGetMasterVolume

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceGetMasterVolume`

<a id="api-49be4b1823cd100d"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetMasterVolume(Inno.Native.MiniAudio.MaDevice*,System.Single*) 3a7c65fe4f2423daa7057acb6d3c0e5b4e0661bc77615fbb2a55bfce7129aea8 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetMasterVolume(Inno.Native.MiniAudio.MaDevice* pDevice, float* pVolume)
```

Retrieves the master volume factor for the device.

### Parameters

pDevice (in)
A pointer to the device whose volume factor is being retrieved.
pVolume (in)
A pointer to the variable that will receive the volume factor. The returned value will be in the range of [0, 1].

### Return Value

MA_SUCCESS if successful.
MA_INVALID_ARGS if pDevice is NULL.
MA_INVALID_ARGS if pVolume is NULL.

### Thread Safety

Safe. This just a simple member retrieval.

### Callback Safety

Safe.

### Remarks

If an error occurs, `*pVolume` will be set to 0.

### See Also

ma_device_set_master_volume()
ma_device_set_master_volume_gain_db()
ma_device_get_master_volume_gain_db()

**Parameter `pDevice`:** Native parameter.

**Parameter `pVolume`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L6953).
