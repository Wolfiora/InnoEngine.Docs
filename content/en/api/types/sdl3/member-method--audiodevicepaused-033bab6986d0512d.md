---
title: "SDLContext.RawApi — Method: AudioDevicePaused"
description: "Exact Method: AudioDevicePaused contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.033bab6986d0512d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AudioDevicePaused

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AudioDevicePaused`

<a id="api-b16c3d70a4031a52"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AudioDevicePaused(System.UInt32) cb206d286725adcd3b18a52e2d223f2bd4fb3bc238b1d18d9a4e0a23d435b66c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.AudioDevicePaused(uint devid)
```

Use this function to query if an audio device is paused.
Unlike in SDL2, audio devices start in an _unpaused_ state, since an app
has to bind a stream before any audio will flow.
Physical devices can not be paused or unpaused, only logical devices
created through SDL_OpenAudioDevice() can be. Physical and invalid device
IDs will report themselves as unpaused here.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PauseAudioDevice

**See also:** SDL_ResumeAudioDevice

**Parameter `devid`:** a device opened by SDL_OpenAudioDevice().

**Returns:** true if device is valid and paused, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17695).
