---
title: "MiniAudio — Method: DeviceConfigInit"
description: "Exact Method: DeviceConfigInit contracts in MiniAudio."
uid: api.inno.native.miniaudio.b75dfeb3169db1cf
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.51696dd28a5dbd8b#type-declaration
---
# `MiniAudio`: Method: DeviceConfigInit

Read these exact member contracts together with the [containing type](miniaudio.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceConfigInit`

<a id="api-8fd12bda338b0a14"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudio.DeviceConfigInit(Inno.Native.MiniAudio.MaDeviceType) 055c15d4fcb05700f57eac89c31a8bb2c5698d4a1429b55147c0a2e8aa570b48 -->

```csharp
public static Inno.Native.MiniAudio.MaDeviceConfig Inno.Native.MiniAudio.MiniAudio.DeviceConfigInit(Inno.Native.MiniAudio.MaDeviceType deviceType)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L129).
