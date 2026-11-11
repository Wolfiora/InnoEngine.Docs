---
title: "MiniAudioContext.RawApi — Method: DeviceGetInfo"
description: "Exact Method: DeviceGetInfo contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.eaf7a9bbff8e4f32
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceGetInfo

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceGetInfo`

<a id="api-f06cd3625adf1b5c"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetInfo(Inno.Native.MiniAudio.MaDevice*,Inno.Native.MiniAudio.MaDeviceType,Inno.Native.MiniAudio.MaDeviceInfo*) 7ef4bddd4738b519bd948d18e6a860f0ae6c014c78d0aad7aa08aa5c18076757 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetInfo(Inno.Native.MiniAudio.MaDevice* pDevice, Inno.Native.MiniAudio.MaDeviceType type, Inno.Native.MiniAudio.MaDeviceInfo* pDeviceInfo)
```

Retrieves information about the device.

### Parameters

pDevice (in)
A pointer to the device whose information is being retrieved.
type (in)
The device type. This parameter is required for duplex devices. When retrieving device
information, you are doing so for an individual playback or capture device.
pDeviceInfo (out)
A pointer to the `ma_device_info` that will receive the device information.

### Return Value

MA_SUCCESS if successful; any other error code otherwise.

### Thread Safety

Unsafe. This should be considered unsafe because it may be calling into the backend which may or
may not be safe.

### Callback Safety

Unsafe. You should avoid calling this in the data callback because it may call into the backend
which may or may not be safe.

**Parameter `pDevice`:** Native parameter.

**Parameter `type`:** Native parameter.

**Parameter `pDeviceInfo`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12437).
