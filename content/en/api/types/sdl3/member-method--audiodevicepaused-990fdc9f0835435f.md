---
title: "SDL — Method: AudioDevicePaused"
description: "Exact Method: AudioDevicePaused contracts in SDL."
uid: api.inno.native.sdl3.990fdc9f0835435f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: AudioDevicePaused

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AudioDevicePaused`

<a id="api-bd5ec38df33e8814"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.AudioDevicePaused(System.UInt32) adc328f0991e4e6deee5a8d43a60bac6d010c2aab98364433051cee254cce848 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.AudioDevicePaused(uint devid)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L210).
