---
title: "MiniAudioContext.RawApi — Method: DeviceUninit"
description: "Exact Method: DeviceUninit contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.4eb93aecf4849e5c
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceUninit

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceUninit`

<a id="api-7cf5e8c830e8a3d6"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceUninit(Inno.Native.MiniAudio.MaDevice*) 87125c87a6fbd4fe001afb501226192b04fae2353ac7730077bec1150a7e1120 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceUninit(Inno.Native.MiniAudio.MaDevice* pDevice)
```

Uninitializes a device.
This will explicitly stop the device. You do not need to call `ma_device_stop()` beforehand, but it's harmless if you do.

### Parameters

pDevice (in)
A pointer to the device to stop.

### Return Value

Nothing

### Thread Safety

Unsafe. As soon as this API is called the device should be considered undefined.

### Callback Safety

Unsafe. It is not safe to call this inside any callback. Doing this will result in a deadlock.

### See Also

ma_device_init()
ma_device_stop()

**Parameter `pDevice`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12947).
