---
title: "MiniAudioContext.RawApi — Method: ContextInit"
description: "Exact Method: ContextInit contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.964a679ada6dbd8d
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: ContextInit

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ContextInit`

<a id="api-b38eef619933d4f7"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextInit(Inno.Native.MiniAudio.MaBackend*,System.UInt32,Inno.Native.MiniAudio.MaContextConfig*,Inno.Native.MiniAudio.MaContext*) 5a73e16bd2fb082b127d6ded48f8ba5f0cf4a0aed9d902d3b688b1e7ffd7481c -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.ContextInit(Inno.Native.MiniAudio.MaBackend* backends, uint backendCount, Inno.Native.MiniAudio.MaContextConfig* pConfig, Inno.Native.MiniAudio.MaContext* pContext)
```

Initializes a context.
The context is used for selecting and initializing an appropriate backend and to represent the backend at a more global level than that of an individual
device. There is one context to many devices, and a device is created from a context. A context is required to enumerate devices.

### Parameters

backends (in, optional)
A list of backends to try initializing, in priority order. Can be NULL, in which case it uses default priority order.
backendCount (in, optional)
The number of items in `backend`. Ignored if `backend` is NULL.
pConfig (in, optional)
The context configuration.
pContext (in)
A pointer to the context object being initialized.

### Return Value

MA_SUCCESS if successful; any other error code otherwise.

### Thread Safety

Unsafe. Do not call this function across multiple threads as some backends read and write to global state.

### Remarks

When `backends` is NULL, the default priority order will be used. Below is a list of backends in priority order:

| Name        | Enum Name             | Supported Operating Systems                            |
|-------------|-----------------------|--------------------------------------------------------|
| WASAPI      | ma_backend_wasapi     | Windows Vista+                                         |
| DirectSound | ma_backend_dsound     | Windows XP+                                            |
| WinMM       | ma_backend_winmm      | Windows XP+ (may work on older versions, but untested) |
| Core Audio  | ma_backend_coreaudio  | macOS, iOS                                             |
| ALSA        | ma_backend_alsa       | Linux                                                  |
| PulseAudio  | ma_backend_pulseaudio | Cross Platform (disabled on Windows, BSD and Android)  |
| JACK        | ma_backend_jack       | Cross Platform (disabled on BSD and Android)           |
| sndio       | ma_backend_sndio      | OpenBSD                                                |
| audio(4)    | ma_backend_audio4     | NetBSD, OpenBSD                                        |
| OSS         | ma_backend_oss        | FreeBSD                                                |
| AAudio      | ma_backend_aaudio     | Android 8+                                             |
| OpenSL\|ES   | ma_backend_opensl     | Android (API level 16+)                                |
| Web Audio   | ma_backend_webaudio   | Web (via Emscripten)                                   |
| Null        | ma_backend_null       | Cross Platform (not used on Web)                       |

The context can be configured via the `pConfig` argument. The config object is initialized with `ma_context_config_init()`. Individual configuration settings
can then be set directly on the structure. Below are the members of the `ma_context_config` object.
pLog
A pointer to the `ma_log` to post log messages to. Can be NULL if the application does not
require logging. See the `ma_log` API for details on how to use the logging system.
threadPriority
The desired priority to use for the audio thread. Allowable values include the following:

| Thread Priority                      |
|--------------------------------------|
| ma_thread_priority_idle              |
| ma_thread_priority_lowest            |
| ma_thread_priority_low               |
| ma_thread_priority_normal            |
| ma_thread_priority_high              |
| ma_thread_priority_highest (default) |
| ma_thread_priority_realtime          |
| ma_thread_priority_default           |

threadStackSize
The desired size of the stack for the audio thread. Defaults to the operating system's default.
pUserData
A pointer to application-defined data. This can be accessed from the context object directly such as `context.pUserData`.
allocationCallbacks
Structure containing custom allocation callbacks. Leaving this at defaults will cause it to use MA_MALLOC, MA_REALLOC and MA_FREE. These allocation
callbacks will be used for anything tied to the context, including devices.
alsa.useVerboseDeviceEnumeration
ALSA will typically enumerate many different devices which can be intrusive and not user-friendly. To combat this, miniaudio will enumerate only unique
card/device pairs by default. The problem with this is that you lose a bit of flexibility and control. Setting alsa.useVerboseDeviceEnumeration makes
it so the ALSA backend includes all devices. Defaults to false.
pulse.pApplicationName
PulseAudio only. The application name to use when initializing the PulseAudio context with `pa_context_new()`.
pulse.pServerName
PulseAudio only. The name of the server to connect to with `pa_context_connect()`.
pulse.tryAutoSpawn
PulseAudio only. Whether or not to try automatically starting the PulseAudio daemon. Defaults to false. If you set this to true, keep in mind that
miniaudio uses a trial and error method to find the most appropriate backend, and this will result in the PulseAudio daemon starting which may be
intrusive for the end user.
coreaudio.sessionCategory
iOS only. The session category to use for the shared AudioSession instance. Below is a list of allowable values and their Core Audio equivalents.

| miniaudio Token                         | Core Audio Token                    |
|-----------------------------------------|-------------------------------------|
| ma_ios_session_category_ambient         | AVAudioSessionCategoryAmbient       |
| ma_ios_session_category_solo_ambient    | AVAudioSessionCategorySoloAmbient   |
| ma_ios_session_category_playback        | AVAudioSessionCategoryPlayback      |
| ma_ios_session_category_record          | AVAudioSessionCategoryRecord        |
| ma_ios_session_category_play_and_record | AVAudioSessionCategoryPlayAndRecord |
| ma_ios_session_category_multi_route     | AVAudioSessionCategoryMultiRoute    |
| ma_ios_session_category_none            | AVAudioSessionCategoryAmbient       |
| ma_ios_session_category_default         | AVAudioSessionCategoryAmbient       |

coreaudio.sessionCategoryOptions
iOS only. Session category options to use with the shared AudioSession instance. Below is a list of allowable values and their Core Audio equivalents.

| miniaudio Token                                                           | Core Audio Token                                                 |
|---------------------------------------------------------------------------|------------------------------------------------------------------|
| ma_ios_session_category_option_mix_with_others                            | AVAudioSessionCategoryOptionMixWithOthers                        |
| ma_ios_session_category_option_duck_others                                | AVAudioSessionCategoryOptionDuckOthers                           |
| ma_ios_session_category_option_allow_bluetooth                            | AVAudioSessionCategoryOptionAllowBluetooth                       |
| ma_ios_session_category_option_default_to_speaker                         | AVAudioSessionCategoryOptionDefaultToSpeaker                     |
| ma_ios_session_category_option_interrupt_spoken_audio_and_mix_with_others | AVAudioSessionCategoryOptionInterruptSpokenAudioAndMixWithOthers |
| ma_ios_session_category_option_allow_bluetooth_a2dp                       | AVAudioSessionCategoryOptionAllowBluetoothA2DP                   |
| ma_ios_session_category_option_allow_air_play                             | AVAudioSessionCategoryOptionAllowAirPlay                         |

coreaudio.noAudioSessionActivate
iOS only. When set to true, does not perform an explicit [[AVAudioSession sharedInstace] setActive:true] on initialization.
coreaudio.noAudioSessionDeactivate
iOS only. When set to true, does not perform an explicit [[AVAudioSession sharedInstace] setActive:false] on uninitialization.
jack.pClientName
The name of the client to pass to `jack_client_open()`.
jack.tryStartServer
Whether or not to try auto-starting the JACK server. Defaults to false.
It is recommended that only a single context is active at any given time because it's a bulky data structure which performs run-time linking for the
relevant backends every time it's initialized.
The location of the context cannot change throughout it's lifetime. Consider allocating the `ma_context` object with `malloc()` if this is an issue. The
reason for this is that a pointer to the context is stored in the `ma_device` structure.

### Example 1 - Default Initialization

The example below shows how to initialize the context using the default configuration.
```c
ma_context context;
ma_result result = ma_context_init(NULL, 0, NULL,
&context
);
if (result != MA_SUCCESS) {
// Error.
}
```

### Example 2 - Custom Configuration

The example below shows how to initialize the context using custom backend priorities and a custom configuration. In this hypothetical example, the program
wants to prioritize ALSA over PulseAudio on Linux. They also want to avoid using the WinMM backend on Windows because it's latency is too high. They also
want an error to be returned if no valid backend is available which they achieve by excluding the Null backend.
For the configuration, the program wants to capture any log messages so they can, for example, route it to a log file and user interface.
```c
ma_backend backends[] = {
ma_backend_alsa,
ma_backend_pulseaudio,
ma_backend_wasapi,
ma_backend_dsound
};
ma_log log;
ma_log_init(
&log
);
ma_log_register_callback(
&log
, ma_log_callback_init(my_log_callbac, pMyLogUserData));
ma_context_config config = ma_context_config_init();
config.pLog =
&log;
// Specify a custom log object in the config so any logs that are posted from ma_context_init() are captured.
ma_context context;
ma_result result = ma_context_init(backends, sizeof(backends)/sizeof(backends[0]),
&config
,
&context
);
if (result != MA_SUCCESS) {
// Error.
if (result == MA_NO_BACKEND) {
// Couldn't find an appropriate backend.
}
}
// You could also attach a log callback post-initialization:
ma_log_register_callback(ma_context_get_log(
&context
), ma_log_callback_init(my_log_callback, pMyLogUserData));
```

### See Also

ma_context_config_init()
ma_context_uninit()

**Parameter `backends`:** Native parameter.

**Parameter `backendCount`:** Native parameter.

**Parameter `pConfig`:** Native parameter.

**Parameter `pContext`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L13396).
