---
title: "SDLContext.RawApi — Method: PauseAudioDevice"
description: "Exact Method: PauseAudioDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.933839f4fb31a1b4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PauseAudioDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PauseAudioDevice`

<a id="api-b4dd2516bd536edc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PauseAudioDevice(System.UInt32) d8fcb912736b56f152b529ef7c56716182d2df736be3f556f639861300e35847 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.PauseAudioDevice(uint devid)
```

Use this function to pause audio playback on a specified device.
This function pauses audio processing for a given device. Any bound audio
streams will not progress, and no audio will be generated. Pausing one
device does not prevent other unpaused devices from running.
Unlike in SDL2, audio devices start in an _unpaused_ state, since an app
has to bind a stream before any audio will flow. Pausing a paused device is
a legal no-op.
Pausing a device can be useful to halt all audio without unbinding all the
audio streams. This might be useful while a game is paused, or a level is
loading, etc.
Physical devices can not be paused or unpaused, only logical devices
created through SDL_OpenAudioDevice() can be.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ResumeAudioDevice

**See also:** SDL_AudioDevicePaused

**Parameter `devid`:** a device opened by SDL_OpenAudioDevice().

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35232).
