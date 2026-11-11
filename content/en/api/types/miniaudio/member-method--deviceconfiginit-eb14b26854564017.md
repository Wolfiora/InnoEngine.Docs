---
title: "MiniAudioContext.RawApi — Method: DeviceConfigInit"
description: "Exact Method: DeviceConfigInit contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.eb14b26854564017
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceConfigInit

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceConfigInit`

<a id="api-0b08197339913937"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceConfigInit(Inno.Native.MiniAudio.MaDeviceType,Inno.Native.MiniAudio.MaDeviceConfig*) 3ab09fb3664cc01dbfa114f19555ec2599caa10346adfa470b51d76e441ef534 -->

```csharp
public void Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceConfigInit(Inno.Native.MiniAudio.MaDeviceType deviceType, Inno.Native.MiniAudio.MaDeviceConfig* bgcs_result)
```

Initializes a device config with default settings.

### Parameters

deviceType (in)
The type of the device this config is being initialized for. This must set to one of the following:

| Device Type             |
|-------------------------|
| ma_device_type_playback |
| ma_device_type_capture  |
| ma_device_type_duplex   |
| ma_device_type_loopback |


### Return Value

A new device config object with default settings. You will typically want to adjust the config after this function returns. See remarks.

### Thread Safety

Safe.

### Callback Safety

Safe, but don't try initializing a device in a callback.

### Remarks

The returned config will be initialized to defaults. You will normally want to customize a few variables before initializing the device. See Example 1 for a
typical configuration which sets the sample format, channel count, sample rate, data callback and user data. These are usually things you will want to change
before initializing the device.
See `ma_device_init()` for details on specific configuration options.

### Example 1 - Simple Configuration

The example below is what a program will typically want to configure for each device at a minimum. Notice how `ma_device_config_init()` is called first, and
then the returned object is modified directly. This is important because it ensures that your program continues to work as new configuration options are added
to the `ma_device_config` structure.
```c
ma_device_config config = ma_device_config_init(ma_device_type_playback);
config.playback.format   = ma_format_f32;
config.playback.channels = 2;
config.sampleRate        = 48000;
config.dataCallback      = ma_data_callback;
config.pUserData         = pMyUserData;
```

### See Also

ma_device_init()
ma_device_init_ex()

**Parameter `deviceType`:** Native parameter.

**Parameter `bgcs_result`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L10599).
