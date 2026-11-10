---
title: "SDLContext — Method: PauseAudioDevice"
description: "Exact Method: PauseAudioDevice contracts in SDLContext."
uid: api.inno.native.sdl3.cd639b1e5627d86d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: PauseAudioDevice

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PauseAudioDevice`

<a id="api-ff63752f5ffd518c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.PauseAudioDevice(System.UInt32) e76a087836c379c008ba747df50572f502de5b127851ad589f9c4826fb096b14 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.PauseAudioDevice(uint devid)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14098).
