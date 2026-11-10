---
title: "SDLContext — Method: ResumeAudioDevice"
description: "Exact Method: ResumeAudioDevice contracts in SDLContext."
uid: api.inno.native.sdl3.0ec8273f9b126311
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: ResumeAudioDevice

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResumeAudioDevice`

<a id="api-6e35d37876957ad8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.ResumeAudioDevice(System.UInt32) 43dadb6a08c8993dc594601b7e883dc678e578a3ad1cc1873e051becd3b0039c -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.ResumeAudioDevice(uint devid)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12910).
