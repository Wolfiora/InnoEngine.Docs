---
title: "MiniAudioContext.RawApi — Method: DeviceStart"
description: "Exact Method: DeviceStart contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.be0a00c7dd5ba095
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceStart

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceStart`

<a id="api-796d1849f0afa7c7"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceStart(Inno.Native.MiniAudio.MaDevice*) 16c453c039d6a0c9c3f9c4b8ed0b9e741b4510a4be96b2c351ba3b82d683481a -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceStart(Inno.Native.MiniAudio.MaDevice* pDevice)
```

Starts the device. For playback devices this begins playback. For capture devices it begins recording.
Use `ma_device_stop()` to stop the device.

### Parameters

pDevice (in)
A pointer to the device to start.

### Return Value

MA_SUCCESS if successful; any other error code otherwise.

### Thread Safety

Safe. It's safe to call this from any thread with the exception of the callback thread.

### Callback Safety

Unsafe. It is not safe to call this inside any callback.

### Remarks

For a playback device, this will retrieve an initial chunk of audio data from the client before returning. The reason for this is to ensure there is valid
audio data in the buffer, which needs to be done before the device begins playback.
This API waits until the backend device has been started for real by the worker thread. It also waits on a mutex for thread-safety.
Do not call this in any callback.

### See Also

ma_device_stop()

**Parameter `pDevice`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L13944).
