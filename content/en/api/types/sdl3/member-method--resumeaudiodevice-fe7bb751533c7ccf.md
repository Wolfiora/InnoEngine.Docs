---
title: "SDLContext.RawApi — Method: ResumeAudioDevice"
description: "Exact Method: ResumeAudioDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fe7bb751533c7ccf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ResumeAudioDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResumeAudioDevice`

<a id="api-d660bd3e0204b7ab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ResumeAudioDevice(System.UInt32) 867581b5a9032a6f1f9a442e0a299faf7c3eb615d472bac8d0b673ec36be2937 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ResumeAudioDevice(uint devid)
```

Use this function to unpause audio playback on a specified device.
This function unpauses audio processing for a given device that has
previously been paused with SDL_PauseAudioDevice(). Once unpaused, any
bound audio streams will begin to progress again, and audio can be
generated.
Unlike in SDL2, audio devices start in an _unpaused_ state, since an app
has to bind a stream before any audio will flow. Unpausing an unpaused
device is a legal no-op.
Physical devices can not be paused or unpaused, only logical devices
created through SDL_OpenAudioDevice() can be.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AudioDevicePaused

**See also:** SDL_PauseAudioDevice

**Parameter `devid`:** a device opened by SDL_OpenAudioDevice().

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26628).
