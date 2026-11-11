---
title: "MiniAudioContext.RawApi — Method: DeviceGetMasterVolumeDb"
description: "Exact Method: DeviceGetMasterVolumeDb contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.778b6768818ef6a3
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceGetMasterVolumeDb

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceGetMasterVolumeDb`

<a id="api-8c9a2457a460b086"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetMasterVolumeDb(Inno.Native.MiniAudio.MaDevice*,System.Single*) 8d77bdd885ccd6761e57188ad65735c42fb6c8ae9495c06a18786e6a6665ec13 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetMasterVolumeDb(Inno.Native.MiniAudio.MaDevice* pDevice, float* pGainDB)
```

Retrieves the master gain in decibels.

### Parameters

pDevice (in)
A pointer to the device whose gain is being retrieved.
pGainDB (in)
A pointer to the variable that will receive the gain in decibels. The returned value will be
<
= 0.

### Return Value

MA_SUCCESS if successful.
MA_INVALID_ARGS if pDevice is NULL.
MA_INVALID_ARGS if pGainDB is NULL.

### Thread Safety

Safe. This just a simple member retrieval.

### Callback Safety

Safe.

### Remarks

If an error occurs, `*pGainDB` will be set to 0.

### See Also

ma_device_set_master_volume_db()
ma_device_set_master_volume()
ma_device_get_master_volume()

**Parameter `pDevice`:** Native parameter.

**Parameter `pGainDB`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L8455).
