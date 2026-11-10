---
title: "SDLContext.RawApi — Method: GetAudioDeviceFormat"
description: "Exact Method: GetAudioDeviceFormat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9c50cd1b8ebaae09
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioDeviceFormat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioDeviceFormat`

<a id="api-dc7dd578a32c9448"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioDeviceFormat(System.UInt32,Inno.Native.Sdl3.SDLAudioSpec*,System.Int32*) d235cb1ac08b1bc49b43fece46d4c7a95526718ce85b933307975e30728ac59f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetAudioDeviceFormat(uint devid, Inno.Native.Sdl3.SDLAudioSpec* spec, int* sample_frames)
```

Get the current audio format of a specific audio device.
For an opened device, this will report the format the device is currently
using. If the device isn't yet opened, this will report the device's
preferred format (or a reasonable default if this can't be determined).
You may also specify SDL_AUDIO_DEVICE_DEFAULT_PLAYBACK or
SDL_AUDIO_DEVICE_DEFAULT_RECORDING here, which is useful for getting a
reasonable recommendation before opening the system-recommended default
device.
You can also use this to request the current device buffer size. This is
specified in sample frames and represents the amount of data SDL will feed
to the physical hardware in each chunk. This can be converted to
milliseconds of audio with the following equation:
`ms = (int) ((((Sint64) frames) * 1000) / spec.freq);`
Buffer size is only important if you need low-level control over the audio
playback timing. Most apps do not need this.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `devid`:** the instance ID of the device to query.

**Parameter `spec`:** on return, will be filled with device details.

**Parameter `sample_frames`:** pointer to store device buffer size, in sample frames.
Can be NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35789).
