---
title: "SDLContext.RawApi — Method: GetAudioDeviceName"
description: "Exact Method: GetAudioDeviceName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a6452570d8f60526
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioDeviceName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioDeviceName`

<a id="api-f2d38de0570898e7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioDeviceName(System.UInt32) 094f999eda76fc2c5801b6be92e0cec70ea7315afed85ef546a2ac3ab7668227 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetAudioDeviceName(uint devid)
```

Get the human-readable name of a specific audio device.
**WARNING**: this function will work with SDL_AUDIO_DEVICE_DEFAULT_PLAYBACK
and SDL_AUDIO_DEVICE_DEFAULT_RECORDING, returning the current default
physical devices' names. However, as the default device may change at any
time, it is likely better to show a generic name to the user, like "System
default audio device" or perhaps "default [currently %s]". Do not store
this name to disk to reidentify the device in a later run of the program,
as the default might change in general, and the string will be the name of
a specific device and not the abstract system default.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAudioPlaybackDevices

**See also:** SDL_GetAudioRecordingDevices

**Parameter `devid`:** the instance ID of the device to query.

**Returns:** the name of the audio device, or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36192).
