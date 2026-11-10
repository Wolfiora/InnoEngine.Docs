---
title: "SDLContext — Method: AudioDevicePaused"
description: "Exact Method: AudioDevicePaused contracts in SDLContext."
uid: api.inno.native.sdl3.6b682cea4a0dee84
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: AudioDevicePaused

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AudioDevicePaused`

<a id="api-8973b45afb67a2bd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.AudioDevicePaused(System.UInt32) 3815c594f3a21a3761f4b89782d88d3e0b958f3a5371f59ec36ba6e4cc034492 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.AudioDevicePaused(uint devid)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11590).
