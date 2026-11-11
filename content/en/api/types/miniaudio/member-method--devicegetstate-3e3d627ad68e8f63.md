---
title: "MiniAudioContext.RawApi — Method: DeviceGetState"
description: "Exact Method: DeviceGetState contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.3e3d627ad68e8f63
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceGetState

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceGetState`

<a id="api-bb8f885783b08714"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetState(Inno.Native.MiniAudio.MaDevice*) ac0f86495aca0d63cb9c356226c7448c49a31d8ab1f531e41ff2b5fe6560cef8 -->

```csharp
public Inno.Native.MiniAudio.MaDeviceState Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceGetState(Inno.Native.MiniAudio.MaDevice* pDevice)
```

Retrieves the state of the device.

### Parameters

pDevice (in)
A pointer to the device whose state is being retrieved.

### Return Value

The current state of the device. The return value will be one of the following:
+-------------------------------+------------------------------------------------------------------------------+
| ma_device_state_uninitialized | Will only be returned if the device is in the middle of initialization.      |
+-------------------------------+------------------------------------------------------------------------------+
| ma_device_state_stopped       | The device is stopped. The initial state of the device after initialization. |
+-------------------------------+------------------------------------------------------------------------------+
| ma_device_state_started       | The device started and requesting and/or delivering audio data.              |
+-------------------------------+------------------------------------------------------------------------------+
| ma_device_state_starting      | The device is in the process of starting.                                    |
+-------------------------------+------------------------------------------------------------------------------+
| ma_device_state_stopping      | The device is in the process of stopping.                                    |
+-------------------------------+------------------------------------------------------------------------------+

### Thread Safety

Safe. This is implemented as a simple accessor. Note that if the device is started or stopped at the same time as this function is called,
there's a possibility the return value could be out of sync. See remarks.

### Callback Safety

Safe. This is implemented as a simple accessor.

### Remarks

The general flow of a devices state goes like this:
```
ma_device_init()  -> ma_device_state_uninitialized -> ma_device_state_stopped
ma_device_start() -> ma_device_state_starting      -> ma_device_state_started
ma_device_stop()  -> ma_device_state_stopping      -> ma_device_state_stopped
```
When the state of the device is changed with `ma_device_start()` or `ma_device_stop()` at this same time as this function is called, the
value returned by this function could potentially be out of sync. If this is significant to your program you need to implement your own
synchronization.

**Parameter `pDevice`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12114).
