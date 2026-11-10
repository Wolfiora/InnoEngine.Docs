---
title: "SDLContext.RawApi — Method: ResumeAudioStreamDevice"
description: "Exact Method: ResumeAudioStreamDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.eba3a5b9a65f04cf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ResumeAudioStreamDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResumeAudioStreamDevice`

<a id="api-58414f6e44fe9e2d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ResumeAudioStreamDevice(Inno.Native.Sdl3.SDLAudioStream*) 167a7ddd18c6032d9a9d8fc37b88eaeb1ad7fe820476c153bcdb0d0fb866484d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ResumeAudioStreamDevice(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Use this function to unpause audio playback on the audio device associated
with an audio stream.
This function unpauses audio processing for a given device that has
previously been paused. Once unpaused, any bound audio streams will begin
to progress again, and audio can be generated.
SDL_OpenAudioDeviceStream opens audio devices in a paused state, so this
function call is required for audio playback to begin on such devices.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PauseAudioStreamDevice

**Parameter `stream`:** the audio stream associated with the audio device to resume.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21530).
