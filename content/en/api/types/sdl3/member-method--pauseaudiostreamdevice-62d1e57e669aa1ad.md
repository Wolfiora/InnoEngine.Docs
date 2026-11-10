---
title: "SDLContext.RawApi — Method: PauseAudioStreamDevice"
description: "Exact Method: PauseAudioStreamDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.62d1e57e669aa1ad
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PauseAudioStreamDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PauseAudioStreamDevice`

<a id="api-f282964956231e2e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PauseAudioStreamDevice(Inno.Native.Sdl3.SDLAudioStream*) 1eafd6bca379e1237d015ad73b9da449954f463616f374aa5a0898e45a83116a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.PauseAudioStreamDevice(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Use this function to pause audio playback on the audio device associated
with an audio stream.
This function pauses audio processing for a given device. Any bound audio
streams will not progress, and no audio will be generated. Pausing one
device does not prevent other unpaused devices from running.
Pausing a device can be useful to halt all audio without unbinding all the
audio streams. This might be useful while a game is paused, or a level is
loading, etc.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ResumeAudioStreamDevice

**Parameter `stream`:** the audio stream associated with the audio device to pause.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45308).
