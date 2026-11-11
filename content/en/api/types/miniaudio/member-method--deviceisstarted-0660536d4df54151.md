---
title: "MiniAudioContext.RawApi — Method: DeviceIsStarted"
description: "Exact Method: DeviceIsStarted contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.0660536d4df54151
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceIsStarted

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceIsStarted`

<a id="api-400107b1f8d8ddf3"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceIsStarted(Inno.Native.MiniAudio.MaDevice*) 770a91a52d97ec161715a783279c7ec687a6fe811c0e232d40d7c4d63f913f32 -->

```csharp
public uint Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceIsStarted(Inno.Native.MiniAudio.MaDevice* pDevice)
```

Determines whether or not the device is started.

### Parameters

pDevice (in)
A pointer to the device whose start state is being retrieved.

### Return Value

True if the device is started, false otherwise.

### Thread Safety

Safe. If another thread calls `ma_device_start()` or `ma_device_stop()` at this same time as this function is called, there's a very small chance the return
value will be out of sync.

### Callback Safety

Safe. This is implemented as a simple accessor.

### See Also

ma_device_start()
ma_device_stop()

**Parameter `pDevice`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L10494).
