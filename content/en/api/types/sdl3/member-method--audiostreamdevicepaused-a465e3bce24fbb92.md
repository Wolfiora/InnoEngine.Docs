---
title: "SDLContext.RawApi — Method: AudioStreamDevicePaused"
description: "Exact Method: AudioStreamDevicePaused contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a465e3bce24fbb92
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AudioStreamDevicePaused

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AudioStreamDevicePaused`

<a id="api-de3321c09508175b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AudioStreamDevicePaused(Inno.Native.Sdl3.SDLAudioStream*) 093468609957987b1941e558a7c647c5d87e596dec87b6c9df7207a4284ab56d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.AudioStreamDevicePaused(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Use this function to query if an audio device associated with a stream is
paused.
Unlike in SDL2, audio devices start in an _unpaused_ state, since an app
has to bind a stream before any audio will flow.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PauseAudioStreamDevice

**See also:** SDL_ResumeAudioStreamDevice

**Parameter `stream`:** the audio stream associated with the audio device to query.

**Returns:** true if device is valid and paused, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34582).
