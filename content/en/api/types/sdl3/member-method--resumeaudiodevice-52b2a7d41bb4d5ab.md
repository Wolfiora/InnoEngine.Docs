---
title: "SDL — Method: ResumeAudioDevice"
description: "Exact Method: ResumeAudioDevice contracts in SDL."
uid: api.inno.native.sdl3.52b2a7d41bb4d5ab
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: ResumeAudioDevice

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResumeAudioDevice`

<a id="api-6fce7f646ef78e35"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.ResumeAudioDevice(System.UInt32) 746c1f85177b487a6bd5159ee5b9e9668489275d5ace62742a030117f67042c6 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.ResumeAudioDevice(uint devid)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1281).
