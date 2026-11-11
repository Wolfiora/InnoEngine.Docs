---
title: "MiniAudioContext.RawApi — Method: DeviceInit"
description: "Exact Method: DeviceInit contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.22c0cedda9958840
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: DeviceInit

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DeviceInit`

<a id="api-f9214db48d6ef0ee"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceInit(Inno.Native.MiniAudio.MaContext*,Inno.Native.MiniAudio.MaDeviceConfig*,Inno.Native.MiniAudio.MaDevice*) 36d1f3614cd25e64b441de6e68af64604ec963e3dabc0e21d541613ae8409f17 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.DeviceInit(Inno.Native.MiniAudio.MaContext* pContext, Inno.Native.MiniAudio.MaDeviceConfig* pConfig, Inno.Native.MiniAudio.MaDevice* pDevice)
```

Initializes a device.
A device represents a physical audio device. The idea is you send or receive audio data from the device to either play it back through a speaker, or capture it
from a microphone. Whether or not you should send or receive data from the device (or both) depends on the type of device you are initializing which can be
playback, capture, full-duplex or loopback. (Note that loopback mode is only supported on select backends.) Sending and receiving audio data to and from the
device is done via a callback which is fired by miniaudio at periodic time intervals.
The frequency at which data is delivered to and from a device depends on the size of its period. The size of the period can be defined in terms of PCM frames
or milliseconds, whichever is more convenient. Generally speaking, the smaller the period, the lower the latency at the expense of higher CPU usage and
increased risk of glitching due to the more frequent and granular data deliver intervals. The size of a period will depend on your requirements, but
miniaudio's defaults should work fine for most scenarios. If you're building a game you should leave this fairly small, whereas if you're building a simple
media player you can make it larger. Note that the period size you request is actually just a hint - miniaudio will tell the backend what you want, but the
backend is ultimately responsible for what it gives you. You cannot assume you will get exactly what you ask for.
When delivering data to and from a device you need to make sure it's in the correct format which you can set through the device configuration. You just set the
format that you want to use and miniaudio will perform all of the necessary conversion for you internally. When delivering data to and from the callback you
can assume the format is the same as what you requested when you initialized the device. See Remarks for more details on miniaudio's data conversion pipeline.

### Parameters

pContext (in, optional)
A pointer to the context that owns the device. This can be null, in which case it creates a default context internally.
pConfig (in)
A pointer to the device configuration. Cannot be null. See remarks for details.
pDevice (out)
A pointer to the device object being initialized.

### Return Value

MA_SUCCESS if successful; any other error code otherwise.

### Thread Safety

Unsafe. It is not safe to call this function simultaneously for different devices because some backends depend on and mutate global state. The same applies to
calling this at the same time as `ma_device_uninit()`.

### Callback Safety

Unsafe. It is not safe to call this inside any callback.

### Remarks

Setting `pContext` to NULL will result in miniaudio creating a default context internally and is equivalent to passing in a context initialized like so:
```c
ma_context_init(NULL, 0, NULL,
&context
);
```
Do not set `pContext` to NULL if you are needing to open multiple devices. You can, however, use NULL when initializing the first device, and then use
device.pContext for the initialization of other devices.
The device can be configured via the `pConfig` argument. The config object is initialized with `ma_device_config_init()`. Individual configuration settings can
then be set directly on the structure. Below are the members of the `ma_device_config` object.
deviceType
Must be `ma_device_type_playback`, `ma_device_type_capture`, `ma_device_type_duplex` of `ma_device_type_loopback`.
sampleRate
The sample rate, in hertz. The most common sample rates are 48000 and 44100. Setting this to 0 will use the device's native sample rate.
periodSizeInFrames
The desired size of a period in PCM frames. If this is 0, `periodSizeInMilliseconds` will be used instead. If both are 0 the default buffer size will
be used depending on the selected performance profile. This value affects latency. See below for details.
periodSizeInMilliseconds
The desired size of a period in milliseconds. If this is 0, `periodSizeInFrames` will be used instead. If both are 0 the default buffer size will be
used depending on the selected performance profile. The value affects latency. See below for details.
periods
The number of periods making up the device's entire buffer. The total buffer size is `periodSizeInFrames` or `periodSizeInMilliseconds` multiplied by
this value. This is just a hint as backends will be the ones who ultimately decide how your periods will be configured.
performanceProfile
A hint to miniaudio as to the performance requirements of your program. Can be either `ma_performance_profile_low_latency` (default) or
`ma_performance_profile_conservative`. This mainly affects the size of default buffers and can usually be left at its default value.
noPreSilencedOutputBuffer
When set to true, the contents of the output buffer passed into the data callback will be left undefined. When set to false (default), the contents of
the output buffer will be cleared the zero. You can use this to avoid the overhead of zeroing out the buffer if you can guarantee that your data
callback will write to every sample in the output buffer, or if you are doing your own clearing.
noClip
When set to true, the contents of the output buffer are left alone after returning and it will be left up to the backend itself to decide whether or
not to clip. When set to false (default), the contents of the output buffer passed into the data callback will be clipped after returning. This only
applies when the playback sample format is f32.
noDisableDenormals
By default, miniaudio will disable denormals when the data callback is called. Setting this to true will prevent the disabling of denormals.
noFixedSizedCallback
Allows miniaudio to fire the data callback with any frame count. When this is set to false (the default), the data callback will be fired with a
consistent frame count as specified by `periodSizeInFrames` or `periodSizeInMilliseconds`. When set to true, miniaudio will fire the callback with
whatever the backend requests, which could be anything.
dataCallback
The callback to fire whenever data is ready to be delivered to or from the device.
notificationCallback
The callback to fire when something has changed with the device, such as whether or not it has been started or stopped.
pUserData
The user data pointer to use with the device. You can access this directly from the device object like `device.pUserData`.
resampling.algorithm
The resampling algorithm to use when miniaudio needs to perform resampling between the rate specified by `sampleRate` and the device's native rate. The
default value is `ma_resample_algorithm_linear`, and the quality can be configured with `resampling.linear.lpfOrder`.
resampling.pBackendVTable
A pointer to an optional vtable that can be used for plugging in a custom resampler.
resampling.pBackendUserData
A pointer that will passed to callbacks in pBackendVTable.
resampling.linear.lpfOrder
The linear resampler applies a low-pass filter as part of its processing for anti-aliasing. This setting controls the order of the filter. The higher
the value, the better the quality, in general. Setting this to 0 will disable low-pass filtering altogether. The maximum value is
`MA_MAX_FILTER_ORDER`. The default value is `min(4, MA_MAX_FILTER_ORDER)`.
playback.pDeviceID
A pointer to a `ma_device_id` structure containing the ID of the playback device to initialize. Setting this NULL (default) will use the system's
default playback device. Retrieve the device ID from the `ma_device_info` structure, which can be retrieved using device enumeration.
playback.format
The sample format to use for playback. When set to `ma_format_unknown` the device's native format will be used. This can be retrieved after
initialization from the device object directly with `device.playback.format`.
playback.channels
The number of channels to use for playback. When set to 0 the device's native channel count will be used. This can be retrieved after initialization
from the device object directly with `device.playback.channels`.
playback.pChannelMap
The channel map to use for playback. When left empty, the device's native channel map will be used. This can be retrieved after initialization from the
device object direct with `device.playback.pChannelMap`. When set, the buffer should contain `channels` items.
playback.shareMode
The preferred share mode to use for playback. Can be either `ma_share_mode_shared` (default) or `ma_share_mode_exclusive`. Note that if you specify
exclusive mode, but it's not supported by the backend, initialization will fail. You can then fall back to shared mode if desired by changing this to
ma_share_mode_shared and reinitializing.
capture.pDeviceID
A pointer to a `ma_device_id` structure containing the ID of the capture device to initialize. Setting this NULL (default) will use the system's
default capture device. Retrieve the device ID from the `ma_device_info` structure, which can be retrieved using device enumeration.
capture.format
The sample format to use for capture. When set to `ma_format_unknown` the device's native format will be used. This can be retrieved after
initialization from the device object directly with `device.capture.format`.
capture.channels
The number of channels to use for capture. When set to 0 the device's native channel count will be used. This can be retrieved after initialization
from the device object directly with `device.capture.channels`.
capture.pChannelMap
The channel map to use for capture. When left empty, the device's native channel map will be used. This can be retrieved after initialization from the
device object direct with `device.capture.pChannelMap`. When set, the buffer should contain `channels` items.
capture.shareMode
The preferred share mode to use for capture. Can be either `ma_share_mode_shared` (default) or `ma_share_mode_exclusive`. Note that if you specify
exclusive mode, but it's not supported by the backend, initialization will fail. You can then fall back to shared mode if desired by changing this to
ma_share_mode_shared and reinitializing.
wasapi.noAutoConvertSRC
WASAPI only. When set to true, disables WASAPI's automatic resampling and forces the use of miniaudio's resampler. Defaults to false.
wasapi.noDefaultQualitySRC
WASAPI only. Only used when `wasapi.noAutoConvertSRC` is set to false. When set to true, disables the use of `AUDCLNT_STREAMFLAGS_SRC_DEFAULT_QUALITY`.
You should usually leave this set to false, which is the default.
wasapi.noAutoStreamRouting
WASAPI only. When set to true, disables automatic stream routing on the WASAPI backend. Defaults to false.
wasapi.noHardwareOffloading
WASAPI only. When set to true, disables the use of WASAPI's hardware offloading feature. Defaults to false.
alsa.noMMap
ALSA only. When set to true, disables MMap mode. Defaults to false.
alsa.noAutoFormat
ALSA only. When set to true, disables ALSA's automatic format conversion by including the SND_PCM_NO_AUTO_FORMAT flag. Defaults to false.
alsa.noAutoChannels
ALSA only. When set to true, disables ALSA's automatic channel conversion by including the SND_PCM_NO_AUTO_CHANNELS flag. Defaults to false.
alsa.noAutoResample
ALSA only. When set to true, disables ALSA's automatic resampling by including the SND_PCM_NO_AUTO_RESAMPLE flag. Defaults to false.
pulse.pStreamNamePlayback
PulseAudio only. Sets the stream name for playback.
pulse.pStreamNameCapture
PulseAudio only. Sets the stream name for capture.
pulse.channelMap
PulseAudio only. Sets the channel map that is requested from PulseAudio. See MA_PA_CHANNEL_MAP_* constants. Defaults to MA_PA_CHANNEL_MAP_AIFF.
coreaudio.allowNominalSampleRateChange
Core Audio only. Desktop only. When enabled, allows the sample rate of the device to be changed at the operating system level. This
is disabled by default in order to prevent intrusive changes to the user's system. This is useful if you want to use a sample rate
that is known to be natively supported by the hardware thereby avoiding the cost of resampling. When set to true, miniaudio will
find the closest match between the sample rate requested in the device config and the sample rates natively supported by the
hardware. When set to false, the sample rate currently set by the operating system will always be used.
opensl.streamType
OpenSL only. Explicitly sets the stream type. If left unset (`ma_opensl_stream_type_default`), the
stream type will be left unset. Think of this as the type of audio you're playing.
opensl.recordingPreset
OpenSL only. Explicitly sets the type of recording your program will be doing. When left
unset, the recording preset will be left unchanged.
aaudio.usage
AAudio only. Explicitly sets the nature of the audio the program will be consuming. When
left unset, the usage will be left unchanged.
aaudio.contentType
AAudio only. Sets the content type. When left unset, the content type will be left unchanged.
aaudio.inputPreset
AAudio only. Explicitly sets the type of recording your program will be doing. When left
unset, the input preset will be left unchanged.
aaudio.noAutoStartAfterReroute
AAudio only. Controls whether or not the device should be automatically restarted after a
stream reroute. When set to false (default) the device will be restarted automatically;
otherwise the device will be stopped.
Once initialized, the device's config is immutable. If you need to change the config you will need to initialize a new device.
After initializing the device it will be in a stopped state. To start it, use `ma_device_start()`.
If both `periodSizeInFrames` and `periodSizeInMilliseconds` are set to zero, it will default to `MA_DEFAULT_PERIOD_SIZE_IN_MILLISECONDS_LOW_LATENCY` or
`MA_DEFAULT_PERIOD_SIZE_IN_MILLISECONDS_CONSERVATIVE`, depending on whether or not `performanceProfile` is set to `ma_performance_profile_low_latency` or
`ma_performance_profile_conservative`.
If you request exclusive mode and the backend does not support it an error will be returned. For robustness, you may want to first try initializing the device
in exclusive mode, and then fall back to shared mode if required. Alternatively you can just request shared mode (the default if you leave it unset in the
config) which is the most reliable option. Some backends do not have a practical way of choosing whether or not the device should be exclusive or not (ALSA,
for example) in which case it just acts as a hint. Unless you have special requirements you should try avoiding exclusive mode as it's intrusive to the user.
Starting with Windows 10, miniaudio will use low-latency shared mode where possible which may make exclusive mode unnecessary.
When sending or receiving data to/from a device, miniaudio will internally perform a format conversion to convert between the format specified by the config
and the format used internally by the backend. If you pass in 0 for the sample format, channel count, sample rate _and_ channel map, data transmission will run
on an optimized pass-through fast path. You can retrieve the format, channel count and sample rate by inspecting the `playback/capture.format`,
`playback/capture.channels` and `sampleRate` members of the device object.
When compiling for UWP you must ensure you call this function on the main UI thread because the operating system may need to present the user with a message
asking for permissions. Please refer to the official documentation for ActivateAudioInterfaceAsync() for more information.
ALSA Specific: When initializing the default device, requesting shared mode will try using the "dmix" device for playback and the "dsnoop" device for capture.
If these fail it will try falling back to the "hw" device.

### Example 1 - Simple Initialization

This example shows how to initialize a simple playback device using a standard configuration. If you are just needing to do simple playback from the default
playback device this is usually all you need.
```c
ma_device_config config = ma_device_config_init(ma_device_type_playback);
config.playback.format   = ma_format_f32;
config.playback.channels = 2;
config.sampleRate        = 48000;
config.dataCallback      = ma_data_callback;
config.pMyUserData       = pMyUserData;
ma_device device;
ma_result result = ma_device_init(NULL,
&config
,
&device
);
if (result != MA_SUCCESS) {
// Error
}
```

### Example 2 - Advanced Initialization

This example shows how you might do some more advanced initialization. In this hypothetical example we want to control the latency by setting the buffer size
and period count. We also want to allow the user to be able to choose which device to output from which means we need a context so we can perform device
enumeration.
```c
ma_context context;
ma_result result = ma_context_init(NULL, 0, NULL,
&context
);
if (result != MA_SUCCESS) {
// Error
}
ma_device_info* pPlaybackDeviceInfos;
ma_uint32 playbackDeviceCount;
result = ma_context_get_devices(
&context
,
&pPlaybackDeviceInfos
,
&playbackDeviceCount
, NULL, NULL);
if (result != MA_SUCCESS) {
// Error
}
// ... choose a device from pPlaybackDeviceInfos ...
ma_device_config config = ma_device_config_init(ma_device_type_playback);
config.playback.pDeviceID       = pMyChosenDeviceID;    //
<
-- Get this from the `id` member of one of the `ma_device_info` objects returned by ma_context_get_devices().
config.playback.format          = ma_format_f32;
config.playback.channels        = 2;
config.sampleRate               = 48000;
config.dataCallback             = ma_data_callback;
config.pUserData                = pMyUserData;
config.periodSizeInMilliseconds = 10;
config.periods                  = 3;
ma_device device;
result = ma_device_init(
&context
,
&config
,
&device
);
if (result != MA_SUCCESS) {
// Error
}
```

### See Also

ma_device_config_init()
ma_device_uninit()
ma_device_start()
ma_context_init()
ma_context_get_devices()
ma_context_enumerate_devices()

**Parameter `pContext`:** Native parameter.

**Parameter `pConfig`:** Native parameter.

**Parameter `pDevice`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L11657).
