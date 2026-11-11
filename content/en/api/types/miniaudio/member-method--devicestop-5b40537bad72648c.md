---
title: "MiniAudioContext.RawApi — Method: DeviceStop"
description: "Exact Method: DeviceStop contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.5b40537bad72648c
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceStop

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceStop`

<a id="api-2a10b5c25dfd8281"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceStop(Inno.Native.MiniAudio.MaDevice*) 18114f65c11098e808ea2d70330474564534478f31121ee9d728ffd05c610679 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceStop(Inno.Native.MiniAudio.MaDevice* pDevice)
```

Stops the device. For playback devices this stops playback. For capture devices it stops recording.
Use `ma_device_start()` to start the device again.

### Parameters

pDevice (in)
A pointer to the device to stop.

### Return Value

MA_SUCCESS if successful; any other error code otherwise.

### Thread Safety

Safe. It's safe to call this from any thread with the exception of the callback thread.

### Callback Safety

Unsafe. It is not safe to call this inside any callback. Doing this will result in a deadlock.

### Remarks

This API needs to wait on the worker thread to stop the backend device properly before returning. It also waits on a mutex for thread-safety. In addition, some
backends need to wait for the device to finish playback/recording of the current fragment which can take some time (usually proportionate to the buffer size
that was specified at initialization time).
Backends are required to either pause the stream in-place or drain the buffer if pausing is not possible. The reason for this is that stopping the device and
the resuming it with ma_device_start() (which you might do when your program loses focus) may result in a situation where those samples are never output to the
speakers or received from the microphone which can in turn result in de-syncs.
Do not call this in any callback.

### See Also

ma_device_start()

**Parameter `pDevice`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L10781).
